import { Image, Carousel, Row, Col, Card,  } from 'antd';
import './page.css'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const { Meta } = Card;


const Home = () => {

    const contentStyle = {height: '400px', color: '#fff', lineHeight: '160px', 
                          textAlign: 'center', background: '#6D6D6D',};
      
  return (
    <> 
    <Router>

    <Carousel autoplay>
        <div> <Image preview={false}  src="/banner-logistics.jpg"/> </div>
        <div> <h3 style={contentStyle}>2</h3> </div>
        <div> <h3 style={contentStyle}>3</h3> </div>
        <div> <h3 style={contentStyle}>4</h3> </div>
      </Carousel>
      <Row justify="space-around" align="middle">
      <Col >
      <Link to="/cars">
      <Card hoverable style={{ width: 240,  marginTop: 64 }}
            cover={<img alt="example" src="/auto_sell.jpg" />}>
        <Meta title="Car Sells" description="Description ..." />
      </Card>
      </Link> 
      </Col>
      <Col >
      <Card hoverable style={{ width: 240,  marginTop: 64 }}
            cover={<img alt="example" src="/parts.jpg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 240,  marginTop: 64 }}
            cover={<img alt="example" src="/decor.jpg" />}>
        <Meta title="Decor" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 240,  marginTop: 64 }}
            cover={<img alt="example" src="/logistic.jpg" />}>
        <Meta title="Transit" description="Description ..." />
      </Card>
      </Col>
    </Row>
    <Switch>
        <Route exact path="/cars"></Route>
    </Switch>
    </Router>
  </>
  );
};

export default Home;