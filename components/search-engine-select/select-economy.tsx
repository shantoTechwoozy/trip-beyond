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
      <SelectTrigger>
        <SelectValue placeholder="Economy" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Passengers</SelectLabel>
          <SelectItem value="1">1 Adult</SelectItem>
          <SelectItem value="2">2 Adults</SelectItem>
          <SelectItem value="3">3 Adults</SelectItem>
          <SelectItem value="4">4 Adults</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
