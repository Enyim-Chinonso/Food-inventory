// 'use client'

// import DashboardLayout from '@/components/layout/DashboardLayout'
// import LenisProvider from '@/components/common/LenisProvider'

// export default function DashboardRootLayout({ children }) {
//   return (
//     <DashboardLayout>
//       <LenisProvider>
//         {children}
//       </LenisProvider>
//     </DashboardLayout>
//   )
// }



'use client'

import Sidebar from '@/components/layout/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-grow-1 p-4">
        {children}
      </main>
    </div>
  )
}
