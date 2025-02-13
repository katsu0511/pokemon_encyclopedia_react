import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Pokemon from './Pokemon';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error has happened.</p>}>
        <QueryClientProvider client={cli}>
          <Pokemon />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
