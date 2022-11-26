import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignupError] = useState('');
    const [createdUseremail, setCreatedUseremail] = useState('');
    const [role, setRole] = useState(false);
    const { createUser, updateUser } = useContext(AuthContext);
    const handleRegister = data => {
        setSignupError('');
        createUser(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('usercreated successfully');
            const userInfo ={
                displayName : data.name
 
            }
            updateUser(userInfo)
            .then( result=>{
                
                console.log(result);
            })
            .catch(console.error(errors))
        })
        .catch(error=>{
            console.log(error)
            setSignupError(error.message)
        
        })
        

    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className="text-xl text-center">SignUp</h2>
                <form onSubmit={handleSubmit(handleRegister)} className="">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: true },
                        )}
                            aria-invalid={errors.name ? "true" : "false"}

                        />
                        {errors.name && <p className='text-red-600'>please insert your name</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-orange-500'>Your email</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: true,
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

                        })}
                            aria-invalid={errors.password ? "true" : "false"} />
                        {errors.password && <p className='text-red-900'>
                            {errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-3 ">
                        <label className="label">
                            <span className="label-text">Select Role</span>
                        </label>
                        <select {...register("Role", { required: true })}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                            
                        </select>
                    </div>

                    <input className='btn bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900 w-full mt-3' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account ? <Link to='/login' className='text-primary'>LogIn</Link></p>
                <div className="divider">OR</div>
                <button className=' btn btn-outline w-full'>LogIn with Google</button>
            </div>
        </div>
    );
};

export default Signup;