import { client } from 'lib/client';
import React from 'react'
import { urlFor } from 'lib/client';
import BlockContent from "@sanity/block-content-to-react";
import Navbar from "../../../components/Navbar"
import Footer from 'components/Footer';




const Events = ({ blog }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div
        className="flexCenter bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${urlFor(blog.bgImage)})`,
          height: "100vh",
        }}
      >
        <div className="boxWidth">
          <div className="paddingY paddingX md:w-[60%]">
            <h1 className="heading2 text-white tracking-[-4%]">{blog.title}</h1>
          </div>
        </div>
      </div>

      <div className="md:ml-40 md:mr-40">
        <div className="paddingX paddingY  flex justify-center ">
          <div className="wrapper">
            <BlockContent
              className="  text-justify"
              blocks={blog.body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              projectId="7g5u83mr"
              dataset="production"
            />
          </div>
        </div>
      </div>

      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Footer />
        </div>
      </div>
    </div>
  );
};

/* if a page has dynamic routes and uses getStaticProps, so we must define a list of paths to be statically generated */
/* nextjs we actually pre-render every path that you specify inside of getStaticPaths */

/* we need to create our query that fetches every post but only return slug.current value, then give that query to our client.fetch  */
export async function getStaticPaths() {
  const query = `*[_type == "blog"]{'slug' : slug.current}`;
  const blogs = await client.fetch(query);

  /* for each post we create url and assigning it as params for getStaticPaths to render at build time */
  const paths =
    blogs?.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "blog" && slug.current == $slug]{
        _id,
    title,
    publishedAt,
    'slug':slug.current,
    body,
    category,
    readTime,
    bgImage,
    }`;

  const options = { slug: params.slug };
  const blogs = await client.fetch(query, options);

  return {
    props: { blog: blogs[0] },
  };
}

export default Events;