import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectEconomy() {
  return (
    <Select>
      <SelectTrigger className="w-full lg:w-auto border-2 border-gray-300 md:border-0 hover:border-orange-400 rounded-md p-2 bg-slate-100 md:bg-transparent">
        <SelectValue placeholder="Economy" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Economy</SelectLabel>
          <SelectItem value="1">Premium Economy</SelectItem>
          <SelectItem value="2">Business</SelectItem>
          <SelectItem value="3">First Class</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
