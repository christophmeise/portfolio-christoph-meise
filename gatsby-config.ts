export const siteMetadata = {
  title: 'PortfolioChristophMeise',
  description:
    'Portfolio Christoph Meise - ExploreChristoph',
  author: 'Christoph Meise',
  siteUrl: 'https://explorechristoph.com/'
};

export const plugins = [
  {
    resolve: 'gatsby-plugin-subfont',
    options: {
      silent: false,
      fallbacks: false,
      inlineFonts: true,
      fontDisplay: 'block'
    }
  },
  'gatsby-plugin-preact',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-smoothscroll',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-132430327-1'
    }
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'static/images/icon.png' // This path is relative to the root of the site.
    }
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './static/images'
    },
    __key: 'images'
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'static',
      path: './static'
    },
    __key: 'static'
  }
];
