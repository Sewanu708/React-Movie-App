import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Navigate, Outlet } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function AuthPage() {
  const { currentUser, loading } = useContext(GlobalContext);
  if (loading)
    return (
      <Stack spacing={1} className="w-[300px] h-[300px] flex wrap ">
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        {/* For other variants, adjust the size with `width` and `height` */}

        <Skeleton variant="rounded" width={120} height={120} />
        <Skeleton variant="rounded" width={120} height={120} />
        <Skeleton variant="rounded" width={120} height={120} />
        <Skeleton variant="rounded" width={120} height={120} />

      </Stack>
    );
  if (currentUser) return <Outlet />;
  return <Navigate to={"/login"} />;
}

export default AuthPage;
