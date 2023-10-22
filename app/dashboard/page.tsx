
import nokies from 'nookies';
import { GetServerSidePropsContext } from 'next';

async function getData(ctx: GetServerSidePropsContext) {
    const cookies = nokies.get(ctx);
    const token = cookies.token;
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false
            }
        }
    }
    return {
        props: {
            token
        }
    }

}

export default async function Dashboard() {
    // const data = await getData()
    return <div>Dashboard</div>

}
