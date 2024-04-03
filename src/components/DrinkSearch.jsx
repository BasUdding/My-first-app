import { useState } from 'react';
import { TextInput } from './UI/TextInput';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchfield] = useState('');

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => setSearchfield(event.target.value);
  return (
    <>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
