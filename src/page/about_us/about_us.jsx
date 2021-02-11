import {Input, Row, Col, Card} from 'antd';


const { Search } = Input;
const { Meta } = Card;

const AboutPage = () => {

  return (
    <> 

    <Row justify="space-around" align="middle">
 
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="About" description="Description ..." />
      </Card>
      </Col>

    </Row>
  </>
  );
};

export default AboutPage;