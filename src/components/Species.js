import React, { Fragment } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";

import Background from "../img/species2.jpg";

const jumbotronStyles = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

class Species extends React.Component {
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
      .get("https://swapi.dev/api/species/")
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
      })
      .finally(function () {
        // all
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
        <Fragment>
          <Jumbotron
            className='text-white'
            color='danger'
            style={jumbotronStyles}
          >
            <Container>
              <h1 className='display-3'>Species</h1>
              <p className='lead'>Species of Star Wars universe.</p>
              <hr className='my-2' />
            </Container>
          </Jumbotron>
          <Container>
            <Row>
              {items.map((item) => (
                <Col md='4'>
                  <Card className='m-1'>
                    <CardBody>
                      <h3 className='mb-3'>{item.name}</h3>
                      <CardSubtitle className='mb-1'>
                        <span className='font-weight-bold'>Classification</span>
                        :&nbsp;{item.classification}
                      </CardSubtitle>
                      <CardSubtitle className='mb-1'>
                        <span className='font-weight-bold'>Language</span>
                        :&nbsp;{item.language}
                      </CardSubtitle>
                      <CardSubtitle className='mb-1'>
                        <span className='font-weight-bold'>Designation</span>
                        :&nbsp;{item.designation}
                      </CardSubtitle>
                      <CardSubtitle className='mb-1'>
                        <span className='font-weight-bold'>Average Height</span>
                        :&nbsp;{item.average_height}
                      </CardSubtitle>
                      <CardSubtitle className='mb-1'>
                        <span className='font-weight-bold'>Lifespan</span>
                        :&nbsp;{item.average_lifespan}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default Species;
