import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import LogoIng from '../assets/logo.svg'
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const [displayName, setdisplayName] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(user.displayName);
            setdisplayName(user.displayName);
          } else {
            setdisplayName("");
          }
        });
      }, []);
    
      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
    
      const hideMenu = () => {
        setShowMenu(false);
      };
    
      const logoutUser = () => {
        signOut(auth)
          .then(() => {
            toast.success("Logout successfully.");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };
    

    return (
        <div >
            <nav className="flex items-center py-2 flex-wrap px-4 text-fontColor tracking-wider bg-primary rounded-b-xl">
                <Link to="/"><span className="p-2 mr-4 inline-flex items-center text-4xl md:text-5xl cursor-pointer font-base text-white">GreenWish<img src={LogoIng} alt="Logo" className="h-16 w-16 ml-2" />
                </span></Link>
                <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
                </button>
                {showNavbar ? (
                    <div>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                        >
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={250}>
                                            <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                GreenWish
                                            </div>
                                        </Link>

                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                        </button>

                                    </div>

                                    <div className="grid justify-center">
                                        <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                    >

                                        <Link to="/">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Home</span>
                                        </Link>

                                        <Link to="/items">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Items</span>
                                        </Link>

                                        <Link to="/addItems">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Add Items</span>
                                        </Link>

                                        <Link to="/recycle">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Recycle</span>
                                        </Link>

                                        <Link to="/donate">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Donate</span>
                                        </Link>

                                        <button className='bg-blue-600 text-white py-2 px-8 rounded-md ml-2'>
                                            Logout
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                    </div>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12" >

                        <Link to="/">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Home</span>
                        </Link>

                        <Link to="/items">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Items</span>
                        </Link>

                        <Link to="/addItems">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Add Items</span>
                        </Link>

                        <Link to="/recycle">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Recycle</span>
                        </Link>

                        <Link to="/donate">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Donate</span>
                        </Link>

                        {/* <NavLink className='bg-[#FF0404] text-white py-2 px-8 rounded-md' to="/" onClick={logoutUser}>
                            Logout
                        </NavLink> */}

                    </div>
                </div>
            </nav>
        </div>
    );
}
