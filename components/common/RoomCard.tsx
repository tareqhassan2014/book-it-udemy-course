import Image from 'next/future/image';
import { FC } from 'react';
import styles from './RoomCard.module.scss';

interface IRoomCardProps {
    room: Room;
}

const RoomCard: FC<IRoomCardProps> = ({ room }) => {
    const { name, pricePerNight, images, description } = room || {};

    const rating = [1, 2, 3, 4, 5];
    const star = 3.4;

    return (
        <div className={styles.card + ' col-sm-12 col-md-6 col-lg-3 my-3'}>
            <div className="card p-2">
                <Image
                    height={170}
                    width={170}
                    className={styles.card_image + ' mx-auto'}
                    src={images[0]?.url}
                    alt={name}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className={styles.card_title}>
                        <a href="">{name}</a>
                    </h5>

                    <div className="ratings mt-auto mb-3">
                        <p className="card-text">
                            <b>{pricePerNight}</b> / night
                        </p>

                        <div className="rating-outer">
                            {rating.map((_, i) =>
                                i < Math.ceil(star) ? (
                                    <i
                                        key={i}
                                        className="fa-regular fa-star text-warning"
                                    ></i>
                                ) : (
                                    <i
                                        key={i}
                                        className="fa-regular fa-star"
                                    ></i>
                                )
                            )}

                            <span id="no_of_reviews">(5 Reviews)</span>
                        </div>
                    </div>

                    <button className={styles.card_button}>
                        <a href="#">View Details</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
