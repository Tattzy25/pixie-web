"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  type: "single-stroller" | "double-stroller" | "mobility-scooter" | "accessory"
  rentalDays: number
  startDate: string
  endDate: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
  setRentalDates: (startDate: string, endDate: string) => void
  rentalDays: number
  startDate: string | null
  endDate: string | null
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const [rentalDays, setRentalDays] = useState(0)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedStartDate = localStorage.getItem("startDate")
    const savedEndDate = localStorage.getItem("endDate")
    const savedRentalDays = localStorage.getItem("rentalDays")

    if (savedCart) setItems(JSON.parse(savedCart))
    if (savedStartDate) setStartDate(savedStartDate)
    if (savedEndDate) setEndDate(savedEndDate)
    if (savedRentalDays) setRentalDays(Number.parseInt(savedRentalDays))
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  // Save rental dates to localStorage
  useEffect(() => {
    if (startDate) localStorage.setItem("startDate", startDate)
    if (endDate) localStorage.setItem("endDate", endDate)
    localStorage.setItem("rentalDays", rentalDays.toString())
  }, [startDate, endDate, rentalDays])

  // Calculate rental days from start and end dates
  const calculateRentalDays = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Include both start and end days
    return diffDays
  }

  const setRentalDates = (start: string, end: string) => {
    setStartDate(start)
    setEndDate(end)
    const days = calculateRentalDays(start, end)
    setRentalDays(days)

    // Update rental days for all items in cart
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        rentalDays: days,
        startDate: start,
        endDate: end,
      })),
    )
  }

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        }
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity * item.rentalDays, 0)

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
    setRentalDates,
    rentalDays,
    startDate,
    endDate,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

