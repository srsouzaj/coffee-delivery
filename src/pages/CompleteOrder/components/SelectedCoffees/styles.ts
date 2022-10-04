import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 28rem;

  /* background: dodgerblue; */

  @media (max-width: 1024px) {
    width: 25rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`