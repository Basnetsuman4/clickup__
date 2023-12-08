import { Route, Routes } from "react-router-dom";
import '../Router/Router.css'
import App from "../App";
import IpField from "../components/Form/Ipfield";
import SideBar from "../screens/SideBar/SideBar";
import ToDo from '../components/Todo/ToDo'



const Router = () => {
    return (<div className="xyz">
        <SideBar />
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="validation" element={<IpField />}></Route>
                <Route path="todo" element={<ToDo />}></Route>
            </Route>
        </Routes>
    </div>
    );
}

export default Router;