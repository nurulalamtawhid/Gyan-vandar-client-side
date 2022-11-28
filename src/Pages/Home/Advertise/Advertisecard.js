import React from 'react';


const Advertisecard = ({ product }) => {
    console.log(product);
    const { categoryname, image, resaleprice, name } = product;
   
    return (
        <div className=''>
            
                <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                            <p className="text-gray-800">{categoryname}</p>
                            <p className="text-gray-800">{resaleprice}</p>
                        </div>
                        
                    </div>
                </div>

           
        </div>
    );
};

export default Advertisecard;