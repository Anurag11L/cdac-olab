import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Theory from "./pages/Theory";
import Animation from './pages/Animation';
import Simulator from "./pages/Simulator";
import SelfEvaluation from './pages/SelfEvaluation';
import Reference from './pages/Reference';
import FeedBack from './pages/FeedBack';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
          <Route path="/theory" element={<Theory></Theory>}></Route>
          <Route path='/animation' element={<Animation></Animation>}></Route>
          <Route path="/simulator" element={<Simulator></Simulator>}></Route>
          <Route path="/selfevaluation" element={<SelfEvaluation></SelfEvaluation>}>Self-Evaluation</Route>
          <Route path='/reference' element={<Reference></Reference>}>Reference</Route>
          <Route path='/feedback' element={<FeedBack></FeedBack>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
