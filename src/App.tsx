import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Color } from 'antd/es/color-picker';
import { DEFAULT_PRAIMARY_COLOR, DEFAULT_BORDER_RADIUS } from './utils/constants';

import Main from './pages/Main';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [pickedColor, setPickedColor] = useState(DEFAULT_PRAIMARY_COLOR);
  const [borderRadius, setBorderRadius] = useState(DEFAULT_BORDER_RADIUS);

  // console.log('render');

  const handleToggleDarkMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleColorChange = (value: Color) => {
    // console.log(value.toHexString());
    const hexColor = value.toHexString();
    setPickedColor(hexColor);
  };

  const handleBorderRadiusChange = (
    _event: React.SyntheticEvent | Event,
    value: number | Array<number>,
  ) => {
    // console.log(event);
    // console.log(value);
    const isNumber = typeof value === 'number';

    if (isNumber) setBorderRadius(value);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: pickedColor,
          },
        },
        shape: {
          borderRadius,
        },
      }),
    [mode, pickedColor, borderRadius],
  );

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <CssBaseline />
          <Main
            handleToggleDarkMode={handleToggleDarkMode}
            handleColorChange={handleColorChange}
            handleBorderRadiusChange={handleBorderRadiusChange}
          />
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
