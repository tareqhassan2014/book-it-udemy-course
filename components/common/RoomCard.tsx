import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './RoomCard.module.scss';

interface IRoomCardProps {
    room: Room;
}

const RoomCard: FC<IRoomCardProps> = ({ room }) => {
    const { name, pricePerNight, images, _id, rating } = room || {};

    const router = useRouter();

    return (
        <div className={styles.card + ' col-sm-12 col-md-6 col-lg-3 my-3'}>
            <div className="card p-2">
                <Image
                    height={170}
                    width={170}
                    className={styles.card_image + ' mx-auto'}
                    src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
                    alt={name}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className={styles.card_title}>
                        <Link href={`/rooms/${_id}`}>{name}</Link>
                    </h5>

                    <div className="ratings mt-auto mb-3">
                        <p className="card-text">
                            <b>{pricePerNight}</b> / night
                        </p>

                        <div className="rating-outer">
                            <i className="fa-regular fa-star"></i>

                            <span id="no_of_reviews">(5 Reviews)</span>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push(`/rooms/${_id}`)}
                        className={styles.card_button}
                    >
                        <a>View Details</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
