import { MainStyled } from './Styled/MainStyled';
import ButtonBox from '../components/ButtonBox/ButtonBox';
import Form from '../components/Form/Form';
import ToggleColorModeButton from '../components/ToggleColorModeButton/ToggleColorModeButton';

import { MainProps } from '../Types';

const Main = ({ handleToggleDarkMode, handleColorChange, handleBorderRadiusChange }: MainProps) => (
  <MainStyled>
    <ButtonBox />
    <Form
      handleColorChange={handleColorChange}
      handleBorderRadiusChange={handleBorderRadiusChange}
    />
    <ToggleColorModeButton handleToggleDarkMode={handleToggleDarkMode} />
  </MainStyled>
);

export default Main;
