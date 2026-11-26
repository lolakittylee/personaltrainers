import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import NewCustomer from "./components/newCustomer";
import CustomersListed from "./components/customers";
import TrainingsListed from "./components/training";
import { RouterProvider } from 'react-router/dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     children: [                       
    //   {
    //     element: <NewCustomer />,
    //     index: true                 
    //   },
      {
        path: "trainings",                
        element: <TrainingsListed />,
      },
    //   {
    //     path: "statistics",
    //     element: <Statistics />,
    //   },
    ]
  }

]);