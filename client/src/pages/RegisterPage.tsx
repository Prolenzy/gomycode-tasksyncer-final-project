import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gray-100'>
            {/* Your UI code here */}
            <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
                {/* Left side */}
                <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
                    {/* Content */}
                </div>
                {/* Right side */}
                <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold text-center'>Register</h1>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

