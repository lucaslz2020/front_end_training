import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { useState } from 'react';
import { useOutlet } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

const items: ItemType[] = [
  { label: '菜单1', key: '1', icon: <UserOutlined /> },
  {
    label: '菜单2',
    key: '2',
    icon: <UserOutlined />,
    children: [
      { label: '菜单2-1', key: '2-1', icon: <UserOutlined /> },
      { label: '菜单2-2', key: '2-2', icon: <UserOutlined /> },
    ],
  },
  { label: '菜单3', key: '3', icon: <UserOutlined /> },
];

export default function () {
  const outlet = useOutlet();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Hello Umi
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: '#fff' }}></Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{outlet}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Umi Test</Footer>
      </Layout>
    </Layout>
  );
}
