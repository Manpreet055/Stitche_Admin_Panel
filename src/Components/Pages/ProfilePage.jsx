import React from "react";
import { useForm } from "react-hook-form";
import { Pen } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate();
  const defaultUser = {
    id: "usr_1010",
    username: "manni_dev",
    fullName: "Manninder Singh",
    email: "manni.dev@example.com",
    phone: "+971-55-123-4567",
    bio: "Frontend learner from Punjab, hustling in Dubai. Coffee + code = life.",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    role: "User",
    status: "active",
    location: "Dubai, UAE",
    dob: "1997-08-15",
    gender: "male",
    isVerified: false,
    preferences: {
      darkMode: false,
      language: "en",
      timezone: "Asia/Dubai",
      newsletter: true,
    },
    createdAt: "2025-09-25T10:00:00+04:00",
    updatedAt: "2025-10-10T12:45:00+04:00",
  };
  const { username, fullName, email, phone, bio, avatarUrl, dob, gender } =
    defaultUser;

  const handleFormData = (data) => {
    console.log(data);
  };
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      username: username,
      fullName: fullName,
      email: email,
      phone: phone,
      bio: bio,
      dob: dob,
      gender: gender,
      avatarURL: avatarUrl,
    },
  });
  return (
    <div className=" flex h-screen flex-col items-center p-4 ">
      <div className="w-full flex justify-start">
        <button onClick={() => navigate(-1)} className="button-style">
          Back
        </button>
      </div>
      <form
        className="flex h-full overflow-y-auto pb-56 scrollbar-hidden flex-col w-full max-w-xl md:max-w-3xl gap-2  "
        onSubmit={handleSubmit(handleFormData)}
      >
        <div className="flex justify-center">
          <div className="relative w-fit  ">
            <img
              src={avatarUrl}
              alt="profile"
              className="rounded-full h-16 md:h-20"
            />
            <label
              htmlFor="profile"
              className="p-1 bg-white rounded-full user-card absolute bottom-0 left-0"
            >
              <Pen />
            </label>
          </div>
        </div>
        <input
          id="profile"
          type="file"
          {...register("avatarURL")}
          className="form-input-sections hidden"
          accept="image/*"
        />

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username")}
          className="form-input-sections"
          placeholder="Username"
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          type="text"
          {...register("bio")}
          className="form-input-sections min-h-24"
          placeholder=""
        ></textarea>

        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          type="text"
          {...register("fullName")}
          className="form-input-sections"
          placeholder="Full Name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="form-input-sections"
          placeholder="Email"
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          {...register("phone")}
          className="form-input-sections"
          placeholder="Phone"
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          {...register("dob")}
          className="form-input-sections"
          placeholder=""
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          {...register("gender")}
          className="form-input-sections"
          placeholder=""
        />

        <div className="w-full justify-end gap-4 py-4 flex">
          <button
            type="reset"
            onClick={reset}
            className="primary-bg button-style"
          >
            Clear
          </button>
          <button className="primary-bg button-style" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
