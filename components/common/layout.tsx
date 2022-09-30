import Head from 'next/head';
import { FunctionComponent } from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    children,
    title = 'Book Best Hotels for your Holiday',
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
