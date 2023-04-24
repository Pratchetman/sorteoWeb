import "./App.css";
import { Formulario } from "./pages/formulario/Formulario";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <div className="app">
          <Formulario />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
