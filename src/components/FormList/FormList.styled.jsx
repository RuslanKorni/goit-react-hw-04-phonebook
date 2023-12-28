import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: #ffff;
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(236, 230, 230, 0.05)
    ';
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(236, 230, 230, 0.05)';
  &:focus {
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffff;
  padding: 5px 10px 5px;

  background: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2);
  :focus,
  :hover {
    color: #fff;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2);
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
