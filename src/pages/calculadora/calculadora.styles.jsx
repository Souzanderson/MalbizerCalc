import styled from "styled-components";
import { theme } from "../../styles";

export const Struct = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Fuze = styled.div`
  width: 450px;
  height: 600px;
  background: ${theme.primary};
  border: 12px outset ${theme.primary};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Malbizer = styled.div`
  font-size: 30px;
  color: #efefef;
  width: 94%;
  text-align: right;
  padding: 4px;
  margin-right: 8px;
`;

export const Display = styled.div`
  font-family: Digital7;
  width: auto;
  height: 50px;
  margin: 12px;
  border: 12px ridge ${theme.primaryContrast};
  background: ${theme.primaryContrast};
  color: ${theme.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  font-size: 50px;
`;

export const ButtonsStruct = styled.div`
  width: auto;
  height: 340px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px;
  margin-top: 12px;
`;

export const ButtonItem = styled.div`
  grid-column-start: ${props => props ? props.cstart : 'unset'};
  grid-column-end: ${props => props ? props.cend : 'unset'};
  border: 6px outset #0b2228;
  height: 70px;
  background: #0b2228;
  color: #efefef;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;
