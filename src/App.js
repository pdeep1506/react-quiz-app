import ques1 from './images/ques1.png'
import Header from './Component/Header/Header'
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Footer/Footer';
import  Home  from './Component/Pages/Home/Home';
import Quiz from './Component/Pages/Quiz/Quiz';
import Result from './Component/Result/Result'
function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:`url(${ques1})`}}>
    <Header></Header>
    
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/quiz' element={<Quiz></Quiz>}></Route>
          <Route path='/result' element={<Result></Result>}></Route>
      
      </Routes>
    
    </div>

    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
