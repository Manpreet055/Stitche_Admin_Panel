import React from "react";
import {
  LineChart,
  Line,
  Area,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
} from "recharts";

// Dummy data
const data = [
  { day: "Mon", Sales: "19", InStore: "33" },
  { day: "Tue", Sales: "28", InStore: "44" },
  { day: "Wed", Sales: "40", InStore: "56" },
  { day: "Thu", Sales: "25", InStore: "30" },
  { day: "Fri", Sales: "44", InStore: "50" },
  { day: "Sat", Sales: "35", InStore: "40" },
  { day: "Sun", Sales: "60", InStore: "63" },
];

const SalesOverviewChart = () => {
  return (
    <div className="blur-bg overflow-x-auto 2xl:grow-0  grow scrollbar-hidden h-full flex w-full 2xl:w-[745px] rounded-2xl">
      <div className="chart-card-style">
        {" "}
        <h2 className="text-3xl font-medium px-4 mb-3">Sales Overview</h2>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart margin={{ bottom: 20, right: 20 }} data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Area
              stroke="#554840"
              fill="#edcfb1"
              fillOpacity={0.3}
              strokeWidth={3}
              dataKey="Sales"
            />

            <XAxis dataKey="day" tick={{ dy: 15 }} />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right "
              wrapperStyle={{ marginBottom: 30 }}
              height={36}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
