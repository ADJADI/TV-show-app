import { BrowserRouter, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { ROUTES } from "./config/route";
import MoreDetails from "./pages/MoreDetails";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MOREDETAIL} element={<MoreDetails />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
