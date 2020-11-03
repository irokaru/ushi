export default class KeyManager {
  /**
   * キー入力
   * @param {Phaser.Scene} scene
   * @returns {this}
   */
  constructor(scene) {
    this.keys = scene.input.keyboard.addKeys({
      up   : 'up',
      left : 'left',
      right: 'right',
      down : 'down',
    });

    return this;
  }

  /**
   * キーが入力されているかどうか
   * @param {string} keyName
   * @return {boolean}
   */
  isDown(keyName) {
    if (!this.keys[keyName]) {
      throw Error(`not found keyname => ${keyName}`);
    }

    return this.keys[keyName].isDown;
  }
}
