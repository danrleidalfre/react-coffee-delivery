import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-top: 6.875rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`

export const BannerContainer = styled.section`
  background-image: url('/src/assets/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 80%;
  background-position: center;
`

export const Banner = styled.div`
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

  @media (max-width: 1200px) {
    padding: 6.25rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;

    h1 {
      font-size: 2rem;

      br {
        display: none;
      }
    }

    p {
      margin-bottom: 2rem;

      br {
        display: none;
      }
    }

    img {
      width: 100%;
      margin-top: 2rem;
    }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

export const CoffeesContainer = styled.section`
  margin: 2rem auto 10rem;
  max-width: 70rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 3.375rem;
  }

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`

export const Coffees = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const CoffeeCard = styled.article`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 120px;
    margin-top: -1.25rem;
  }

  h4 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    line-height: 130%;
    margin-top: 0.5rem;
    padding: 0 1.25rem;
  }
`

export const Labels = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.75rem;
`

export const Label = styled.span`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['yellow-light']};
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 20px;
`

export const Buy = styled.div`
  padding: 2rem 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Price = styled.h5`
  font-size: 0.875rem;
  font-weight: 400;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
  }
`

export const Actions = styled.form`
  display: flex;
`

export const Quantity = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const AddCart = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
