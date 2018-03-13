const getPosts = require('./get/getPosts'),
      fs = require('fs');

const URL = 'https://medium.com/feed/@zonayedpca';

getPosts(URL).then((res) => {
  const file = JSON.stringify(res, undefined, 2);
  fs.writeFile('blog.txt', file, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
