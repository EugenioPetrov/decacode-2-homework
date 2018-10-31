const React = require('react');

class Joker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentJoke: "Press the button!" };

        // Привязка необходима, чтобы сделать this доступным в коллбэке
        this.giveJoke = this.giveJoke.bind(this);
    }

    giveJoke() {
        fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((data) => {
            const joke = data.value;
            this.setState({
                currentJoke: joke
              });
        })
    }

    render() {
        return (<p>
            <h2>Шутка от Чака: {this.state.currentJoke}</h2>
            <button onClick={this.giveJoke}>Give me a joke!</button>
            </p>);
    }
}

export default Joker;