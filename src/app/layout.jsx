import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import '@/styles/custom.css'
import LenisProvider from '@/components/common/LenisProvider'
// import DashboardLayout from '@/components/layout/DashboardLayout'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <DashboardLayout> */}
        <LenisProvider>
          {children}
        </LenisProvider>
        {/* </DashboardLayout> */}
      </body>
    </html>
  )
}
