import './App.css';
// import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
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
    <QueryClientProvider client={cli}>
      <Pokemon />
    </QueryClientProvider>
  );
}

export default App;
