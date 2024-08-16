import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { LiaSmileBeamSolid } from 'react-icons/lia'; // Assuming you have this icon
import { CiPlug1 } from "react-icons/ci";
import Footer from './pages/Footer';
import { TbWood } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Separate state for each dropdown
    const [openItems, setOpenItems] = useState({
        beauty: false,
        electronics: false,
        furniture: false,
        fashion: false,
        bakery: false
    });

    // Function to toggle the sub-menu for each item
    const toggleSubMenu = (item) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [item]: !prevState[item],
        }));
    };

    return (

        <div>
            <div className=" w-72 h-screen flex flex-col gap-[295px] fixed top-[5.25rem] bg-slate-200">

                <ul className="p-4">

                    {/* Beauty & Makeup */}
                    <li
                        className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                    rounded-md cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSubMenu('beauty')}>
                        <div className='flex items-center justify-center gap-2'>
                            <LiaSmileBeamSolid className=" text-2xl" /> Beauty & Makeup
                        </div>
                        {openItems.beauty ? <BsChevronUp /> : <BsChevronDown />}
                    </li>
                    {/* Sub-items for Beauty & Makeup */}
                    {openItems.beauty && (
                        <ul className="pl-8 flex flex-col">
                            <Link to="/categries/hand-wash" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Hand Wash</Link>

                            <Link to="/categries/face-wash" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Face Wash</Link>

                            <Link to="/categries/tissue-wipes" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Tissue & Wipes</Link>
                        </ul>
                    )}

                    {/* Electronics */}
                    <li
                        className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                    rounded-md cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSubMenu('electronics')}>
                        <div className='flex items-center justify-center gap-2'>
                            <CiPlug1 className="text-2xl" /> Electronics
                        </div>
                        {openItems.electronics ? <BsChevronUp /> : <BsChevronDown />}
                    </li>
                    {/* Sub-items for Electronics */}
                    {openItems.electronics && (

                        <ul className="pl-8 flex flex-col">
                            <Link to="/categries/mobile" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Mobile</Link>
                            <Link to="/categries/laptops" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Laptops</Link>
                        </ul>
                    )}
                    {/* Electronics */}


                    {/* Furniture */}
                    <li
                        className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                    rounded-md cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSubMenu('furniture')}>
                        <div className='flex items-center justify-center gap-2'>
                            <TbWood className="text-2xl" />
                            Furniture
                        </div>
                        {openItems.furniture ? <BsChevronUp /> : <BsChevronDown />}
                    </li>
                    {/* Sub-items for Electronics */}
                    {openItems.furniture && (
                        <ul className="pl-8 flex flex-col">
                            <Link to="/categries/bad" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Bad</Link>
                        </ul>
                    )}

                    {/* Fashion */}
                    <li
                        className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                    rounded-md cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSubMenu('fashion')}>
                        <div className='flex items-center justify-center gap-2'>
                            <GiClothes className="text-2xl" />
                            Fashion
                        </div>
                        {openItems.furniture ? <BsChevronUp /> : <BsChevronDown />}
                    </li>
                    {/* Sub-items for Electronics */}
                    {openItems.fashion && (
                        <ul className="pl-8 flex flex-col">
                            <Link to="/categries/men-faishon" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Men's Fashion</Link>
                            <Link to="/categries/women-faishon" className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                        rounded-md cursor-pointer">Women's Fashion</Link>
                        </ul>
                    )}

                    {/* Bakery */}
                    <li
                        className="py-2 px-4 hover:text-gray-800 hover:scale-105 transition-all duration-300 hover:bg-slate-300
                    rounded-md cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSubMenu('bakery')}>
                        <Link to="/categries/bakery" className='flex items-center justify-center gap-2'>
                            <MdBakeryDining className="text-2xl" />
                            Bakery
                        </Link>
                    </li>
                </ul>


                <Footer />
            </div>


        </div>

    );
};

export default Sidebar;
