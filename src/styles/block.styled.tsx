import styled from 'styled-components'

export const StyledBlocks = styled.div`
  width: 100%;
  padding: 16px 30px;
  @media (max-width: 600px) {
    padding: 16px;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    padding: 12px 20px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #ddd;
    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin: 20px 0 10px;
    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 12px 0;
    margin: 12px 0;
    border-bottom: 1px solid #444;
    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 8px 0;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.2rem;
    padding: 8px 0;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
    /* DismissLink用 */
    a {
      color: blue;
      text-decoration: underline;
    }
  }

  img,
  video,
  iframe {
    /* ここは属性で管理されている */
    margin: 24px auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    @media (max-width: 600px) {
      margin: 12px auto;
    }
  }
  code {
    display: inline-block;
    font-family: 'Verdana';
    font-size: 1rem;
    /* font-weight: bold; */
    color: tomato;
    padding: 4px;
    margin: 0 4px;
    background-color: #1c2022;
    border-radius: 3px;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
  pre {
    margin: 24px 48px;
    padding: 24px 36px;
    border-radius: 5px;
    color: #333;
    background: #1c2022;
    overflow-x: auto; /* 横スク */
    -webkit-overflow-scrolling: touch; /* 横スク */
    code {
      width: 100%;
      font-family: 'Verdana';
      font-size: 1rem;
      color: #ccc;
      padding: 0;
      background: #1c2022;
    }
    @media (max-width: 600px) {
      margin: 12px;
      padding: 12px;
    }
  }

  ul {
    list-style-type: disc;
    padding: 0 12px;
    margin: 12px 16px;
    li {
      font-size: 1.2rem;
      padding: 8px 0;
    }
    @media (max-width: 600px) {
      margin: 8px;
      padding: 0 8px;
      li {
        font-size: 1rem;
      }
    }
  }
  ol {
    list-style-type: decimal;
    padding: 0 12px;
    margin: 12px 16px;
    li {
      font-size: 1.2rem;
      padding: 8px 0;
    }
    @media (max-width: 600px) {
      margin: 8px;
      padding: 0 8px;
      li {
        font-size: 1rem;
      }
    }
  }

  .underline {
    text-decoration: underline;
  }

  .tweet {
    margin: 2rem auto;
    text-align: center;
  }

  .callout {
    padding: 16px;
    margin: 24px auto;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    background-color: #ddd;
    .text {
      margin-left: 12px;
    }
    .mee-icon {
      box-shadow: none;
      width: 60px;
      margin: 0 8px;
    }
    @media (max-width: 600px) {
      margin: 12px 0;
      padding: 12px 8px;
      font-size: 1rem;
      .mee-icon {
        width: 30px;
        margin: 0;
      }
    }
  }
  
  .to_do {
    input {
      :disabled {
      }
    }
  }

  .bookmark {
    display: flex;
    padding: 12px 24px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 24px 12px;
    @media (max-width: 600px) {
      padding: 8px 12px;
      flex-direction: column;
      justify-content: center;
    }
    .info {
      .name {
        font-size: 1.2rem;
        @media (max-width: 600px) {
          font-size: 1rem;
        }
        .icon {
          display: inline-block;
          width: 30px;
          box-shadow: none;
          margin: 0;
          border: 1px solid #ccc;
          @media (max-width: 600px) {
            width: 20px;
          }
        }
      }
      .description {
        font-size: 1.0rem;
        color: #444;
        @media (max-width: 600px) {
          font-size: 0.8rem;    
        }
      }
      .url {
        font-size: 1.0rem;
        text-align: right;
        text-decoration: underline;
        @media (max-width: 600px) {
          font-size: 0.8rem;
          text-align: left;    
        }
      }
    }
    .cover {
      width: 240px;
      margin-left: 24px;
      @media (max-width: 600px) {
      margin: 8px auto;
      width: 300px;
    }
  }

  /**
  * COLOR
   */
  .orange {
    color: #d4680f;
  }
  .yellow {
    color: #daa104;
  }
  .blue {
    color: #0e638e;
  }
  .red {
    color: #db3636;
  }
  .green {
    color: #117061;
  }
  .gray {
    color: #83827f;
  }
  .brown {
    color: #593e33;
  }
  .pink {
    color: #a31967;
  }
  .purple {
    color: #5e389b;
  }

  .orange_background {
    background-color: #f9e8d8;
    padding: 2px 4px;
  }
  .blue_background {
    background-color: #d8e8ef;
  }
  .red_background {
    background-color: #fae0e0;
  }
  .green_background {
    background-color: #d8eae7;
  }
  .yellow_background {
    background-color: #faf1d6;
  }
  .gray_background {
    background-color: #e8e9ea;
  }
  .pink_background {
    background-color: #f2dae8;
  }
  .purple_background {
    background-color: #e7e0f0;
  }
  .brown_background {
    background-color: #e6e1df;
  }
`
