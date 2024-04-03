import { Input } from '@chakra-ui/react';

export const TextInput = ({ changeFn }) => {
  <Input
    placeholder='Search for your drink'
    size='lg'
    htmlSize={50}
    width='auto'
    onChange={changeFn}
  />;
};
