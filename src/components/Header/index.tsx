import { HeaderContainer, HeaderContent, Nav } from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext.tsx'

export function Header() {
  const { orders } = useContext(OrdersContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <Nav>
          <div>
            <MapPin size={22} weight={'fill'} />
            <span>Florianópolis, SC</span>
          </div>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight={'fill'} />
            {orders && orders?.length > 0 && <span>{orders?.length}</span>}
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
