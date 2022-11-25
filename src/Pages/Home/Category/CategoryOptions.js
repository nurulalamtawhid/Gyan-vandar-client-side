import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryOptions = ({bookscategory}) => {
    const navigate = useNavigate();
    const {name,_id} = bookscategory;
    const handlebooks =(name)=>{
        console.log(name);
        navigate(`/bookscollection/${name}`)
    }
    return (
        <div className="card shadow-xl bg-[#F2EDEA]" onClick={()=>handlebooks(name)} >
        <div className="card-body text-center ">
            <h2 className="card-title justify-center text-amber-700">{name}</h2>
           
          
        </div>
    </div>
    );
};

export default CategoryOptions;