import HandleColorChangeType from './HandleColorChangeType';
import HandleBorderRadiusChangeType from './HandleBorderRadiusChangeType';

interface MainProps {
  handleToggleDarkMode?: () => void;
  handleColorChange?: HandleColorChangeType;
  handleBorderRadiusChange?: HandleBorderRadiusChangeType;
}

export default MainProps;
