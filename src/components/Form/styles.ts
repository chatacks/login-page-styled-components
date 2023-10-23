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
    font-weight: 500;
    font-size: 1rem;
    margin: 0 0 1.875rem;
  }

  @media (width >= 500px) {
    margin: 0;
    width: 400px
  }
`;

export const LoginForm = styled.form`
  display: grid;
  gap: 1rem;
  margin: 0;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 1.25rem;
  border: 2px solid #ebebeb;
  font-family: inherit;
  font-size: 1rem;
  height: 3.125rem;
  padding: 0 1rem;
  transition: all 0.375s;
  width: 100%;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.44);
  }
`;

export const Anchor = styled.a`
  color: #3E4070;
  margin-bottom: 6px;
  transition: all 0.375s;
  text-align: left;

  &:hover {
    color: #343771;
  }
`;

export const Button = styled.button`
  border-radius: 1.25rem;
  border: 1px solid #ccc;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  height: 3.125rem;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.375s;
  width: 100%;

  &:hover {
    background: #3E4070;
  }
`;
