import React from "react";
import { Card, Button } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Man Of Steel",
        Image:
          "https://lh6.googleusercontent.com/proxy/n84HhOrhQmJZd0ll7_ZB-wbMu3wJ0sS9iKFriY5JexFjoZdVaDduz7t8XQmZMbTfO90Zzc3megBLiJT_eLEIDQh0En7DkeHzdWOe77zjNYPyuzn6g_R6YB6heeDP0FnWwfqw7wE",
        profession: "software engineer",
        bio: "Ruler of the seven seas",
      },
      shows: false,

      timeMounted: null,

      timeElasped: 0,
    };
  }
  toggleHandler = () => {
    this.setState({ shows: !this.state.shows });
  };

  // built in function the function when the component is mounted
  componentDidMount() {
    const currentTime = new Date();
    this.setState({ timeMounted: currentTime });

    // set a timer using set interval to calculate the time elasped

    this.timer = setInterval(this.calculateTimeElasped, 1000);
  }

  // our own function
  calculateTimeElasped = () => {
    const currentTime = new Date();
    const timeElasped = Math.floor(
      (currentTime - this.state.timeMounted) / 1000
    );
    this.setState({ timeElasped: timeElasped });
  };

  // built in function that when the component is unmounted it will stop the automatic timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.toggleHandler}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </Button>
        <div>
          Time elasped since the component is mounted in seconds :
          {this.state.timeElasped}{" "}
        </div>
        {this.state.shows ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.Image} />
            <Card.Body>
              <Card.Title>Profile card</Card.Title>
              <Card.Text>Full Name : {this.state.person.fullName}</Card.Text>
              <Card.Text>Profession : {this.state.person.profession}</Card.Text>
              <Card.Text>Bio : {this.state.person.bio}</Card.Text>
            </Card.Body>
          </Card>
        ) : null}
      </div>
    );
  }
}

export default App;
