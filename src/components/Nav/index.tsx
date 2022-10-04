import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'
import * as S from './styles'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <S.HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <S.HeaderButtonsContainer>
          <S.HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Praia Grande, SP
          </S.HeaderButton>

          <NavLink to="/complete-order">
            <S.HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </S.HeaderButton>
          </NavLink>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  )
}
