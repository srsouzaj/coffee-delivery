import { ReactNode } from 'react'
import * as S from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoWithIcon({ text, icon, iconBg }: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer>
      <S.IconContainer iconBg={iconBg}>{icon}</S.IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </S.InfoWithIconContainer>
  )
}
