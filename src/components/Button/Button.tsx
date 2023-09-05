// import React from 'react';
// import './Button.css'
// import Loader from '../Loader'

// export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   /** Состояние загрузки */
//   loading?: boolean;
//   /** Текст кнопки */
//   children: React.ReactNode;
//   className?: string;
//   disabled?: Boolean;
//   onClick?: (e: React.MouseEvent) => Function;
// };

// const Button: React.FC<ButtonProps> = ({loading, children, className, disabled, onClick, ...props} ) => {
//   let classes: string = 'btn'
//   return (
//     <button onClick={onClick}  {...props} className={className ? `${classes} ${className}` : classes } data-testid="button" disabled={disabled || loading}>{loading && <Loader color='#fff' className='loader' size='s'/>}{children}</button>
//   )
// };

// export default Button;

import React from 'react';
import classNames  from 'classnames';
import Loader from '../Loader/Loader';
import Text from '../Text/Text';
import './Button.css'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  state?: boolean
};

const Button: React.FC<ButtonProps> = ({children, onClick, className, disabled, state, loading,  ...rest }) => {
  
  const classes = classNames(
    'btn',
    className,
    {
      loading: loading,
      disableStatus: disabled
    }
  )
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading||disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };
  return(
    <button  data-testid="button" className={classes} disabled={loading||disabled} onClick={handleClick} {...rest}>
      {loading ? <Loader className='button-loader' size="s"/> : <></>}
      <Text className='button-text'>{children}</Text>
    </button>
  )
};

export default Button;
