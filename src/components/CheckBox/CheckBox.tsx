import React, { useState } from 'react';
import CheckIcon from '../icons/CheckIcon/CheckIcon';
import './Checkbox.css'

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
  disabled?: Boolean;
  className?: string
  checked?: Boolean
};

const CheckBox: React.FC<CheckBoxProps> = ({checked, onChange, disabled, className, ...rest}) => {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(checked)
  const handler = (): void => {
    setIsCheckboxClicked(!isCheckboxClicked)
    if(isCheckboxClicked !== undefined) onChange(!isCheckboxClicked)
    else onChange(false)
    console.log(isCheckboxClicked)
  }
  return (
    <label className={disabled === false || disabled === undefined ? className + " custom-checkbox_enable" : className + ' custom-checkbox_disable'}>
      <input className='checkbox' disabled={disabled} checked={checked} type='checkbox' data-testid="checkbox" onClick={handler} {...rest}/>
      {(isCheckboxClicked) && < svg className='fake' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path id="vector" d="M6.66663 19.3548L16.4625 30L33.3333 11.6667" stroke={disabled ? '#00000033' : '#518581' } stroke-width="3.33333"/>
      </svg>}
    </label>
  )
};

export default CheckBox;