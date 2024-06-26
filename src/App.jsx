import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Header from './components/Header';



export default function App() {
  return <BrowserRouter>
  {/* Here we added header, because it want to visible in all pages. */}
    <Header/> 
    {/* BrowserRouter,Routes,Route--enables to create Routes inside an application */}
    <Routes>
      {/* here path is in "/". So home page is in /*/}
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Signin/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/profile" element={<Profile/>} />
    

    </Routes>
    </BrowserRouter>;
  
}
