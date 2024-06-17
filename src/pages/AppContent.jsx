import { useState } from "react";
import { Col, Layout, Row } from "antd";
import { Flex, Slider, Switch, Typography } from "antd";
import CarouselImage from "../components/Carousel";
import CardImg from "../components/Card";
import { Pagination } from "antd";
import { Divider } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Content } = Layout;

const AppContent = () => {
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Content style={{ backgroundColor: "#ffffff" }}>
        <Row style={{ margin: "10px 0" }}>
          <Col>
            <Typography>
              <Title>Introduction</Title>

              <Paragraph>
                In the process of internal desktop applications development,
                many different design specs and implementations would be
                involved, which might cause designers and developers
                difficulties and duplication and reduce the efficiency of
                development.
              </Paragraph>

              <Paragraph>
                After massive project practice and summaries, Ant Design, a
                design language for background applications, is refined by Ant
                UED Team, which aims to{" "}
                <Text strong>
                  uniform the user interface specs for internal background
                  projects, lower the unnecessary cost of design differences and
                  implementation and liberate the resources of design and
                  front-end development
                </Text>
                .
              </Paragraph>

              <Title level={2}>Guidelines and Resources</Title>

              <Paragraph>
                We supply a series of design principles, practical patterns and
                high quality design resources (<Text code>Sketch</Text> and{" "}
                <Text code>Axure</Text>), to help people create their product
                prototypes beautifully and efficiently.
              </Paragraph>

              <Paragraph>
                <ul>
                  <li>
                    <Link href="/docs/spec/proximity">Principles</Link>
                  </li>
                  <li>
                    <Link href="/docs/spec/overview">Patterns</Link>
                  </li>
                  <li>
                    <Link href="/docs/resources">Resource Download</Link>
                  </li>
                </ul>
              </Paragraph>

              <Divider />
            </Typography>
          </Col>

          <Col span={24}>
            <CarouselImage />
          </Col>

          <Row style={{ marginLeft: "20px ", marginRight: "20px" }}>
            <Flex gap={16} vertical>
              <Flex gap={16} align="center">
                <Switch
                  checked={expanded}
                  onChange={() => setExpanded((c) => !c)}
                  style={{
                    flex: "none",
                  }}
                />
                <Slider
                  min={1}
                  max={20}
                  value={rows}
                  onChange={setRows}
                  style={{
                    flex: "auto",
                  }}
                />
              </Flex>

              <Typography.Paragraph
                ellipsis={{
                  rows,
                  expandable: "collapsible",
                  expanded,
                  onExpand: (_, info) => setExpanded(info.expanded),
                }}
                copyable
              >
                {"Nature, in all its vastness and diversity, is a profound source of beauty and inspiration. From the serene stillness of a forest glade to the roaring majesty of ocean waves crashing against the shore, nature's myriad landscapes offer a constant reminder of the planet's splendor. The delicate petals of a blooming flower, the intricate patterns on a butterfly's wings, and the towering grandeur of ancient trees all speak to the intricate artistry of the natural world. Beyond its aesthetic appeal, nature plays a crucial role in sustaining life. Ecosystems provide essential services such as clean air, water, and fertile soil, which are fundamental for the survival of countless species, including humans. The rhythms of nature, marked by changing seasons and weather patterns, influence the cycles of life, nurturing growth and renewal. Embracing nature not only enriches our physical and mental well-being but also deepens our appreciation for the environment, fostering a sense of stewardship to preserve these wonders for future generations. In a world increasingly driven by technology and urbanization, reconnecting with nature offers a grounding escape, a return to the simplicity and tranquility that lies at the heart of our existence.".repeat(
                  20
                )}
              </Typography.Paragraph>
            </Flex>
          </Row>

          <Col span={24}>
            <CardImg />
            <Pagination
              style={{
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              defaultCurrent={1}
              total={50}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default AppContent;
