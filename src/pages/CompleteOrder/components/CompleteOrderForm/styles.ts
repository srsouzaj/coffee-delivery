import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CompleteOrderFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  /* background: tomato; */
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0px, 41.66%) minmax(0px, 58.33%) minmax(
      0px,
      3.75rem
    );
  column-gap: 0.7rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));

  column-gap: 0.75rem;
  row-gap: 0.75rem;

  /* background: tomato; */

  & > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`
