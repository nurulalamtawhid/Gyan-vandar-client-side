import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Usetitle from '../../../Hook/Usetittle';

const Allsellers = () => {
    Usetitle('Allsellrs')
    const {data: sellers = [],refetch} = useQuery({
        queryKey:['users/seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/users/seller');
            const data = await res.json();
            return data;
        }
    });
    const handlemakeAdmin = id =>{
        fetch(`http://localhost:5001/users/admin/${id}`,{
            method :'PUT',
            headers :{
                authorization :`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount > 0){
            toast.success('make admin successfully');
            console.log(data);
            refetch();
           }
            
        })
        
    
     } 
     const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5001/users/${id}`,{
            method : "DELETE",
            headers :{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.deletedCount>0){
            refetch();
            toast.success(` Deleted the Seller Successfully`)
           }
           
        })

     }
    return (
        <div>
        <h1 className='text-2xl text-center'>All-sellers :{sellers.length}</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User-Role</th>
                        <th>Make Admin</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>



                   {
                    sellers.map((user,i)=>
                        <tr className="hover" key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user?.power !=='admin' &&<button onClick={()=> handlemakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                        <td><button onClick={()=> handleDelete(user._id)} className='btn btn-xs btn-outline btn-warning'>DELETE</button></td>
                    </tr>
                        
                        
                        )
                   }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Allsellers;