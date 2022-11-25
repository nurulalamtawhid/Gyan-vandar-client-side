import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryOptions from './CategoryOptions';
import bg2 from "../../../Assets/background/bg2.jpg"

const Category = () => {
    const{data :bookscategories=[],refetch,isLoading} = useQuery({
        queryKey:["bookscategories"],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5001/bookscategories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='my-16' >
            <h1 className='text-center text-2xl my-10'>Availabe Books category</h1>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bookscategories.map(bookscategory=><CategoryOptions
                         key={bookscategory._id}
                         bookscategory ={bookscategory}
                        ></CategoryOptions>)
                }
            </div>
            <div>
                <h1>jdgwksj</h1>
            </div>
        </section>
    );
};

export default Category;