"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings, LogOut } from "lucide-react"
import Image from "next/image"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Products",
    icon: Package,
    href: "/admin/products",
    color: "text-pink-500",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
    color: "text-green-500",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/admin/customers",
    color: "text-violet-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    color: "text-orange-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    color: "text-gray-500",
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full w-64 border-r border-gray-800 bg-gray-950 flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <div className="relative w-8 h-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/500x500%20pixie-z07TJGgsj6CC8CkEECsCExxJjj2Usv.png"
            alt="Pixie Strollies Logo"
            fill
            className="object-contain"
            sizes="2rem"
          />
        </div>
        <span className="text-xl font-bold text-white neon-text">Admin Portal</span>
      </div>

      <div className="flex-1 py-4">
        <div className="space-y-1 px-3">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === route.href
                  ? "bg-gray-800/50 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/30",
              )}
            >
              <route.icon className={cn("h-5 w-5", route.color)} />
              {route.label}
              {pathname === route.href && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500"></div>}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 w-full transition-colors">
          <LogOut className="h-5 w-5 text-red-500" />
          Logout
        </button>
      </div>
    </div>
  )
}

