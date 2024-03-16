import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-500">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold lg:text-3xl lg:font-extrabold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-500">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        {/* navbar end */}
        <div className="navbar-end gap-4">
          <div className="form-control">
            <div className="flex gap-3">
              <div className="join hidden md:flex lg:flex">
                <button className="btn join-item rounded-r-full pr-0 bg-white border-gray-500"><CiSearch /></button>
                <input className="input input-bordered join-item pl-1 border-l-0 border-gray-500" placeholder="Search"/>
              </div>
              <a className="btn rounded-full bg-green-500"><CgProfile /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;