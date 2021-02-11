import {Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';
import { FundProjectionScreenOutlined, DashboardOutlined, DesktopOutlined} from '@ant-design/icons';
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import CarsPage from './car_sales'
import DecorPage from './decor'
import PartsPage from './spares'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const AutoPage = () => {
   
  return (
    <> 
    <Layout style={{ marginTop: 64, marginRight: 25 }}>
    <Router>
        <Sider style={{ marginLeft: 15, marginRight: 25, background: '2A4058', height: '400px'}}>
            <Menu  defaultSelectedKeys={['parts']} mode="inline" style={{ height: '100%', color: '#FBB040', background: '2A4058'}}>
            <SubMenu key="cars" icon={<DashboardOutlined />} title="Cars" >
                <Menu.Item style={{ color: '#FBB040'}} key="buy" icon={<FundProjectionScreenOutlined />}>
                    Buy
                    <Link to="/auto/buy"></Link>
                </Menu.Item>  
                <Menu.Item style={{ color: '#FBB040'}} key="sell" icon={<DesktopOutlined twoToneColor="#eb2f96"/>}>
                    Sell
                    <Link to="/auto/sell"></Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="parts" icon={<DashboardOutlined />}>Spare Parts
                <Link to="/auto/parts"></Link>
            </Menu.Item>
            <Menu.Item key="decor" icon={<DashboardOutlined />}>Decor
                <Link to="/auto/decor"></Link>
            </Menu.Item>
            </Menu>
        </Sider>
        <Content style={{ width: '80%' }}>
        <Switch>
            <Route exact path="/auto/buy" component={CarsPage}></Route>
            <Route exact path="/auto/parts" component={DecorPage}></Route>
            <Route exact path="/auto/decor" component={PartsPage}></Route>
        </Switch>
        </Content>
    </Router>
    </Layout>
  </>
  );
};

export default AutoPage;