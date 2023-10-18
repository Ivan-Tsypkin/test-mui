import { Button } from '@mui/material';
import { HammerIcon } from '../../icons';
import { ButtonBoxStyled } from './Styled/ButtonBoxStyled';

const ButtonBox = () => (
  <ButtonBoxStyled>
    <Button variant='text'>Прост</Button>
    <Button variant='contained'>Синяя</Button>
    <Button variant='outlined'>В рамке</Button>
    <Button variant='contained' disabled>
      Нельзя
    </Button>
    <Button variant='contained' disabled sx={{ padding: '0' }}>
      <HammerIcon width='20px' />
    </Button>
  </ButtonBoxStyled>
);

export default ButtonBox;
