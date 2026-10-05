export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
  })

export const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
  })

export const getTimeRemaining = (iso) => {
  const diff = new Date(iso) - new Date()
  const isPast = diff < 0
  const total = Math.abs(diff)

  const days = Math.floor(total / 86400000)
  const hours = Math.floor((total / 3600000) % 24)
  const minutes = Math.floor((total / 60000) % 60)
  const seconds = Math.floor((total / 1000) % 60)

  return {
    isPast,
    text: isPast
      ? `Event passed · ${days} day${days === 1 ? '' : 's'} ago`
      : `Starts in ${days}d ${hours}h ${minutes}m ${seconds}s`
  }
}