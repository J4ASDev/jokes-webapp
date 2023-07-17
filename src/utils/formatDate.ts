export default function formatDate(dateAsString: string) {
  try {
    const date = new Date(dateAsString)

    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return ''
  }
}
