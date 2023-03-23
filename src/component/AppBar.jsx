import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import profileimg from '../../Images/administrator-male.png';


export const AppBar = ({ onhandllesidebar, opensidebar }) => {
    const navigate = useNavigate();
    const btnRef = useRef();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState();
    const profileoptions = [
        { id: 1, name: 'Edit Profile', value: 'editprofile' },
        { id: 2, name: 'Logout', value: 'logout' },
    ];

    const onOptionClicked = (data) => {
        setSelectedOption(data.value);
        if (data.value === 'logout') {

            navigate('/login');
        }
        if (data.value === 'editprofile') {
            navigate('/editing');
        }
    };
    useEffect(() => {
        const handleClicksOutside = (event) => {
            if (!btnRef?.current?.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClicksOutside);
        // cleanup this component
        return () => {
            document.removeEventListener('click', handleClicksOutside);
        };
    }, [btnRef]);

    return (
        <>

            <div className="flex items-center justify-between  border-b border-light-gray header">
                <div>
                    <div className='flex flex-row items-center header-first'>
                    <button class="inline-block align-middle py-3 px-5 text-lg leading-none text-white  rounded-full  bg-white-200  focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                    <p className='ml-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, enim!</p>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-row'>
                <div className={`text-white text-xl font-bold`}>
                    <div className="text-left text-white bg-white-200 py-4 px-6 rounded-lg ">
                        <div ref={btnRef} onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center cursor-pointer">
                            {/* <img src={profileimg} alt="profile" width={20} height={20} className="rounded-full bg-body mr-2" /> */}
                            <span className="hidden lg:block mr-3 text-sm text-white">RU</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        {dropdownOpen && (
                            <ul className="text-white text-xl font-bold absolute dropdown-menu  py-2 w-48 mt-4 right-0 bg-white shadow-main border border-skin-main rounded-md z-10 divide-y">
                                {profileoptions.map((option, i) => (
                                    <li onClick={() => onOptionClicked(option)} key={i} id={i} className={`flex items-center cursor-pointer px-4 py-2 text-sm capitalize hover:text-primary text-skin-main ${selectedOption === option.name && 'text-black'}`}>
                                        {
                                            option.name === 'Edit Profile' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                </svg>

                                        }
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={`block lg:hidden toggle menu cursor-pointer ${opensidebar ? 'ml-52 lg:ml-0' : ''}`} onClick={onhandllesidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center justify-end space-x-4'>
                    <div className={`block lg:hidden toggle menu cursor-pointer ${opensidebar ? 'ml-52 lg:ml-0' : ''}`} onClick={onhandllesidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <button class="inline-block align-middle py-3 px-5 text-lg leading-none text-white  bg-white-200  focus:outline-none">
                       Button 1
                    </button>
                    <button class="inline-block align-middle py-3 px-5 text-lg leading-none text-white  bg-white-200  focus:outline-none">
                       Button 2
                    </button>

                    {/* <button class="inline-block align-middle py-4 px-6 text-lg leading-none text-warning text-xl    bg-white-200  focus:outline-none ">Button 2</button> */}


                </div>
                </div>
            </div>
        </>
    );
}