import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
    className="w-full inline-bock font-semibold rounded-full transition-all text-xs px-5 py-2 border uppercase hover:no-underline text-white hover:bg-pink-400 hover:text-black"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
