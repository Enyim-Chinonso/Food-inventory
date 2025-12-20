import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import '@/styles/custom.css'
import Footer from '@/components/layout/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
