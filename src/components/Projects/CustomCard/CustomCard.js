import React, { Component } from 'react';
import './customCard.css';

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
                    <p className="btn btn-outline-success goToProject">Go To Project</p>
                    <p className="btn btn-outline-success whatILearned" onClick={this.flipCardHandler}>What I learned</p>
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
