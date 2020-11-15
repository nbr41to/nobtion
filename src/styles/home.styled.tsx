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

  /* Blog style copy */
  .posts {
    padding: 0 20px;
  }
  .nopost-message {
    font-size: 1.6rem;
    margin: 12px;
  }
  .menu {
    padding: 20px 0;
    h2 {
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 4px;
      li {
        font-size: 1.4rem;
        font-weight: bold;
        padding: 8px;
        cursor: pointer;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 4px;
        @media (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
      .active {
        color: orange;
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
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
    .post-title {
      font-size: 1.4rem;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      padding: 8px;
      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
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
      @media (max-width: 600px) {
        font-size: 0.8rem;
      }
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
        @media (max-width: 600px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .btn {
    display: block;
    padding: 8px 12px;
    border: 1px solid #000;
    margin: 8px auto;
    border-radius: 8px;
  }
`
