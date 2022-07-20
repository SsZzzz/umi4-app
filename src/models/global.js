import { useEffect, useState } from 'react';
import { history, useAppData } from 'umi';

export default () => {
  const { basename, routes, routeComponents } = useAppData();
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const unListen = history.listen(({ location }) => {
      const pathname = location.pathname.replace(basename, '');
      const tabId = tabs.find((obj) => obj.path === pathname)?.id;
      if (!tabId) {
        const route = Object.keys(routes)
          .map((key) => routes[key])
          .filter((obj) => obj.title)
          .find((obj) => obj.path === pathname);
        if (route)
          setTabs((tabs) => [
            ...tabs,
            { ...route, component: routeComponents[route.id] },
          ]);
      }
    });
    return () => {
      unListen();
    };
  }, [tabs]);

  useEffect(() => {
    const pathname = window.location.pathname.replace(basename, '');
    history.push(pathname);
  }, []);

  return {
    tabs,
    setTabs,
  };
};
