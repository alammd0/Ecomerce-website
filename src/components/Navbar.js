import logo from "../asset/logo.svg";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import Login from "./Login";
import Signup from "./pages/Signup"; // Assuming you have a SignUp component
import { useState } from "react";
// import Cart from "./pages/Cart";

const Navbar = () => {
    const [visibleComponent, setVisibleComponent] = useState(null);
    // const [cartItems, setCartItems] = useState([]);
    // const [isCartVisible, setIsCartVisible] = useState(false);


    const toggleLoginVisibility = () => {
        setVisibleComponent(visibleComponent === 'login' ? null : 'login');
    };

    const toggleSignUpVisibility = () => {
        setVisibleComponent(visibleComponent === 'signup' ? null : 'signup');
    };


    // const toggleCartVisibility = () => {
    //     setIsCartVisible(!isCartVisible);
    // };

    // const addToCart = (item) => {
    //     setCartItems([...cartItems, item]);
    // };

    // const removeFromCart = (index) => {
    //     const updatedCart = cartItems.filter((_, i) => i !== index);
    //     setCartItems(updatedCart);
    // };

    
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
                <div>
                    <div
                        className="rounded-full px-1 py-1 hover:bg-gray-400 transition-all duration-300 cursor-pointer"
                        onClick={toggleLoginVisibility}
                    >
                        <CgProfile className="text-zinc-900 text-3xl" />
                    </div>

                    {visibleComponent === 'login' && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <Login toggleSignUpVisibility={toggleSignUpVisibility} toggleLoginVisibility={toggleLoginVisibility} />
                            </div>
                        </div>
                    )}

                    {visibleComponent === 'signup' && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <Signup toggleLoginVisibility={toggleLoginVisibility} toggleSignUpVisibility={toggleSignUpVisibility} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button className="rounded-full px-1 py-1 hover:bg-gray-400 transition-all duration-300">
                        <CiShoppingCart className=" text-zinc-900 text-3xl" />
                    </button>

                    {/* {isCartVisible && (
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            toggleCartVisibility={toggleCartVisibility}
                        />
                    )} */}
                </div>

            </div>
        </div>
    );
}

export default Navbar;
