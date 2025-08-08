import { Outlet, Link } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
        Mobile sideabr
        <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
        <aside className="children">
            <Outlet />
        </aside>
    </div>
  );
};

export default AdminLayout;