import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  // if (token) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div>
      <div className="min-w-screen w-full">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default GuestLayout;
