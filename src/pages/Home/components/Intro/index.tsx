import * as S from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  const { colors } = useTheme()

  return (
    <S.IntroContainer>
      <S.IntroContent className="container">
        <div>
          <section>
            <S.IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </S.IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <S.BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
              text="O café chega fresquinho até você"
            />
          </S.BenefitsContainer>
        </div>
        <figure>
          <img src={introImg} alt="" />
        </figure>
      </S.IntroContent>
    </S.IntroContainer>
  )
}
