# webpack-fixture

The fixture is needed to create webpack compilation tests.

The result of the function execution returns:
* [compiler](https://webpack.js.org/api/node/#compiler-instance) This instance can be used to manually trigger the webpack runner or have it build and watch for changes

* [volume](https://github.com/streamich/memfs/blob/HEAD/docs/reference.md#volume-instance-vol) is an instance of Volume constructor, it is the default volume created for your convenience

* [fs](https://github.com/streamich/memfs/blob/HEAD/docs/reference.md#createfsfromvolumevol) is an fs-like object created from vol using createFsFromVolume(vol)

Usage
```ts
import webpack from 'webpack';
import webpackFixture from 'webpack-fixture';

const webpackConfig:webpack.Configuration  = {
  entry: '/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: '/build',
  },
};

const { compiler, fs, volume } = webpackFixture(webpackConfig);
fs.writeFileSync('/index.js', `
console.log(1)
const _ = 1;
console.log(2)
`);

const { err, stats } = await new Promise((resolve) => {
  compiler.run((err, stats) => {
    resolve({ err, stats });
  });
});

const volumeJon = volume.toJSON();

/*
json['/index.js'] => `
console.log(1)
const _ = 1;
console.log(2)
`

json['/build/bundle.js'] => `console.log(1),console.log(2);`
*/

```