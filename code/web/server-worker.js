let { promise: demoq3pak0Promise, resolve: gotDemoq3pak0 } = Promise.withResolvers();

let generatedArguments = `
    +set fs_game demoq3
    +set net_enabled 16
`;
    // +map q3dm17
    // +addbot daemia 2
    // +addbot visor 2
    // +addbot sarge 2
    // +addbot stripe 2
    // +addbot major 2

const buildPath = '../../build/debug-emscripten-wasm32';

import(`${buildPath}/ioq3ded.wasm32.js`).then((ioq3ded)=>{
    ioq3ded.default({
        arguments: generatedArguments.trim().split(/\s+/),
        locateFile: (file) => `${buildPath}/${file}`,
        preRun: [async (module) => {
            // Add the fetched asset files to the Emscripten virtual filesystem.
            module.addRunDependency('setup-ioq3-filesystem');
            module.FS.mkdirTree('/demoq3');
            module.FS.writeFile('/demoq3/pak0.pk3', await demoq3pak0Promise);
            // progress.style.display = 'none';
            module.removeRunDependency('setup-ioq3-filesystem');
        }],
    });
});


// demoq3/pak0.pk3 is original Quake 3 demo assets. Fetch them from a tarfile in a gz file in a shell script in a zip file at the Internet Archive.
// First check to see if we have it in the cache
const cache = await caches.open('thelongestyard');
const cacheResponse = await cache.match('/demoq3/pak0.pk3');
let demoq3pak0 = await cacheResponse?.arrayBuffer();
if (demoq3pak0) {
    demoq3pak0 = new Uint8Array(demoq3pak0);
} else {
    throw new Error('not downloading pak0, run the client first to download it');
}
if (!demoq3pak0) throw new Error('demoq3/pak0.pk3 not found');
gotDemoq3pak0(demoq3pak0);
