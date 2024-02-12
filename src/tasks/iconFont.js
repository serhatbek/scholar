import iconfontMaker from 'iconfont-maker';

iconfontMaker(
  {
    files: ['src/assets/icons/*.svg'],
    types: ['ttf'],
    order: ['ttf'],
    fontName: 'scholar',
    dest: 'public/fonts/',
    cssDest: 'src/assets/css/settings/_icons-extend.scss',
    cssTemplate: 'src/tasks/iconTemp.hbs',
    cssFontsUrl: './../assets/css/fonts/',
  },
  function (error) {
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
    }
  }
);
