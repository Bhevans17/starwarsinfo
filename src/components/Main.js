import React from "react";
import axios from "axios";
import {
  Spinner,
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap";

import Background from "../img/mando.jpg";

const jumbotronStyles = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    let currentComponent = this;

    axios
      .get("https://swapi.dev/api/films/")
      .then(function (response) {
        currentComponent.setState({
          isLoaded: true,
          items: response.data.results,
        });

        console.log(response.data.results);
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Spinner className='mx-auto mt-5 d-block' color='dark' />;
    } else {
      return (
        <div>
          <Jumbotron
            className='text-white'
            color='danger'
            style={jumbotronStyles}
          >
            <Container>
              <h1 className='display-3'>Star Wars Info</h1>
              <p className='lead'>
                Information based around the Star Wars universe.
              </p>
              <hr className='my-2' />
              <a className='btn btn-dark btn-lg mr-3' href='/planets'>
                Explore Planets
              </a>
              <a className='btn btn-light btn-lg' href='/starships'>
                Starships
              </a>
            </Container>
          </Jumbotron>
          <Container>
            <Row>
              {items.map((item) => (
                <Col md='4'>
                  <Card className='m-2'>
                    <CardHeader>
                      <h3>{item.title}</h3>
                    </CardHeader>
                    <CardBody>
                      <CardSubtitle className='mb-3'>
                        {item.release_date}
                      </CardSubtitle>
                      <CardText>{item.opening_crawl}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Main;
