import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState('UMI Max');

  return {
    name,
    setName,
  };
};

export default useUser;
