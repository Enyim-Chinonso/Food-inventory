// 'use client'

// import PublicNavbar from './PublicNavbar'
// import Sidebar from './Sidebar'

// export default function DashboardLayout({ children }) {
//   return (
//     <>
//       <PublicNavbar />
//       <div className="d-flex">
//         <Sidebar />
//         <main className="flex-grow-1 p-4">
//           {children}
//         </main>
//       </div>
//     </>
//   )
// }


'use client'

import PublicNavbar from './PublicNavbar'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </>
  )
}
