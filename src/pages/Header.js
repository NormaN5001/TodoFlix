import React from "react"
import styled from 'styled-components';
import {BrowserRouter  as Router, Link, Routes, Route} from "react-router-dom"
import Todos from "./All.js"
import Main from "./Main.js"

import Logo from "../img/logo.png"
import ArrowCateg from "../img/arrow.png"
import Lupa from "../img/lupa.png"
import UserImg from "../img/img-user.png"
import Arrow from "../img/arrow.png"
import Favorito from "../img/favorito.png"
import Like from "../img/like.png"

import Shrek from "../img/movie1.png"
import VoltarSozinho from "../img/movie2.png"
import SpiderMan from "../img/movie3.png"
import SonhoLiberdade from "../img/movie4.png"
import QueHorasVolta from "../img/movie5.png"
import AmarElo from "../img/movie6.png"
import Rocketman from "../img//movie7.png"
import FugaGalinhas from "../img/movie8.png"
import Destaque from "../img/destaque.png"


const Header = styled.div`
  margin: 0 5vw 0 5vw;
  height: 75px;

  display: flex;
  align-items: center;
  z-index: 5;
`
const List = styled.ul`
  margin-left: 40px;
  width: 190px;
  display: flex;
  list-style: none;
`
const Item = styled.li`
  margin-left: 15px;
  color: white;
  font-weight: 500;
  font-size: 2vh;
  &:hover{
    cursor: pointer;
    border-bottom: 2px white solid;
  }
`
const Button = styled.button`
  margin-left: 40vw;
  width: 160px;
  height: 35px;
  background-color: #E71B27;
  color: white;
  border-radius: 4px;
  border-style: none;
  transition: 0.7s;
  &:hover{
    background-color: #B2060F;
    cursor: pointer;
  }
`
const Input = styled.input`
  color: white;
  padding-left: 40px;
  height: 35px;
  width: 300px;
  border-radius: 4px;
  border-style: none;
  background-color: #2C2C2C;
  margin-left: 30px;

  background-repeat: no-repeat;
  background-image: url(${Lupa})
`
const ImgUser = styled.img`
  height: 35px;
  margin-left: 30px;
`
const ImgArrow = styled.img`
  height: 35px;
  &:hover{
    cursor: pointer;
  }
`
const DropDown = styled.ul`
  z-index: 10;
  margin: 30px 0 0 72px;
  list-style: none;
  background-color: black;
  width: 120px;
  height: 140px;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`
const ItemDropDown = styled.li`
  transition: 0.3s;
  text-align: center;
  width: 100%;
  height: 100%;
  &:hover{
    cursor: pointer;
    border-bottom: 2px white solid;
    background-color: grey;
  }
  
`
const BoxSearch = styled.div`
  display: flex;
  justify-content: center;

  z-index: 1;
  position: absolute;
  left: 0;
  top: 75px;
  background-color: #000000;
  width: 100%;
  height: 90%;
`
const Content = styled.div`
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
const LinkItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
`







export default class App extends React.Component{

  state = {
        list: false,
        busca: [],
        catalogo: [
            {
                titulo: 'Shrek',
                poster: Shrek,
                sinopse: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
            },
            {
                titulo: 'Hoje Eu Quero Voltar Sozinho',
                poster: VoltarSozinho,
                sinopse: 'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
            },
            {
                titulo: 'Spider-man',
                poster: SpiderMan,
                sinopse: 'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
            },
            {
                titulo: 'Um Sonho de Liberdade',
                poster: SonhoLiberdade,
                sinopse: 'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
            },
            {
                titulo: 'Que Horas Ela Volta?',
                poster: QueHorasVolta,
                sinopse: 'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
            },
            {
                titulo: 'Rocketman',
                poster: Rocketman,
                sinopse: 'Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.',
            },
            {
                titulo: 'A Fuga das Galinhas',
                poster: FugaGalinhas,
                sinopse: 'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
            },
            {
                titulo: 'AmarElo',
                poster: AmarElo,
                sinopse: 'Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.',
            },
        ],
    }
    openList = () =>{
    this.setState({
      listCategoria: !this.state.listCategoria
    })
  }
    handleChange = (e) => {
        if(e.target.value !== ''){
            this.setState({
                busca: this.state.catalogo.filter((item) => {
                    if (item.titulo.toLowerCase().includes(e.target.value.toLowerCase())) {
                        return true;
                    }
                })
            })
        } else {
            this.setState({
                busca: [],
            })
        }
    }

  render(){
    return(
      <Header>
      <Router>
        <img src={Logo} alt="Logo do site"/>
          <List>
            <Item><LinkItem to="/">Inicio</LinkItem></Item>
            <Item onClick={this.openList}>Categorias</Item>
            <ImgArrow onClick={this.openList} src={Arrow}/>
            {this.state.listCategoria && (
            
              <DropDown>
                <ItemDropDown><LinkItem to="All">Todos</LinkItem></ItemDropDown>
                <ItemDropDown>Favoritos</ItemDropDown>
                <ItemDropDown>Já vistos</ItemDropDown>
                <ItemDropDown>Adicionados</ItemDropDown>
              </DropDown>
            )}
          </List>

          <Routes>
              <Route path="/"/>
              <Route path="All" element={<Todos/>}/>
              </Routes>
          </Router>
        <Button>Adicionar filme</Button>
        <Input onChange={this.handleChange} type="text" placeholder="Pesquisar"/>

         {this.state.busca.map((item) => (
          <BoxSearch>
            <Content>
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
            </Content>
          </BoxSearch>
          ))}
        <ImgUser src={UserImg}/>
        <ImgArrow src={Arrow}/>
      </Header>
    )
  }
}
