import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* The App component, wrapped in Provider, connects to the Redux store, providing access to its state for all child components, and ultimately renders inside the ‘root’ HTML element
     */}
    <App />
  </Provider>
);
