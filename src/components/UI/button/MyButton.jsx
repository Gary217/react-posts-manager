import cl from './MyButton.module.css';

export const MyButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${cl.MyButton} ${className}`}>
      {children}
    </button>
  );
};
