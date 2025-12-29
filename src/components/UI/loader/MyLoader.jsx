import cl from './MyLoader.module.css';

export const MyLoader = () => {
  return (
    <div className={cl.MyLoader}>
      <div className={cl.MyLoader__content}></div>
    </div>
  );
};
