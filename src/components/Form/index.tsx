import {
  Anchor,
  Button,
  LoginForm,
  Input,
  LoginCard,
} from './styles';

function Form() {
  return (
    <LoginCard>
      <h2>Login</h2>
      <h3>Entre com suas credências</h3>
      <LoginForm>
        <Input
          placeholder="Usuário"
          type="text"
        />
        <Input
          placeholder="Senha"
          type="password"
        />
        <Anchor href="#">
          Esqueceu sua senha?
        </Anchor>
        <Button>
          LOGIN
        </Button>
      </LoginForm>
    </LoginCard>
  );
}

export default Form;
