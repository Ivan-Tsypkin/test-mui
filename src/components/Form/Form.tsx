import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { FormStyled } from './Styled/FormStyled';

const Form = () => (
  <FormStyled>
    <TextField label='Имя' variant='outlined' fullWidth />
    <TextField label='Фамилия' variant='outlined' fullWidth />

    <FormControl fullWidth>
      <InputLabel id='pats-select-label'>Домашнее животное</InputLabel>
      <Select labelId='pats-select-label' id='pats-select' label='Домашнее животное' fullWidth>
        <MenuItem value='Кошка'>Кошка</MenuItem>
        <MenuItem value='Собака'>Собака</MenuItem>
        <MenuItem value='Все'>Все</MenuItem>
      </Select>
    </FormControl>

    <DatePicker label='Дата рождения' sx={{ width: '100%' }} />

    <Button variant='contained'>Отправить</Button>
  </FormStyled>
);

export default Form;
