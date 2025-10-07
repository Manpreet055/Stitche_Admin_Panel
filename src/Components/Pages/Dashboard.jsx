import React from "react";
import SalesOverview from "../Layout/Dashboard/SalesOverview";
import KpiCard from "../Layout/Dashboard/KpiCard";
import Analytics from "../Layout/Dashboard/Analytics"
import Revenue from "../Layout/Dashboard/Revenue";
import { HandCoins, BookText, Users, Clock } from "lucide-react";
import RecentOrders from "../Layout/Dashboard/RecentOrders"
const Dashboard = () => {
  return (
    <div className=" w-full pb-20 lg:px-12 py-6 h-screen overflow-scroll scrollbar-hidden ">

      {/* This is the Overview Card Container which show KPI's information like Revenue ,Users etc. */}
      <div className="w-full flex gap-8 flex-wrap 2xl:flex-nowrap justify-between">
        <div className="flex w-full gap-3 justify-around">
          <KpiCard
          cash={true}
          icon={<HandCoins />}
          number="23388"
          title="Total Revenue"
        />
        <KpiCard icon={<BookText />} number="2690" title="Total Sales" />
        </div>
        <div className="flex w-full gap-3 justify-around">
          <KpiCard icon={<Users />} number="1453" title="Active Users" />
        <KpiCard icon={<Clock />} number="187" title="Pending Orders" />
        </div>
      </div>

      {/* This container contains linechart and barchart */}
      <div className="flex flex-wrap my-5 grow w-full gap-y-10 justify-between">
        <SalesOverview />
        <Analytics />
      </div>

      {/* This Container Contains revenue and order's List */}
      <div className="flex flex-col items-center  w-full">
        <Revenue />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
