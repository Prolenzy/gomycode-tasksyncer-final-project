import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Textbox from '../components/Textbox';

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [formError, setFormError] = useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        if (data.password !== data.confirmPassword) {
            setFormError("Passwords do not match");
            return;
        }
        // Here you can perform registration logic
        console.log(data);
        navigate('/login'); // Redirect to login page after successful registration
    };

    return (
        <div className='w-full md:w-100 p-4 md:p-1 flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto mt-1 form-container md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14">
            <div>
                <h1 className='text-blue-600 text-2xl font-semibold text-center mb-2'>Welcome to TaskSyncer!</h1>                                
            </div>
            <div className="mb-2">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                <Textbox
                    type="text"
                    className="w-full rounded-full"
                    id="username"
                    placeholder="Enter your username"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <Textbox
                    type="email"
                    className="w-full rounded-full"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <Textbox
                    type="password"
                    className="w-full rounded-full"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <div className="mb-2">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                <Textbox
                    type="password"
                    className="w-full rounded-full"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", { required: "Please confirm your password" })}
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </div>
            {formError && <p className="text-red-500 mb-6">{formError}</p>}
            <Button type="submit" label="Register" className="btn-primary w-full h-10 bg-blue-700 text-white rounded-full" />
        </form>
        </div>
    );
};

export default RegisterForm;
