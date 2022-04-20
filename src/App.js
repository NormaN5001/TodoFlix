import React from "react"
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"
import axios from "axios"

import Header from "./pages/home/Header.js"
import Main from "./pages/home/Main.js"

const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #000000;
  }
`

export default class App extends React.Component{

  render(){
    return(
      <div>
      <GlobalStyle/>
        <Header/>
        <Main/>
      </div>
    )
  }
}