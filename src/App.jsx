import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import ShoeDetail from "./pages/ShoeDetail";
import BasketList from "./pages/BasketList";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/detail/:shoeId" element={<ShoeDetail />} />
        <Route path="/basket" element={<Layout />}>
          <Route path="basket-list" element={<BasketList />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
