import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
    <Navbar/>
    { props.children }
    </div>
);

export default Layout;