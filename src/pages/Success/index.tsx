import {
  Address,
  Delivery,
  Forecast,
  H1,
  H2,
  Icon,
  Infos,
  Payment,
  SuccessContainer,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext.tsx'

interface Delivery {
  zipcode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  payment: 'credit' | 'debit' | 'money'
}

enum PaymentTypes {
  credit = 'Cartão de Crédito',
  debit = 'Cartão de Débito',
  money = 'Dinheiro ou PIX',
}

export function Success() {
  const [delivery, setDelivery] = useState<Delivery | null>(null)
  const { onClearCart } = useContext(OrdersContext)

  useEffect(() => {
    const storedOrders = localStorage.getItem('@coffee-delivery:delivery')

    if (storedOrders) {
      setDelivery(JSON.parse(storedOrders))
    }

    onClearCart()
  }, [])

  const payment =
    delivery?.payment !== undefined ? PaymentTypes[delivery.payment] : ''

  return (
    <SuccessContainer>
      <H1>Uhu! Pedido confirmado</H1>
      <H2>Agora é só aguardar que logo o café chegará até você</H2>
      <Delivery>
        <Infos>
          <Address>
            <Icon>
              <MapPin size={16} weight={'fill'} />
            </Icon>
            <h3>
              Entrega em{' '}
              <span>
                {delivery?.street}, {delivery?.number}
              </span>
              <br />
              {delivery?.neighborhood} - {delivery?.city}, {delivery?.state}
            </h3>
          </Address>
          <Forecast>
            <Icon>
              <Timer size={16} weight={'fill'} />
            </Icon>
            <h3>
              Previsão de entrega
              <br />
              <span>20 min - 30 min</span>
            </h3>
          </Forecast>
          <Payment>
            <Icon>
              <CurrencyDollar size={16} weight={'fill'} />
            </Icon>
            <h3>
              Pagamento na entrega
              <br />
              <span>{payment}</span>
            </h3>
          </Payment>
        </Infos>
        <img src="/src/assets/delivery.svg" alt="" />
      </Delivery>
    </SuccessContainer>
  )
}
