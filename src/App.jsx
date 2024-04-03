import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { availableDrinks } from './utils/data';
import { DrinkItem } from './components/DrinkItem';
import { Heading } from '@chakra-ui/react';

export const App = () => {
  const greeting = 'Welcome to our cafe!';
  const [userDrink, setUserDrink] = useState();

  return (
    <div className='app'>
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading size='2xl' fontWeight='medium' mb={2} color='blue.200'>
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
