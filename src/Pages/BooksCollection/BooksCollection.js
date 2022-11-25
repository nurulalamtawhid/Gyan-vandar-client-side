import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCollectionCard from './BooksCollectionCard';

const BooksCollection = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                books.map(book=><BooksCollectionCard
                    
                    key={book._id}
                    book ={book}
                
                
                ></BooksCollectionCard>
                    )
            }

           
        </div>
    );
};

export default BooksCollection;