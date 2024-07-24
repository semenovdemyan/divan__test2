import React, { useState } from 'react';
// Стили допишу чуть позже, проверю ещё раз округление
import '../components/counter.css';
export const Counter = ({ min, max }) => {
  const [value, setValue] = useState('');

  const formatNumber = (num) => {
    if (num.length <= 5) return num;
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    if (
      inputValue === '' ||
      (parseInt(inputValue, 10) >= min && parseInt(inputValue, 10) <= max)
    ) {
      setValue(e.target.value.includes('-') ? `-${inputValue}` : inputValue);
    }
  };

  const handleBlur = () => {
    setValue(formatNumber(value));
  };
// Отступы до нормального состояния довёл методом подбора, но так и не разобрался, как сделать их в соответствии с макетом 20рх.
// уже когда сделал это, нашёл адекватное решение тут: https://dev.to/matrixersp/how-to-make-an-input-field-grow-shrink-as-you-type-513l
  return (
    <div className="input__container">
      <input
        required
        id="input1"
        className="cost__input"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          width: `${value.length > 5 ? (value.length + 1) * 22 : 20}px`,
          padding: `${value.length > 6 ? 20 : 20}px`,
        }}
      />
      <label htmlFor="#input1" className="placeholder">
        Плейсхолдер
      </label>
    </div>
  );
};
