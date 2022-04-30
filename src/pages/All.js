import React from "react"
import styled from 'styled-components';
import Carrossel from "./Carousel"

import Destaque from "../img/destaque.png"
import Favorito from "../img/favorito.png"
import Like from "../img/like.png"
import Shrek from "../img/movie1.png"
import VoltarSozinho from "../img/movie2.png"
import SpiderMan from "../img/movie3.png"
import SonhoLiberdade from "../img/movie4.png"
import QueHorasVolta from "../img/movie5.png"
import AmarElo from "../img/movie6.png"
import Rocketman from "../img/movie7.png"
import FugaGalinhas from "../img/movie8.png"


const All = styled.section`
  z-index: 2;
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5vw 0 5vw;
`
const TitlePage = styled.h1`
  margin-top: 30px;
  color: white;
  font-size: 4vh;
`
const InfoMovie = styled.div`
  margin-top: 30px;
  position: relative;
  transition: 0.5s;
  width: 360px;
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: #1D1D1D;
  }
`
const Poster = styled.img`
  width: 330px;
`
const Fav = styled.img`
  height: 25px;
  width: 24px;
  position: absolute;
  right: 25px;
  top: 35px;
`


const Title = styled.p`
  color: white;
  font-size: 2.4vh;
  font-weight: bold;
`
const AvaliationText = styled.p`
  color: white;
  font-size: 1.9vh;
  font-weight: 600;

`
const Descri = styled.p`
  margin-top: 20px;
  color: white;
  font-size: 1.7vh;
  font-weight: 400;
`
const TitleAvaliation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    margin-left: 10px;
    width: 26px;
    height: 26px;
  }
  div{
    display: flex;
    align-items: center;
  }

`
const Movies = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export default class App extends React.Component{

state = {
        catalogo: [
            {
                titulo: 'Shrek',
                poster: Shrek,
                sinopse: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
                avaliation: "4/5"
            },
            {
                titulo:'Hoje Eu Quero Voltar...',
                poster:VoltarSozinho,
                sinopse:'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
                avaliation: "-"
            },
            {
                titulo:'Spider-man',
                poster:SpiderMan,
                sinopse:'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
                avaliation: "3/5"
            },
            {
                titulo:'Um Sonho de Liberdade',
                poster:SonhoLiberdade,
                sinopse:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
                avaliation: "4,5/5"
            },
            {
                titulo:'Que Horas Ela Volta?',
                poster:QueHorasVolta,
                sinopse:'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
                avaliation: "4/5"
            },
            {
                titulo:'Capitão Fantástico',
                poster:Destaque,
                sinopse:'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
                avaliation: "4/5"
            },
            {
                titulo:'Rocketman',
                poster: Rocketman,
                sinopse:'Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.',
                avaliation: "-"
            },
            {
                titulo: 'A Fuga das Galinhas',
                poster: FugaGalinhas,
                sinopse: 'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
                avaliation: "2/5"
            },
            {
                titulo: 'AmarElo',
                poster: AmarElo,
                sinopse: 'Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.',
                avaliation: "5/5"
            },
        ],
    }



  render(){
    return(
      <All>
        <Container>
          <TitlePage>Todos os Filmes</TitlePage>
          <Movies>
            {this.state.catalogo.map((item) => (
           <InfoMovie>
            <Fav src={Favorito} alt="Imagem de um coração"/>
            <Poster src={item.poster} alt="Imagem do poster do filme"/>
            <TitleAvaliation>
              <Title>{item.titulo}</Title>
              <div>
                <AvaliationText>{item.avaliation}</AvaliationText>
                <img src={Like}/>
              </div>
            </TitleAvaliation>
            <Descri>{item.sinopse}</Descri>
            </InfoMovie>
          ))}
          </Movies>
        </Container>
      </All>
    )
  }
}