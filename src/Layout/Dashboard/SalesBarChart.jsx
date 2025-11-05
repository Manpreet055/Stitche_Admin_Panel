import React from "react";
import {
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// using dummy data to show SalesBarChart
const data = [
  { day: "Mon", Sales: "19", InStore: "33" },
  { day: "Tue", Sales: "28", InStore: "44" },
  { day: "Wed", Sales: "40", InStore: "56" },
  { day: "Thu", Sales: "25", InStore: "30" },
  { day: "Fri", Sales: "44", InStore: "50" },
  { day: "Sat", Sales: "35", InStore: "40" },
  { day: "Sun", Sales: "60", InStore: "63" },
];

// This is the Bar chart we are using to show data
const SalesBarChart = () => {
  return (
    <div className=" blur-bg overflow-x-auto scrollbar-hidden 2xl:grow-0 grow flex w-full h-full 2xl:w-[760px] rounded-2xl">
      <div
        className="
    chart-card-style 
    "
      >
        <h2 className=" text-3xl font-medium px-4 mb-3">Analytics</h2>

        {/* Used Recharts's  built-in responsive container to build a responsive chart*/}
        <ResponsiveContainer width="100%" height="85%">
          {/* As we are creating bar chart so we used Barchart components of Recharts */}
          <BarChart data={data} margin={{ bottom: 20, right: 20 }}>
            {/* Grids */}
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Bar fill="#edcfb1" dataKey="InStore" />
            <Bar fill="#554840" dataKey="Sales" />
            <XAxis tick={{ dy: 15 }} dataKey="day" />
            <YAxis />
            <Legend
              verticalAlign="top"
              align="right "
              wrapperStyle={{ marginBottom: 30 }}
              height={36}
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;
