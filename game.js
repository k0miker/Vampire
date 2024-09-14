import Game from "./game2.js";

// CALC framerate checking how many frames were counted after one second
// depending on the monitor fps: usually something close to 60 or 120

let framesTest = 0;

const framesCount = () => {
  framesTest++;
  if (framesTest < 200) requestAnimationFrame(framesCount);
};

// here you can narrow down to real fps
// (you can toggle between 120 and 60 or do it more fine grained)
const calcFpsFromCountedFrames = () => {
  return framesTest > 90 ? 120 : 60;
};

// determine fps by counting frames, wait for one second and detect how many frames were counted
export const determineFps = async () => {
  framesCount();
  // wrap setTimeout in a promise
  // this way we can notify the caller when the timeout is finished
  return new Promise((resolve) => {
    // once the timeout finishes after 1 second => resolve promise
    // (so the caller of "determineFps" function will get something returned)
    setTimeout(() => {
      const fps = calcFpsFromCountedFrames();
      resolve(fps);
    }, 1000);
  });
};

// the x frame that we want to update something in GameLoop
let frameAction;

const initGame = async () => {
  const fps = await determineFps();

  // determine x frame when we want to update from fps
  // example: fps 60 => do something every 10 frames (60/6)
  // example: fps 120 => do something every 20 frames! (120/6)
  frameAction = fps / 6;
  console.log("FPS: ", fps);
  console.log("Update UI each", frameAction, "frames");
  // start game loop...
  const game = new Game(fps);
};
initGame();
