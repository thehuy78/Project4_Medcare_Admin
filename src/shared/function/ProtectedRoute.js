import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useLayout } from "../hook/Layout/LayoutContext";
import { useEffect } from "react";
function ProtectedRoute() {
  // Sử dụng hook useCookies để lấy cookies
  const [cookies] = useCookies(["authorize_token_admin"]);
  const token = cookies.authorize_token_admin; // Lấy token từ cookies

  const { setLayout } = useLayout();
  useEffect(() => {
    setLayout("main");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [setLayout]);
  // Nếu không có token, điều hướng về trang đăng nhập
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Render các route con bên trong ProtectedRoute
  return <Outlet />;
}

export default ProtectedRoute;
