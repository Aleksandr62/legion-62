import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  min-height: 300px;
  @media (max-width: 850px) {
    padding: 20px;
    min-height: 30vh;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
`;
const Subtotal = styled.div`
  margin-bottom: 20px;
  > span {
    font-size: 14px;
    color: #888;
    margin-right: 15px;
  }
`;

const Spacer = styled.span`
  color: ${(props) => props.color};
  margin: 0 10px;
`;

export const Test = () => {
  return (
    <Wrapper>
      <RightSide>RightSide</RightSide>
      <Subtotal>Subtotal</Subtotal>
      <Spacer color={"red"}>&raquo;</Spacer>
    </Wrapper>
  );
};
