"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/glow-card"
import { UserPlus, FileOutputIcon as FileExport, MoreHorizontal, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample customer data
const customers = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    orders: 5,
    totalSpent: 375.0,
    lastOrder: "6/22/2024",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    orders: 3,
    totalSpent: 315.0,
    lastOrder: "6/20/2024",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    orders: 2,
    totalSpent: 270.0,
    lastOrder: "6/18/2024",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    orders: 4,
    totalSpent: 360.0,
    lastOrder: "6/15/2024",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    orders: 1,
    totalSpent: 114.0,
    lastOrder: "6/10/2024",
  },
]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Customers</h1>
          <p className="text-gray-400">Manage your customer database and view their order history.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
            <FileExport className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative w-full sm:w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-900 border-gray-800 text-white focus:border-purple-500"
        />
      </div>

      {/* Customers Table */}
      <GlowCard glowColors="purple-pink" intensity="low" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Email</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Orders</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Total Spent</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">Last Order</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-800 hover:bg-gray-900/30">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="font-medium text-white">{customer.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{customer.email}</td>
                  <td className="py-3 px-4 text-white">{customer.orders}</td>
                  <td className="py-3 px-4 text-white">${customer.totalSpent.toFixed(2)}</td>
                  <td className="py-3 px-4 text-gray-400">{customer.lastOrder}</td>
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
                        <DropdownMenuItem className="hover:bg-gray-800">View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-800">View Orders</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-800">Edit</DropdownMenuItem>
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
          <div className="text-sm text-gray-400">Showing 1-5 of 25 customers</div>
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

