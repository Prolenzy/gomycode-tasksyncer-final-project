import { forwardRef, InputHTMLAttributes} from 'react'
import clsx from "clsx"

// Define the props for the Textbox component, extending InputHTMLAttributes
interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string; // Optional label for the input field
    className?: string; // Additional class names for styling
    register?: any; // Adjust this type according to your form library (e.g., React Hook Form)
    error?: string | undefined; // Optional error message
}

// Define the Textbox component using forwardRef to handle ref forwarding
const Textbox = forwardRef<HTMLInputElement, TextboxProps> (
    ({ type, placeholder, label, className, register, name, error }, 
        ref) => {
    return (
        <div className="w-full flex flex-col gap-1">
            {label && <label htmlFor={name} className="text-slate-800">{label}
                </label>}
                <div>
                    <input 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    ref={ref} 
                    {...register}  
                    aria-invalid={error ? "true" : "false"}  
                    className={clsx("bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300", className)}                
                    />
                </div>
                {error && (
                <span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>)}
        </div>
    );
})

export default Textbox;