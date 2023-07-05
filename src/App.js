import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

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
          path="/itemy/:id"
          element={<ItemListContainer greeting="Productos"/>}
        />
        <Route
          path="/"
          element={<ItemDetailContainer/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
