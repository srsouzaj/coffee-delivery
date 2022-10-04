import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  icon: ReactNode
  value: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, value, icon, label, ...props }, ref) => {
  return (
    <S.PaymentMethodInputContainer>
      <input
        id={id}
        type="radio"
        name="paymentMethod"
        value={value}
        {...props}
        ref={ref}
      />
      <label htmlFor={id}>
        <S.ContentContainer>
          {icon}
          {label}
        </S.ContentContainer>
      </label>
    </S.PaymentMethodInputContainer>
  )
})
