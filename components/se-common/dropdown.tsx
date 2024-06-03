import React, { useState, useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownProps {
  options: { value: string; displayValue: string }[];
  selectedOption: { value: string; displayValue: string };
  setSelectedOption: (option: { value: string; displayValue: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.displayValue.toLowerCase().includes(search.toLowerCase())
      )
    );
    setIsDropdownOpen(search.length > 0);
  }, [search, options]);

  const handleOptionClick = (option: {
    value: string;
    displayValue: string;
  }) => {
    setSelectedOption(option);
    setSearch(""); // Reset search input after selection
    setIsDropdownOpen(false);
  };

  const handleClear = () => {
    setSearch("");
    setSelectedOption({ value: "", displayValue: "" }); // Clear selected option
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            value={search || selectedOption.displayValue}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mt-4 text-left border-none focus-visible:ring-transparent"
            placeholder="Search or select"
          />
          {search && (
            <button
              className="absolute right-2 top-2 text-gray-500 cursor-pointer text-xl"
              onClick={handleClear}
            >
              &times;
            </button>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              onSelect={() => handleOptionClick(option)}
            >
              {option.displayValue}
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem disabled>No options found</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
