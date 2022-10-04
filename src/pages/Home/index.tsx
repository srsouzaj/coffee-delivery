import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import * as S from './styles'

export function HomePage() {
  return (
    <S.HomeContainer>
      <Intro />
      <OurCoffees />
    </S.HomeContainer>
  )
}
