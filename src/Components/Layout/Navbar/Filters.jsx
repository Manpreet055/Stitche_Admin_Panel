import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import clickEvent from "../../../Utilities/Animations/onClick";
import UsersData from "../Users/UsersData";
import SearchContext from "../../../Context/searches/SeachContext";

const Filters = () => {
  const { setSearchItems } = useContext(SearchContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Filter queries
  const formSubmit = (data) => {
    console.log(data);

    // get active filters
    let activeValues = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value)
    );
    const activeKeys = Object.keys(activeValues).map((key) =>
      key.toLowerCase()
    );

    const filterData = UsersData.filter((user) => {
      let statusMatch =
        activeKeys.includes(user.status.toLowerCase()) ||
        !["active", "suspended", "pending"].some((k) => activeKeys.includes(k));
      let roleMatch =
        activeKeys.includes(user.role.toLowerCase()) ||
        !["user", "admin", "moderator"].some((k) => activeKeys.includes(k));
      let cityMatch = data.city
        ? user.address.city.toLowerCase().includes(data.city.toLowerCase())
        : true;

      return statusMatch && roleMatch && cityMatch;
    });
    setSearchItems(filterData);
    console.log(filterData);
  };

  return (
    <div className="bg-black text-white absolute top-15 z-90 flex flex-col blur-bg w-full">
      <h1 className="text-2xl mx-5 px-3 border-b border-gray-400 font-semibold py-4">
        {" "}
        Filters
      </h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" overflow-auto w-full p-4 flex  gap-10"
      >
        <div id="status" className="w-full flex flex-col gap-6">
          {/* Statuses */}
          <h2 className="text-xl font-medium">Status</h2>
          <div className=" flex flex-col gap-6">
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("active")} /> Active
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("suspended")} /> Suspended
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("pending")} /> Pending
            </div>
          </div>
          <input
            type="text"
            className="form-input-sections"
            {...register("city")}
            placeholder="Search City"
          />
        </div>

        {/* Role */}
        <div className="w-full flex flex-col gap-3 justify-between ">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium">Role</h2>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("user")} /> User
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("admin")} /> Admin
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input
                type="checkbox"
                className=""
                {...register("moderator")}
              />{" "}
              Moderator
            </div>
          </div>
          

          <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            type="submit"
            className=" bg-rose-800 p-4 rounded-2xl"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
