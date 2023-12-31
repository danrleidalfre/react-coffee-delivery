import {
  Actions,
  AddCart,
  Banner,
  BannerContainer,
  Buy,
  CoffeeCard,
  Coffees,
  CoffeesContainer,
  HomeContainer,
  IconRoundedCart,
  IconRoundedCoffee,
  IconRoundedPackage,
  IconRoundedTimer,
  Itens,
  Label,
  Labels,
  Price,
  Quantity,
} from './styles'

import image from '../../assets/banner.png'
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

export function Home() {
  const coffees = [
    {
      id: 1,
      labels: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '5,50',
      quantity: 1,
    },
    {
      id: 2,
      labels: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '5,50',
      quantity: 1,
    },
    {
      id: 3,
      labels: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '6,50',
      quantity: 1,
    },
    {
      id: 4,
      labels: ['Tradicional', 'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '6,50',
      quantity: 1,
    },
    {
      id: 5,
      labels: ['Tradicional', 'Com Leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '8,50',
      quantity: 1,
    },
    {
      id: 6,
      labels: ['Tradicional', 'Com Leite'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '8,50',
      quantity: 1,
    },
    {
      id: 7,
      labels: ['Tradicional', 'Com Leite'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '10,50',
      quantity: 1,
    },
    {
      id: 8,
      labels: ['Tradicional', 'Com Leite'],
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: '10,50',
      quantity: 1,
    },
    {
      id: 9,
      labels: ['Tradicional', 'Com Leite'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '10,50',
      quantity: 1,
    },
    {
      id: 10,
      labels: ['Especial', 'Com Leite'],
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '12,50',
      quantity: 1,
    },
    {
      id: 11,
      labels: ['Especial', 'Alcoólico', 'Gelado'],
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '15,50',
      quantity: 1,
    },
    {
      id: 12,
      labels: ['Especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '13,50',
      quantity: 1,
    },
    {
      id: 13,
      labels: ['Especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '10,50',
      quantity: 1,
    },
    {
      id: 14,
      labels: ['Especial', 'Alcoólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '15,50',
      quantity: 1,
    },
  ]

  return (
    <HomeContainer>
      <BannerContainer>
        <Banner>
          <div>
            <h1>
              Encontre o café perfeito <br />
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
      </BannerContainer>
      <CoffeesContainer>
        <h2>Nossos Cafés</h2>
        <Coffees>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard key={coffee.id}>
                <img src={`/src/assets/coffees/${coffee.id}.png`} alt="" />
                <Labels>
                  {coffee.labels.map((label) => {
                    return <Label key={label}>{label}</Label>
                  })}
                </Labels>
                <h4>{coffee.title}</h4>
                <p>{coffee.description}</p>
                <Buy>
                  <Price>
                    R$ <span>{coffee.price}</span>
                  </Price>
                  <Actions>
                    <Quantity>
                      <Minus size={14} weight={'bold'} />
                      <span>{coffee.quantity}</span>
                      <Plus size={14} weight={'bold'} />
                    </Quantity>
                    <AddCart type={'submit'}>
                      <ShoppingCart size={22} weight={'fill'}></ShoppingCart>
                    </AddCart>
                  </Actions>
                </Buy>
              </CoffeeCard>
            )
          })}
        </Coffees>
      </CoffeesContainer>
    </HomeContainer>
  )
}
