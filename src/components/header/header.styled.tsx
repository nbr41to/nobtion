import styled from 'styled-components'

export const StyledComponent = styled.header`
  display: block;
  min-height: 64px;
  text-align: center;

  h1 {
    font-family: impact;
    font-size: 3.6rem;
    font-weight: bold;
    padding-top: 12px;
    cursor: pointer;
  }
  h2 {
    font-family: 'HiraKakuPro-W6';
    font-size: 1.2rem;
    padding: 12px;
  }

  ul {
    list-style: none;
    color: white;
    background: black;
    li {
      display: inline-block;
      font-family: impact;
      font-size: 1.6rem;
      padding: 10px;
    }
  }

  a {
    color: var(--accents-3);
    /* font-weight: 400; */
  }

  .active {
    color: orange;
    font-weight: 600;
  }

  @media (max-width: 600px) {
  }
`
