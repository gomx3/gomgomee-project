import styled from "styled-components";

const TodoBox = () => {
    return (
        <TodoConatiner>
            <h3>lalala</h3>
        </TodoConatiner>
    )
}

export default TodoBox;

const TodoConatiner = styled.div`
    position: fixed;
    top: 15%;
    left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e434c8;
    width: 300px;
    height: 400px;
`