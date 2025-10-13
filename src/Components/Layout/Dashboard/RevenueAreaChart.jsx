import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

// Dummy Data for charts
const revenueData = [
  { month: "Jan", Revenue: 1200 },
  { month: "Feb", Revenue: 2100 },
  { month: "Mar", Revenue: 1800 },
  { month: "Apr", Revenue: 2400 },
  { month: "May", Revenue: 3200 },
  { month: "Jun", Revenue: 2900 },
  { month: "Jul", Revenue: 3500 },
  { month: "Aug", Revenue: 4000 },
  { month: "Sep", Revenue: 3700 },
  { month: "Oct", Revenue: 4200 },
  { month: "Nov", Revenue: 4600 },
  { month: "Dec", Revenue: 5000 },
];

const RevenueAreaChart = () => {
  return (
    <div className="blur-bg hover:shadow-lg w-full transition duration-300 rounded-2xl overflow-x-auto overflow-y-hidden scrollbar-hidden">
      <h2 className="text-2xl font-medium p-4 mb-3">Revenue</h2>
      <div className="w-full min-w-[700px] h-[400px]  pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ bottom: 20,right:25 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Area
              dataKey="Revenue"
              stroke="#554840"
              fill="#edcfb1"
              fillOpacity={0.4}
              // type="monotone"
            />
            <XAxis tick={{dy:15,dx:5}} dataKey="month" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueAreaChart;
