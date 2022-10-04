import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import * as S from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <S.CoffeeCartCardContainer>
      {/* <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <S.ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <S.RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </S.RemoveButton>
          </S.ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p> */}
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <div className="description-container">
        <div className="description-container-top">
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <p className="price">R$ {formattedPrice}</p>
        </div>
        <S.ActionsContainer>
          <QuantityInput
            size="small"
            quantity={coffee.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <S.RemoveButton onClick={handleRemove}>
            <Trash size={16} />
            REMOVER
          </S.RemoveButton>
        </S.ActionsContainer>
      </div>
    </S.CoffeeCartCardContainer>
  )
}
