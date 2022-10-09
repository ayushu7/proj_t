import { Route, Routes } from "react-router-dom";
import DashboardView from "./components/DashboarView";
function App() {
  return (
    <div className="flex flex-row w-full h-screen">
      <Routes>
        <Route path="/*" element={<DashboardView />} />
        <Route path="pricing" element={<DashboardView />} />
        <Route path="login" element={<DashboardView />} />
      </Routes>
    </div>
  );
}

export default App;
