import '@static/styles/reset.css'
import '@static/styles/normalize.css'
import '@static/styles/fonts.css'
import '@static/styles/globals.css'
import '@static/styles/media.css'

export const metadata = {
  title: 'Clario',
  description: 'Clario, a smart anti-spy app that effectively protects your privacy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
