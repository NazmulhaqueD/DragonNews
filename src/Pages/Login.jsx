import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(`${location.state? location.state : '/ '}`)
            })
            .catch(error => {
                console.log(error.code, error.message);
            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2x mx-auto mt-20">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-accent text-center pb-6'>Login your account</h1>
                    <form onSubmit={handleLogin} className='space-y-4'>
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        <p>Don’t Have An Account ? <NavLink to='/auth/register' className={'text-secondary underline'}>Register</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;