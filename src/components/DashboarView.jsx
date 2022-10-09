import { useDispatch, useSelector } from "react-redux";
import { selectedValue } from "../redux/selectors";
import { red1 } from "../redux/reducers"
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
function DashboardView() {

  const dispatch = useDispatch();
  const value = useSelector(selectedValue);


  return (
    <div className="flex flex-row w-full h-screen">
      <SideBar className='w-64 h-screen bg-slate-900' />
      <Dashboard className='w-full h-screen bg-gray-100'/>
    </div>
  );
}

export default DashboardView;