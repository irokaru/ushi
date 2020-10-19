import KeyManager from '../Util/KeyManager';

export default class Base extends Phaser.Scene {
  /**
   * @param {string|Phaser.Types.Scenes.SettingsConfig} config Scene specific configuration settings.
   */
  constructor(config) {
    super(config);
    this.$ = {};
  }

  preload() {
    this.$.key = new KeyManager(this);
  }

  create() {}

  updaate() {}
}
