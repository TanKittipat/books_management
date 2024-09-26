import ProfileDrop from "./ProfileDrop";
import SearchBar from "./SearchBar";
import ThemeController from "./ThemeController";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const navbarMenu = {
    ROLES_USER: [],
    ROLES_MODERATOR: [],
    ROLES_ADMIN: [{ name: "Add new Book", link: "/add" }],
  };
  return (
    <div className="navbar bg-base-100 shadow-lg top-0 w-full fixed z-50">
      <div className="navbar-start">
        <a href="/store" className="btn btn-ghost text-xl font-semibold">
          <span className="text-gray-500 font-semibold">SE</span>Books
        </a>
      </div>
      <div className="navbar-center gap-2">
        {user &&
          navbarMenu[user.roles[0]].map((menuItem) => (
            <a href={menuItem.link} className="btn btn-ghost">
              {menuItem.name}
            </a>
          ))}
      </div>
      <div className="navbar-end gap-2">
        <SearchBar />
        {user ? (
          <ProfileDrop user={user} logout={logout} />
        ) : (
          <div className="space-x-2">
            <a href="/signin" className="btn btn-ghost">
              Login
            </a>
            <a href="/signup" className="btn btn-outline">
              Register
            </a>
          </div>
        )}
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
