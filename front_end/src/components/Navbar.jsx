import ProfileDrop from "./ProfileDrop";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SE-Books</a>
      </div>
      <div className="flex-none">
        <ProfileDrop />
      </div>
    </div>
  );
};

export default Navbar;
