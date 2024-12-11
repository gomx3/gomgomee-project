import styled from "styled-components";
import MovieBox from "./movie/components/MovieBox";
import TodoBox from "./todo/components/TodoBox";
import UserBox from "./user/components/UserBox";
import AsciiStar from "./assets/asciistar";

function App() {
  return (
    <>
      <h2>gomgomee...🗯️</h2>
      <TodoBox />
      <UserBox />
      <MovieBox />
      <AsciiStar />
    </>
  );
}

export default App;