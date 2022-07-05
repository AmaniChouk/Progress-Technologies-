import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userAction";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Annoucement/Annoucement";
import Footer from "../Footer/Footer";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static.pullandbear.net/2/photos//2022/V/0/1/p/4714/327/413/02/4714327413_5_1_8.jpg?t=1645116084079&imwidth=1024")
      center;
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;


function cart() {
  
  return( <><Container>
    <h2 className="title">MY CART</h2>
    <br />
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th className="total">Total Price</th>
          <th>Delete</th>
        </tr>
      </thead>
    </table>


  </Container><footer>
      <Footer />
    </footer></>
   
    )
}

export default cart