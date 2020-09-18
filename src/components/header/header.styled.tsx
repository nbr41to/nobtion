import styled from 'styled-components'

export const StyledComponent = styled.header`
  display: block;
  min-height: 64px;
  padding: 2em 0;
  text-align: center;
  letter-spacing: -0.02em;

  h1 {
    font-size: 3.6rem;
    font-weight: bold;
    cursor: pointer;
  }
  h2 {
    font-size: 1.4rem;
    padding: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      font-size: 1.6rem;
      padding: 10px;
    }
  }

  a {
    color: var(--accents-3);
    font-weight: 400;
  }

  .active {
    color: #0070f3;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    padding: 0.5em 0 2em;
  }
`
