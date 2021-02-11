import {Input, Row, Col, Card} from 'antd';


const { Search } = Input;
const { Meta } = Card;

const CarsPage = () => {

  return (
    <> 
    <Row justify="space-around" align="middle">
      <Col >
      <Search placeholder="input search text" allowClear enterButton="Search" size="large" />
      </Col>
    </Row>
      <Row justify="space-around" align="middle">
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Car Sells" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Decor" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Transit" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img src="/Tamarorng.svg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>

    </Row>
  </>
  );
};

export default CarsPage;