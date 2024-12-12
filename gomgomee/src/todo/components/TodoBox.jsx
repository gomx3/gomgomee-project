import styled from "styled-components";

const TodoBox = () => {
  return (
    <TodoContainer>
      <h3>lalala</h3>
    </TodoContainer>
  );
};

export default TodoBox;

const TodoContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e434c8;
  width: 300px;
  height: 400px;
`;
