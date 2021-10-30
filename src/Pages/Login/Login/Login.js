import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <Button onClick={signInUsingGoogle} variant='danger' >Goggle Sign In</Button>
        </div>
    );
};

export default Login;