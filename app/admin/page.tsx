import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlowCard } from "@/components/glow-card"
import { BarChart3, ShoppingCart, Users, Package, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to your magical admin dashboard</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlowCard glowColors="purple-pink" intensity="low">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold text-white">$12,628</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>12.5%</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </GlowCard>

        <GlowCard glowColors="blue-purple" intensity="low">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Orders</p>
                <h3 className="text-2xl font-bold text-white">324</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>8.2%</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </GlowCard>

        <GlowCard glowColors="cyan-blue" intensity="low">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Customers</p>
                <h3 className="text-2xl font-bold text-white">1,429</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>5.3%</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-cyan-500" />
              </div>
            </div>
          </CardContent>
        </GlowCard>

        <GlowCard glowColors="pink-purple" intensity="low">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">Active Products</p>
                <h3 className="text-2xl font-bold text-white">12</h3>
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  <span>2.1%</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Package className="h-5 w-5 text-pink-500" />
              </div>
            </div>
          </CardContent>
        </GlowCard>
      </div>

      {/* Recent Orders and Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlowCard glowColors="purple-pink" intensity="low">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg">Recent Orders</CardTitle>
            <CardDescription>Latest rental bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Order #{1000 + i}</p>
                      <p className="text-xs text-gray-400">
                        {i % 2 === 0 ? "Single Stroller" : i % 3 === 0 ? "Double Stroller" : "Mobility Scooter"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">
                      ${i % 2 === 0 ? "75.00" : i % 3 === 0 ? "105.00" : "135.00"}
                    </p>
                    <p className="text-xs text-gray-400">{new Date(2023, 5, 20 + i).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </GlowCard>

        <GlowCard glowColors="blue-purple" intensity="low">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg">Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-gray-500" />
              <p className="text-gray-400 ml-4">Revenue chart will be displayed here</p>
            </div>
          </CardContent>
        </GlowCard>
      </div>
    </div>
  )
}

