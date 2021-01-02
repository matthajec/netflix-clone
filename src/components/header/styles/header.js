import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Background = styled.section`
  display: flex;
  flex-direction: column;
`

export const Container = styled.section``

export const LogoLink = styled(RouterLink)``

export const ButtonLink = styled(RouterLink)``

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`