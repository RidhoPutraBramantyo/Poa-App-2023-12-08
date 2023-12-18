import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [dataLineChart, setDataLineChart] = useState([]);
  const [dataPieChart, setDataPieChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lineChartResponse = await fetch(
          process.env.PUBLIC_URL + "/dataLineChart.json"
        );
        if (!lineChartResponse.ok) {
          throw new Error("Failed to load LineChart data");
        }
        const lineChartData = await lineChartResponse.json();
        setDataLineChart(lineChartData);

        const pieChartResponse = await fetch(
          process.env.PUBLIC_URL + "/dataPieChart.json"
        );
        if (!pieChartResponse.ok) {
          throw new Error("Failed to load PieChart data");
        }
        const pieChartData = await pieChartResponse.json();
        setDataPieChart(pieChartData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  // Palet warna yang sesuai
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Container fluid>
      <Row className="my-3">{/* ... */}</Row>
      <Row>{/* ... Sales Cards */}</Row>
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
      {/* ... Tambahkan row dan col lainnya sesuai dengan kebutuhan layout */}
    </Container>
  );
};

export default Dashboard;
