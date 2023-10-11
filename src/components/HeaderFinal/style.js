import styled from "styled-components";


export const Container = styled.div`
  height: 64px;
  width: 100%;
  background-color: white;


  .logo {
    height: 50px;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .logo {
      height: 50px;
    }
  }


  .row_header {
    height: 64px;
    display: flex;
    margin: 0 100px;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    .row_header {
      margin: 0 30px;
    }
  }

  .row_menu {
    display: flex;
    width: calc(100% - 300px);
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 1080px) {
    .row_menu {
      width: calc(100% - 250px);
    }
  }


  .ngon_ngu {
    display: none;
  }

  @media (max-width: 1000px) {
    .row_menu {
      display: none;
    }


    .ngon_ngu {
      display: flex;
    }
  }

  .menu {
    display: flex;
    align-content: center;
    align-items: center;
  }

  .menu_item {
    padding: 0 8px;
    height: 40px;
    line-height: 40px;
    margin: 12px 20px;
    color: #0A69C5;
    border-radius: 4px;
    transition: 0.5s;

    a {
      text-decoration: none;
      color: unset;
    }
  }

  @media (max-width: 1260px) {
    .menu_item {
      margin: 12px 8px;
    }
  }


  .menu_item:hover {
    background-color: #0A69C5;
    color: white;

    a {
      color: white;
    }
  }

  #menu_cha {
    height: 64px;
    width: max-content;
  }

  .menu_con {
    display: none;
    left: 0;
    top: 64px;
    position: absolute;
    width: 100vw;
    z-index: 1000;
    overflow: hidden;
    border-bottom: 1px solid #ccc;

    .row_menu_con {
      background-color: white;
      display: flex;
      justify-content: center;
    }

    .row_menu_con_item {
      border-left: 1px solid #ccc;
      height: max-content;
    }

    h1 {
      font-size: 28px;
      color: #0A69C5;
      margin-left: 20px;
    }

    .menu_item {
      margin: 12px 20px;
      color: #0A69C5;
      border-radius: 4px;
      transition: 0.5s;
      height: max-content;


      a {
        width: max-content;
        text-align: center;
        text-decoration: none;
        color: unset;
      }

    }

    .menu_item:hover {
      background-color: #0A69C5;
      color: white;
    }

    @media (max-width: 1260px) {
      .menu_item {
        margin: 12px 8px;
      }
    }
  }

  .menu_con:hover {
    display: block;
  }

  #menu_cha:hover .menu_con {
    display: block;
  }

  .action {
    display: flex;
  }

  .input_search {
    position: relative;
    margin-right: 12px;

    input {
      width: 200px;
      height: 30px;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 18px;
      background-color: #0A69C5;
      color: white;
    }


    .icon_search {
      position: absolute;
      right: 4px;
      top: 6px;
      cursor: pointer;
    }
  }

`


export const MenuCon = styled.div`
  a {
    text-decoration: unset;
    text-decoration: unset;
  }

  li {
    list-style: none;
  }

  .nav > li {
    float: left;
    margin-right: 15px;
    z-index: 3;
  }

  .nav > li > a {
    text-decoration: unset;
    color: #0A69C5;
  }

  a {
    text-decoration: unset;
  }

  .nav li {
    position: relative;
    list-style: none;
  }

  .nav li a {
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    display: inline-block;
    cursor: pointer;
  }

  .icon_menu {
    margin-left: 8px;
    display: none;
  }

  @media (max-width: 1280px) {
    .icon_menu {
      display: flex;
    }
  }

  .sub-menu {
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .menu_san_pham {
    margin-top: 20px;
    display: flex;
    text-align: left;
    color: #0A69C5;

    p {
      font-weight: bold;
    }

    .sub-menu a {
      color: #0A69C5;
      display: block;
      padding: 4px 4px;
      width: 180px;
      border: 1px solid #0A69C5;
      border-radius: 6px;
      margin: 12px 0;
      @media (max-width: 1280px) {
        width: 160px;
      }
    }

    .sub-menu a:hover {
    }
  }


  .menu_header {
    display: flex;
    color: #0A69C5;
    font-size: 24px;
    align-content: center;
    align-items: center;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  .input_search {
    position: relative;
    margin-right: 12px;

    input {
      width: 200px;
      height: 30px;
      padding: 4px 12px;
      border-radius: 12px;
      background-color: #0A69C5;
      color: white;
    }


    .icon_search {
      position: absolute;
      right: 4px;
      top: 6px;
      cursor: pointer;
    }
  }
`