'use strict';

// had enabled by egg
// exports.static = true;

//使用mongodb数据库
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
  };



exports.cors = {
    enable: true,
    package: 'egg-cors',
};

