import { container } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import UserRow from "../../Layout/Users/UserRow";
import Paginate from "../../ui/Pagination";
import { useEffect, useState } from "react";
import { fetchAllData } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";
const AllUsers = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 15;

  useEffect(() => {
    const getusers = async () => {
      try {
        const data = await fetchAllData(
          "users",
          setLoadingState,
          setError,
          setUsers,
          page,
          limit,
        );
        setUsers((prev) => prev.users);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err?.message ?? "Failed to load Users..");
      }
    };
    getusers();
  }, [page]);

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <AsyncBoundary customMessage="No User found." />;
  }

  return (
    <div className="overflow-auto h-screen  w-full scrollbar-hidden ">
      <div className=" pt-10 w-full h-full pb-56 overflow-auto scrollbar-hidden ">
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
          {users.map((user, index) => (
            <UserRow serial={index + 1} key={user.id} user={user} />
          ))}
          <Paginate
            setPage={setPage}
            totalPages={totalPages}
            currentPage={page}
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default AllUsers;
