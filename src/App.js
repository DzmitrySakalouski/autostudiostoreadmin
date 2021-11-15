import { MainNavigator } from "./navigation/main";
import './index.scss'
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>

  );
}

export default App;
