//vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
         args[0].title = "2021!";
         return args;
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ?
          '/timetonewyear/' : '/'
}
