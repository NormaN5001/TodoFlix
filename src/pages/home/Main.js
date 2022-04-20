import React from "react"
import styled from 'styled-components';

import Destaque from "../../img/destaque.png"
import Favorito from "../../img/favorito.png"
import Like from "../../img/like.png"


const Main = styled.section`
  margin: 95px 5vw 0 5vw;
  display: flex;
  align-items: center;
`
const Spotlight = styled.div`
  width: 100%;
  display: flex;
`
const SpotlightImg = styled.img`
  width: 425px;
  height: 242px;
`
const About = styled.div`
  margin-left: 40px;

  display: flex;
  flex-direction: column;

`
const FavoritoImg = styled.img`
  height: 25px;
  width: 24px;
`
const TextOne = styled.p`
  color: white;
  font-weight: 500;
  font-size: 2.3vh;
  margin: 10px 0 0 0;
`
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 5vh;
`
const TextTwo = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.7vh;
  width: 450px;
  margin: 10px 0 0 0;
`
const Assessment = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  p{
    color: white;
    font-size: 1.9vh;
    font-weight: 600;
  }
  img{
    margin-left: 3px;
    width: 22px;
    height: 22px;
  }
`


export default class App extends React.Component{

  render(){
    return(
      <Main>
        <Spotlight>
          <SpotlightImg src={Destaque} alt="Capa do filme em destaque"/>
          <About>
            <FavoritoImg src={Favorito} alt="Ícone favorito"/>
            <TextOne>Visto recentemente</TextOne>
            <Title>Capitão Fantástico</Title>
            <TextTwo>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</TextTwo>
            <Assessment>
              <p>4/5</p>
              <img src={Like}/>
            </Assessment>
          </About>
        </Spotlight>
      </Main>
    )
  }
}