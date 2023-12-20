import { HeaderContainer, HeaderContent, Nav } from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
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
            <span>3</span>
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
