import React, { useEffect, useState } from "react";
import { fetchAllDataById } from "../../services/fetchData";
import { useParams } from "react-router-dom";
import AsyncBoundary from "../../ui/AsyncBoundary";
import BackButton from "../../ui/BackButton";
import { Check, X } from "lucide-react";
import capitalizeFirstLetter from "../../Utilities/capitalizeLetter";
import convertDate from "../../Utilities/convertDate";
const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchAllDataById(
          "users",
          userId,
          setLoadingState,
          setError,
        );
        setUser(data?.user ?? {});
      } catch (err) {
        setError(err?.message ?? "Failed to load Order Details");
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (typeof user !== "object" || Object.keys(user).length === 0) {
    return <AsyncBoundary customMessage="No user found." />;
  }

  const {
    profile,
    isVerified,
    isActive,
    role,
    username,
    email,
    createdAt,
    updatedAt,
  } = user;
  const { fullName, avatar, phone, address } = profile;
  const { city, country, postalCode, street } = address;
  return (
    <div className="flex gap-6 flex-col w-full h-screen overflow-auto scrollbar-hidden p-4">
      <BackButton />

      {/* Basic Info */}
      <div className="flex w-full shadow-md rounded-2xl h-fit p-4 justify-evenly ">
        <img className="h-30 lg:h-50 rounded-full" src={avatar} alt="UserPic" />
        <div className="flex flex-col gap-4  justify-center">
          <span className="text-xl ">{fullName}</span>
          <span className="text-xl ">{email}</span>
          <div>
            {isVerified ? (
              <div className="flex gap-2 items-center lg:text-xl">
                <div className="h-fit w-fit p-1 text-white bg-blue-600 rounded-full">
                  <Check size={15} />
                </div>
                Verified
              </div>
            ) : (
              <div className="flex gap-2 items-center lg:text-xl">
                <div className="h-fit w-fit p-1 text-white bg-red-600 rounded-full">
                  <X size={15} />
                </div>
                Not Verified
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-around">
        {/* Account Info */}
        <div className="flex grow flex-col rounded-2xl shadow-md gap-4   p-4">
          <h3 className="text-2xl font-medium">Account Info</h3>
          <>
            <div className="text-lg">
              <span className="font-medium text-xl">Username</span> : {username}
            </div>
            <div className="text-lg">
              <span className="font-medium text-xl">Email</span> : {email}
            </div>
            <div className="text-lg">
              <span className="font-medium text-xl">Role</span> :{" "}
              {capitalizeFirstLetter(role)}
            </div>
          </>
        </div>
        {/* Contect Info */}
        <div className="flex grow flex-col rounded-2xl shadow-md gap-4   p-4">
          <h3 className="text-2xl font-medium">Contact Info</h3>
          <>
            <div className="text-lg">
              <span className="font-medium text-xl">Phone</span> : {phone}
            </div>
            <div className="text-lg">
              <span className="font-medium text-xl">Address</span> :{" "}
              {
                <>
                  {street}, {city}, {country}, {postalCode}
                </>
              }
            </div>
          </>
        </div>
      </div>

      {/* Other Info */}
      <div className="flex grow flex-col rounded-2xl shadow-md gap-4   p-4">
        <h3 className="text-2xl font-medium">Other Info</h3>
        <>
          <div className="text-lg">
            <span className="font-medium text-xl">Status</span> :{" "}
            {isActive ? (
              <span className="">Active since {convertDate(createdAt)}</span>
            ) : (
              <span>Not acitve since {convertDate(updatedAt)}</span>
            )}
          </div>
          <div className="text-lg">
            <span className="font-medium text-xl">Email</span> : {email}
          </div>
          <div className="text-lg">
            <span className="font-medium text-xl">Role</span> :{" "}
            {capitalizeFirstLetter(role)}
          </div>
        </>
      </div>
    </div>
  );
};

export default UserDetails;
