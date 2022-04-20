import React from "react"
import styled from 'styled-components';

import Logo from "../../img/logo.png"
import ArrowCateg from "../../img/arrow.png"
import Lupa from "../../img/lupa.png"
import UserImg from "../../img/img-user.png"
import Arrow from "../../img/arrow.png"


const Header = styled.div`
  margin: 0 5vw 0 5vw;
  height: 75px;

  display: flex;
  align-items: center;
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
  font-size: 2vh;
  transition: 0.3s;
  &:hover{
    cursor: pointer;
    border-bottom: 2px white solid;
  }
`
const Button = styled.button`
  margin-left: 23vw;
  width: 160px;
  height: 35px;
  background-color: #E71B27;
  color: white;
  border-radius: 4px;
  border-style: none;
  transition: 0.7s;
  &:hover{
    background-color: #B2060F;
  }
`
const Input = styled.input`
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
  margin: 25px 0 0 72px;
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


export default class App extends React.Component{

state={
  listCategoria: false 
}


  openList = () =>{
    this.setState({
      listCategoria: !this.state.listCategoria
    })
  }




  render(){
    return(
      <Header>
        <img src={Logo} alt="Logo do site"/>
          <List>
            <Item>Início</Item>
            <Item onClick={this.openList}>Categorias</Item>
            <ImgArrow onClick={this.openList} src={Arrow}/>
            {this.state.listCategoria && (
              <DropDown>
                <li>Todos</li>
                <li>Favoritos</li>
                <li>Já vistos</li>
                <li>Adicionados</li>
              </DropDown>
            )}
          </List>
        <Button>Adicionar filme</Button>
        <Input type="text" placeholder="Pesquisar"/>
        <ImgUser src={UserImg}/>
        <ImgArrow src={Arrow}/>
      </Header>
    )
  }
}