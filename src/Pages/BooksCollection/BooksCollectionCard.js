import React from 'react';

const BooksCollectionCard = ({ book,setBook }) => {
    const { name, image, resaleprice, originalprice, sellername, usage } = book;
    return (
        <div>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure><img src={image} className="h-80 w-80" alt="books name" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Books-Name : {name}</h2>
                    <p>Seller-Name:{sellername}</p>
                    <p>Usage :{usage}</p>
                    <p>Original Price :{originalprice}</p>
                    <p>Reasle Price :{resaleprice}</p>
                    <div className="card-actions justify-end">
                    <label 
                   
                    htmlFor="Booking-Books" 
                    onClick={() => setBook(book)} 
                    className="btn  bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900">Book-Now</label>
                        {/*<button onClick={()=>setBook(book)} className="btn  bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900">Book-Now</button>
                        disabled={slots .length === 0}
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCollectionCard;