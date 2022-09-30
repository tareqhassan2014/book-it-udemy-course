import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { setQuery } from '../../features/query/querySlice';
import { useAppDispatch } from '../../store/hooks';

type Inputs = {
    location: string;
};

const Header = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const debounce = (fn: any, delay = 700) => {
        let timer: NodeJS.Timeout;
        return function (...rest: any) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn(...rest);
            }, delay);
        };
    };

    const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        dispatch(setQuery({ location: e.target.value.trim() }));

        if (router.pathname !== '/') {
            router.push('/');
        }
    });

    return (
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <img src="/images/bookit_logo.png" alt="BookIT" />
                    </div>
                </div>

                <input
                    placeholder="Search location"
                    type="text"
                    onChange={handleSearch}
                />

                <div className="col-3 mt-3 mt-md-0 text-center">
                    <Link href="/login">
                        <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                            Login
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
