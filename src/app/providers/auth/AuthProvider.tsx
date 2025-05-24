import { useLocation, useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("codium_token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/auth/success") {
      return;
    }

    if (!token ) {
      navigate("/welcome");
      return;
    }
  }, [token, navigate, location]);

  return children;
};

export { AuthProvider };
