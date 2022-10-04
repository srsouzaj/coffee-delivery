import styled from 'styled-components'
import { rgba } from 'polished'
import introBackgroundImg from '../../../../assets/intro-background.png'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: ${(props) => ` url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
      8deg,
      ${props.theme.colors['base-white']} 0%,
      ${rgba(props.theme.colors['base-background'], 0.2)} 50%,
      ${props.theme.colors['base-background']} 100%
    )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: auto;
  }
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  & > div {
    flex: 1;
  }

  figure {
    max-width: 30rem;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  margin-top: 4.125rem;

  @media (max-width: 481px) {
    grid-template-columns: 1fr;
  }
`
