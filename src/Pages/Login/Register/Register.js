import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialAccount from '../SocialAccount/SocialAccount';
import { Form } from 'react-bootstrap';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }


    return (
        <div className='register-form mt-4'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <br />
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <div className='d-flex w-100 justify-content-around mt-4'>
                    <input className='w-25' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`m-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">* Accept Terms And Conditions</label>
                </div>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-info mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account.? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialAccount></SocialAccount>
        </div>
    );
};

export default Register;