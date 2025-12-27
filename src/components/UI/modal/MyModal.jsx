import cl from './MyModal.module.css';

export const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.MyModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.MyModal__content} onClick={(e) => e.stopPropagation()}>
        {/* stopPropagation - предотвращает всплытие события, чтобы не закрывать модалку при клике на неё же */}
        {children}
      </div>
    </div>
  );
};
