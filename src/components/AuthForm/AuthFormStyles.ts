import styled from 'styled-components';

interface StyledButtonProps {
  active?: boolean;
  'data-active'?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: linear-gradient(135deg, #07a3b2, #d9ecc7);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 300px;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 280px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #07a3b2;
    box-shadow: 0 0 5px rgba(7, 163, 178, 0.5);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #07a3b2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  transition: background 0.3s ease;

  &:hover {
    background: #059da1;
  }

  &:active {
    background: #057b85;
  }
`;

export const BtnAuthForm = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 10px;
  color: ${({ 'data-active': active }) => (active === 'true' ? 'white' : 'black')};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;
