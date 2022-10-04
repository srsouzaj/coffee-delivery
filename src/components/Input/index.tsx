import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.InputStyleContainer hasError={!!error}>
          <S.InputStyled {...props} ref={ref} />
          {rightText && <S.RightText>{rightText}</S.RightText>}
        </S.InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </S.InputWrapper>
    )
  },
)
