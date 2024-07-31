
import './App.css';
import './assets/styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { DataProvider } from './context/DataContext';
import MainPage from "./pages/MainPage";
function App() {
  // const {store} = useContext(Context)
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     store.checkAuth()
  //   }
  // },[])

  // if(store.isLoading){
  //   return <div>Загрузка...</div>
  // }

  // if(!store.isAuth) return (
  //     <Router>
  //       <div className="App">
  //         <Routes>
  //           <Route path='*' element={<AuthPage/>} />
  //         </Routes>
  //       </div>
  //     </Router>
  // )
  return (
      <DataProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainPage/>} />
            </Routes>
          </div>
        </Router>
      </DataProvider>
  );
}

export default App;
