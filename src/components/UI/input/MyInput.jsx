import cl from './MyInput.module.css';

export const MyInput = ({ type = 'text', autoComplete = 'off', ...props }) => {
  return <input type={type} autoComplete={autoComplete} {...props} className={cl.MyInput}></input>;
};
