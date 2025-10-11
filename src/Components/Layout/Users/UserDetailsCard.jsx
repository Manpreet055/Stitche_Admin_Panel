import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import deleteRequest from "../../../Utilities/DeleteRequest";

const UserDetailsCard = ({user}) => {
  const [loadingState,setLoadingState] = useState(false);
  const {
    id,
    Username,
    email,
    phone,
    status,
    role,
    dateJoined,
    lastLogin,
    verified,
    orders,
    address,
  } = user;
  const { city, country } = address;
  return (
    <div className=" w-full h-fit max-w-xl user-card  bg-white/30 backdrop-blur-2xl flex flex-col p-6 ">
      <div className=" p-4 flex items-center w-full justify-between  gap-8 ">
        <h3 className="text-3xl font-medium">{Username}</h3>
        <button onClick={()=>deleteRequest(id,setLoadingState)} className={`button-style ${loadingState ? "cursor-progress":"cursor-pointer"}`}>
          <Trash2 />
        </button>
      </div>
      <ul className="flex flex-col gap-6 w-fit border border-gray-300 p-4 rounded-lg">
        <li className="grid grid-cols-[200px_1fr] place-items-start overflow-x-auto scrollbar-hidden max-w-xs sm:max-w-max  items-center text-lg">
          <span className="text-xl text-center font-medium">Email</span> {email}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Phone</span> {phone}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Status</span> {status}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Role</span> {role}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Joining Date</span> {dateJoined}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Last Login</span> {lastLogin}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium"> IsVerified</span>{" "}
          {verified ? "Yes" : "No"}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Total Orders</span> {orders}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">City</span> {city}
        </li>
        <li className="grid grid-cols-[200px_1fr] place-items-start  items-center text-lg">
          <span className="text-xl font-medium">Country</span> {country}
        </li>
      </ul>
    </div>
  );
};

export default UserDetailsCard;
