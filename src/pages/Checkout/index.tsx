import {
  Actions,
  Address,
  AddressAndPayment,
  ButtonConfirmOrder,
  CheckoutContainer,
  Form,
  IconAndTitle,
  IconAndTitlePurple,
  Input,
  InputCity,
  InputFull,
  InputRow,
  InputUF,
  Item,
  Itens,
  OrderConfirmation,
  Payment,
  PaymentButton,
  PaymentButtonsRow,
  Price,
  Quantity,
  Remove,
  Title,
  Titles,
  Total,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Coffee, OrdersContext } from '../../contexts/OrdersContext.tsx'
import { useNavigate } from 'react-router-dom'

interface OptionsCurrency {
  style: string
  currency: string
  minimumFractionDigits: number
  maximumFractionDigits: number
}

export function Checkout() {
  const { orders, onRemoveCart, onUpdateQuantity } = useContext(OrdersContext)
  const [zipcode, setZipcode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [payment, setPayment] = useState('')

  function handleUpdateQuantity(coffee: Coffee, action: 'add' | 'remove') {
    if (action === 'add') {
      coffee.quantity = coffee.quantity + 1
    } else if (action === 'remove' && coffee.quantity > 1) {
      coffee.quantity = coffee.quantity - 1
    } else {
      onRemoveCart(coffee.id)
      return
    }

    onUpdateQuantity(coffee)
  }

  function handleRemoveCart(id: number) {
    onRemoveCart(id)
  }

  function handleChangeZipcode(event: ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value)
  }

  function handleChangeStreet(event: ChangeEvent<HTMLInputElement>) {
    setStreet(event.target.value)
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    setNumber(event.target.value)
  }

  function handleChangeComplement(event: ChangeEvent<HTMLInputElement>) {
    setComplement(event.target.value)
  }

  function handleChangeNeighborhood(event: ChangeEvent<HTMLInputElement>) {
    setNeighborhood(event.target.value)
  }

  function handleChangeCity(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value)
  }

  function handleChangeState(event: ChangeEvent<HTMLInputElement>) {
    setState(event.target.value)
  }

  const navigate = useNavigate()

  function handleSubmitOrder(event: FormEvent) {
    event.preventDefault()

    if (!payment) {
      alert('Necessário selecionar a forma de pagamento')
      return
    }

    const delivery = {
      zipcode,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      payment,
    }

    localStorage.setItem('@coffee-delivery:delivery', JSON.stringify(delivery))

    navigate('/success')
  }

  let totalItensFormatted = '0,00'
  let totalFormatted = '0,00'

  function calculateTotalItems() {
    if (!orders) {
      return
    }

    const totalItens = orders?.reduce((acc, coffee) => {
      const price = parseFloat(coffee.price.replace(',', '.')) || 0
      const quantity = coffee.quantity || 0
      return acc + price * quantity
    }, 0)

    const delivery = 5

    const options: OptionsCurrency = {
      style: 'decimal',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }

    totalFormatted = (totalItens + delivery).toLocaleString('pt-BR', options)

    totalItensFormatted = totalItens.toLocaleString('pt-BR', options)
  }

  calculateTotalItems()

  return (
    <CheckoutContainer>
      <AddressAndPayment>
        <Title>Complete seu pedido</Title>
        <Address>
          <IconAndTitle>
            <MapPinLine size={22} />
            <Titles>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </Titles>
          </IconAndTitle>
          <Form id="form" onSubmit={handleSubmitOrder}>
            <Input
              placeholder="CEP"
              value={zipcode}
              onChange={handleChangeZipcode}
              required
            />
            <InputFull
              placeholder="Rua"
              value={street}
              onChange={handleChangeStreet}
              required
            />
            <InputRow>
              <Input
                placeholder="Número"
                value={number}
                onChange={handleChangeNumber}
                required
              />
              <InputFull
                placeholder="Complemento"
                value={complement}
                onChange={handleChangeComplement}
                required
              />
            </InputRow>
            <InputRow>
              <Input
                placeholder="Bairro"
                value={neighborhood}
                onChange={handleChangeNeighborhood}
                required
              />
              <InputCity
                placeholder="Cidade"
                value={city}
                onChange={handleChangeCity}
                required
              />
              <InputUF
                placeholder="UF"
                value={state}
                onChange={handleChangeState}
                required
              />
            </InputRow>
          </Form>
        </Address>
        <Payment>
          <IconAndTitlePurple>
            <CurrencyDollar size={22} />
            <Titles>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </Titles>
          </IconAndTitlePurple>
          <PaymentButtonsRow>
            <PaymentButton
              type="button"
              onClick={() => setPayment('credit')}
              className={payment === 'credit' ? 'active' : ''}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentButton>
            <PaymentButton
              type="button"
              onClick={() => setPayment('debit')}
              className={payment === 'debit' ? 'active' : ''}
            >
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </PaymentButton>
            <PaymentButton
              type="button"
              onClick={() => setPayment('money')}
              className={payment === 'money' ? 'active' : ''}
            >
              <Money size={16} />
              <span>Dinheiro ou PIX</span>
            </PaymentButton>
          </PaymentButtonsRow>
        </Payment>
      </AddressAndPayment>
      <OrderConfirmation>
        <Title>Cafés selecionados</Title>
        <Itens>
          {orders?.map((order) => {
            return (
              <Item key={order.id}>
                <img src={`/src/assets/coffees/${order.id}.png`} alt="" />
                <div>
                  <h4>{order.title}</h4>
                  <Actions>
                    <Quantity>
                      <Minus
                        size={16}
                        weight={'bold'}
                        onClick={() => handleUpdateQuantity(order, 'remove')}
                      />
                      <span>{order.quantity}</span>
                      <Plus
                        size={16}
                        weight={'bold'}
                        onClick={() => handleUpdateQuantity(order, 'add')}
                      />
                    </Quantity>
                    <Remove onClick={() => handleRemoveCart(order.id)}>
                      <Trash size={16} weight={'bold'} />
                      <span>Remover</span>
                    </Remove>
                  </Actions>
                </div>
                <Price>R$ {order.price}</Price>
              </Item>
            )
          })}
          <Total>
            <div>
              <h6>Total de itens</h6>
              <h6>R$ {totalItensFormatted}</h6>
            </div>
            <div>
              <h6>Entrega</h6>
              <h6>R$ 5,00</h6>
            </div>
            <div>
              <h5>Total</h5>
              <h5>R$ {totalFormatted}</h5>
            </div>
          </Total>
          <ButtonConfirmOrder type="submit" form="form">
            Confirmar Pedido
          </ButtonConfirmOrder>
        </Itens>
      </OrderConfirmation>
    </CheckoutContainer>
  )
}
