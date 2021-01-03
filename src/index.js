import Phaser from 'phaser';

import System from './System';

import TitleScene from './Scenes/TitleScene';
import MainScene  from './Scenes/MainScene';

// -----------------------------------------------------

const config = {
  type   : Phaser.AUTO,
  parent : 'game',
  width  : System.width,
  height : System.height,
  scene  : [TitleScene, MainScene],
  physics: {
    default: 'arcade',
    arcade : {
      gravity: { y: 0 },
    },
  },
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

// -----------------------------------------------------

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
