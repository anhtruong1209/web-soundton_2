import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;

  .row {
    width: 90%;
    margin: auto;
    padding-top: 102px;
  }

  .item_ung_dung {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    .photo {
      position: relative;
      width: 40%;
      margin-right: 12px;

      img {
        width: 100%;
        object-fit: cover;
        max-height: 80%;
      }
    }

    .bong_tron {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: rgba(10, 105, 197, 0.65);
      border-radius: 50%;
    }

    .text_ung_dung {
      width: 50%;
      margin-right: 12px;

      h1 {
        font-size: 36px;
      }

      h2 {
        color: rgba(96, 105, 114, 1);
        font-size: 24px;
        font-weight: normal;
        text-align: justify;
      }
    }

  }

  .ben_trai {
    left: -50px;
    top: -50px;
  }

  .ben_phai {
    right: -50px;
    top: -50px;
  }

  @media (max-width: 1440px) {
    .text_ung_dung {
      h1 {
        font-size: 24px !important;
      }

      h2 {
        font-size: 16px !important;
      }
    }
  }

  @media (max-width: 1200px) {
    .bong_tron {
      width: 60px !important;
      height: 60px !important;
    }

    .ben_trai {
      left: -30px;
      top: -30px;
    }

    .ben_phai {
      right: -30px;
      top: -30px;
    }

    .text_ung_dung {
      h1 {
        font-size: 20px !important;
      }

      h2 {
        font-size: 16px !important;
      }
    }
  }
`