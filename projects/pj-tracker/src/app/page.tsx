'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { supabase, TrackerItem, STATUSES, STATUS_COLORS, Status } from '@/lib/supabase'

type SortField = 'status' | 'created_at'
type SortDir = 'asc' | 'desc'

const STATUS_ORDER: Record<string, number> = {
  Lead: 0, Contacted: 1, Meeting: 2, Proposal: 3, Won: 4, Lost: 5,
}

export default function Home() {
  const [items, setItems] = useState<TrackerItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [sortField, setSortField] = useState<SortField>('created_at')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  // Add form state
  const [newName, setNewName] = useState('')
  const [newStatus, setNewStatus] = useState<Status>('Lead')
  const [newNotes, setNewNotes] = useState('')

  const nameInputRef = useRef<HTMLInputElement>(null)

  const fetchItems = useCallback(async () => {
    const { data, error } = await supabase
      .from('pj_tracker')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Fetch error:', error)
      return
    }
    setItems(data || [])
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const sortedItems = [...items].sort((a, b) => {
    if (sortField === 'status') {
      const diff = STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      return sortDir === 'asc' ? diff : -diff
    }
    const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    return sortDir === 'asc' ? diff : -diff
  })

  const addItem = async () => {
    if (!newName.trim()) return
    const { error } = await supabase.from('pj_tracker').insert({
      name: newName.trim(),
      status: newStatus,
      notes: newNotes.trim(),
    })
    if (error) {
      console.error('Insert error:', error)
      return
    }
    setNewName('')
    setNewStatus('Lead')
    setNewNotes('')
    setShowAdd(false)
    fetchItems()
  }

  const updateItem = async (id: string, updates: Partial<TrackerItem>) => {
    const { error } = await supabase
      .from('pj_tracker')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
    if (error) {
      console.error('Update error:', error)
      return
    }
    fetchItems()
  }

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('pj_tracker').delete().eq('id', id)
    if (error) {
      console.error('Delete error:', error)
      return
    }
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDir('asc')
    }
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  }

  // Counts
  const counts = items.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <main className="max-w-lg mx-auto px-4 pb-24 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tracker</h1>
          <p className="text-sm text-gray-500">{items.length} total</p>
        </div>
        <button
          onClick={() => {
            setShowAdd(!showAdd)
            setTimeout(() => nameInputRef.current?.focus(), 100)
          }}
          className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-light shadow-lg active:scale-95 transition-transform"
        >
          {showAdd ? '×' : '+'}
        </button>
      </div>

      {/* Status summary pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {STATUSES.map(s => {
          const c = STATUS_COLORS[s]
          const count = counts[s] || 0
          return (
            <span key={s} className={`${c.bg} ${c.text} px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap`}>
              {s} {count}
            </span>
          )
        })}
      </div>

      {/* Add form */}
      {showAdd && (
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100 item-enter">
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Name / Company"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            className="w-full text-lg font-medium bg-transparent border-b border-gray-200 pb-2 mb-3 placeholder:text-gray-300"
            onKeyDown={e => e.key === 'Enter' && addItem()}
          />
          <div className="flex gap-2 mb-3 flex-wrap">
            {STATUSES.map(s => {
              const c = STATUS_COLORS[s]
              const selected = newStatus === s
              return (
                <button
                  key={s}
                  onClick={() => setNewStatus(s)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selected
                      ? `${c.bg} ${c.text} ring-2 ring-offset-1 ring-gray-300`
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  {s}
                </button>
              )
            })}
          </div>
          <input
            type="text"
            placeholder="Notes (optional)"
            value={newNotes}
            onChange={e => setNewNotes(e.target.value)}
            className="w-full text-sm bg-transparent border-b border-gray-200 pb-2 mb-4 placeholder:text-gray-300"
            onKeyDown={e => e.key === 'Enter' && addItem()}
          />
          <button
            onClick={addItem}
            disabled={!newName.trim()}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium text-base disabled:opacity-30 active:scale-[0.98] transition-transform"
          >
            Add
          </button>
        </div>
      )}

      {/* Sort controls */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => toggleSort('created_at')}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
            sortField === 'created_at' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Date {sortField === 'created_at' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
        </button>
        <button
          onClick={() => toggleSort('status')}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
            sortField === 'status' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Status {sortField === 'status' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
        </button>
      </div>

      {/* Items list */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : sortedItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No entries yet</p>
          <p className="text-gray-300 text-sm mt-1">Tap + to add one</p>
        </div>
      ) : (
        <div className="space-y-2">
          {sortedItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              isEditing={editingId === item.id}
              onEdit={() => setEditingId(editingId === item.id ? null : item.id)}
              onUpdate={updateItem}
              onDelete={deleteItem}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </main>
  )
}

function ItemCard({
  item,
  isEditing,
  onEdit,
  onUpdate,
  onDelete,
  formatDate,
}: {
  item: TrackerItem
  isEditing: boolean
  onEdit: () => void
  onUpdate: (id: string, updates: Partial<TrackerItem>) => Promise<void>
  onDelete: (id: string) => Promise<void>
  formatDate: (d: string) => string
}) {
  const c = STATUS_COLORS[item.status as Status] || STATUS_COLORS.Lead
  const [editNotes, setEditNotes] = useState(item.notes)
  const [editName, setEditName] = useState(item.name)
  const [confirming, setConfirming] = useState(false)

  useEffect(() => {
    setEditNotes(item.notes)
    setEditName(item.name)
  }, [item.notes, item.name])

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Main row - tappable */}
      <div
        className="flex items-center gap-3 p-4 cursor-pointer active:bg-gray-50 transition-colors"
        onClick={onEdit}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 truncate">{item.name}</span>
            <span className={`${c.bg} ${c.text} px-2 py-0.5 rounded-full text-xs font-medium shrink-0`}>
              {item.status}
            </span>
          </div>
          {item.notes && (
            <p className="text-sm text-gray-400 mt-0.5 truncate">{item.notes}</p>
          )}
        </div>
        <span className="text-xs text-gray-300 shrink-0">{formatDate(item.created_at)}</span>
      </div>

      {/* Edit panel */}
      {isEditing && (
        <div className="border-t border-gray-100 p-4 bg-gray-50/50 item-enter">
          <input
            type="text"
            value={editName}
            onChange={e => setEditName(e.target.value)}
            onBlur={() => {
              if (editName.trim() && editName !== item.name) {
                onUpdate(item.id, { name: editName.trim() })
              }
            }}
            className="w-full text-base font-medium bg-white border border-gray-200 rounded-lg px-3 py-2 mb-3"
          />
          {/* Status selector */}
          <div className="flex gap-1.5 mb-3 flex-wrap">
            {STATUSES.map(s => {
              const sc = STATUS_COLORS[s]
              const selected = item.status === s
              return (
                <button
                  key={s}
                  onClick={() => onUpdate(item.id, { status: s })}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    selected
                      ? `${sc.bg} ${sc.text} ring-2 ring-offset-1 ring-gray-300`
                      : 'bg-white text-gray-400 border border-gray-200'
                  }`}
                >
                  {s}
                </button>
              )
            })}
          </div>
          <input
            type="text"
            placeholder="Notes"
            value={editNotes}
            onChange={e => setEditNotes(e.target.value)}
            onBlur={() => {
              if (editNotes !== item.notes) {
                onUpdate(item.id, { notes: editNotes })
              }
            }}
            className="w-full text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 mb-3 placeholder:text-gray-300"
          />
          {/* Delete */}
          {!confirming ? (
            <button
              onClick={() => setConfirming(true)}
              className="text-xs text-red-400 font-medium py-2"
            >
              Delete
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(item.id)}
                className="text-xs bg-red-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Confirm delete
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="text-xs text-gray-400 px-4 py-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
