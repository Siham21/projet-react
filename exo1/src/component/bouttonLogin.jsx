import React from "react";


export default class BouttonLogin extends React.Component {
  
//declaration d'un boutton on click
    render() {

      return <button onClick={() => this.props.handletexte ("Vous êtes bien connecté" )}>{this.props.texte}</button>

      }
    }
  