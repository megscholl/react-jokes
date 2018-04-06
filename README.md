# react-jokes


Welcome to Jokes!

When you enter the site, you will see a rotating galaxy. Under this image, you will see a joke topic (i.e. 'Joke About General', 'Joke About Programming', etc.).


## Joke.js

There will be a joke rendered from the Joke.js. Inside this JS file, there are two functions and one component containing several functions, including componentDidMount(), constructor(), and render().

## Props

'Props' is being passed into the first two functions: JokeSetup() ad PunchLine().

### JokeSetup()

* The JokeSetup() function imports Bootstrap's items: Card, Button, CardTitle, and CardText. 

* This function returns a node onto the browser window with the card that contains the joke process (the topic, the joke, and the button to see the punchline). 

* Inside the card, the function is prompted to look through the Joke Component constructor() for the this.state object to see whether the joke has loaded with 'props.jokeLoaded'. 
    
* Here, it is saying "if the joke is loaded, then show the next piece of this function", which is the 'props.jokeSetup'.

* There is a colon, which looks back at the 'props.jokeLoaded ?' - ? being the 'if', and ':' being the 'else'. There is a CardTitle for the load-time.

* Next, 'props.showResult' looks back at the state object to see whetehr the joke has been displayed (true). 

* If (?) showResult is 'true', it will render in the empty div and the 'tell me' button will disappear. 

* Or (:), the button to tell the joke is rendered and you can click it to render the joke.


### PunchLine()

* This function returns and renders that the 'tell me' button renders.

* The punchline of the joke will be rendered to the window, with the button to show another joke.

* else, it will return null


### Joke extends Component

* constructor() uses a super(props). The super keyword is used to access and call functions on an object's parent.

* this.state is an object that contains the joke object before the tell me button is clicked.

* this.showClicked refers to the showClicked() function that changes the 'showResult' in this.state to 'true'

* componentDidMount() calls the getJoke() function, which gets the joke from the API, renders the result of the question & the punchline
    * Brenda needs to explain isLoaded again

* render() function takes the this.state keys and:
    * if there's an error an 'error message' will render. 
    * if the jokeLoaded hasn't occurred yet, 'Loading...' will render
    * else, the joke, buttons & punchline will render

    