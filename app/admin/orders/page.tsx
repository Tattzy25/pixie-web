"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/glow-card"
import { FileOutputIcon as FileExport, MoreHorizontal, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample order data
const orders = [
  {
    id: "ORD-1001",
    customer: "John Smith",
    email: "john@example.com",
    products: "Single Stroller",
    total: 75.0,
    status: "Completed",
    date: "6/22/2024",
  },
  {
    id: "ORD-1002",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    products: "Double Stroller",
    total: 105.0,
    status: "Processing",
    date: "6/22/2024",
  },
  {
    id: "ORD-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    products: "Mobility Scooter",
    total: 135.0,
    status: "Completed",
    date: "6/21/2024",
  },
  {
    id: "ORD-1004",
    customer: "Emily Davis",
    email: "emily@example.com",
    products: "Single Stroller, Rain Cover",
    total: 90.0,
    status: "Pending",
    date: "6/21/2024",
  },
  {
    id: "ORD-1005",
    customer: "David Wilson",
    email: "david@example.com",
    products: "Double Stroller, Cup Holder",
    total: 114.0,
    status: "Completed",
    date: "6/20/2024",
  },
]

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Orders</h1>
          <p className="text-gray-400">Manage customer orders and track their status.</p>
        </div>

        <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
          <FileExport className="h-4 w-4 mr-2" />
          Export Orders
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex border-b border-gray-800">
          {["All", "Pending", "Processing", "Completed", "Cancelled"].map((tab) => (
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

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-800 text-white focus:border-purple-500"
          />
        </div>
      </div>

      {/* Orders Table */}
      <GlowCard glowColors="blue-purple" intensity="low" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Order ID</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Customer</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Products</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Total</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Date</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-800 hover:bg-gray-900/30">
                  <td className="py-3 px-4 font-medium text-white">{order.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="text-white">{order.customer}</p>
                      <p className="text-xs text-gray-400">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white">{order.products}</td>
                  <td className="py-3 px-4 text-white">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{order.date}</td>
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
                        <DropdownMenuItem className="hover:bg-gray-800">View Details</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-800">Update Status</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-800" />
                        <DropdownMenuItem className="hover:bg-gray-800 text-red-400">Cancel Order</DropdownMenuItem>
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
          <div className="text-sm text-gray-400">Showing 1-5 of 15 orders</div>
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

