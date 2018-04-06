import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function JokeSetup(props) {
    return (

        <Card body inverse style={{ backgroundColor: '#85144b', borderColor: '#85144b' }}>
        {props.jokeLoaded ?
           <span>
              <CardTitle>Joke About {props.jokeType.charAt(0).toUpperCase() + props.jokeType.slice(1)}</CardTitle>
              {/* props.jokeType is taking the first letter of the joke and making it uppercase */}
              <CardText>{props.jokeSetup}</CardText>
              {/* <Button color="info" onClick={props.showClicked}>TELL ME</Button> */}
           </span>
           :
           <CardTitle>Getting a Joke</CardTitle>
        }
        {props.showResult ?
           <div> </div>
           :
           <Button color="info" onClick={() => { props.showClicked(props.index) }}>TELL ME</Button>

        }
     </Card>

    )
}
// () => is calling an anonymous function ... showClicked is a method not written yet until showClicked function was created!

function PunchLine(props) {
    if(props.showResult) {
        return (
            <div>
                <h5>{props.punch}</h5> <br/> <p>HEH! Get it? <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smirk_Face_Emoji_large.png?v=1480481057" width="20px" alt="smirk"/></p>
                <Button color="secondary" onClick={props.getAnotherClicked}>Show Another</Button>
            </div>
        )
    } else{
        return null;
    }
}


class Joke extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jokeLoaded: false,
            objResult: {},
            showResult: false,
            error: null
        }

        this.showClicked=this.showClicked.bind(this);
        // without this 'bind', showClicked calling this.setState is not available
        this.getAnotherClicked=this.getAnotherClicked.bind(this);
    }

    componentDidMount() {
        //lifecycle hook
        //now go get the joke!
        this.getJoke();
    }


    showClicked() {
        this.setState({
            showResult: true
        })
    }

    getAnotherClicked() {
        
        this.setState({
            jokeLoaded: false,
            objResult: {},
            showResult: false,
            error: null
        }, this.getJoke());
    }


    getJoke() {
        //componentDidMount needs to be called before the joke in order for it to be mounted and getJoke called
        fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
        .then(res => res.json())
        //res is a taso
        .then(
            (result) => {
                this.setState({
                    jokeLoaded: true,
                    objResult: result,

                });
            },
            (error) =>{
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
    }

    render() {
        const {error, jokeLoaded, objResult, showResult} = this.state;

        if(error) {
            return (
                <div>
                    <div>Error: {error.message}</div>
                </div>
            )
        } else if(!jokeLoaded) {
            return <div>Loading...</div>
        } else{
            return (
                <div>
                <JokeSetup jokeLoaded={jokeLoaded}
                jokeSetup={objResult.setup}
                jokeType={objResult.type}
                showResult={showResult}
                showClicked={this.showClicked}
                />
                <PunchLine
                showResult={showResult}
                punch={objResult.punchline}
                getAnotherClicked={this.getAnotherClicked} />

                </div>
            )
        }
    };
}

export default Joke;