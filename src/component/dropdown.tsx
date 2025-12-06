import { useState, useRef, useEffect } from "react";

interface DropdownProps {
    options: string[];
    placeholder?: string;
}

export default function Dropdown({ options, placeholder = "Select an option" }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !(event.target instanceof Node && dropdownRef.current.contains(event.target))) {
            setIsOpen(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center font-[Arial] justify-between w-full px-4 py-3 text-lg sm:text-2xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)] lg:text-4xl text-left bg-white border border-gray-300 rounded-md focus:outline-none"
        >
            <span className={`${selected ? "text-gray-900" : "text-gray-500"}`}>
            {selected || placeholder}
            </span>
            <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        {isOpen && (
            <ul className="absolute left-0 z-10 w-full mt-1 overflow-auto font-[Arial] bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
            {options.map((name: string, index: number) => (
                <li
                key={index}
                className="px-4 py-5 text-lg cursor-pointer sm:text-2xl text-[rgba(0,0,0,0.65)] hover:bg-gray-100 lg:text-4xl font-[Arial]"
                onClick={() => {
                    setSelected(name);
                    setIsOpen(false);
                }}
                >
                {name}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
    }
