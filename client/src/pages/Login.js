import React from 'react'
import LoginImg from "../assets/login.svg"
import GoogleLogo from "../assets/google_logo.png"
import { Link, useNavigate } from "react-router-dom";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-toastify";

function LogIn() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoading(false);
                toast.success("Login Successful...");
                navigate("/");
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error(error.message);
            });
    };

    // Login with Goooglr
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                toast.success("Login Successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };


    return (
        <div className="min-h-screen">

            <div className="z-10 mt-16 bg-tertiary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-secondary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-gray-200">
                <form onSubmit={loginUser} className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-6xl self-center font-bold tracking-wider text-primary">
                            Log In
                        </h2>

                        <div className="relative mt-4 outline-transparent outline">
                            <input type="email" name="email" placeholder=" " className="block w-full pb-2 pl-3 text-lg placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label className="absolute top-0 p-2 text-lg duration-300 md:text-lg -z-1 origin-0">Email</label>
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input type="password" name="password" placeholder=" " className="block w-full pb-2 pl-3 text-lg placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label className="absolute top-0 p-2 text-lg duration-300 md:text-lg -z-1 origin-0">Password</label>
                        </div>

                        <div className="grid place-items-center">

                            <button type="submit" className="h-12 px-8 w-full text-base font-semibold tracking-wider text-white border rounded-xl shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg">Sign In</button>

                        </div>

                        <div className="w-full flex items-center justify-center text-lg mb-4">
                            <div className="inline-flex h-1 mx-4 bg-pink-500 rounded-full w-52"></div>
                            or
                            <div className="inline-flex h-1 mx-4 bg-pink-500 rounded-full w-52"></div>
                        </div>

                        <div className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg" onClick={signInWithGoogle}>
                            <div className="flex items-center justify-center bg-white" >
                                <img src={GoogleLogo} alt="google" className="bg-white w-4" />
                                <span className="bg-white ml-4">Sign in with Google</span>
                            </div>
                        </div>

                        <div className='text-right text-lg font-[400] py-2'>Don't have an account? <Link to="/register"><span className="text-blue-500 underline">Sign Up</span></Link></div>

                    </div>
                </form>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-tertiary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
