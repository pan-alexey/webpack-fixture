import webpack from 'webpack';
import { IFs } from 'memfs';
declare const fixture: (config: webpack.Configuration) => {
    compiler: webpack.Compiler;
    fs: IFs;
    volume: import("memfs/lib/volume").Volume;
};
export default fixture;
