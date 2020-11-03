import Phaser from 'phaser';

import System from './System';

import TitleScene from './Scenes/TitleScene';
import TempScene from './Scenes/TempScene';

// -----------------------------------------------------

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: System.width,
  height: System.height,
  scene: [TitleScene, TempScene],
  physics: {
    default: 'arcade',
    arcade : {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode      : Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

// -----------------------------------------------------

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
