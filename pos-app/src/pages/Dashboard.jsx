// Dashboard.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Data dummy untuk chart
const dataLineChart = [
  { name: "Sun", sales: 2400 },
  // ... data lainnya
];
const dataPieChart = [
  { name: "Pizza", value: 400 },
  // ... data lainnya
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="my-3">
        <Col>
          <h1>Hello, Max 👋</h1>
          <p>Manage this platform with pleasure.</p>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary">Filter by Date</Button>
        </Col>
      </Row>
      <Row>
        {/* Sales Cards */}
        <Col xs={12} md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Gross Sales</Card.Title>
              <Card.Text>Rp. 8.999.990</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* ... Lainnya sales cards */}
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <LineChart width={600} height={300} data={dataLineChart}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </Col>
        <Col xs={12} md={4}>
          <PieChart width={400} height={400}>
            <Pie
              data={dataPieChart}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataPieChart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Col>
      </Row>
      {/* Tambahkan row dan col lainnya sesuai dengan kebutuhan layout */}
    </Container>
  );
};

export default Dashboard;
