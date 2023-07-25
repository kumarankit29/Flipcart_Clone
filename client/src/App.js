import Header from "./component/header/Header";
import HomeScreen from "./component/home/HomeScreen";
import { Box } from "@mui/material";
import ContextProvider from "./context/DataProvider";



function App() {
  return (
    <ContextProvider>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <HomeScreen />
      </Box>
    </ContextProvider>
  );
}

export default App;
