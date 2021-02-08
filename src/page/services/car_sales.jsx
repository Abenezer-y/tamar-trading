import {Layout, Image, Input, Row, Col, Card,  Menu} from 'antd';
import { Link } from 'react-router-dom';
import { FundProjectionScreenOutlined, DashboardOutlined, DesktopOutlined, PieChartOutlined, TeamOutlined, ProjectTwoTone  } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const { SubMenu } = Menu;

const { Meta } = Card;


const CarsPage = () => {

    const contentStyle = {height: '400px', color: '#fff', lineHeight: '160px', 
                          textAlign: 'center', background: '#6D6D6D',};
      
  return (
    <> 
<Layout style={{ marginTop: 64, marginRight: 25 }}>
<Sider style={{ marginLeft: 15, marginRight: 25, background: '#fff'}}>

          <Menu defaultSelectedKeys={['buy']} mode="inline">
          <SubMenu key="cars" icon={<DashboardOutlined />} title="Cars">
              <Menu.Item key="buy" icon={<FundProjectionScreenOutlined />}>
                  Buy
              </Menu.Item>  
              <Menu.Item key="/sell" icon={<DesktopOutlined twoToneColor="#eb2f96"/>}>
                Sell
                <Link to="/"></Link>
              </Menu.Item>
          </SubMenu>
          <Menu.Item key="/parts" icon={<DashboardOutlined />}>Spare Parts
              <Link to="/parts"></Link>
          </Menu.Item>
          <Menu.Item key="/decor" icon={<DashboardOutlined />}>Decor
              <Link to="/decor"></Link>
          </Menu.Item>


          </Menu>
        </Sider>
    <Content style={{ width: '80%' }}>
    <Row justify="space-around" align="middle">
      <Col >
      <Search
      
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
    />
      </Col>
    </Row>
      <Row justify="space-around" align="middle">
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Car Sells" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Decor" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Transit" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>
      <Col >
      <Card hoverable style={{ width: 280,  marginTop: 64 }}
            cover={<img alt="example" src="/car.jpg" />}>
        <Meta title="Spare Parts" description="Description ..." />
      </Card>
      </Col>

    </Row>
    </Content>
</Layout>
  </>
  );
};

export default CarsPage;