import cl from './MyInput.module.css';

export const MyInput = (props) => {
  return <input {...props} className={cl.MyInput} type="text" autoComplete="off"></input>;
};
