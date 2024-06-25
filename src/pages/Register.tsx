import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IUser } from '../interface/user';
import { AnyAaaaRecord } from 'dns';
import userService from '../services/userService';

const geolocationSchema = yup.object().shape({
    lat: yup.string().notRequired(),
    long: yup.string().notRequired()
});

const addressSchema = yup.object().shape({
    city: yup.string().required('City is required'),
    street: yup.string().required('Street is required'),
    number: yup.string().required('Number is required'),
    zipcode: yup.string().required('Zipcode is required').min(5, 'Minimum 5 characters needed').max(6, 'Maximum 6 characters'),
    geolocation: geolocationSchema.required('Geolocation is required')
});

const nameSchema = yup.object().shape({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required')
});

const userSchema:IUser |any = yup.object().shape({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    name: nameSchema.required('Name is required'),
    address: addressSchema.required('Address is required'),
    phone: yup.string().required('Phone number is required').min(6, 'Minimum 6 digits needed').max(12, 'Maximum 12 digits'),
});

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        resolver: yupResolver(userSchema),
    });

    const onSubmit: SubmitHandler<IUser> = (user) => {
      userService.createUser(user).then(data=>console.log(data)).catch(errors=>console.log(errors))
    };

    return (
        <div className="bg-white flex items-center justify-center min-h-screen my-3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" {...register("email")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" {...register("username")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" {...register("password")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">First Name</label>
                    <input type="text" {...register("name.firstname")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.name?.firstname && <p className="text-red-500">{errors.name.firstname.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Last Name</label>
                    <input type="text" {...register("name.lastname")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.name?.lastname && <p className="text-red-500">{errors.name.lastname.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">City</label>
                    <input type="text" {...register("address.city")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.address?.city && <p className="text-red-500">{errors.address.city.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Street</label>
                    <input type="text" {...register("address.street")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.address?.street && <p className="text-red-500">{errors.address.street.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">House Number</label>
                    <input type="number" {...register("address.number")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.address?.number && <p className="text-red-500">{errors.address.number.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Zipcode</label>
                    <input type="text" {...register("address.zipcode")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.address?.zipcode && <p className="text-red-500">{errors.address.zipcode.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Phone</label>
                    <input type="text" {...register("phone")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Register</button>
            </form>
        </div>
    );
};

export default Register;
