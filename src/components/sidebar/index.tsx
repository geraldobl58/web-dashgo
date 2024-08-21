'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from '@/components/navigation'

export const Sidebar = () => {
  return (
    <div
      className="
        w-[250px]
        max-w-[250px]
        h-full
        flex-col
        bg-violet-100
      "
    >
      <div className="p-4">
        <Link href="/">
          <Image alt="Logo" width={40} height={40} src="/logo.svg" />
        </Link>
      </div>
      <aside className="w-full h-full">
        <Navigation />
      </aside>
    </div>
  )
}
