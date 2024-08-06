"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserList: React.FC = () => {
  const backendApi = "https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users";
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (email == "" || avatar.trim() == "") {
        toast.error("Please fill all the fields", {
          duration: 4000,
          position: "top-right",
        });
        return;
      }

      const sentUserData = await fetch(backendApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, avatar }),
      });
      setEmail("");
      setAvatar("");
      toast.success("User added successfully", {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        duration: 4000,
        position: "top-right",
      });
      console.log(error);
      throw new Error("Something went Wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <Toaster />
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="avatar" className="block mb-2 font-semibold">
          Avatar URL
        </label>
        <input
          type="text"
          id="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default UserList;
