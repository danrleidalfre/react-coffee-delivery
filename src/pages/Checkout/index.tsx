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
import { useState } from 'react'

export function Checkout() {
  const [paymentSelected, setPayment] = useState('')

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
          <Form>
            <Input placeholder="CEP" />
            <InputFull placeholder="Rua" />
            <InputRow>
              <Input placeholder="Número" />
              <InputFull placeholder="Complemento" />
            </InputRow>
            <InputRow>
              <Input placeholder="Bairro" />
              <InputCity placeholder="Cidade" />
              <InputUF placeholder="UF" />
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
              className={paymentSelected === 'credit' ? 'active' : ''}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentButton>
            <PaymentButton
              type="button"
              onClick={() => setPayment('debit')}
              className={paymentSelected === 'debit' ? 'active' : ''}
            >
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </PaymentButton>
            <PaymentButton
              type="button"
              onClick={() => setPayment('money')}
              className={paymentSelected === 'money' ? 'active' : ''}
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
          <Item>
            <img src="/src/assets/coffees/1.png" alt="" />
            <div>
              <h4>Expresso Tradicional</h4>
              <Actions>
                <Quantity>
                  <Minus size={16} weight={'bold'} />
                  <span>1</span>
                  <Plus size={16} weight={'bold'} />
                </Quantity>
                <Remove>
                  <Trash size={16} weight={'bold'} /> <span>Remover</span>
                </Remove>
              </Actions>
            </div>
            <Price>R$ 10,50</Price>
          </Item>
          <Item>
            <img src="/src/assets/coffees/1.png" alt="" />
            <div>
              <h4>Expresso Tradicional</h4>
              <Actions>
                <Quantity>
                  <Minus size={16} weight={'bold'} />
                  <span>1</span>
                  <Plus size={16} weight={'bold'} />
                </Quantity>
                <Remove>
                  <Trash size={16} weight={'bold'} /> <span>Remover</span>
                </Remove>
              </Actions>
            </div>
            <Price>R$ 10,50</Price>
          </Item>
          <Item>
            <img src="/src/assets/coffees/1.png" alt="" />
            <div>
              <h4>Expresso Tradicional</h4>
              <Actions>
                <Quantity>
                  <Minus size={16} weight={'bold'} />
                  <span>1</span>
                  <Plus size={16} weight={'bold'} />
                </Quantity>
                <Remove>
                  <Trash size={16} weight={'bold'} /> <span>Remover</span>
                </Remove>
              </Actions>
            </div>
            <Price>R$ 10,50</Price>
          </Item>
          <Total>
            <div>
              <h6>Total de itens</h6>
              <h6>R$ 30,00</h6>
            </div>
            <div>
              <h6>Entrega</h6>
              <h6>R$ 5,00</h6>
            </div>
            <div>
              <h5>Total</h5>
              <h5>R$ 35,00</h5>
            </div>
          </Total>
          <ButtonConfirmOrder type="submit">
            Confirmar Pedido
          </ButtonConfirmOrder>
        </Itens>
      </OrderConfirmation>
    </CheckoutContainer>
  )
}
