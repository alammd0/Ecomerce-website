import React, { useState } from 'react'
import logo from "../asset/logo.svg"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import Login from './Login';

const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false);

    function handleLogin() {
        setShowLogin(true);
    }

    return (
        <div className='fixed top-0 left-0 w-full bg-slate-100 z-50 flex justify-between  mx-auto py-4 px-10 items-center shadow-md shadow-slate-200'>
            <div>
                <img src={logo} alt="Logo" />
            </div>

            <div className="flex gap-4 justify-between items-center bg-[#F3F5F9] p-1 rounded-lg shadow-md w-[600px] hover:border-slate-900 border-2
             transition-all duration-300">

                {/* search-icon */}
                <div className="text-xl border-r-2 pr-3 pl-3 bg-[#F3F5F9] text-slate-400">
                    <BsSearch />
                </div>

                {/* input */}
                <div className='w-full flex items-center justify-center '>
                    <input
                        type="text"
                        placeholder="Searching for"
                        className="w-full rounded-md border-none outline-none bg-[#F3F5F9]"
                    />
                </div>

                {/* select option */}
                <div className=' border-l-2 pl-3'>
                    <select
                        name="Allcategories"
                        defaultValue="All Categories"
                        className="p-2 rounded-md border bg-[#F3F5F9] border-l-02"
                    >
                        <option value="categories">All Categories</option>
                        <option value="car">Car</option>
                        <option value="clothe">Clothes</option>
                        <option value="electronic">Electronic</option>
                        <option value="leptop">Laptop</option>
                        <option value="desktop">Desktop</option>
                        <option value="cemra">Camera</option>
                        <option value="toy">Toys</option>
                    </select>
                </div>

            </div>


            <div className='flex gap-3 justify-center items-center'>
                <button onClick={handleLogin} className=' relative'>
                    <div className="rounded-full px-1 py-1 hover:bg-gray-400 transition-all duration-300">
                        <CgProfile className=" text-zinc-900 text-3xl" />
                    </div>

                    {showLogin && <Login />}

                </button>


                <button className="rounded-full px-1 py-1 hover:bg-gray-400 transition-all duration-300">

                    <CiShoppingCart className=" text-zinc-900 text-3xl" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
