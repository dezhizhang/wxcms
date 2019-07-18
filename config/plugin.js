'use strict';

// had enabled by egg
 exports.static = true;

//使用mongodb数据库
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
  };

  //ejs模板引擎
  exports.ejs = {
    enable: true,
    package:'egg-view-ejs'
  }


  exports.cors = {
      enable: true,
      package: 'egg-cors',
  };

