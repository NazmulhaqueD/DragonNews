import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        // console.log(name, email, photoURL, password);
        createUser(email,password).then(result=>{
            const user = result.user;
            setUser(user);
            console.log(result)
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2x mx-auto mt-20">
            <div className="card-body">
                <h1 className='text-2xl font-bold text-accent text-center pb-6'>Register your account</h1>
                <form onSubmit={handleSignUp} className='space-y-4'>

                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Enter your name" />

                    <label className="label">Photo URL</label>
                    <input name='photoURL' type="text" className="input" placeholder="Enter your photo" />

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <div className='flex gap-2 text-sm '>
                        <input type="checkbox" className="checkbox" />
                        <p>Accept Term & Conditions</p>
                    </div>
                    <button type='submit' className="btn btn-neutral w-full mt-4">Sign Up</button>
                    <p>Already you have an account ? <NavLink to='/auth/login' className={'text-secondary underline'}>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;