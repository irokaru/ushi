import Phaser from 'phaser';

import System from './System';

import TempScene from './Scenes/TempScene';

// -----------------------------------------------------

const config = {
  type   : Phaser.AUTO,
  parent : 'game',
  width  : System.width,
  height : System.height,
  scene  : [TempScene],
  physics: {
    default: 'arcade',
    arcade : {
      gravity: { y: 0 },
    },
  },
};

// -----------------------------------------------------

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
