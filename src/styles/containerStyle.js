import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  overflow-x: hidden;
  margin-top: 100px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    display: flex;
    padding: 0 1rem;
  }
`;

export const StyledCard = styled.div`
  width: 100%;
  max-width: 48rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
`;