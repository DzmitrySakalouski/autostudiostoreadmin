import { MainNavigator } from "./navigation/main";
import './index.scss'
import { Provider } from "react-redux";
import { store } from "./store";
import { configureAxios } from "./utils/axios.helper";
import { useEffect } from "react";
import { ErrorToast, InteractionWrapper } from "./components";

function App() {
  useEffect(() => configureAxios(), []);

  return (
    <Provider store={store}>
      <ErrorToast />
      <InteractionWrapper />
      <MainNavigator />
    </Provider>

  );
}

export default App;
