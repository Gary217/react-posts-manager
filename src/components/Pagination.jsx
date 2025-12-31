import { MyButton } from './UI/button/MyButton';
import cl from './Pagination.module.css';

export const Pagination = ({ pagesArr, pageNumber, changePage }) => {
  return (
    <section className={cl.Pagination}>
      {pagesArr.map((p) => (
        <MyButton
          className={p === pageNumber ? cl.pageActive : ''}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </MyButton>
      ))}
    </section>
  );
};
