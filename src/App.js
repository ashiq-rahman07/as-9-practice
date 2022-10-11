import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Layaouts/Main';
import Quizes from './components/Quizes';

function App() {
  const router =createBrowserRouter([
    {path:'/',
    element: <Main></Main>,
    children: [
      {path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
    },
    {
      path: '/quz/:quzId',
      loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quzId}`),
      element: <Quizes></Quizes>
    }
      
    ]
  }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
