import { Layout, Menu, Space, Image, Carousel, Row, Col, Card,  } from 'antd';
import './page.css'


const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { SubMenu } = Menu;

const Home = () => {

    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#6D6D6D',
      };
      
  return (
    <> 
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , height: '80px', background: 'transparent'}}>
    <Row>
      <Col flex="auto">
      <div className="logo" />
      </Col>
      <Col flex="none">
      <Menu style={{ width: '100%', height: '50px', background: 'transparent', color: '#000000'}}  mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <SubMenu key="Services" title="Services">
          <Menu.Item key="Services:1">Car Sales</Menu.Item>
          <Menu.Item key="Services:2">Spare Parts</Menu.Item>
          <Menu.Item key="Services:3">Decors</Menu.Item>
          <Menu.Item key="Services:4">Transit Service</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Contact Us</Menu.Item>
        <Menu.Item key="4">About Us</Menu.Item>
      </Menu>
        </Col>
    </Row>


    </Header>
    <Content className="site-layout" style={{ marginTop: 64 }}>
    <Carousel autoplay>
        <div>
           <Image preview={false}  src="/banner-logistics.jpg"/>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <Row justify="space-around" align="middle">
      <Col >
      <Card hoverable style={{ width: 240,  marginTop: 64 }}
            cover={<img alt="example" src="/auto_sell.jpg" />}>
              <Meta title="Car Sells" description="Description ..." />
            </Card>

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

          </Content>
    <Footer style={{ textAlign: 'center'}}>Tamra ©2021</Footer>
  </Layout>

      </>
  );
};

export default Home;