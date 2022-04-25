import React from "react"

export default class Input extends React.Component{
  
state = {
        catalogo: [
            {
                titulo: 'Shrek',
            },
            {
                titulo:'Hoje Eu Quero Voltar...',
            },
            {
                titulo:'Spider-man',
            },
            {
                titulo:'Um Sonho de Liberdade',
            },
            {
                titulo:'Que Horas Ela Volta?',
            },
            {
                titulo:'Capitão Fantástico',
            },
            {
                titulo:'Rocketman',
            },
            {
                titulo: 'A Fuga das Galinhas',
            },
            {
                titulo: 'AmarElo',
            },
        ],
        filmesSearch: []
    }

  search = (event) =>{
    let {catalogo} = this.state
    const FilmesFil = catalogo.filter((item) => {
      if(item.titulo.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }
    })
    this.setState({
      filmesSearch: FilmesFil
    })
  }



render(){
    return(
        <Input type="text" placeholder="Pesquisar"/>
    )
  }


}