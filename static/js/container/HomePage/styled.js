import styled from "styled-components";


export const Container = styled.div`
  margin-top: 64px;

  .header {
    height: 140px;
    background-color: #0A69C5;
  }

  .slick-slide div div {
    display: flex !important;
    justify-content: center !important;

    .row_image {
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      cursor: pointer;
    }

    img {
      height: 300px;
    }


    @media (max-width: 1600px) {
      .row_image {
        width: 300px;
        height: 300px;
      }

      img {
        height: 250px;
      }
    }

    @media (max-width: 1400px) {
      .row_image {
        width: 250px;
        height: 250px;
      }

      img {
        height: 200px;
      }
    }


    @media (max-width: 1000px) {
      .row_image {
        width: 200px;
        height: 200px;
      }

      img {
        height: 150px;
      }
    }

    @media (max-width: 600px) {
      .row_image {
        width: 100px;
        height: 100px;
      }

      img {
        height: 80px;
      }
    }
  }

  .row_header {
    height: 140px;
    display: flex;
    margin: 0 135px;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

  .title_content {
    margin-top: 100px;
    font-size: 72px;
    @media (max-width: 576px) {
      font-size: 32px !important;
    }

    @media (max-width: 444px) {
      font-size: 20px !important;
    }
  }

  .partner {
    .slick-list {
      background-color: #DAEEF9;
    }
  }

  .kinh_doanh {
    margin: 80px 0;
    display: flex;
    align-content: center;
    align-items: center;
    width: 75%;
    border: 2px solid blue;
    background-color: #0A69C5;
    justify-content: space-between;

    .kinh_doanh_desc {
      font-size: 40px;
      width: 50%;
      text-align: center;
      font-weight: bold;
      color: white;
    }

    .slick-slide div {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      align-content: center !important;
      overflow: hidden;
    }

    .slick-dots {
      display: none !important;
    }


    img {
      //width: 50%;
      margin-top: 3px !important;
    }
  }

  #khac_biet {

    .row_img {
      background-color: white;
      height: 100%;
    }

    img {
      margin-bottom: 16px;
    }
  }


  @media (max-width: 1024px) {
    .title_content {
      font-size: 40px;
    }

    .kinh_doanh_desc {
      font-size: 24px !important;
    }
  }

  @media (max-width: 620px) {
    .kinh_doanh {
      margin: 40px 0;
    }

    .title_content {
      font-size: 40px;
    }

    .kinh_doanh_desc {
      font-size: 16px !important;
    }

    .title_content {
      margin-top: 40px;
    }
  }
`