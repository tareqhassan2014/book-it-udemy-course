import { GetServerSideProps } from 'next';
import Layout from '../../components/common/layout';
import { roomDetailsApi } from '../../features/roomDetails/roomDetailsApi';
import { useAppSelector } from '../../store/hooks';
import { wrapper } from '../../store/store';

const RoomDetails = () => {
    const { room } = useAppSelector((state) => state.roomDetail);

    const { name, description, pricePerNight, images } = room || {};

    return (
        <Layout title={name}>
            <div className="container container-fluid">
                <h2 className="mt-5">{name}</h2>

                <div className="ratings mt-auto mb-3">
                    <div className="rating-outer">
                        <div className="rating-inner"></div>
                    </div>
                    <span id="no_of_reviews">(5 Reviews)</span>
                </div>

                <img
                    src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
                    className="d-block w-100 property-details-image m-auto"
                    alt="Hotel"
                />

                <div className="row my-5">
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3>Description</h3>
                        <p>{description}</p>

                        <div className="features mt-5">
                            <h3 className="mb-4">Features:</h3>
                            <div className="room-feature">
                                <i
                                    className="fa fa-cog fa-fw fa-users"
                                    aria-hidden="true"
                                ></i>
                                <p>6 Guests</p>
                            </div>

                            <div className="room-feature">
                                <i
                                    className="fa fa-cog fa-fw fa-bed"
                                    aria-hidden="true"
                                ></i>
                                <p>2 Beds</p>
                            </div>

                            <div className="room-feature">
                                <i
                                    className="fa fa-cog fa-fw fa-bath"
                                    aria-hidden="true"
                                ></i>
                                <p>2 Baths</p>
                            </div>

                            <div className="room-feature">
                                <i
                                    className="fa fa-cog fa-fw fa-cutlery"
                                    aria-hidden="true"
                                ></i>
                                <p>Kitchen</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="booking-card shadow-lg p-4">
                            <p className="price-per-night">
                                <b>${pricePerNight}</b> / night
                            </p>

                            <button className="btn btn-block py-3 booking-btn">
                                Pay
                            </button>
                        </div>
                    </div>
                </div>

                <div className="reviews w-75">
                    <h3>Reviews:</h3>
                    <hr />
                    <div className="review-card my-3">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <p className="review_user">by John</p>
                        <p className="review_comment">Good Quality</p>

                        <hr />
                    </div>

                    <div className="review-card my-3">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <p className="review_user">by John</p>
                        <p className="review_comment">Good Quality</p>

                        <hr />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RoomDetails;

export const getServerSideProps: GetServerSideProps =
    //@ts-ignore
    wrapper.getServerSideProps((store) => async ({ query }) => {
        const { _id } = query;

        if (_id) {
            const res = await store.dispatch(
                roomDetailsApi.endpoints.getRoom.initiate(_id)
            );
        }
    });
