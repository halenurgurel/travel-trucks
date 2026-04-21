import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./layout/Layout.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import AdDetailsPage from "./pages/CatalogDetailsPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<AdDetailsPage />} />
      </Route>
    </Routes>
  );
};
export default App;
