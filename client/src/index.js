// import ReactDOM from "react"; //! older version - before React 18
import { StrictMode } from "react"; //* New Version
import { createRoot } from "react-dom/client"; //* New Version

import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root")); //! older version - before React 18
//* New Version
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
