import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Pokemon from './Pokemon';
import Loading from './Loading';
import Error from './Error';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>
        <QueryClientProvider client={cli}>
          <Pokemon />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
