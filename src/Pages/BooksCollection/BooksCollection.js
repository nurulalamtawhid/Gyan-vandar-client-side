import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import BooksCollectionCard from './BooksCollectionCard';

const BooksCollection = () => {
    const books = useLoaderData();
  //  console.log(books);
    const [book, setBook] = useState(null);
    console.log(book);
   
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    books.map(book => <BooksCollectionCard

                        key={book._id}
                        book={book}
                        setBook={setBook}


                    ></BooksCollectionCard>
                    )
                }


            </div>
            <div>
                { 
                    book &&
                    <BookingModal

                        book ={book}
                        setBook={setBook}
                       


                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default BooksCollection;