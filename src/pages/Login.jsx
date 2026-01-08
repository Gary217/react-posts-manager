import { MyButton } from '../components/UI/button/MyButton';
import { MyInput } from '../components/UI/input/MyInput';

export const Login = () => {
  return (
    <section>
      <h1>Welcome Back!</h1>
      <form style={{ display: 'flex', alignItems: 'center', gap: 15, flexDirection: 'column' }}>
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
