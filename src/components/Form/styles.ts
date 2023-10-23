import styled from 'styled-components';

export const LoginCard = styled.div`
  background: rgba(0, 0, 0, 0.44);
  backdrop-filter: (7.4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.25rem;
  box-shadow: 0 0.4rem 1.875rem rgba(0, 0, 0, 0.1);
  margin: 0 1.25rem;
  padding: 4.3rem 1.875rem 2.75rem;
  text-align: center;
  -webkit-backdrop-filter: blur(7.4px);
  width: 100%;

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 0 0 0.75;
  }

  h3 {
    color: #3E4070;
    margin: 0 0 1.875rem;
    font-weight: 500;
    font-size: 1rem;
  }

  @media (width >= 500px) {
    margin: 0;
    width: 400px
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border: 2px solid #ebebeb;
  font-family: inherit;
  font-size: 1rem;
  padding: 0 1rem;
  border-radius: 1.25rem;
  transition: all 0.375s;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.44);
  }
`;

export const Anchor = styled.a`

`;

export const Button = styled.button`

`;
