import cl from './MyBytton.module.css';

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.MyButton}>
      {children}
    </button>
  );
};
