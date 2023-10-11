import styled from "styled-components";

export const Container = styled.div`
  margin-top: 164px;
  
  .row {
    width: 90%;
    margin: auto;
  }

  .product {
    width: 90%;
    margin: auto;
  }

  .header_product {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
      align-content: center;
      align-items: center;
    }

    .image_product {
      width: 600px;
      height: 600px;
      border: 1px solid #0A69C5;
      margin-right: 100px;
      display: flex;
      justify-content: center;
      flex-direction: column;

      @media (max-width: 1200px) {
        width: 300px;
        height: 300px;
        margin-right: 0;
      }

      img {
        width: auto;
        object-fit: cover;
        max-height: 600px;
        @media (max-width: 1200px) {
          max-height: 300px;
        }
      }
    }

    .name {

      @media (max-width: 1200px) {
        max-width: 60%;
      }

      @media (max-width: 800px) {
        max-width: 100%;
      }

      max-width: 40%;
      text-align: right;

      h1 {
        font-weight: bold;
      }

      h2 {
        font-weight: normal;
      }

      .tag {
        display: flex;
        margin-top: 42px;
        flex-direction: row-reverse;

        div {
          padding: 8px 20px;
          color: white;
          background-color: #0A69C5;
          border-radius: 20px;
          font-weight: bold;
        }
      }
    }
  }

  .desc {
    position: relative;
    border-top: 1px solid #0A69C5;
    margin-top: 60px;

    .text_desc {
      font-size: 24px;
      margin-top: 40px;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .title_desc {
      position: absolute;
      top: -52px;
      right: 0;
      width: 180px;
      height: 52px;
      flex-shrink: 0;
      border-radius: 20px 20px 0px 0px;
      background: #0A69C5;
      color: #FFF;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
    }
  }
`