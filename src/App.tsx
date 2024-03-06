// import { Provider } from "react-redux";
// import { store } from "./store";
import { Player } from "./pages/Player";

export function App() {
  return (
    // <Provider store={store}> redux necessita o provider com a store, mas zustand nao
    <Player />
    // </Provider>
  );
}
