import styled from 'styled-components';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ILoginInput } from '../../common/interfaces';

export const LoginTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: '${(props) => props.theme.fonts.bold}';
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
  }
`;
export const LoginWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 576px;
  padding: 0 15px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
export const LoginInputStyled = styled.div`
  align-self: stretch;
  position: relative;
  .input {
    width: 100%;
    outline: none;
    box-sizing: border-box;
    font-family: '${(props) => props.theme.fonts.medium}';
    font-size: 0.9rem;
    padding: 10px 10px 10px 15px;
    margin-bottom: 40px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid black;
  }
  .error-message {
    padding: 10px 0;
    color: ${(props) => props.theme.colors.error};
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.fonts.bold};
    position: absolute;
    bottom: 5px;
  }
`;
export const LoginBtn = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  text-align: center;
  padding: 10px 25px;
  @media screen and (max-width: 576px) {
    font-size: 0.9rem;
  }
`;
export const LoginInput: React.FC<ILoginInput> = ({ control, name, placeholder, type }) => {
  return (
    <LoginInputStyled>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, value, onChange }, fieldState: { error } }) => {
          return (
            <div>
              <input
                className="input"
                value={value}
                ref={ref}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
              />
              <p className="error-message" style={{ display: `${error ? 'block' : 'none'}` }}>
                {error?.message}
              </p>
            </div>
          );
        }}
      />
    </LoginInputStyled>
  );
};
