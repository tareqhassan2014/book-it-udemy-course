import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSignUpMutation } from '../../features/auth/authApi';

const styles = {
    avatar: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        border: '2px solid #fff',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        marginBottom: 20,
        objectFit: 'cover',
    },
    button: {
        backgroundColor: '#3b5998',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: 2,
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        border: '1px solid #3b5998',
        marginTop: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
    },
    input: {
        width: 300,
        height: 40,
        padding: 10,
        marginBottom: 10,
        border: '1px solid #ccc',
        borderRadius: 2,
        marginBlock: 10,
        display: 'block',
    },
    fileInput: {},
};

const SignUp = () => {
    const router = useRouter();
    const [SignUp] = useSignUpMutation();

    const [avatar, setAvatar] = React.useState('/images/default-avatar.png');

    const handelSubmit = async (event) => {
        event.preventDefault();

        try {
            const email = event.currentTarget.email.value;
            const firstName = event.currentTarget.firstName.value;
            const lastName = event.currentTarget.lastName.value;
            const password = event.currentTarget.password.value;

            const name = `${firstName} ${lastName}`;

            await SignUp({ email, name, password, avatar });

            console.log({ email, name, password, avatar });
        } catch (error) {
            alert(error.message);
        }
    };

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <form style={styles.container} onSubmit={handelSubmit}>
            <Image
                src={avatar}
                alt="avatar"
                width={150}
                height={150}
                style={styles.avatar}
                priority
            />
            <input
                accept="image/*"
                type="file"
                name="avatar"
                onChange={handleFileChange}
                style={styles.fileInput}
            />

            <input
                style={styles.input}
                type="text"
                name="firstName"
                placeholder="First Name"
            />
            <input
                style={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
            />
            <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="email"
            />

            <input
                style={styles.input}
                type="password"
                name="password"
                placeholder="password"
            />

            <input style={styles.button} type="submit" />
        </form>
    );
};

export default SignUp;
