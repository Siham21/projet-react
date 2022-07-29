import React from "react";
import BouttonLogin from "./bouttonLogin";
import BouttonLogout from "./bouttonLogout";


export default class Parent extends React.Component {

    constructor (props){
        super (props);
            this.state ={
            isLogged : true,

            texte : "Clique"
        }
      
    }

    
        handletexte = (message) => {
            this.setState({texte : message});
            this.setState({isLogged : ! this.state.isLogged});
        }

        render(){
            return (
                <>
                    
                    {
                    this.state.isLogged ?
                    (<BouttonLogin texte = {this.state.texte} handletexte = {this.handletexte}></BouttonLogin>) : 
                    (<BouttonLogout texte = {this.state.texte} handletexte = {this.handletexte}></BouttonLogout>) }
                 </>
            )
        }
        }
    

