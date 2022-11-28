import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/Authprovider';

const Myproducst = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5001/products?email=${user?.email}`;
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
                                <button className='btn btn-xs btn-outline btn-accent'>Advertise</button>
                                </td>
                                <td><button className='btn btn-xs btn-outline btn-warning'>DELETE</button></td>
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