import { GetServerSideProps } from 'next';
import Layout from '../components/common/layout';
import Home from '../components/home/Home';
import { roomApi } from '../features/room/roomApi';
import { wrapper } from '../store/store';

const Index = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps =
    //@ts-ignore
    wrapper.getServerSideProps((store) => async () => {
        console.log('home page getServerSideProps');

        const res = await store.dispatch(
            roomApi.endpoints.getRooms.initiate('?page=1&limit=12')
        );
        // console.log(res.data);
        //here i get the data from the api
    });
