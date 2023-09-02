import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import ProfessorAllocationRouter from './Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ProfessorAllocationRouter />
  </ChakraProvider>
);
