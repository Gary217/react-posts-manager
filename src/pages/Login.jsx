import { useContext } from 'react';
import { MyButton } from '../components/UI/button/MyButton';
import { MyInput } from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <section>
      <h1>Welcome Back!</h1>
      <form
        onSubmit={login}
        style={{ display: 'flex', alignItems: 'center', gap: 15, flexDirection: 'column' }}
      >
        <MyInput autoComplete="username" placeholder="Email or username..." name="login"></MyInput>
        <MyInput
          type="password"
          autoComplete="current-password"
          placeholder="Password..."
          name="password"
        ></MyInput>
        <MyButton>Sign In</MyButton>
      </form>
    </section>
  );
};
