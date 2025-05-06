
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut().then(()=>{
            alert("LogOut successful")
        })
        .catch(error=>{
            alert(error.message);
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <section><p className='text-secondary'>{user?.email}</p></section>
            <section className='flex items-center gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Career</NavLink>
            </section>
            <section className='flex items-center gap-6'>
                <img src={userImg} alt="" />

                {
                    user ?
                        <button onClick={handleSignOut} className='btn btn-primary px-8 text-base-100'>LogOut</button> :
                        <NavLink to='/auth/login'><button className='btn btn-primary px-8 text-base-100'>Login</button></NavLink>
                }
            </section>
        </div>
    );
};

export default Navbar;