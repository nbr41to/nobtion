import styled from 'styled-components'

export const StyledComponent = styled.header`
  .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: 'impact', sans-serif;
      font-size: 4.8rem;
      padding: 4px 20px;
      margin-top: 16px;
      cursor: pointer;
      @media (max-width: 600px) {
        font-size: 3.6rem;
        padding: 4px 20px;
        margin-top: 8px;
      }
    }
    h2 {
      /* font-family: 'HiraKakuPro-W6'; */
      font-size: 1.4rem;
      font-weight: bold;
      padding: 12px;
      @media (max-width: 600px) {
        font-size: 1.2rem;
        padding: 8px;
      }
    }
  }

  .menu-container {
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      color: white;
      background: black;
      li {
        font-family: impact;
        font-size: 1.8rem;
        padding: 12px 20px;
        @media (max-width: 600px) {
          font-size: 1.6rem;
          padding: 8px 16px;
        }
      }
      .active {
        color: orange;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 600px) {
  }
`
