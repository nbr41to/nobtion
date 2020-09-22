import styled from 'styled-components'

export const StyledComponent = styled.div`
  .logo {
    display: block;
    width: 250px;
    margin: 40px auto;
    text-align: center;
    img {
      width: 100%;
      height: auto;
      @media (max-width: 600px) {
        width: 80%;
      }
    }
    h2 {
      font-size: 2.4rem;
      @media (max-width: 600px) {
        font-family: 'ArialRoundedMTBold', sans-serif;
        font-size: 2rem;
        margin-top: 20px;
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
