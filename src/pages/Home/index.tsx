import {
  Banner,
  Coffees,
  HomeContainer,
  IconRoundedCart,
  IconRoundedCoffee,
  IconRoundedPackage,
  IconRoundedTimer,
  Itens,
} from './styles'

import image from '../../assets/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <div>
          <h1>
            Encontre o café perfeito
            <br />
            para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </p>
          <Itens>
            <h3>
              <IconRoundedCart>
                <ShoppingCart weight={'fill'} size={18} />
              </IconRoundedCart>
              Compra simples e segura
            </h3>
            <h3>
              <IconRoundedPackage>
                <Package weight={'fill'} size={18} />
              </IconRoundedPackage>
              Embalagem mantém o café intacto
            </h3>
            <h3>
              <IconRoundedTimer>
                <Timer weight={'fill'} size={18} />
              </IconRoundedTimer>
              Entrega rápida e rastreada
            </h3>
            <h3>
              <IconRoundedCoffee>
                <Coffee weight={'fill'} size={18} />
              </IconRoundedCoffee>
              O café chega fresquinho até você
            </h3>
          </Itens>
        </div>
        <img src={image} alt="" />
      </Banner>
      <Coffees>
        <h2>Nossos Cafés</h2>
      </Coffees>
    </HomeContainer>
  )
}
