import styled from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Main from './pages/Main';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  console.log('test');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Main />
      </Container>
    </LocalizationProvider>
  );
};

export default App;
