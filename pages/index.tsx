import { GetServerSideProps } from 'next';
import Layout from '../components/common/layout';
import Home from '../components/home/Home';
import { roomApi } from '../features/room/roomApi';
import { wrapper } from '../store/store';

const index = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default index;

export const getServerSideProps: GetServerSideProps =
    //@ts-ignore
    wrapper.getServerSideProps((store) => async () => {
        await store.dispatch(roomApi.endpoints.getRooms.initiate(''));
    });
