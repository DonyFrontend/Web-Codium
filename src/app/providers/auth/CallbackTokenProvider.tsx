import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


const CallbackTokenProvider = () => {
  const location = useLocation();
  const [searchParams]  = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  

  useEffect(() => {
    if (token) {
      localStorage.setItem("codium_token", token);
      navigate("/");
    } else throw new Error("Token is not provided");
  }, [token, navigate, location]);

  return null;
};

export { CallbackTokenProvider };
