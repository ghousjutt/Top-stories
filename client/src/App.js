import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import News from './components/News';

function App() {
  let router = createBrowserRouter([
    { path: '/', element: <News /> }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
