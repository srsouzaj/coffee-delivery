import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  figure {
    max-width: 30.75rem;

    img {
      width: 100%;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors['base-background']};
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Setup Borda com gradiente */
  &::before {
    content: '';
    position: absolute;
    inset: -1px; // referente à grossura da borba
    z-index: -1; // para aparecer só a borda
    border-radius: 7px 37px 7px 37px; // border radius padrão + grossura da borda
    background: linear-gradient(
      102.89deg,
      #dbac2c 2.61%,
      #8047f8 98.76%
    ); // gradiente
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`
