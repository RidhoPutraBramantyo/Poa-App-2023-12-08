import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const lineChart = {
    series: [
      {
        name: "Gross Sales",
        data: [45000, 52000, 61000, 49000, 47000, 56000, 64000],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  const pieChart = {
    series: [25, 15, 44, 55],
    options: {
      labels: ["Pizza", "Rice and Pasta", "Appetizer", "Drinks"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Container fluid className="dashboard-content">
      <Row className="mb-4">{/* Komponen untuk sales cards */}</Row>
      <Row>
        <Col>
          <Chart
            options={lineChart.options}
            series={lineChart.series}
            type="line"
            height={350}
          />
        </Col>
        <Col>
          <Chart
            options={pieChart.options}
            series={pieChart.series}
            type="pie"
            height={350}
          />
        </Col>
      </Row>
      {/* Tambahkan Row dan Col lainnya untuk grafik tambahan dan aktivitas terbaru */}
    </Container>
  );
};

export default Dashboard;
