import { Col, Layout, Menu, Row } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  SunOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: "#b5edb5" }}>
      <Row>
        <Col>
          <SunOutlined
            style={{
              fontSize: "30px",
              color: "#000000",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "-20px",
              marginRight: "10px",
            }}
          />
        </Col>
        <Col>
          <Title
            style={{
              color: "#000000",
              marginTop: "20px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
            level={5}
          >
            Nature
          </Title>
        </Col>
        <Col span={15}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ background: "#b5edb5 " }}
          >
            <Menu.Item
              style={{ color: "yourColorHere" }}
              key="1"
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />}>
              Contact
            </Menu.Item>
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              FAQ
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
