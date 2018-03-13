const getPosts = require('./get/getPosts'),
      fs = require('fs');

const URL = 'https://medium.com/feed/@zonayedpca';

getPosts(URL).then((res) => {
  // res has the json document, you can fo whatever you want

  // Just a demonstration what can be done
  const file = JSON.stringify(res, undefined, 2);
  fs.writeFile('blog.txt', file, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
