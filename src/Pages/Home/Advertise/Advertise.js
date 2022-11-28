import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Advertisecard from './Advertisecard';

const Advertise = () => {
    
      const {data: products = [],refetch} = useQuery({
        queryKey:["advertisedproducts"],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5001/advertisedproducts');
            const data = await res.json();
           // console.log(data);
            return data;
            
        }
      })
    return (
        <div>
            <h1 className='text-3xl text-center'>Our Advertised-Products</h1>
           
            <div className='my-5 grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2' >

                {
                    products.map(product=><Advertisecard
                    
                        key={product._id}
                        product ={product}
                    
                    ></Advertisecard>)
                }
            </div>             
                


                

           
        </div>
    );
};

export default Advertise;