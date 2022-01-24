import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout pageTitle="The Home Page" pageHeading="MY HOME">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit facere sequi vitae cumque pariatur quis iusto. Quae nostrum quis rerum corporis nemo. Recusandae eius dolore ipsum maiores fuga nemo?</p>
        <Link to="/about">About page</Link>
      </div>
    </Layout>
  )
};

export default Home;