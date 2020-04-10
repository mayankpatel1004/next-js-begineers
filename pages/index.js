import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Price from '../components/Price';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Index.js</h1>
            <Price bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi : data
    }
}
export default Index;