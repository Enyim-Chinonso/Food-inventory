// import 'bootstrap/dist/css/bootstrap.min.css'
// import './globals.css'
// import '@/styles/custom.css'
// import Footer from '@/components/layout/Footer'

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }




import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import '@/styles/custom.css'
import Footer from '@/components/layout/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
