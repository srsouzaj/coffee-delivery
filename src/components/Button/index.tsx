import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

export function Button({ text, ...props }: ButtonProps) {
  return <S.ButtonContainer {...props}>{text}</S.ButtonContainer>
}
