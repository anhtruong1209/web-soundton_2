import styled from "styled-components";

export const Container = styled.div`
  margin-top: 164px;
  
  .row {
    width: 90%;
    margin: auto;
  }

  input {
    outline: none;
  }


  .search {
    margin-top: 82px;
    background-color: #CDDFF4;
    padding: 8px 20px;
    position: relative;

    .icon_search {
      position: absolute;
      top: 14px;
      right: 24px;
    }

    .title {
      padding: 8px 20px;
      background-color: #0A69C5;
      border-radius: 20px 20px 0px 0px;
      position: absolute;
      top: -54px;
      left: 0;
      color: #FFF;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
    }

    input {
      width: 100%;
      border: none;
      border-radius: 12px;
      height: 40px;
    }
  }

  .list {
    display: flex;
    margin: auto;

    .left {
      width: 320px;
      height: max-content;
      background: #F4F8FD;

      h1 {
        font-size: 24px;
        font-weight: normal;
        color: #0A69C5;
        margin-left: 12px;
      }
    }

    .list_check_box {
      background: #FFF;
      width: 98%;
      margin: auto;

      .row_list_check_box {
        margin: 8px;
        display: flex;
        flex-direction: column;
      }
    }

    .right {
      margin: auto;
      margin-top: 16px;

      .row_right {
        display: flex;
        margin-top: 12px;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      .item_product {
        cursor: pointer;
        max-width: 360px;
        margin: 20px 10px;

        .text_product {
          height: 240px;
          border-right: 1px solid #CFD9F4;
          border-bottom: 1px solid #CFD9F4;
          border-left: 1px solid #CFD9F4;
          background: #FFFEFE;
          padding: 12px 20px;
          position: relative;

          .button_product {
            position: absolute;
            bottom: 16px;
            right: 10px;
            display: flex;

            div {
              width: 150px;
              line-height: 32px;
              margin: 0 12px;
              height: 32px;
              text-align: center;
              border-radius: 20px;
              color: white;
              font-weight: bold;
              background: #0A69C5;
            }
          }
        }

        .photo_product {
          height: 360px;
          width: 360px;
          background-color: #ececec;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        img {
          mix-blend-mode: multiply;
          max-height: 320px;
          width: 360px;
          height: auto;
        }

        .name_product {
          font-weight: bold;
        }

        .desc_product {
          text-align: justify;
          margin-top: 20px;
        }
      }
    }
  }

`