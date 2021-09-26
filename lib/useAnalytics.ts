import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Fathom from 'fathom-client';

import { FATHOM_SITE_ID } from './utils/const';

const useAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    Fathom.load(FATHOM_SITE_ID, {
      includedDomains: ['www.markozxuu.com'],
    });
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useAnalytics };
