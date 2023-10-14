"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";

interface InputProps{
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
    return (
        <form className="bg-black/40 rounded-md p-3 flex items-center w-full md:w-2/4 order-2 md:order-1">
            <input
             type="text"
             placeholder="Search City"
             className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
             onKeyDown={handleSearch}
             onChange={(e) => setLocation(e.target.value)}
            />
            <MagnifyingGlass className="ml-[-25px]" size={22} color="white"/>
        </form>
        
     );
}
 
export default Input;