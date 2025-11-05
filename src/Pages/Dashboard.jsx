import KpiCard from "../Layout/Dashboard/KpiCard";
import SalesBarChart from "../Layout/Dashboard/SalesBarChart";
import SalesOverviewChart from "../Layout/Dashboard/SalesOverviewChart";
import RevenueAreaChart from "../Layout/Dashboard/RevenueAreaChart";
import { HandCoins, BookText, Users, Clock } from "lucide-react";
import RecentOrders from "../Layout/Dashboard/RecentOrders";
const Dashboard = () => {
  return (
    <section className=" w-full lg:px-12 py-6 h-screen overflow-scroll scrollbar-hidden ">
      {/* This is the Overview Card Container which show KPI's information like Revenue ,Users etc. */}
      <div className="w-full flex gap-8 flex-wrap 2xl:flex-nowrap justify-between">
        <div className="flex w-full gap-3 justify-around">
          <KpiCard
            cash={true}
            icon={<HandCoins />}
            number="23388"
            title="Revenue"
          />
          <KpiCard icon={<BookText />} number="2690" title="Sales" />
        </div>
        <div className="flex w-full gap-3 justify-around">
          <KpiCard icon={<Users />} number="1453" title="Users" />
          <KpiCard icon={<Clock />} number="187" title="Orders" />
        </div>
      </div>

      {/* This container contains linechart and barchart */}
      <div className="flex flex-wrap my-5 grow w-full gap-y-10 justify-between">
        <SalesOverviewChart />
        <SalesBarChart />
      </div>

      {/* This Container Contains revenue and order's List */}
      <div className="flex flex-col items-center  w-full">
        <RevenueAreaChart />
        <div className=" overflow-x-auto w-full max-w-screen scrollbar-hidden">
          <RecentOrders />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
