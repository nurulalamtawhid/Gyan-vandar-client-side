
import {Toaster} from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="max-w-[1620px] mx-auto">
     <RouterProvider
     router={router}
     ></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
