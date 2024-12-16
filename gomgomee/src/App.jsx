import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import MainPage from "./MainPage.jsx";
import SignUpPage from "./components/user/SignUpPage.jsx";
import { AsciiStar, BackTitle } from "./components/Background.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <BackTitle />
      <RouterProvider router={router} />
      <AsciiStar />
    </>
  );
}

export default App;
