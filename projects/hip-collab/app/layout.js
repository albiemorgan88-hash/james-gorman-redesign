import './globals.css'

export const metadata = {
  title: 'Blue Canvas × HIP Psychology',
  description: 'Outreach Campaign Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
