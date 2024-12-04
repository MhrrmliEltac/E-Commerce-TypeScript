"use client";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

type UserProps = {
  currentUser: User | undefined | null;
};

const User: React.FC<UserProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const menuFunc = (url: string, type?: string) => {
    setOpenMenu(false);
    if (type === "logOut") {
      signOut();
      router.push(url);
    } else if (type === "register") {
      router.push(url);
    } else {
      router.push(url);
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-2 cursor-pointer"
      >
        {currentUser?.image ? (
          <img
            src={currentUser.image}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <AiOutlineUser size={25} />
        )}
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {openMenu && (
        <div className="absolute top-10 right-0 bg-white p-3 rounded-md shadow-lg w-[200px] border">
          {currentUser ? (
            <div className="text-black flex flex-col items-start">
              <button
                onClick={() => {
                  router.push("/admin");
                }}
                className="mb-2"
              >
                Admin
              </button>
              <button
                onClick={() => menuFunc("/login", "logOut")}
                className="mb-1"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-black flex flex-col items-start">
              <button onClick={() => menuFunc("/login")} className="mb-1">
                Daxil ol
              </button>
              <button
                onClick={() => menuFunc("/register", "register")}
                className="mb-2"
              >
                Qeydiyyat
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
