"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart">
      <Button variant="ghost" className="relative p-2 text-white hover:bg-gray-800">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}

