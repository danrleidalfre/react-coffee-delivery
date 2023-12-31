import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding-top: 9.375rem;
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 640px auto;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 7rem 2rem 0;
    grid-template-columns: 1fr;
  }
`

export const AddressAndPayment = styled.section``

export const Address = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75em;
`

export const Payment = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75em;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const IconAndTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const IconAndTitlePurple = styled(IconAndTitle)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Titles = styled.div`
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
    line-height: 130%;
    margin-bottom: 2px;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`

export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  max-width: 12.5rem;
  width: 100%;
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const InputFull = styled(Input)`
  max-width: 100%;
`

export const InputCity = styled(Input)`
  max-width: 276px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const InputUF = styled(Input)`
  max-width: 60px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const PaymentButtonsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PaymentButton = styled.button`
  height: 3.125rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &.active {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-left: 0.75rem;
  }
`

export const OrderConfirmation = styled.aside``

export const Itens = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const Item = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0;
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  div {
    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: normal;
    }
  }
`

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
`

export const Quantity = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  width: 4.5rem;
  height: 2rem;
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

export const Remove = styled.button`
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  height: 2rem;
  width: 5.625rem;
  border-radius: 6px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
    transition: color 0.2s;
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: normal;
    margin-left: 4px;
  }
`

export const Price = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: right;
`

export const Total = styled.div`
  display: flex;
  margin: 1.5rem 0;
  gap: 0.75rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    h6 {
      font-size: 0.875rem;
      font-weight: normal;
    }

    h5 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
