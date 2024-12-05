import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd';

const predefinedOptions = [
  'IBM',
  'TSCO.LON',
  'RELIANCE.BSE',
  '600104.SHH',
  '000002.SHZ',
  'GPV.TRV',
  'MBG.DEX'
];

const SearchBar: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  // Function to filter options based on search text
  const filterOptions = (searchText: string) => {
    const filteredOptions = predefinedOptions
      .filter(option => option.toLowerCase().includes(searchText.toLowerCase()))
      .map(option => ({ value: option }));
    setOptions(filteredOptions);
  };

  return (
    <div>
      <AutoComplete
        options={options}
        style={{ width: 200, border: 'none' }} 
        onSearch={filterOptions}
        onSelect={globalThis.console.log}
        dropdownStyle={{ fontSize: '1.135rem' }} 
      >
        <Input
          placeholder="Stocks"
          style={{
            fontSize: '1.135rem',  
            border: 'none',
            backgroundColor: 'transparent'
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default SearchBar;
