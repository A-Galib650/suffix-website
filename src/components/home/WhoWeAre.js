import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';

const WhoWeAre = () => {
  return (
    <div className="whoweare-container">
      <Grid>
        <Row>
          <Col sm>
            <h1>Who actually we are</h1>
          </Col>
        </Row>

        <Row>
          <Col sm>
            <h1>Who we are</h1>
          </Col>

          <Col sm>
            <h1>We are someone</h1>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default WhoWeAre;