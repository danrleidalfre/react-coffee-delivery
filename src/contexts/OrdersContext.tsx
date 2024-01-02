import { createContext, ReactNode, useEffect, useState } from 'react'

interface Label {
  title: string
}

export interface Coffee {
  id: number
  labels: Label[]
  title: string
  description: string
  price: string
  quantity: number
}

interface OrderContextType {
  orders: Coffee[] | null
  onAddCart: (coffee: Coffee) => void
  onRemoveCart: (id: number) => void
  onUpdateQuantity: (coffee: Coffee) => void
  onClearCart: () => void
}

export const OrdersContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<Coffee[] | null>(null)

  function onAddCart(coffee: Coffee) {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders ? [...prevOrders] : []
      const existingCoffee = updatedOrders.find((c) => c.id === coffee.id)

      if (existingCoffee) {
        existingCoffee.quantity += coffee.quantity
      } else {
        updatedOrders.push(coffee)
      }

      localStorage.setItem(
        '@coffee-delivery:order',
        JSON.stringify(updatedOrders),
      )
      return updatedOrders
    })
  }

  function onRemoveCart(id: number) {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders
        ? prevOrders.filter((c) => c.id !== id)
        : []

      localStorage.setItem(
        '@coffee-delivery:order',
        JSON.stringify(updatedOrders),
      )

      return updatedOrders
    })
  }

  function onUpdateQuantity(updatedCoffee: Coffee) {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders
        ? prevOrders.map((c) => (c.id === updatedCoffee.id ? updatedCoffee : c))
        : []

      localStorage.setItem(
        '@coffee-delivery:order',
        JSON.stringify(updatedOrders),
      )

      return updatedOrders
    })
  }

  function onClearCart() {
    setOrders([])
    localStorage.removeItem('@coffee-delivery:order')
  }

  useEffect(() => {
    const storedOrders = localStorage.getItem('@coffee-delivery:order')

    if (storedOrders) {
      setOrders(JSON.parse(storedOrders))
    }
  }, [])

  return (
    <OrdersContext.Provider
      value={{
        orders,
        onAddCart,
        onRemoveCart,
        onUpdateQuantity,
        onClearCart,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
