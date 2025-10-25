import { container } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import UserRow from "./UserRow";
import UsersData from "./UsersData.json";
import Paginate from "../../ui/Pagination";

const AllUsers = () => {
  return (
    <div className=" pt-10 w-full overflow-y-scroll scrollbar-hidden ">
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="relative flex min-w-[1250px] flex-col"
      >
        <ul
          className={`py-5 primary-bg rounded-t-2xl px-4  grid grid-cols-[100px_300px_1fr_160px_120px_100px_150px] place-items-center text-xl font-medium border-b border-gray-400 `}
        >
          <li>Sr No.</li>
          <li>User</li>
          <li>Email</li>
          <li>Status</li>
          <li>Role</li>
          <li>Orders</li>
          <li>Last login</li>
        </ul> 
        <Paginate data={UsersData} ItemsPerPage={15}>
          {UsersData.map((user, index) => (
            <UserRow serial={index + 1} key={user.id} user={user} />
          ))}
        </Paginate>
      </motion.ul>
    </div>
  );
};

export default AllUsers;
