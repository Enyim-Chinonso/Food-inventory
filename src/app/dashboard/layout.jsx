'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'
import LenisProvider from '@/components/common/LenisProvider'

export default function DashboardRootLayout({ children }) {
  return (
    <DashboardLayout>
      <LenisProvider>
        {children}
      </LenisProvider>
    </DashboardLayout>
  )
}
