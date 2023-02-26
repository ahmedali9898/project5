import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useStore from "./store/customizeTheme";
import Nav from "./components/Nav";
import Tablec from "./components/Tablec";
import {
  Layout,
  ConfigProvider,
  theme,
  FloatButton,
  Modal,
} from "antd";
import { MdColorLens } from "react-icons/md";
import CustomizeTheme from "./theme/CustomizeTheme";
const { Header, Sider, Content } = Layout;

function App() {
  const Theme = useStore((state) => state.Theme);
  const Bgcolor = useStore((state) => state.Bgcolor);
  const SidebarColor = useStore((state) => state.SidebarColor);
  const HeaderColor = useStore((state) => state.HeaderColor);
  const Textcolor = useStore((state) => state.TextColor);
  const BorderColor = useStore((state) => state.BorderColor);
  const FontSize = useStore((state) => state.FontSize);
  const BorderSize = useStore((state) => state.BorderSize);
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: Theme ? theme.defaultAlgorithm : theme.darkAlgorithm,
          token: {
            colorBgBase: Bgcolor,
            colorTextBase: Textcolor,
            fontSize: FontSize,
            borderRadius: BorderSize,
            colorBorder: BorderColor,
            colorBorderSecondary: BorderColor,
          },
        }}
      >
        <Layout>
          <Sider
            theme="light"
            style={{
              backgroundColor: SidebarColor,
            }}
            collapsible
            collapsed={collapsed}
            trigger={null}
          >
            <Nav />
          </Sider>

          <Layout>
            <Header
              style={{
                height: 55,
                background: HeaderColor,
                borderRadius: 10,
                marginRight: 3,
              }}
            >
              <div
                className="h-9 w-9  cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
                ) : (
                  <MenuFoldOutlined style={{ fontSize: "20px" }} />
                )}
              </div>
            </Header>

            <Content
              style={{
                minHeight: "515px",
                padding: 10,
              }}
            >
                <Tablec />
            </Content>
          </Layout>
        </Layout>

        <div>
          <FloatButton
            style={{ left: 15 }}
            icon={<MdColorLens />}
            onClick={() => setOpen(true)}
          />
          <Modal
            title="Switch Theme"
            centered
            footer={null}
            open={open}
            onCancel={() => setOpen(false)}
            width={700}
          >
            <CustomizeTheme />
          </Modal>
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;



