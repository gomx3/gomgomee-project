import styled from "styled-components";

const MovieBox = () => {
  return (
    <MovieContainer>
      <h3>mmm</h3>
    </MovieContainer>
  );
};

export default MovieBox;

const MovieContainer = styled.div`
  position: fixed;
  top: 73%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100px;
  height: 400px;
`;
