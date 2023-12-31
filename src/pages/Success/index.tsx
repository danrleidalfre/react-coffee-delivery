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

export function Success() {
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
              Entrega em <span>Travessa Lua Nova, 121</span>
              <br />
              Ingleses - Florianópolis, SC
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
              <span>Cartão de Crédito</span>
            </h3>
          </Payment>
        </Infos>
        <img src="/src/assets/delivery.svg" alt="" />
      </Delivery>
    </SuccessContainer>
  )
}
