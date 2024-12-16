import TodoBox from "./components/todo/TodoBox";
import SignInBox from "./components/user/SignInBox";
import UserBox from "./components/user/UserBox";
import MusicBox from "./components/music/MusicBox";
import useAuthStore from "./store/authStore";

const MainPage = () => {
  const { isVerified } = useAuthStore();

  return (
    <main>
      <TodoBox />
      {isVerified ? <UserBox /> : <SignInBox />}
      <MusicBox />
    </main>
  );
};

export default MainPage;
