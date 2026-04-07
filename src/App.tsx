import {Suspense} from 'react';
import {RouterProvider} from 'react-router';
import dayjs from 'dayjs';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/GeneralComponents/ErrorFallback';
import Loader from 'components/GeneralComponents/Loader';
import {router} from 'components/GeneralComponents/Routers';
import {OverrideStyles} from 'theme/overrideStyles';

dayjs.locale('uk');

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<Loader />}>
      <OverrideStyles />
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);

export default App;
