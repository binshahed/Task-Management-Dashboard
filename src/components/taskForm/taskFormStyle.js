import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  background-color: #f0f4f8;
`;

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a202c;
  padding: 0.5rem 0;
  @media (max-width:425px) {
    padding: 10px;
    display: grid;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  appearance: none;
  background: transparent;
  border: none;
  width: 100%;
  color: #4a5568;
  margin-right: 0.75rem;
  padding: 0.5rem;
  line-height: 1.5;
  outline: none;
  font-size: 16px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  flex-shrink: 0;
  background-color: #1a202c;
  border: 1px solid #1a202c;
  color: #ffffff;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #2d3748;
    border-color: #2d3748;
  }
`;
