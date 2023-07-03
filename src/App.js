import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartWidget } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Productos" />}
        />
         <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Productos"/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
