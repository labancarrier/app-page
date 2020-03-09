

import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, Container, Row, Col 
} from 'reactstrap';

const Builds = (props) => {
  return (
    <div>
      <Container>
        <Row>
        <Col>
        <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1583681287496-7ba7acacc1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Labancarrier.org</CardTitle>
          <Button outline color="primary" href="https://labancarrier.org/">Go</Button>
        </CardBody>
        </Card>
        </Col>

        <Col>
        <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1583659241620-f03c9dad50a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Enneasphere</CardTitle>
          <Button outline color="primary" href="https://enneasphere.com/">Go</Button>
        </CardBody>
        </Card>
        </Col>

        <Col>
        <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1583606468932-c0fcb6eb2092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>CSBC</CardTitle>
          <Button outline color="primary" href="https://labancarrier.github.io/CSBC/">Go</Button>
        </CardBody>
        </Card>
        </Col>

        <Col>
        <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1583645869476-1c80743e8567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Portfolio</CardTitle>
          <Button outline color="primary" href="https://labancarrier.github.io/web-dev-by-Laban/">Go</Button>
        </CardBody>
        </Card>
        </Col>

        <Col>
        <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1583645869476-1c80743e8567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Shopping List</CardTitle>
          <Button outline color="primary" href="https://peaceful-escarpment-95891.herokuapp.com/">Go</Button>
        </CardBody>
        </Card>
        </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Builds;
