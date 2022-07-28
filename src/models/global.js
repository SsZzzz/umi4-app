import { useState } from 'react';

export default () => {
  const [tabs, setTabs] = useState([]);

  return {
    tabs,
    setTabs,
  };
};
