import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';
import useToken from '../../../Hook/useToken';
import Loading from '../../Shared/Loading/Loading';

const Myorders = () => {
    const { user,loading } = useContext(AuthContext);
    const email = localStorage.getItem("email");
    
    const url = `http://localhost:5001/bookings?email=${email}`;
    const { data: bookings = [],refetch} = useQuery({
        queryKey: ['bookings', user?.email],
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
            <h3 className="text-3xl mb-3">My-Orders</h3>
            <div className="overflow-x-auto py-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Book Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Sellername</th>
                            <th>Payment status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                          bookings &&  bookings?.map((booking, i) =>
                                <tr className="hover" key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.buyer}</td>
                                    <td>{booking.book}</td>
                                    <td>{booking.boookingDate}</td>
                                    <td>{booking.location}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.sellername}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-outline btn-primary'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-primary'>PAID</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;