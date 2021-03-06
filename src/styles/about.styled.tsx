import styled from 'styled-components'

export const StyledComponent = styled.div`
  .concept {
    h2 {
      /* font-family: 'impact', sans-serif; */
      font-family: 'ArialRoundedMTBold', sans-serif;
      font-size: 2.6rem;
      font-weight: bold;
      text-align: center;
      padding: 14px;
      color: white;
      background-color: black;
      @media (max-width: 600px) {
        font-size: 1.6rem;
        padding: 8px 0;
      }
    }
    p {
      font-size: 1.4rem;
      padding: 40px 80px;
      @media (max-width: 600px) {
        font-size: 1.2rem;
        padding: 12px 20px;
      }
    }
  }

  .description {
    section {
      padding: 12px;
      margin: 20px 0;

      h3 {
        font-size: 1.8rem;
        font-weight: bold;
        padding: 8px;
        border-bottom: 1px solid #ccc;
        @media (max-width: 600px) {
          font-size: 1.4rem;
          padding: 8px;
        }
      }
      p {
        font-size: 1.2rem;
        padding: 12px 8px;
        @media (max-width: 600px) {
          font-size: 1.2rem;
        }
        a {
          font-weight: bold;
          color: blue;
          text-decoration-line: underline;
        }
      }
      .twitter-link {
        display: block;
        text-align: center;
        color: skyblue;
        font-weight: bold;
      }
      .notion-img {
        display: block;
        width: 120px;
        padding: 24px 0 16px 0;
        margin: 0 auto;
      }
      .notionblog-img {
        display: block;
        width: 300px;
        padding: 12px 0;
        margin: 0 auto;
      }
    }
  }
`
