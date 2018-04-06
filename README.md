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

    * Next, 'props.showResult' looks back at the state object 

