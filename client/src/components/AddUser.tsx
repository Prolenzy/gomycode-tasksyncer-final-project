import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";

interface UserData {
  name: string;
  title: string;
  email: string;
  role: string;
}

interface AddUserProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData?: UserData | null;
}

const AddUser: React.FC<AddUserProps> = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserData>({ defaultValues });

  const handleOnSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      // Simulate loading state
      // Set isLoading to true to show loader
      setIsLoading(true);

      // Perform API call or any asynchronous operation to submit data
      // For demonstration, here we're just logging the submitted data
      console.log("Submitted data:", data);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset the form after successful submission
      reset();

      // Close the modal
      setOpen(false);
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      // Set isLoading to false to hide loader after operation completes
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='Full name'
              type='text'
              name='name'
              label='Full Name'
              className='w-full rounded'
              register={register("name", {
                required: "Full name is required!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder='Title'
              type='text'
              name='title'
              label='Title'
              className='w-full rounded'
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder='Email Address'
              type='email'
              name='email'
              label='Email Address'
              className='w-full rounded'
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox
              placeholder='Role'
              type='text'
              name='role'
              label='Role'
              className='w-full rounded'
              register={register("role", {
                required: "User role is required!",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
            <Button
              type='submit'
              className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
              label='Submit'
            />

            <Button
              type='button'
              className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
              onClick={() => setOpen(false)}
              label='Cancel'
            />
          </div>
        </form>
      </ModalWrapper>

      {/* Loading spinner */}
      {isLoading && <Loading />}
    </>
  );
};

export default AddUser;
