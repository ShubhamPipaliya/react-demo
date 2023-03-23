import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AppBody } from '../Components/ContentArea/AppBody';
import { AppGrid } from '../Components/ContentArea/AppGrid';
import { AppBar } from '../Components/ContentArea/AppBar';
import { AppContent } from '../Components/ContentArea/AppContent';
import { NavBar } from '../Components/ContentArea/NavBar';
import { Footer } from '../Components/Footer/Footer';
import SideBar from '../Components/ContentArea/SideBar';


export const HomeLayout = () => {
    // let user = localStorage.getItem('user');
    const [openSidebar, setOpenSidebar] = useState(false);
    const showSiderBar = () => {
        setOpenSidebar(!openSidebar)
    }
    // if (!user) {
    //     return <Navigate to="/login" />;
    // }
    return (
        <>
            <AppBar onhandllesidebar={showSiderBar} opensidebar={openSidebar} />
            <AppBody>


                <SideBar opensidebar={openSidebar} />
                <AppGrid>
                    <div className='flex-auto'>
                        {/* <NavBar /> */}
                        <AppContent>
                            <Outlet />
                        </AppContent>
                    </div>
                    <Footer />
                </AppGrid>
            </AppBody>

        </>
    );
};