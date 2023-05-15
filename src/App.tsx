import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkMode, lightMode } from "./theme";
import { isDarkState } from "./atoms";
import GlobalStyle from "./GlobalStyle";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import DarkMode from "./components/DarkMode";

function App() {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkMode : lightMode}>
      <DarkMode />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
