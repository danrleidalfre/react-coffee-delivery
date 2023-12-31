import styled from 'styled-components'

export const SuccessContainer = styled.main`
  padding-top: 11.5rem;
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 7rem 2rem 0;
  }
`

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
`

export const H2 = styled.h2`
  margin-top: 4px;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: normal;
  line-height: 130%;
`

export const Delivery = styled.section`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Infos = styled.div`
  padding: 2.5rem;
  max-width: 32.875rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 6px 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask:
      linear-gradient(${(props) => props.theme.background} 0 0) content-box,
      linear-gradient(${(props) => props.theme.background} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
`

export const Address = styled(Info)`
  div {
    background-color: ${(props) => props.theme.purple};
  }
`

export const Forecast = styled(Info)`
  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  div {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const Payment = styled(Info)`
  div {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 0.75rem;
  color: ${(props) => props.theme.background};
`
