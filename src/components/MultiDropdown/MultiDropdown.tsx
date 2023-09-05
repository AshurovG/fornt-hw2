import React, { useState } from 'react';
import './MultiDropdown.css'
import Input from '../Input/Input';
import ArrowDownIcon from '../icons/ArrowDownIcon/ArrowDownIcon';
import { element } from 'prop-types';
import { getValue } from '@testing-library/user-event/dist/utils';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  className,
  options,
  value,
  onChange,
  disabled,
  getTitle,
}) => {
  
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleOptionClick = (option: Option) => {
    const optionIndex = value.findIndex((item) => item.key === option.key);

    if (optionIndex !== -1) {
      const updatedValue: any = value.filter((item) => item.key !== option.key);
      onChange(updatedValue);
    } else {
      const updatedValue: any = [...value, option];
      onChange(updatedValue);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className={className} ref={dropdownRef}>
      <Input
        value={value.length == 0 ? inputValue: getTitle(value)}
        onChange={handleInputChange}
        placeholder={getTitle(value)}
        onFocus={() => {setIsOpen(true);onChange([])}}
        disabled={disabled}
      />
      {isOpen&& !disabled && (
        <div style={{marginTop:'8px',boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)', border: '1px solid #ccc', maxHeight: '200px' }}>
          {filteredOptions.map((option) => (
            <div
              key={option.key}
              className='dropdown-options'
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="checkbox"
                checked={value.some((item) => item.key === option.key)}
                readOnly
              />
              <span style={{ marginLeft: '5px' }}>{option.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;