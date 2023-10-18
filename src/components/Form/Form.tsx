import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Box,
  Slider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import { ColorPicker } from 'antd';

import { FormStyled } from './Styled/FormStyled';
import { FormProps } from '../../Types';

const Form = ({ handleColorChange, handleBorderRadiusChange }: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading((prev) => !prev);
  };

  return (
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

      <LoadingButton variant='contained' onClick={handleSubmit} loading={isLoading} fullWidth>
        Отправить
      </LoadingButton>

      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          alignSelf: 'start',
        }}
      >
        <ColorPicker size='large' showText onChangeComplete={handleColorChange} />
        <Typography>Primary color</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          alignSelf: 'start',
          width: '100%',
        }}
      >
        <Slider
          max={50}
          min={0}
          valueLabelDisplay='auto'
          onChangeCommitted={handleBorderRadiusChange}
        />
        <Typography noWrap flexShrink={0}>
          Border radius
        </Typography>
      </Box>
    </FormStyled>
  );
};

export default Form;
