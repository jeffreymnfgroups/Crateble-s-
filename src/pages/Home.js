import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Table,
  Select,
  Input,
  Tag,
  Avatar,
  Progress,
  Tooltip,
  Space,
  Dropdown,
  Menu,
  Badge,
  Statistic,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ExportOutlined,
  TrendingUpOutlined,
  TrendingDownOutlined,
  EyeOutlined,
  EditOutlined,
  MoreOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
import { Iconify } from "utils/Iconify";

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;

export default function Home() {
  const [timeframe, setTimeframe] = useState("1M");
  const [sortBy, setSortBy] = useState("market_value");
  const [filterCategory, setFilterCategory] = useState("all");

  // Mock data for demonstration
  const kpiData = [
    {
      title: "Total Market Value",
      value: "$847,250",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs last month",
      icon: <Iconify icon="mdi:trending-up" style={{ color: "#52c41a" }} />,
    },
    {
      title: "Total Cost Value",
      value: "$623,180",
      change: "+2.1%",
      trend: "up",
      subtitle: "acquisition cost",
      icon: <Iconify icon="mdi:wallet" style={{ color: "#1890ff" }} />,
    },
    {
      title: "Total Items",
      value: "1,247",
      change: "+23",
      trend: "up",
      subtitle: "this month",
      icon: <Iconify icon="mdi:package-variant" style={{ color: "#722ed1" }} />,
    },
    {
      title: "Most Valuable Item",
      value: "$45,200",
      change: "Charizard 1st Ed",
      trend: "neutral",
      subtitle: "Base Set Shadowless",
      icon: <Iconify icon="mdi:star" style={{ color: "#faad14" }} />,
    },
  ];

  const chartData = {
    series: [
      {
        name: "Market Value",
        data: [623180, 645230, 678450, 712340, 745680, 789230, 823450, 847250],
        color: "#1890ff",
      },
      {
        name: "Cost Value",
        data: [623180, 623180, 623180, 623180, 623180, 623180, 623180, 623180],
        color: "#52c41a",
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: true },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        labels: { style: { colors: "#8c8c8c" } },
      },
      yaxis: {
        labels: {
          style: { colors: "#8c8c8c" },
          formatter: (val) => `$${(val / 1000).toFixed(0)}K`,
        },
      },
      grid: {
        borderColor: "#f0f0f0",
        strokeDashArray: 3,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val.toLocaleString()}`,
        },
      },
    },
  };

  const topGainers = [
    {
      name: "Pikachu Illustrator",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      gain: "+24.5%",
      value: "$32,400",
    },
    {
      name: "Black Lotus Alpha",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      gain: "+18.2%",
      value: "$28,750",
    },
    {
      name: "Charizard Base Set",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      gain: "+15.7%",
      value: "$12,300",
    },
  ];

  const topLosers = [
    {
      name: "Mox Ruby",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      loss: "-8.3%",
      value: "$8,450",
    },
    {
      name: "Blastoise Base Set",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      loss: "-5.2%",
      value: "$3,200",
    },
    {
      name: "Time Walk",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      loss: "-3.1%",
      value: "$15,600",
    },
  ];

  const topAssets = [
    {
      key: "1",
      name: "Charizard 1st Edition",
      category: "Pokemon",
      marketValue: 45200,
      costValue: 32000,
      gain: 41.25,
      status: "Not Listed",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      dateAdded: "2024-01-15",
    },
    {
      key: "2",
      name: "Black Lotus Alpha",
      category: "Magic",
      marketValue: 38750,
      costValue: 28000,
      gain: 38.39,
      status: "For Sale",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      dateAdded: "2024-02-03",
    },
    {
      key: "3",
      name: "Pikachu Illustrator",
      category: "Pokemon",
      marketValue: 32400,
      costValue: 26000,
      gain: 24.62,
      status: "Not Listed",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100",
      dateAdded: "2024-01-28",
    },
  ];

  const tableColumns = [
    {
      title: "Asset",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar src={record.image} size={40} shape="square" />
          <div>
            <div style={{ fontWeight: 600 }}>{text}</div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {record.category}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Market Value",
      dataIndex: "marketValue",
      key: "marketValue",
      sorter: true,
      render: (value) => (
        <Text strong style={{ fontSize: 14 }}>
          ${value.toLocaleString()}
        </Text>
      ),
    },
    {
      title: "Cost Value",
      dataIndex: "costValue",
      key: "costValue",
      render: (value) => (
        <Text type="secondary">${value.toLocaleString()}</Text>
      ),
    },
    {
      title: "Gain/Loss",
      dataIndex: "gain",
      key: "gain",
      render: (value) => (
        <Tag
          color={value > 0 ? "green" : "red"}
          icon={value > 0 ? <RiseOutlined /> : <FallOutlined />}
        >
          {value > 0 ? "+" : ""}{value.toFixed(2)}%
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "For Sale" ? "blue" : "default"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="text" icon={<EyeOutlined />} size="small" />
          <Button type="text" icon={<EditOutlined />} size="small" />
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="list">List for Sale</Menu.Item>
                <Menu.Item key="edit">Edit Details</Menu.Item>
                <Menu.Item key="remove">Remove</Menu.Item>
              </Menu>
            }
          >
            <Button type="text" icon={<MoreOutlined />} size="small" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <div style={{ marginBottom: 32 }}>
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Portfolio Summary
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Track and manage your collectible assets with real-time market insights
        </Text>
      </div>

      {/* KPI Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        {kpiData.map((kpi, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              style={{
                borderRadius: 12,
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
              bodyStyle={{ padding: 24 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <Text type="secondary" style={{ fontSize: 14, fontWeight: 500 }}>
                    {kpi.title}
                  </Text>
                  <div style={{ marginTop: 8 }}>
                    <Title level={3} style={{ margin: 0, color: "#262626" }}>
                      {kpi.value}
                    </Title>
                  </div>
                  <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <Tag
                      color={kpi.trend === "up" ? "green" : kpi.trend === "down" ? "red" : "default"}
                      style={{ margin: 0, borderRadius: 6 }}
                    >
                      {kpi.change}
                    </Tag>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {kpi.subtitle}
                    </Text>
                  </div>
                </div>
                <div style={{ fontSize: 24 }}>{kpi.icon}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Market Analysis Chart */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col span={24}>
          <Card
            title={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={4} style={{ margin: 0 }}>
                  Market vs Cost Value Over Time
                </Title>
                <Space>
                  {["1D", "1W", "1M", "All"].map((period) => (
                    <Button
                      key={period}
                      type={timeframe === period ? "primary" : "default"}
                      size="small"
                      onClick={() => setTimeframe(period)}
                      style={{ borderRadius: 6 }}
                    >
                      {period}
                    </Button>
                  ))}
                </Space>
              </div>
            }
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={350}
            />
          </Card>
        </Col>
      </Row>

      {/* Performance Tracking */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={12}>
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <TrendingUpOutlined style={{ color: "#52c41a" }} />
                <Title level={4} style={{ margin: 0 }}>
                  Top Gainers
                </Title>
              </div>
            }
            extra={<Button type="link">View All</Button>}
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <Space direction="vertical" style={{ width: "100%" }} size={16}>
              {topGainers.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: index < topGainers.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <Space>
                    <Avatar src={item.image} size={40} shape="square" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {item.value}
                      </Text>
                    </div>
                  </Space>
                  <Tag color="green" style={{ borderRadius: 6 }}>
                    {item.gain}
                  </Tag>
                </div>
              ))}
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <TrendingDownOutlined style={{ color: "#ff4d4f" }} />
                <Title level={4} style={{ margin: 0 }}>
                  Top Losers
                </Title>
              </div>
            }
            extra={<Button type="link">View All</Button>}
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <Space direction="vertical" style={{ width: "100%" }} size={16}>
              {topLosers.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: index < topLosers.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <Space>
                    <Avatar src={item.image} size={40} shape="square" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {item.value}
                      </Text>
                    </div>
                  </Space>
                  <Tag color="red" style={{ borderRadius: 6 }}>
                    {item.loss}
                  </Tag>
                </div>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Top 10 Most Valuable Assets */}
      <Row style={{ marginBottom: 32 }}>
        <Col span={24}>
          <Card
            title={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={4} style={{ margin: 0 }}>
                  Top 10 Most Valuable Assets
                </Title>
                <Space>
                  <Select
                    value={sortBy}
                    onChange={setSortBy}
                    style={{ width: 150 }}
                    size="small"
                  >
                    <Option value="market_value">Market Value</Option>
                    <Option value="gain_percent">Gain %</Option>
                    <Option value="name">Name</Option>
                    <Option value="date_added">Date Added</Option>
                  </Select>
                  <Select
                    value={filterCategory}
                    onChange={setFilterCategory}
                    style={{ width: 120 }}
                    size="small"
                  >
                    <Option value="all">All Categories</Option>
                    <Option value="pokemon">Pokemon</Option>
                    <Option value="magic">Magic</Option>
                    <Option value="sports">Sports</Option>
                  </Select>
                </Space>
              </div>
            }
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <Row gutter={[16, 16]}>
              {topAssets.map((asset) => (
                <Col xs={24} sm={12} lg={8} key={asset.key}>
                  <Card
                    hoverable
                    cover={
                      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                        <img
                          src={asset.image}
                          alt={asset.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            background: "rgba(0,0,0,0.7)",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          ${asset.marketValue.toLocaleString()}
                        </div>
                      </div>
                    }
                    style={{
                      borderRadius: 8,
                      border: "1px solid #f0f0f0",
                      overflow: "hidden",
                    }}
                    bodyStyle={{ padding: 16 }}
                  >
                    <div style={{ marginBottom: 8 }}>
                      <Title level={5} style={{ margin: 0, fontSize: 14 }}>
                        {asset.name}
                      </Title>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {asset.category}
                      </Text>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Tag
                        color={asset.gain > 0 ? "green" : "red"}
                        style={{ borderRadius: 4 }}
                      >
                        +{asset.gain.toFixed(1)}%
                      </Tag>
                      <Button type="primary" size="small" style={{ borderRadius: 6 }}>
                        List Item
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Comprehensive Data Table */}
      <Row>
        <Col span={24}>
          <Card
            title={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={4} style={{ margin: 0 }}>
                  All Assets
                </Title>
                <Space>
                  <Search
                    placeholder="Search assets..."
                    style={{ width: 250 }}
                    prefix={<SearchOutlined />}
                  />
                  <Button icon={<FilterOutlined />}>Filters</Button>
                  <Button icon={<ExportOutlined />}>Export</Button>
                </Space>
              </div>
            }
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <Space wrap>
                <Tag color="blue" style={{ borderRadius: 6 }}>
                  For Sale (12)
                </Tag>
                <Tag color="purple" style={{ borderRadius: 6 }}>
                  High Value (45)
                </Tag>
                <Tag color="green" style={{ borderRadius: 6 }}>
                  Recent Additions (8)
                </Tag>
              </Space>
            </div>
            <Table
              columns={tableColumns}
              dataSource={topAssets}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`,
              }}
              style={{
                borderRadius: 8,
                overflow: "hidden",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}