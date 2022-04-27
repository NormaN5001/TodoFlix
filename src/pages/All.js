import React from "react"
import styled from 'styled-components';
import Carrossel from "./Carousel"

import Destaque from "../img/destaque.png"
import Favorito from "../img/favorito.png"
import Like from "../img/like.png"


const Main = styled.section`
  z-index: 2;
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: blue;
`

export default class App extends React.Component{

  render(){
    return(
      <Main>
       
      </Main>
    )
  }
}