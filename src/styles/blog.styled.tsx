import styled from 'styled-components'

export const StyledComponent = styled.div`
  padding: 8px 20px;
  .menu {
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 4px;
      li {
        padding: 0 8px;
      }
    }
  }
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
    p {
      font-size: 1.2rem;
      padding: 8px;
    }
    .post-title {
      font-size: 1.4rem;
      border-bottom: 1px solid #ccc;
      padding: 8px;
    }
    .posted {
    }
    .category {
      font-size: 1rem;
      font-weight: bold;
      padding: 4px 8px;
      /* border: 1px solid #ccc; */
      border-radius: 4px;
      margin: 0 4px;
      background-color: lightblue;
    }
    .tag-list {
      display: flex;
      align-items: center;
      padding: 8px 0;
      .tag-name {
        font-size: 1rem;
        padding: 4px 8px;
        /* border: 1px solid #ccc; */
        border-radius: 4px;
        margin: 0 4px;
        background-color: lightgreen;
      }
    }
  }
`
