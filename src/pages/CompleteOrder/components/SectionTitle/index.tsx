import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'
import * as S from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <S.SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s" color="text">
          {subtitle}
        </RegularText>
      </div>
    </S.SectionTitleContainer>
  )
}
