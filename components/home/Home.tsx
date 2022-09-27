import { useAppSelector } from '../../store/hooks';
import RoomCard from '../common/RoomCard';
import styles from './Home.module.scss';

const Home = () => {
    const { rooms } = useAppSelector((store) => store.rooms);

    return (
        <>
            <section id="rooms" className={styles.home + ' container mt-5'}>
                <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

                <a href="#" className="ml-2 back-to-search">
                    {' '}
                    <i className="fa fa-arrow-left"></i> Back to Search
                </a>
                <div className="row">
                    {rooms &&
                        rooms.map((room) => (
                            <RoomCard key={room._id} room={room} />
                        ))}
                </div>
            </section>
        </>
    );
};

export default Home;
