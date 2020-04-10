import Navbar from './Navbar';
import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => (
    <div>
        <head>
            <title>Welcome to site</title>
            <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" rel="stylesheet" />
        </head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;