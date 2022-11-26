import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignupError] = useState('');
    const [createdUseremail, setCreatedUseremail] = useState('');
    const [role, setRole] = useState(false);
    const { createUser, updateUser,providerlogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||'/';
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
                saveUser(data.name,data.email,data.role)
                
               
            })
            .catch(errors=>console.error(errors))
        })
        .catch(error=>{
            console.log(error)
            setSignupError(error.message)
        
        })
        

    }
    const saveUser =(name,email,role)=>{
        const user ={name,email,role};
        fetch('http://localhost:5001/users',{
            method : 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            
         setCreatedUseremail(email);
           
           

        })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        providerlogin(googleProvider)
        .then(result=>{
            const user = result.user;
            const role = 'Buyer';
           
            console.log(user);
            saveUser(user.displayName,user.email,role);
            toast.success('Successfully Login & save user');
            navigate(from,{replace : true})
        })
        .catch(error => console.error(error))
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
                        <select {...register("role", { required: true })}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                            
                        </select>
                    </div>

                    <input className='btn bg-gradient-to-r from-stone-200 to-zinc-400 text-stone-900 w-full mt-3' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account ? <Link to='/login' className='text-primary'>LogIn</Link></p>
                <div className="divider">OR</div>
                <button className=' btn btn-outline w-full' onClick={handleGoogleSignIn}>LogIn with Google</button>
            </div>
        </div>
    );
};

export default Signup;