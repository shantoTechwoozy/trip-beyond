import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(
    (option) =>
      option.displayValue.toLowerCase().includes(search.toLowerCase()) ||
      option.value.toLowerCase().includes(search.toLowerCase())
  );

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-left border border-gray-300 px-0 py-2 rounded-md focus:outline-none border-none"
        >
          {selectedOption.displayValue || "Search or select"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <div className="p-2">
            <input
              ref={inputRef}
              placeholder="Search..."
              value={search}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <CommandList style={{ maxHeight: "200px", overflowY: "auto" }}>
            {filteredOptions.length === 0 ? (
              <CommandEmpty>No options found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      setSelectedOption(option);
                      setSearch("");
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedOption.value === option.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.displayValue}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
