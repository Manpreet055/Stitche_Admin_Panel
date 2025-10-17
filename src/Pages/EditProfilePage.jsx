import React from "react";
import { useForm } from "react-hook-form";
import { Pen } from "lucide-react";
import updateProfile from "../Utilities/Profile/updateProfile";
import BackButton from "../ui/BackButton"


const EditProfilePage = () => {
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
  const { id, username, fullName, email, phone, bio, avatarUrl, dob } =
    defaultUser;

  const handleFormData = async(data) => {
    await updateProfile(id, data);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: username,
      fullName: fullName,
      email: email,
      phone: phone,
      bio: bio,
      dob: dob,
      avatarURL: avatarUrl,
    },
  });

  return (
    <section className=" flex h-screen flex-col items-center p-4 ">
      <div className="w-full flex justify-start">
          <BackButton />
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
          {...register("avatarURL", {})}
          className="form-input-sections hidden"
          accept="image/*"
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
          className={`form-input-sections ${
            errors.username && "outline-red-600"
          }`}
          placeholder="Usern
          
          ame"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          type="text"
          {...register("bio", {
            required: true,
          })}
          className={`form-input-sections min-h-24 ${
            errors.bio && "outline-red-600"
          }`}
          placeholder="Bio"
        ></textarea>

        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          type="text"
          {...register("fullName", {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
          className={`form-input-sections ${
            errors.fullName && "outline-red-600"
          }`}
          placeholder="Full Name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: true,
          })}
          className={`form-input-sections ${errors.email && "outline-red-600"}`}
          placeholder="Email"
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          {...register("phone", {
            required: true,
            min: 10,
            maxLength: 20,
          })}
          className={`form-input-sections ${errors.phone && "outline-red-600"}`}
          placeholder="Phone"
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          {...register("dob", {
            required: true,
          })}
          className={`form-input-sections ${errors.dob && "outline-red-600"}`}
          placeholder=""
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="Gender"
          id="gender"
          {...register("gender")}
          className={`form-input-sections  ${
            errors.gender && "outline-red-600"
          }`}
        >
          <option className="text-black" defaultChecked value="Others">
            Others
          </option>
          <option className="text-black" value="Male">
            Male
          </option>
          <option className="text-black" value="Female">
            Female
          </option>
        </select>

        <div className="w-full justify-end gap-4 py-4 flex">
          <button
            type="reset"
            onClick={reset}
            className="primary-bg button-style"
          >
            Clear
          </button>
          <button
            disabled={isSubmitting}
            className={`primary-bg button-style ${
              isSubmitting ? "cursor-progress" : "cursor-pointer"
            }`}
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfilePage;
