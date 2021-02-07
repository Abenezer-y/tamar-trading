import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;




const Home = () => {

    const contentStyle = {
        height: '250px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#C61946',
      };

  return (
    <> 
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Services</Menu.Item>
        <Menu.Item key="3">Contact Us</Menu.Item>
        <Menu.Item key="3">About Us</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ marginTop: 64 }}>
    <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
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
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 580 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' , background: '#C61946', color: '#fff',}}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

      </>
  );
};

export default Home;