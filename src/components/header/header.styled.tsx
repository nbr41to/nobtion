import styled from 'styled-components'

export const StyledComponent = styled.header`
  display: block;
  min-height: 64px;
  text-align: center;
  padding-bottom: 16px;
  h1 {
    font-family: impact;
    font-size: 3.6rem;
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
  }
  h2 {
    font-size: 1.2rem;
    padding: 4px;
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
  }
`
