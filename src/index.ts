import webpack, { web } from 'webpack';
import { createFsFromVolume, Volume, IFs } from 'memfs';

const fixture = (config: webpack.Configuration) => {
  const volume = new Volume();
  const fs = createFsFromVolume(volume);

  const compiler = webpack(config);

  compiler.outputFileSystem = createFsFromVolume(volume);
  compiler.inputFileSystem = createFsFromVolume(volume);

  return {
    compiler,
    fs,
    volume,
  };
}

export default fixture;
module.exports = fixture;
