import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  margin-bottom: 9.8rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`
