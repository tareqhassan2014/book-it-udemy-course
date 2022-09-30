import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
    const router = useRouter();

    const handelSubmit = async (event) => {
        event.preventDefault();

        const res = await signIn('credentials', {
            redirect: false,
            email: event.target.email.value,
            password: event.target.password.value,
        });

        if (res.ok) {
            alert('Login Success');
            router.push('/');
        }

        if (res.status === 401) {
            alert(res.error);
        }
    };

    return (
        <form onSubmit={handelSubmit}>
            <input type="email" name="email" placeholder="email" />

            <input type="password" name="password" placeholder="password" />

            <input type="submit" />
        </form>
    );
};

export default Login;
