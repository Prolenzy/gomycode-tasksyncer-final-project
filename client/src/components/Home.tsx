import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image
import Reviews from './Reviews';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 mr-2" />
                <span className="text-white text-lg font-semibold">TaskSyncer</span>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/login" className="btn-primary text-gray-50 hover:bg-blue-700 py-2 px-4 rounded">Login</Link>
                <Link to="/register" className="btn-primary text-gray-50 hover:bg-blue-700 py-2 px-4 rounded">Register</Link>
            </div>
        </nav>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center bottom-0 w-full mt-10">
            <div className="container mx-auto">
                <p>&copy; 2024 TaskSyncer. All rights reserved.</p>
            </div>
        </footer>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 py-8">
            <div className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center mb-10" style={{ backgroundImage: "url('iphoto (1).jpg')" }}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div> {/* Overlay to make text readable */}
                <div className="z-10 relative text-center">
                    <h1 className="text-8xl text-white font-bold mb-4 mt-11 text-center">Welcome to TaskSyncer!</h1>
                    <p className='text-xl text-white font-normal mb-8 text-center'>Sychronize your work, become focused, and organized with TaskSyncer task manager</p>
                    <div className='flex flex-col items-center justify-center mb-10'>
                        <Link to="/register" className="bg-blue-500 hover:bg-blue-700 btn-primary font-bold text-gray-50 text-center mb-10 mt-10 py-2 px-4 rounded">Register Now</Link>
                    </div>
                </div>                 
            </div>

                {/* Card List */}
                <div className="flex flex-col md:flex-row gap-4 mb-10">
                    {/* Card 1 */}
                    <div className="bg-gray-200 rounded-lg p-6 flex-1 card shadow-md transition duration-300 transform hover:bg-blue-300 hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-5">Introducing TaskSyncer</h2>
                        <p>TaskSyncer is the ultimate solution to streamline your productivity and conquer your to-do list with ease. It's your personal productivity powerhouse designed to revolutionize the way you work.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-200 rounded-lg p-6 flex-1 card shadow-md transition duration-300 transform hover:bg-blue-300 hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-5">Effortless Task Organization</h2>
                        <p>With TaskSyncer, you can effortlessly organize your tasks, prioritize deadlines, and collaborate seamlessly with your team, whether you're at your desk or on the go.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-200 rounded-lg p-6 flex-1 card shadow-md transition duration-300 transform hover:bg-blue-300 hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-5">Thousands of Satisfied Users</h2>
                        <p>Join thousands of satisfied users who have unlocked their full potential and transformed the way they work. Try TaskSyncer today and take the first step towards a more organized, efficient, and fulfilling work life.</p>
                    </div>
                </div>
            </div>
            <Reviews />
            <Footer />
        </div>
    );
};

export default HomePage;
