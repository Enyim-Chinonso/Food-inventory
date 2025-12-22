'use client'

import PublicNavbar from '@/components/layout/PublicNavbar'

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      <main>{children}</main>
    </>
  )
}
