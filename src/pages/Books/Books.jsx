 import React, { Suspense, useEffect, useState } from 'react'
import Book from '../Book/Book'
 
 const Books = () => {
    const[allBooks, setAllBooks] = useState([])

    // useEffect(()=>{
    //      fetch("booksData.json")
    //      .then(res => res.json())
    //      .then(data =>{
    //          setAllBooks(data);
    //      })
    // },[])
 const bookPromise = fetch("booksData.json")
                    .then(res =>res.json())

   return (
     <div>
       <h2 className='text-3xl text-center p-6'>Hi iam books </h2>

   <Suspense fallback={<span>LoadingData......</span>}>
   
    <Book bookPromise={bookPromise}></Book>
   </Suspense>
     </div>
   )
 }
 
 export default Books
 