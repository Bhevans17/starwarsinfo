import React, { Fragment } from "react";
import { Button, Form, Input, ButtonGroup } from "reactstrap";

class SearchApi extends React.Component {
  render() {
    return (
      <Fragment>
        <Form>
          <ButtonGroup>
            <Input
              type='text'
              name='swapi-search'
              id='swapi-search'
              placeholder='Search Star Wars'
            />
            <Button color='success'>Search</Button>
          </ButtonGroup>
        </Form>
      </Fragment>
    );
  }
}

export default SearchApi;
