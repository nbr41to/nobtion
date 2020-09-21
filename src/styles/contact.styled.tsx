import styled from 'styled-components'

export const StyledComponent = styled.div`
  .logo {
    display: block;
    width: 250px;
    margin: 60px auto;
    text-align: center;
    img {
      width: 100%;
      height: auto;
      @media (max-width: 600px) {
        width: 80%;
      }
    }
    h1 {
      font-size: 2.4rem;
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }

  .contact-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0 60px;
    a {
      display: block;
      width: 80px;
      padding: 8px;
      margin: 0 16px;
      @media (max-width: 600px) {
        padding: 16px;
        margin: 0 8px;
      }
    }
  }
`
