import Phaser from 'phaser';

import TempScene from './Scenes/TempScene';

// -----------------------------------------------------

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 640,
  height: 480,
  scene: [TempScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
};

// -----------------------------------------------------

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener('resize', () => game.scale.refresh());
