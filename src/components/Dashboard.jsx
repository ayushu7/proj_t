import AnalysisPanel from "./AnalysisPanel";
import Header from "./Header";
const Dashboard = (props) => {
    return (
        <div className={props.className}>
            <Header />
            <AnalysisPanel />
        </div>
    )
}

export default Dashboard;