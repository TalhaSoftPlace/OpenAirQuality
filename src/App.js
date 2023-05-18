import { Home } from './pages'
import { QueryClient, QueryClientProvider } from 'react-query';
import 'semantic-ui-css/semantic.min.css'


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    
  );
}

export default App;
