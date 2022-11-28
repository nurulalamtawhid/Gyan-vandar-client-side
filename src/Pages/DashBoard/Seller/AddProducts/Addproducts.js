import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/Authprovider';
import Usetitle from '../../../../Hook/Usetittle';

const Addproducts = () => {
    Usetitle('ADDproducts');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddproducts = data => {

        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
        fetch(url, {
            method: 'POST',
            body: formData 
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    console.log(imgdata.data.url);
                    const product = {
                        name: data.name,
                        originalprice: data.originalprice,
                        resaleprice: data.resaleprice,
                        usage: data.usage,
                        categoryname: data.categoryname,
                        image: imgdata.data.url,
                        sellername: user.displayName,
                        email: user.email,


                    }
                    fetch('https://gyan-vandar-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product) 
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }

            })



    }
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categoriesselect'],
        queryFn: async () => {
            const res = await fetch('https://gyan-vandar-server.vercel.app/categoriesselect');
            const data = await res.json();

            return data;
        }
    })
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className=' w-96 p-7 shadow-2xl'>
                    <h1 className='text-2xl text-center'>Add a Products</h1>
                    <form onSubmit={handleSubmit(handleAddproducts)} className="">


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Book-Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" defaultValue={"yourbookName"} required  {...register("name", { required: true },
                            )}
                                aria-invalid={errors.name ? "true" : "false"}

                            />
                            {errors.name && <p className='text-red-600'>please insert your Book name</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">OriginalPrice</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" defaultValue={"1200"} required {...register("originalprice", { required: true },
                            )}
                                aria-invalid={errors.name ? "true" : "false"}

                            />
                            {errors.name && <p className='text-red-600'>please insert your Book originalprice</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">ResalePrice</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" defaultValue={"400"} required {...register("resaleprice", { required: true },
                            )}
                                aria-invalid={errors.name ? "true" : "false"}

                            />
                            {errors.name && <p className='text-red-600'>please insert your Book resaleprice</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Usage of book</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" defaultValue={"usage"} required {...register("usage", { required: true },
                            )}
                                aria-invalid={errors.name ? "true" : "false"}

                            />
                            {errors.name && <p className='text-red-600'>please insert your Book usage</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <select {...register("categoryname", { required: true })}

                                className="select input-bordered w-full max-w-xs">
                                <option defaultValue={"Choose a Category"} disabled>Choose a Category</option>
                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category.categoryname}


                                    >{category.name}
                                    </option>)
                                }

                            </select>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", { required: "photo is required" },
                            )}
                                aria-invalid={errors.name ? "true" : "false"}

                            />
                            {errors.img && <p className='text-red-600'>{errors.img}</p>}
                        </div>

                        <input className='btn btn-accent btn-outline w-full mt-3' value="Add-Products" type="submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Addproducts;