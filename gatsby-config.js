module.exports = {
  siteMetadata: {
    title: `老牌靠谱留学生代写机构｜B-以下全额退款｜EzEssay`,
    description: `成立5年，服务全球8000+海外学子，各类科目老师一对一在线沟通辅导，我们的服务有美国论文代写，essay代写，语法修改，简历润色，提供免费检测报告。 全球24小时在线客服，12小时内紧急服务可接。我们是您GPA的救火队长！`,
    author: `EzEssay`,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134263318-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
