import { Image, Carousel, Row, Col, Card,  } from 'antd';
import '../page.css'
import { Link } from 'react-router-dom';


const { Meta } = Card;

const Home = () => {

    const contentStyle = {height: '400px', color: '#fff', lineHeight: '160px', 
                          textAlign: 'center', background: '#2A4058',};

  return (
    <> 
    <Carousel autoplay>
        <div> <Image preview={false}  src="/Tamar header.svg"/> </div>
        <div> <h3 style={contentStyle}>2</h3> </div>
        <div> <h3 style={contentStyle}>3</h3> </div>
        <div> <h3 style={contentStyle}>4</h3> </div>
    </Carousel>
    <Row justify="space-around" align="middle" >
      <Col > <Link to="/auto/buy">
      <Card hoverable style={{ width: 240,  marginTop: 64,  color: '#2A4058' }}
            cover={<img alt="example" src="/auto_sell.jpg" />}>
        <Meta title="Car Sells" description="Description ..." />
      </Card> </Link> </Col>

      <Col > <Link to="/auto/decor">
      <Card hoverable style={{ width: 240,  marginTop: 64,  color: '#2A4058' }}
            cover={<img alt="example" src="/parts.jpg" />}>
        <Meta title="Auto Parts & Accessories" description="Description ..." />
      </Card> </Link> </Col>

      <Col > <Link to="/transit">
      <Card hoverable style={{ width: 240,  marginTop: 64,  color: '#2A4058' }}
            cover={<img alt="example" src="/logistic.jpg" />}>
        <Meta title="Transit" description="Description ..." />
      </Card> </Link> </Col>
    </Row>
  </>
  );
};

export default Home;