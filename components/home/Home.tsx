import { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { setQuery } from '../../features/query/querySlice';
import { useGetRoomsQuery } from '../../features/room/roomApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import RoomCard from '../common/RoomCard';
import styles from './home.module.scss';

const Home = () => {
    const dispatch = useAppDispatch();
    const { rooms, total, results } = useAppSelector((store) => store.rooms);
    const { limit, location, page, fetchAgain } = useAppSelector(
        (store) => store.query
    );

    let query = `?page=${page}&limit=${limit}&location=${location}`;

    const { refetch } = useGetRoomsQuery(query, {
        skip: !fetchAgain,
    });

    const handlePageChange = (page: number) => {
        dispatch(setQuery({ page }));
    };

    useEffect(() => {
        refetch();
    }, [fetchAgain, refetch]);

    return (
        <>
            <section id="rooms" className={styles.home + ' container mt-5'}>
                <h2 className="mb-3 ml-2 stays-heading">
                    {location
                        ? `Rooms in ${location} (${results})`
                        : 'Best Rooms'}
                </h2>

                <a href="#" className="ml-2 back-to-search">
                    <i className="fa fa-arrow-left" /> Back to Search
                </a>
                <div className="row">
                    {rooms &&
                        rooms.map((room) => (
                            <RoomCard key={room._id} room={room} />
                        ))}
                </div>
            </section>

            {results < total && results > limit && (
                <Pagination
                    activePage={page}
                    totalItemsCount={location ? results : total}
                    itemsCountPerPage={limit}
                    onChange={(p) => handlePageChange(p)}
                />
            )}
        </>
    );
};

export default Home;
