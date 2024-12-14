import TodoBox from "./components/todo/TodoBox";
import SignInBox from "./components/user/SignInBox";
import UserBox from "./components/user/UserBox";
import MusicBox from "./components/music/MusicBox";
import { AsciiStar, BackTitle } from "./assets/Background";
import useAuthStore from "./store/authStore";

function App() {
  const { isVerified } = useAuthStore();

  return (
    <>
      <BackTitle />
      <TodoBox />
      {isVerified ? <UserBox /> : <SignInBox />}
      <MusicBox />
      <AsciiStar />
    </>
  );
}

export default App;
