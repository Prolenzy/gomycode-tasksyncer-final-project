// import React from 'react'
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";
import { RootState } from "../redux/store";

const UserAvatar: React.FC = () => { // Define UserAvatar component with React.FC type
    const [open, setOpen] = useState<boolean>(false); // Specify type boolean for state variables
    const [openPassword, setOpenPassword] = useState<boolean>(false);
    const { user } = useSelector((state: RootState) => state.auth); // Specify RootState type for state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        console.log("logout")
    };

  return (
    <>
    <div>
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
                    <span className="text-white font-semibold">{getInitials(user?.name)}</span>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-gray-10 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                    <div className="p-4">
                        <Menu.Item>
                            {({active}) => (
                                <button onClick={() => setOpen(true)}
                                className="text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base">
                                    <FaUser className="mr-2" aria-hidden="true" />
                                    Profile
                                </button>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({active}) => (
                                <button onClick={() => setOpenPassword(true)}
                                className="text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base">
                                    <FaUserLock className="mr-2" aria-hidden="true" />
                                    Change Password 
                                </button>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({active}) => (
                                <button onClick={ logoutHandler }
                                className="text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base">
                                    <IoLogInOutline className="mr-2" aria-hidden="true" />
                                    Logout 
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
    </>
  )
}

export default UserAvatar;