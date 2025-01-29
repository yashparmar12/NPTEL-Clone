import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/home/HomePage';
import LocalChapter from "./components/InitiativesNavSection/LocalChapterSection/LocalChapter";
import LcCollegeList from "./components/InitiativesNavSection/LocalChapterSection/LcCollegeList";
// import './App.css'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />, 
  //   children: [
      
  //     {
  //       path: "userHome",
  //       element: <UserName />,
  //     },
  //     {
  //       path: "userData",
  //       element: <UserData />,
  //     },
  //     {
  //       path: "userMessages",
  //       element: <UserMessages />,
  //     },
  //     {
  //       path: "tasks",
  //       element: <Tasks />,
  //     },
  //     {
  //       path: "allTasks",
  //       element: <ShowAllTask />,
  //     },
  //     {
  //       path: "userData/:userId",
  //       element: <UserData />,
  //     },
      
  //     {
  //       path: "updateProfile",
  //       element: <UpdateProfile />,
  //     },
  //     // {
  //     //   path: "/Products",
  //     //   element: <Products />,
  //     // },
  //     {
  //       path: "Products",
  //       element: <Mobile />,
  //     },
  //     // {
  //     //   path: "/Products/Mobile",
  //     //   element: <Mobile />,
  //     // },
  //     // {
  //     //   path: "/Products/Headphone",
  //     //   element: <HeadPhone />,
  //     // },
  //     {
  //       path: "/Cart",
  //       element: <Cart />,
  //     },
  //     {
  //       path: "/Orders",
  //       element: <Orders />,
  //     },
  //     // {
  //     //   path: "/product",
  //     //   element: <Product />,
  //     // },
  //   ],
  // },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/localchapter",
    element: <LocalChapter />,
  },

  //Local Home = LC College List
  {
    path: "/LcCollegeList",
    element: <LcCollegeList />,
  },
 
  
],

{
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition:true
  },
}

);


function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
