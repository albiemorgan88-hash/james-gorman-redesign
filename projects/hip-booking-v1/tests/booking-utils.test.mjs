import assert from 'node:assert/strict'
import test from 'node:test'
import {
  countBookedClasses,
  hashAccessCode,
  normaliseClassLines,
  publicManageUrl,
  remainingCapacity,
} from '../lib/bookingUtils.js'

test('normaliseClassLines coerces counts and defaults', () => {
  assert.deepEqual(normaliseClassLines({ classLines: [{ group: 'P4', classes: '2' }] }), [{
    year_group: 'P4',
    class_count: 2,
    pupil_count: null,
    notes: null,
  }])
})

test('capacity only counts active booking statuses', () => {
  const bookings = [
    { status: 'requested', total_classes: 2 },
    { status: 'confirmed', total_classes: 1 },
    { status: 'cancelled', total_classes: 4 },
  ]
  assert.equal(countBookedClasses(bookings), 3)
  assert.equal(remainingCapacity({ capacity: 5 }, bookings), 2)
})

test('pilot access code hashes are case-insensitive by convention', () => {
  assert.equal(hashAccessCode('hip-pilot-2026'), hashAccessCode('HIP-PILOT-2026'))
})

test('manage URL uses the opaque booking token', () => {
  assert.equal(publicManageUrl('https://booking.hippsychology.com/', { change_token: 'abc' }), 'https://booking.hippsychology.com/booking/abc')
})
