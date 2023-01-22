/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mdx-tw-template`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: "./src/templates/",
      },
      __key: "templates",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      //mdxOptions:{ gatsbyRemarkPlugins }
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
             rel: "nofollow",
          },
        },
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            urlOverrides: [
              {
                id: "youtube",
                embedURL: (videoId) =>
                  `https://www.youtube-nocookie.com/embed/${videoId}`,
              },
            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
          },
          
        },
        {
          resolve: "gatsby-remark-responsive-iframe",
        }, 

      ],
      options: {
        extensions: [`.mdx`, `.md`],
       
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/content`,
      },
    },
  ],
};
