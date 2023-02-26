import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function HomePage() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Welcome to My ReactJS Homepage</h1>
        </div>
        
      </Content>
    </Layout>
  );
}

export default HomePage;
