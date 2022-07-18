import ques1 from './images/ques1.png'
import Header from './Component/Header/Header'
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Footer/Footer';
import  Home  from './Component/Pages/Home/Home';
import Quiz from './Component/Pages/Quiz/Quiz';
import Result from './Component/Pages/Result/Result'
import axios from 'axios';
function App() {
  const [name, setname] = useState('')
  const [score, setscore] = useState(0)
  const [questions, setquestions] = useState()
      
  const fetchQuestions = async(category,difficulty)=>{
      const quizApi = await axios.get(`https://opentdb.com/api.php?amount=15${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
      // console.log(quizApi.data)
      setquestions(quizApi.data.results)
  }
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:`url(${ques1})`}}>
    <Header></Header>
    
      <Routes>
          <Route path='/' element={<Home name={name} setname={setname} fetchQuestions={fetchQuestions}></Home>}></Route>
          <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setscore={setscore} setquestions={setquestions}></Quiz>}></Route>
          <Route path='/result' element={<Result name={name} score={score}></Result>}></Route>
      
      </Routes>
    
    </div>

    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
