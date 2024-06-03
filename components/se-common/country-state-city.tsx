import React, { useState } from 'react';
import { Country, State } from 'country-state-city';
import Dropdown from '@/components/se-common/dropdown';

const CountryAndStateComponent: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState({ value: '', displayValue: '' });
  const [selectedState, setSelectedState] = useState({ value: '', displayValue: '' });

  const countryData = Country.getAllCountries().map(country => ({
    value: country.isoCode,
    displayValue: country.name
  }));

  const stateData = selectedCountry.value ? State.getStatesOfCountry(selectedCountry.value).map(state => ({
    value: state.isoCode,
    displayValue: state.name
  })) : [];

  return (
    <div>
      <div className="mb-4">
        <p>All Countries</p>
        <Dropdown
          options={countryData}
          selectedOption={selectedCountry}
          setSelectedOption={setSelectedCountry}
        />
      </div>
      <div>
        <p>All States of - {selectedCountry.displayValue || 'Select a country'}</p>
        <Dropdown
          options={stateData}
          selectedOption={selectedState}
          setSelectedOption={setSelectedState}
        />
      </div>
    </div>
  );
};

export default CountryAndStateComponent;
