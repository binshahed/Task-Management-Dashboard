import styled from "styled-components";
export const StyledTaskListContainer = styled.div`
  margin-top: 0.5rem;
  color: #4a5568;
  font-size: 0.875rem;
`;

export const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f4f8;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export const StyledCheckboxContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #cbd5e0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  ${(props) =>
    props.completed &&
    `
    border-color: #48bb78; 
  `}
`;

export const StyledCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  border-radius: 50%;
`;

export const StyledCheckMark = styled.svg`
  fill: #48bb78;
  width: 0.75rem;
  height: 0.75rem;
`;

export const StyledTaskContent = styled.div`
  flex: 1;
  margin-right: 5px;
  position: relative;
  overflow: hidden;
`;

export const StyledTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  ${(props) =>
    props.completed &&
    `
    text-decoration: line-through;
  `}
`;



export const StyledDescription = styled.p`
  margin: 0.25rem 0 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
export const StyledDate = styled.p`
  margin: 0.25rem 0 0;
  color: #a5a4a4;
`;

export const StyledIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
export const StyleSelect = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
  /* font-size: 1rem; */
  border-radius: 0.25rem;
`;

export const StyledMessage = styled.p`
  font-size: 20px;
  text-align: center;
`;