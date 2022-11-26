import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register,formState:{errors},handleSubmit} = useForm();
    const [loginError,setLoginerror] = useState();





    const handleLogIn= data=>{

    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className="text-xl text-center">LogIn</h2>
                <form onSubmit={handleSubmit(handleLogIn)} className= "">

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>  
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" {...register("email",{required : true})}
                        aria-invalid={errors.email ? "true" : "false"}  />  
                        {errors.email && <p className='text-red-900'>Your Email is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>  
                        </label>
                        <input type="password"  className="input input-bordered w-full max-w-xs" {...register("password",{ 
                            required : true,
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            
                        })} 
                        aria-invalid={errors.password ? "true" : "false"} />  
                        {errors.password && <p className='text-red-900'>
                            {errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900 w-full mt-3' type="submit" />
                    {loginError && <p className='text-red-900'>{loginError}</p>}
                </form>
                <p className='mt-2'>New to Gyan-Vandar ? <Link to='/signup' className='text-primary'>Create a new Account</Link></p>
                <div className="divider">OR</div>
                <button className=' btn btn-outline w-full'>LogIn with Google</button>
            </div>
        </div>
    );
};

export default Login;