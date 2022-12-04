import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => (
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
        <header>
            <Navbar>navbar  </Navbar>
        </header>
        <main>
            {children}
        </main>
        <Footer>Footer</Footer>
        
    </Box>
    </>
);


export default Layout