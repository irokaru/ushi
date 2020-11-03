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
  isDownNew(keyName) {
    if (!this._exists(keyName)) {
      throw Error(`not found keyname => ${keyName}`);
    }

    return !this.keyDowned[keyName] && this.keys[keyName].isDown;
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
