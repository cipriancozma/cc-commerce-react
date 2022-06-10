import './App.css';
import Homepage from './pages/homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/notFound/notFound';
import Navigation from './components/navigation/navigation';
import SignIn from './pages/sign-in/sign-in';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes> 
  );
}

export default App;
