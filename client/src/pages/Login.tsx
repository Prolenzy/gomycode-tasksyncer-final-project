import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Textbox from '../components/Textbox';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

// Define the shape of form data
interface FormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // Use RootState type to specify the type of user
    const { user }: {user: RootState['auth']['user'] } = useSelector((state: RootState) => state.auth); //Assuming the user is a string

    // Initialize react-hook-form useForm hook with FormData as generic type
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const navigate = useNavigate();

     // Handle form submission
    const submitHandler = async (data: FormData) => {
        console.log("submitted data:", data)
    };
     
    // Redirect user to dashboard if already logged in
    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gray-100'>
        <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
            {/* {<left side/>} */}
            <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
                {/* <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>                    
                    <p>Introducing TaskSyncer, the ultimate solution to streamline your productivity and conquer your to-do list with ease. TaskSyncer is not just another task management app – it's your personal productivity powerhouse designed to revolutionize the way you work.</p>
                    <p>With TaskSyncer, you can effortlessly organize your tasks, prioritize deadlines, and collaborate seamlessly with your team, whether you're at your desk or on the go.</p>
                    <p>Join thousands of satisfied users who have unlocked their full potential and transformed the way they work. Try TaskSyncer today and take the first step towards a more organized, efficient, and fulfilling work life.</p>
                </div> */}
                {/* {right side} */}
                <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
                    <form onSubmit={handleSubmit(submitHandler)} className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'>
                        <div>
                            <p className='text-blue-600 text-3xl font-semibold text-center'>Welcome Back!</p>
                            <p className='text-center text-base text-gray-700'>Keep all your credentials safe!</p>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            <Textbox
                            placeholder="email@example.com"
                            type="email"
                            name="email"
                            label="Email Address"
                            className="w-full rounded-full"      
                            register={register("email", {
                                required: "Email Address is required!",
                            })} 
                            error={errors.email ? errors.email.message : ""}                     
                            />
                              <Textbox
                            placeholder="Your Password"
                            type="password"
                            name="password"
                            label="Password"
                            className="w-full rounded-full"      
                            register={register("password", {
                                required: "Password is required!",
                            })} 
                            error={errors.password ? errors.password.message : ""}                     
                            />

                            <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>Forget Password?</span>

                            <Button 
                            type="submit"
                            label="Submit"
                            className="w-full h-10 bg-blue-700 text-white rounded-full"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>    
  );
};

export default Login;