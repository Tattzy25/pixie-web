"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/glow-card"
import { Plus, MoreHorizontal, FileOutputIcon as FileExport, ChevronLeft, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample product data
const products = [
  {
    id: "1",
    name: "Single Stroller",
    image: "/placeholder.svg?height=50&width=50&text=Stroller",
    status: "Active",
    price: 25.0,
    totalSales: 150,
    createdAt: "6/22/2024",
  },
  {
    id: "2",
    name: "Double Stroller",
    image: "/placeholder.svg?height=50&width=50&text=Double",
    status: "Active",
    price: 35.0,
    totalSales: 120,
    createdAt: "6/22/2024",
  },
  {
    id: "3",
    name: "Mobility Scooter",
    image: "/placeholder.svg?height=50&width=50&text=Scooter",
    status: "Active",
    price: 45.0,
    totalSales: 85,
    createdAt: "6/22/2024",
  },
  {
    id: "4",
    name: "Rain Cover",
    image: "/placeholder.svg?height=50&width=50&text=Cover",
    status: "Active",
    price: 5.0,
    totalSales: 200,
    createdAt: "6/22/2024",
  },
  {
    id: "5",
    name: "Cup Holder",
    image: "/placeholder.svg?height=50&width=50&text=Cup",
    status: "Active",
    price: 3.0,
    totalSales: 300,
    createdAt: "6/22/2024",
  },
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
          <p className="text-gray-400">Manage your products and view their sales performance.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
            <FileExport className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        {["All", "Active", "Draft", "Archived"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab ? "text-white border-b-2 border-purple-500" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Table */}
      <GlowCard glowColors="purple-pink" intensity="low" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Price</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Total Sales</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Created at</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-900/30">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-md overflow-hidden bg-gray-800">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-white">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4 text-white">{product.totalSales}</td>
                  <td className="py-3 px-4 text-gray-400">{product.createdAt}</td>
                  <td className="py-3 px-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800 text-white">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-gray-800" />
                        <DropdownMenuItem className="hover:bg-gray-800">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-800">Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-800" />
                        <DropdownMenuItem className="hover:bg-gray-800 text-red-400">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="py-4 px-6 border-t border-gray-800 flex items-center justify-between">
          <div className="text-sm text-gray-400">Showing 1-5 of 10 products</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-gray-800 text-gray-400 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="sm" className="border-gray-800 text-gray-400 hover:text-white">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </GlowCard>
    </div>
  )
}

