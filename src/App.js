import { Layout, Menu, Row, Col, Image } from 'antd';
import Home from './page/home/home_page'
import AutoPage from './page/auto/auto_frame'
import AboutPage from './page/about_us/about_us'
import TransitPage from './page/transit/transit'
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

// color blue black  #2A4058
// color dark green  #233124
// color sand  ##FBB040

const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;

const footerStyle = {height: '100px', color: '#FBB040',  marginTop: 64,
textAlign: 'center', background: '#2A4058',};
const textcolor = { color: '#2A4058'};


function App() {
  return (
    <Router>
    <Layout >
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , height: '80px', background: '#ffffff'}}>
    <Row align="top" >
      <Col flex="auto">  
      <Image preview={false} style={{height: '80px'}} src="/Tamar header.svg"/ >
      </Col>
      <Col flex="none">
      <Menu defaultSelectedKeys={['/']} style={{ width: '100%', height: '50px', color: '#233124'}}  mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" >
          Home
        <Link to="/home"></Link>  
        </Menu.Item>
        <SubMenu key="Services" title="Tamar Auto">
          <Menu.Item key="Services:1">
            Cars
          <Link to="/auto/buy"></Link>  
          </Menu.Item>
          <Menu.Item key="Services:2">
            Spare Parts
            <Link to="/auto/parts"></Link>  
          </Menu.Item>
          <Menu.Item key="Services:3">Decors
          <Link to="/auto/decors"></Link> 
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Tamar Transit 
        <Link to="/transit"></Link> 
        </Menu.Item>
        <Menu.Item key="4">About Us
        <Link to="/about"></Link>
        </Menu.Item>
      </Menu>
      </Col>
    </Row>
    </Header>

    <Content className="site-layout" style={{ marginTop: 64, }}>
    <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/auto/buy" component={AutoPage}></Route>
                <Route exact path="/transit" component={TransitPage}></Route>
                <Route exact path="/about" component={AboutPage}></Route>
    </Switch>

    </Content>

    <Footer style={footerStyle}>
      Tamar ©2021
    </Footer>
    
  </Layout>
  </Router>
  );
}

export default App;
