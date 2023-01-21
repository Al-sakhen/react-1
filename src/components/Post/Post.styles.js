import styled from "styled-components";

export const StyledPost = styled.div`
  width: 28%;
  margin-right: 2%;
  margin-bottom: 10px;
  background-color: whitesmoke;
  padding:8px;
  color: black;
  border-radius: 7px;
  @media screen and (max-width : 768px) {
    width: 100%;
    min-width: 250px;
    max-width: 400px;
  }
  @media screen and ( min-width : 768px) and (max-width :992px) {
    width: 40%;
  }

  .postHeader{
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    img{
      margin-right: 10px;
      width: 55px;
    }
    h5, p{
      margin: 0;
    }
    h5{
      text-transform: capitalize;
    }
    p{
      color: gray;
      font-size: .8rem;
      margin-top: 7px;
    }
  }
  .postBody{
    font-size: .8rem;
    a{
      color: blue;
      text-decoration: none;
    }
    img{
      width: 100%;
      height: 100%;
      margin-top: 10px;
      border-radius: 10px;
    }
 
  }
  .postButtons{
    display: flex;
    padding: 5px;


    div{
      width: 32%;
      display: flex;
      justify-content: center;
      border: .1rem solid black;
      border-radius: 10px;
      margin-right: 6px;
      padding: 5px 0;
      transition: background-color .4s , color .4s;
    }
    div:hover{
      background-color: blueviolet;
      color: white;
      cursor: pointer;
    }
  }
`;
