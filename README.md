The Longest Yard
================

This is the source code for https://thelongestyard.link

It's a port of Quake III to the web, based on [ioquake3](https://ioquake3.org). Some of the most important changes have been upstreamed, but there are a lot of random little modifications here. The goal is for this to be the definitive web port of the Quake III engine, with performance and multiplayer as good as native on modern machines, and with support for web essentials such as mobile touch controls. 

Credits:
  * Quake III Arena [Buy the game!](https://store.steampowered.com/app/2200/Quake_III_Arena/)
  * [ioquake3](https://ioquake3.org)
  * [ZTM's Flexible HUD mod for ioquake3](https://github.com/zturtleman/flexible-hud-for-ioq3/)
  * [virtual-gamepad-lib](https://github.com/KW-M/virtual-gamepad-lib)
  * [compression-streams-polyfill](https://github.com/101arrowz/compression-streams-polyfill)

For general build instructions see the upstream repo. Here's the web specific information:

  1. Follow the installation instructions for the Emscripten SDK including
     setting up the environment with emsdk_env.
  2. Copy or symlink your baseq3 directory into this directory so Emscripten
     can package your game files. (Alternatively, you can build without this,
     and provide the game data files at runtime. For this, game files should
     be listed in `ioq3-config.json`)
  3. Run `emmake make debug` (or release, but if you do both then you will
     need to pass an extra URL parameter to the HTML file to select the
     build you want).
  4. Start a web server serving this directory. `python3 -m http.server`
     is an easy default that you may already have installed.
  5. Open `code/web/ioquake3.html` in a web browser. Open the developer
     console to see errors and warnings.
  6. Debugging the C code is possible using a Chrome extension. For details
     see https://developer.chrome.com/blog/wasm-debugging-2020
