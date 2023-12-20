import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.background};
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 2.0625rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  div {
    padding: 0 0.5rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    height: 2.375rem;

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      margin-left: 0.4rem;
    }
  }

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.75rem;
    position: relative;

    span {
      position: absolute;
      top: -7px;
      right: -7px;
      background-color: ${(props) => props.theme['yellow-dark']};
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.75rem;
    }
  }
`
