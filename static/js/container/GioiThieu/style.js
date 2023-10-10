import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;


  .slick-slide {
    display: flex !important;
    justify-content: center !important;


    img {
      width: 520px !important;
    }

    @media (max-width: 1800px) {
      img {
        width: 460px !important;
      }
    }

    @media (max-width: 1600px) {
      img {
        width: 400px !important;
      }
    }

    @media (max-width: 1440px) {
      img {
        width: 360px !important;
      }
    }

    @media (max-width: 1260px) {
      img {
        width: 300px !important;
      }
    }

    @media (max-width: 1050px) {
      img {
        width: 240px !important;
      }
    }

    @media (max-width: 850px) {
      img {
        width: 160px !important;
      }
    }

    @media (max-width: 600px) {
      img {
        width: 120px !important;
      }
    }
  }


  .row {
    width: 90%;
    margin: auto;
    padding-top: 102px;


  }

  .title {
    color: #0A69C5;
    font-size: 52px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    border-bottom: 2px solid #0A69C5;
    margin-bottom: 40px;
  }

  .desc {
    margin: 40px 80px 0 80px;
    color: #606972;
    text-align: justify;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .bg_goi_thieu {
    overflow: hidden;

    img {
      width: 100vw;
      height: auto;
    }
  }

  @media (max-width: 1280px) {

    .desc {
      font-size: 24px;
      margin: 40px 40px 0 40px;

    }
  }

`