import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '../../../config/db.connect';
import userModel from '../../../model/user.model';

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            async authorize({ email, password }, req) {
                connectDB();

                // Check if email and password entered are valid

                if (!email || !password) {
                    throw new Error('please enter email or password');
                }

                //find user in database

                const user = await userModel
                    .findOne({ email })
                    .select('+password');

                if (!user) {
                    throw new Error('Invalid email or password');
                }

                //check if password is correct or not

                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid email or password');
                }

                return Promise.resolve(user);
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return Promise.resolve(token);
        },
        async session({ session, user }) {
            session.user = user.user;
            return Promise.resolve(session);
        },
    },
};

export default NextAuth(authOptions);
