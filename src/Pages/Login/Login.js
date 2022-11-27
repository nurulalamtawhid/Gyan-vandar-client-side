import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginerror] = useState();
    const [loginUseremail, setLoginUserEmail] = useState('');
    const { signIn, providerlogin,loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||'/';

    if(loading){
        return <Loading></Loading>
    }



    const handleLogIn = data => {
        setLoginerror('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email);
                console.log(user)

            })
            .catch(err => {
                console.log(err)
                setLoginerror(err.message);
            })

    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {

                



            })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerlogin(googleProvider)
            .then(result => {
                const user = result.user;
                const role = 'Buyer';

                console.log(user);
                saveUser(user.displayName, user.email, role);
                toast.success('Successfully Login & save user');
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className="text-xl text-center">LogIn</h2>
                <form onSubmit={handleSubmit(handleLogIn)} className="">


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"} />
                        {errors.email && <p className='text-red-900'>Your Email is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: true,
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
                <button className=' btn btn-outline w-full' onClick={handleGoogleSignIn}>LogIn with Google</button>
            </div>
        </div>
    );
};

export default Login;