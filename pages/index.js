import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <p>Mulyawan Sentosa</p>
      <Prices data={props.data}/>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    data: data,
  };
}

export default Index;