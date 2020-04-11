import React, { Component } from 'react';
import './customCard.css';

import { MdReplay,
         MdRemoveRedEye } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";



class CustomCard extends Component {

    state = {
        flipCard: false
    }

    flipCardHandler = () => {
        this.setState(prevState => ({
            flipCard: !prevState.flipCard
          }));
        console.log('Switched ' + '[CustomCard][flipCardHandler]');
    }



    render() {


        let attachedClasses = ['fullCard'];
        if (this.state.flipCard) {
            console.log("True [Custom Card]");
            attachedClasses = ['fullCard', 'flip'];
            

        } else {
            console.log("False [Custom Card]");
        }

        return (
            <div className={attachedClasses.join(' ')}>
            <div className="card text-center shadow cardFront">
                <div className="overflow">
                    <img src={this.props.picture} alt="projectImage" className="card-img-top"/>
                </div> 
                <div className="card-body text-dark">
                    <h4 className="card-title"> {this.props.title} </h4>
                    <p className="card-text text-secondary">
                    {this.props.description}
                    </p>
                    <p className="btn btn-outline-success liveVersionButton">Live Version <MdRemoveRedEye className="buttonIcons"/></p>
                    <p className="btn btn-outline-success viewSourceButton">Source Code <DiGithubBadge className="buttonIcons"/></p>
                    <p className="btn btn-outline-success flipCardButton" onClick={this.flipCardHandler}><MdReplay/></p>
                </div>
            </div>
    
            <div className="card text-center shadow cardBack">
                <div className="card-body text-dark">
                    <h4 className="card-title"> BACK OF CARD DETAILS </h4>
                    <p className="card-text text-secondary">
                        SOME EXTRA DETAILS SUCH AS WHAT I HAVE LEARNED
                    </p>
                    <p className="btn btn-outline-success backButton" onClick={this.flipCardHandler}>Back</p>
                </div>
            </div>
    </div>
        );
    }
}

export default CustomCard;
