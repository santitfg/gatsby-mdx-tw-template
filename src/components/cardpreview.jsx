// import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const CardPreview = (props) => {
  const { data } = props;
  var imagen = undefined;

  if (data.frontmatter.image) {
    //esto por ahi es un poco rebuscado y podria hacer uan ternaria pero me parece que lo vuelve poco legible

    imagen = (
      // <div      className="relative object-cover pb-1/2 ">
        <GatsbyImage
          className="  w-full h-full object-cover rounded-none md:rounded-3xl  "
          image={data.frontmatter.image.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title}
        />
      //  </div> 
    );
  }

  return (
    <div className="relative inline-block  rounded-none md:rounded-3xl  aspect-video ">
      <Link to={data.fields.slug} className=" ">
        {/* lo que esta fallando en limiat esta tarjeta es la forma de anidar el link y el absoluto, a su vez se pierde la href al modificar el orden de anidado  */}
        <div className="absolute z-10 inset-0  w-full h-full animacion-tarjeta rounded-none md:rounded-3xl gradiente-principal flex justify-center  items-center">
          <div className="  text-xl  text-col-txt text-justify font-bold m-14  ">
            {data.frontmatter.title}
          </div>
        </div>
        {imagen}
      </Link>
    </div>
  );
};

export default CardPreview;
