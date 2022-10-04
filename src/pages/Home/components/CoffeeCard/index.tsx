import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import * as S from './styles'

export interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <S.CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <S.TagsContainer>
        {coffee.tags.map((tag) => (
          <S.Tag key={Math.floor(Date.now() * Math.random()).toString(36)}>
            {tag}
          </S.Tag>
        ))}
      </S.TagsContainer>

      <S.Name>{coffee.name}</S.Name>
      <S.Decription>{coffee.description}</S.Decription>

      <S.CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <S.AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </S.AddCartWrapper>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}
