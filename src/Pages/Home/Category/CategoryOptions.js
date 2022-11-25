import React from 'react';

const CategoryOptions = ({bookscategory}) => {
    const {name,_id} = bookscategory;
    const handlebooks =(id)=>{
        console.log(id);
    }
    return (
        <div className="card shadow-xl bg-[#F2EDEA]" onClick={()=>handlebooks(_id)} >
        <div className="card-body text-center ">
            <h2 className="card-title justify-center text-amber-700">{name}</h2>
           
          
        </div>
    </div>
    );
};

export default CategoryOptions;