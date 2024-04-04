import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gray-100'>
            {/* UI code here */}
             
                <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold text-center'>Register</h1>
                    <RegisterForm />
                </div>
             
         </div>
    );
};

export default RegisterPage;

