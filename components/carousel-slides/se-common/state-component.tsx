import React, { useState } from "react";
import { State } from "country-state-city";
import Dropdown from "@/components/carousel-slides/se-common/dropdown";

interface StateComponentProps {
  countryCode?: string;
  selectedState: { value: string; displayValue: string };
  setSelectedState: (option: { value: string; displayValue: string }) => void;
}

const StateComponent: React.FC<StateComponentProps> = ({
  countryCode = "IN",
  selectedState,
  setSelectedState,
}) => {
  const data = State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.isoCode,
    displayValue: `${state.isoCode} - ${state.name}  `,
  }));

  return (
    <Dropdown
      options={data}
      selectedOption={selectedState}
      setSelectedOption={setSelectedState}
    />
  );
};

export default StateComponent;
