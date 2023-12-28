import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-top: 6.875rem;
  background-image: url('/src/assets/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 65%;
  background-position: center;
`

export const Banner = styled.section`
  max-width: 70rem;
  padding: 6.25rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
  }
`

export const IconRounded = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin-right: 0.75rem;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const IconRoundedCart = styled(IconRounded)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const IconRoundedPackage = styled(IconRounded)`
  background-color: ${(props) => props.theme['base-text']};
`

export const IconRoundedTimer = styled(IconRounded)`
  background-color: ${(props) => props.theme.yellow};
`

export const IconRoundedCoffee = styled(IconRounded)`
  background-color: ${(props) => props.theme.purple};
`

export const Coffees = styled.section`
  margin: 2rem auto 0;
  max-width: 70rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }
`

export const Coffee = styled.section``
