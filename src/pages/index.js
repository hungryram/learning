import React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
  return (
    <Layout pageTitle="The Home Page" pageHeading="MY HOME">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipissicing elit. Praesentium impedit facere sequi vitae cumque pariatur quis iusto. Quae nostrum quis rerum corporis nemo. Recusandae eius dolore ipsum maiores fuga nemo?</p>
        <StaticImage src="https://www.gatsbyjs.com/static/00cce85e5293015b32d90b17e18afdaf/321ea/index-page-with-static-image-from-url.png" alt="testing" />
      </div>
    </Layout>
  )
};

export default Home;