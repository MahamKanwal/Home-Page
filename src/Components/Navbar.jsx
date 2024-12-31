import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined, MenuOutlined, DollarOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../App.css'
const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listener to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            top: 0, 
            left: 0,
            right: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding:0,
            margin: 0, 
          }}
        >
          <div
            style={{
                marginLeft:"20px",
                 color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            MyApp
          </div>

          {isMobile ? (
            // Mobile Menu Button
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              style={{
                  marginLeft: 'auto', // Align the button to the right
                marginRight: '20px',
                color: 'white',
                fontSize: '18px',
              }}
            />
          ) : (
            // Desktop Menu
            <Menu
              theme="dark"
              mode="horizontal"
              style={{
                marginLeft: 'auto',
                display: 'flex',
              }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                About
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<DollarOutlined />}
                style={{ marginLeft: '20px' }} // Slightly shift to the right
              >
                Pricing
              </Menu.Item>
              <Menu.Item key="4" icon={<AppstoreOutlined />}>
                Services
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<PhoneOutlined />}
                style={{ marginLeft: '20px' }} // Slightly shift to the right
              >
                Contact
              </Menu.Item>
            </Menu>
          )}
        </Header>

        {/* Mobile Drawer */}
        <Drawer
          title="MyApp"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical">
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={onClose}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />} onClick={onClose}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarOutlined />} onClick={onClose}>
              Pricing
            </Menu.Item>
            <Menu.Item key="4" icon={<AppstoreOutlined />} onClick={onClose}>
              Services
            </Menu.Item>
            <Menu.Item key="5" icon={<PhoneOutlined />} onClick={onClose}>
              Contact
            </Menu.Item>
          </Menu>
        </Drawer>
      </Layout>
    </>
  );
};

export default Navbar;
