import { RegularText, TitleText } from '../../components/Typography'
import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import * as S from './styles'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { PAYMENT_METHODS } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { colors } = useTheme()

  // Pegando dados do state do navigate (que vem da rota complete-order)
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <S.OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <S.OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText color="text">
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText color="text">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText color="text">
                Pagamento na entrega
                <br />
                <strong>{PAYMENT_METHODS[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </S.OrderDetailsContainer>
        <figure>
          <img src={confirmedOrderIllustration} alt="" />
        </figure>
      </section>
    </S.OrderConfirmedContainer>
  )
}
