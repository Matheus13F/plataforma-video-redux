import { Provider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/Player";

export function App() {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  );
}
