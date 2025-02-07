import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { RouteSoftware } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <RouteSoftware />
    </BrowserRouter>
  )
}
export default App
