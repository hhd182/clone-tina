import './main_login.scss'
import FormLogin from './formlogin';
import FormRegis from './formregis';
import logo from '../../assets/img/logo.png'
import { useState } from 'react';

function MainLogin() {

    const [isLoggedIn, setChange] = useState(false);
    console.log(isLoggedIn);

    return (
        <>
            <div className="container-login relative flex items-center justify-center min-h-full min-w-full">
                <div className="form-container ">
                    <div className="form">
                        <div className="container-login relative flex items-center justify-center min-h-full min-w-full">
                            <div className="flex gap-x-32">

                                {!isLoggedIn ? <FormLogin handleChange={setChange} isLoggedIn={isLoggedIn} /> : <FormRegis handleChange={setChange} isLoggedIn={isLoggedIn} />}

                                <div className="text-title">
                                    Mapping Your
                                    <br />
                                    Success
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-4 right-4 w-fit'>
                    <a href="/about">
                        <img className='logo-login' src={logo} alt="Tina Soft logo" loading='lazy' />
                    </a>
                </div>
                <div className='absolute left-0 bottom-7 pl-5 pr-5 text-blue-400 w-full text-base flex justify-between'>
                    <a href="https://tinasoft.vn/vi/">Powered by Tinasoft</a>
                    <a href="https://tinasoft.vn/vi/">© 2023 TINASOFT VIỆT NAM</a>
                </div>
            </div>
        </>
    )
}




export default MainLogin;