import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import userService from '../services/userService';
import { Itoken } from '../interface/user';
import { isToken } from 'typescript';
import { useNavigate, Link } from 'react-router-dom';


interface ILogin {
    username: string;
    password: string;
}

const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

const Login: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        try {
            const result = await userService.loginUser(data)
            if (result.token) {
                localStorage.setItem('token', result.token);
                navigate(`/`);
            } else {
                console.error('Login failed', result);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-white flex items-center justify-center min-h-screen my-3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" {...register('username')} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>

                <div className="mb-4 flex flex-col items-baseline">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" {...register('password')} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Login
                </button>
                <div className='mt-3 text-blue-900'><Link to="/register">Register </Link></div>
            </form>
        </div>
    );
};

export default Login;
