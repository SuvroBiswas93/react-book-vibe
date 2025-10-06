import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,  //layout
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true ,
            loader: ()=> fetch('/booksData.json'),
            path:'/',
            element:<Suspense fallback={<h3>Loading...</h3>}>
              <Home></Home>
            </Suspense>


        },
        {
          path:'/listedbooks',
          Component:ListedBooks
        },
        {
          path:'/bookdetails/:id',
          loader: ()=> fetch('/booksData.json'),
          Component:BookDetails
        }
       


    ]
  },
]);