import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/Authprovider';
import Usetitle from '../../../../Hook/Usetittle';

const Myproducst = () => {
    Usetitle('My-products');
    const {user} = useContext(AuthContext);
    const url = `https://gyan-vandar-server.vercel.app/products?email=${user?.email}`;
    const { data: products = [],refetch} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers :{
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
            
        }
    })
    refetch();
    const handleAdvertised=(id)=>{
        console.log(id);
        fetch(`http://localhost:5001/products/advertised/${id}`,{
            method :'PUT',
            headers :{
                authorization :`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount > 0){
            toast.success('Items Advertised successfully');
            console.log(data);
            refetch();
           }
            
        })
    }
    const handleDelete=(id)=>{
        fetch(`http://localhost:5001/products/remove/${id}`,{
            method : "DELETE",
            headers :{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.deletedCount>0){
            refetch();
            toast.success(` Deleted the products Successfully`)
           }
           
        })
        
    }
    return (
        <div>
        <h3 className="text-3xl mb-3">My-Products</h3>
        <div className="overflow-x-auto py-4">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>originalprice</th>
                        <th>Usage</th>
                        <th>Sellername</th>
                        <th>Category</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                      products &&  products?.map((product, i) =>
                      
                            <tr className="hover" key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.image}</td>
                                <td>{product.resaleprice}Tk</td>
                                <td>{product.originalprice}Tk</td>
                                <td>{product.usage}</td>
                                <td>{product.sellername}</td>
                                <td>{product.categoryname}</td>
                                <td>
                                {
                                    !product.aadvertise &&
                                    <button onClick={()=>handleAdvertised(product._id)}  className='btn btn-xs btn-outline btn-accent'>Advertise</button>
                                }
                                {
                                    product.aadvertise &&
                                    <span className='text-accent'>Advertised</span>
                                }
                                </td>
                                <td><button onClick={()=>handleDelete(product._id)} className='btn btn-xs btn-outline btn-warning'>DELETE</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Myproducst;