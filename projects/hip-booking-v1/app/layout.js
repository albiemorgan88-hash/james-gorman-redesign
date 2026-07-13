import './globals.css'

export const metadata = {
  metadataBase: new URL('https://booking.hippsychology.com'),
  title: 'HIP Psychology Course Booking',
  description: 'Pilot booking, staff admin, reminders, and change requests for HIP Psychology online courses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
