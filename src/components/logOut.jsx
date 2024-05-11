import { useEffect } from "react";
import userServices from "../services/userServic";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";

const LogOut = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    logOut();
    navigate("/");
  }, [logOut, navigate]);
};

export default LogOut;
