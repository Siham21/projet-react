import React from "react";


export default class BouttonLogout extends React.Component {
  
//declaration d'un boutton on click
    render() {
      
      return <button onClick={() => this.props.handletexte ("Vous êtes deconnecté" )}>{this.props.texte}</button>

      }
    }
  