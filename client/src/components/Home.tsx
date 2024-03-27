import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 mr-2" />
                <span className="text-white text-lg font-semibold">TaskSyncer</span>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/login" className="btn-primary text-gray-50">Login</Link>
                <Link to="/register" className="btn-primary text-gray-50">Register</Link>
            </div>
        </nav>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
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
                <h1 className="text-4xl font-bold mb-2 mt-11 text-center">Welcome to TaskSyncer!</h1>
                <p className='text-xl font-normal mb-8 text-center'>Sychronize your work and become focused and organized with TaskSyncer task manager</p>

                {/* Card List */}
                <div className="flex flex-col md:flex-row gap-4">
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
            <Footer />
        </div>
    );
};

export default HomePage;
