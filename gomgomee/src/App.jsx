import TodoBox from "./todo/components/TodoBox";
import SignInBox from "./user/components/SigninBox";
import UserBox from "./user/components/UserBox";
import MusicBox from "./music/components/MusicBox";
import AsciiStar from "./assets/AsciiStar";
import useAuthStore from "./store/authStore";

function App() {
  const { isVerified } = useAuthStore();

  return (
    <>
      <div style={{ position: "fixed", top: "0", fontSize: "10rem" }}>
        gom gomee 🏠
      </div>
      <TodoBox />
      {isVerified ? <UserBox /> : <SignInBox />}
      <MusicBox />
      <AsciiStar />
    </>
  );
}

export default App;
