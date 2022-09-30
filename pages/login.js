import React from 'react';
import Login from '../components/auth/Login';
import Layout from '../components/common/layout';

const LoginPage = () => {
    return (
        <Layout title="Login | Book It">
            <Login />
        </Layout>
    );
};

export default LoginPage;
