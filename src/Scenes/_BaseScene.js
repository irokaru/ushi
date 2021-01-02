import KeyManager from '../Util/KeyManager';

export default class Base extends Phaser.Scene {
  /**
   * @param {string|Phaser.Types.Scenes.SettingsConfig} config Scene specific configuration settings.
   */
  constructor(config) {
    super(config);
    this.$ = {
      loadImages: {},
      images:     {},
      leaveScene: false,
    };
  }

  preload() {
    this.$.key = new KeyManager(this);
  }

  create() {}

  updaate() {}

  /**
   * 指定msだけ停止する(await必須)
   * @param {integer} time ms
   * @returns {Promise<any>}
   */
  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
