export default class KeyManager {
  /**
   * キー入力
   * @param {Phaser.Scene} scene
   * @returns {this}
   */
  constructor(scene) {
    const originKeys = {
      up   : 'up',
      left : 'left',
      right: 'right',
      down : 'down',
      enter: 'z',
    };

    const downed  = [];

    for (const key of Object.keys(originKeys)) {
      downed[key] = true;
    }

    this.keys      = scene.input.keyboard.addKeys(originKeys);
    this.keyDowned = downed;

    return this;
  }

  /**
   * キーが入力されているかどうか
   * @param {string} keyName
   * @returns {boolean}
   */
  isDown(keyName) {
    if (!this._exists(keyName)) {
      throw Error(`not found keyname => ${keyName}`);
    }

    this.keyDowned[keyName] = this.keys[keyName].isDown;

    return this.keys[keyName].isDown;
  }

  /**
   * キーが新規で入力されているかどうか
   * @param {string} keyName
   * @returns {boolean}
   */
  isNewDown(keyName) {
    if (!this._exists(keyName)) {
      throw Error(`not found keyname => ${keyName}`);
    }

    return !this.keyDowned[keyName] && this.isDown(keyName);
  }

  /**
   * 十字キーが入力されているかどうか
   * @returns {boolean}
   */
  isDownArrow() {
    return this.isDown('up') || this.isDown('down') || this.isDown('left') || this.isDown('right');
  }

  /**
   * 十字キーが新規で入力されているかどうか
   * @returns {boolean}
   */
  isNewDownArrow() {
    return this.isNewDown('up') || this.isNewDown('down') || this.isNewDown('left') || this.isNewDown('right');
  }

  /**
   * キーの状態を更新する
   * @returns {void}
   */
  fresh() {
    for(const key of Object.keys(this.keys)) {
      this.isDown(key);
    }
  }

  /**
   * キーが存在するかどうか
   * @param {string} keyName
   * @returns {boolean}
   */
  _exists(keyName) {
    return Boolean(this.keys[keyName]);
  }
}
