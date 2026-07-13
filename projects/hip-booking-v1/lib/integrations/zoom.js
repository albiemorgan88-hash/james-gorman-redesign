export function normaliseZoomLink(url) {
  // V1 stores manually-created online joining links per session slot.
  // V1.1 can replace this with provider API meeting/registration creation.
  if (!url) return null
  try {
    const parsed = new URL(url)
    if (!parsed.hostname.includes('zoom.us')) return null
    return parsed.toString()
  } catch {
    return null
  }
}
