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

import Background from "../img/vehicles.png";

const jumbotronStyles = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
};

class Vehicles extends React.Component {
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
      .get("https://swapi.dev/api/vehicles/")
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
              <h1 className='display-3'>Vehicles</h1>
              <p className='lead'>Vehicles of the Star Wars universe.</p>
              <hr className='my-2' />
            </Container>
          </Jumbotron>

          <Container>
            <Row>
              {items.map((item) => (
                <Col md='4'>
                  <p></p>
                  <Card>
                    <CardBody>
                      <h3 className='mb-3'>{item.name}</h3>
                      <CardSubtitle className='mt-1'>
                        <span className='font-weight-bold'>Model</span>:&nbsp;
                        {item.model}
                      </CardSubtitle>
                      <CardSubtitle className='mt-1'>
                        <span className='font-weight-bold'>Manufacturer</span>
                        :&nbsp;
                        {item.manufacturer}
                      </CardSubtitle>
                      <CardSubtitle className='mt-1'>
                        <span className='font-weight-bold'>Class</span>:&nbsp;
                        {item.vehicle_class}
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

export default Vehicles;
