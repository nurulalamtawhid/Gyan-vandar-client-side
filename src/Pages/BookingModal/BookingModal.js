import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Authprovider';

const BookingModal = ({book,setBook}) => {
    
    const{ name:bookname,resaleprice,sellername} = book;
    const {user} = useContext(AuthContext);
    const date = format(new Date(),"PP");
    console.log(date);
    const  handleBooking=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const sellername = form.sellername.value;
        const location =form.location.value;
        const phone = form.phone.value;
       // console.log(name,email,sellername,location,phone);
        const booking = {
            boookingDate: date,
            book:bookname,
            buyer: name,
            sellername,
            email,
            phone,
            price,
            location
        }
        fetch('http://localhost:5001/bookings',{
            method :'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                setBook(null);
                toast.success('booking confirmed');
               

            }
            else{
                toast.error(data.message);
            }
        })

    }
    return (
        <>
        <input type="checkbox" id="Booking-Books" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="Booking-Books" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{bookname}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                
                    <input name='price' type="text" disabled defaultValue={resaleprice} className="input w-full input-bordered" />
                   
                    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name='email' type="Email"  defaultValue={user?.email} disabled className="input w-full input-bordered" />
                    <input name='sellername' type="text" disabled defaultValue={sellername} className="input w-full input-bordered" />
                    <input name='location' type="text" placeholder='meeting loaction : dhaka' className="input w-full input-bordered" required />
                    <input name='phone' type="text" placeholder="Phone-no" className="input w-full input-bordered" required />
                    <br />
                    <input type='submit' className="btn bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900 input w-full " value='Submit' />

                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;