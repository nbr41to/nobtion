import styled from 'styled-components'

export const StyledComponent = styled.div`
  padding: 8px 20px;
  h1 {
    font-size: 2.2rem;
    padding: 12px;
  }
  a {
    /* width: 100%; */
    :hover {
      cursor: pointer;
      .post-title {
        color: blue;
      }
    }
  }

  .post-card {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 12px 0;
    .post-title {
      font-size: 1.4rem;
      border-bottom: 1px solid #ccc;
      padding: 8px;
    }
    .posted {
    }
    p {
      padding: 4px 12px;
    }
  }
`
