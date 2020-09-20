import styled from 'styled-components'

export const StyledComponent = styled.div`
  .logo {
    display: block;
    width: 250px;
    margin: 16px auto;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
    h1 {
      font-size: 2.4rem;
    }
  }

  .contact-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      width: 80px;
      padding: 8px;
      margin: 0 16px;
    }
  }
`
