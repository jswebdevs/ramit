import React from 'react';
import { useAdminAuth } from '../providers/AdminAuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const AccountPage = ( {children} ) => {

    const {admin, signingOut, loggedIn} = useAdminAuth();
    const navigate = useNavigate();

 
    const logOut = ()=> {
        signingOut();
        navigate("/");
    }


    return (
        <div>
            {
                loggedIn?
                <>Welcome to RAM IT. 
                <button className='btn btn-accent cursor-pointer' onClick={()=>logOut()}>Log Out</button></>:
                navigate("/")
            }
        </div>
    );
};

export default AccountPage;