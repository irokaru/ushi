'use strict';

import Base from './_BaseScene';

import Image      from '../Util/Image';
import KeyManager from '../Util/KeyManager';

import System from '../System';

export default class TitleScene extends Base {
  constructor() {
    super({key: 'Title', active: false});
  }

  preload() {
    this.$.key        = new KeyManager(this);
    this.$.loadImages = Image.loadImages(this, this._initImages());
  }

  create() {
    this.$.images = Object.assign(this.$.images, Image.addImages(this, this._initImages()));
  }

  async update() {
    if (this.$.key.isDownNew('down') && !this.$.leaveScene) {
      this.$.leaveScene = true;
      await Image.fadeOut(this, Object.values(this.$.images), {duration: 200});
      await this.sleep(400);
      this.scene.start('Temp');  // TODO: start main
    }

    this.$.key.fresh();
  }

  // -----------------------------------------------------

  /**
   * 最初に表示する画像群
   * @returns {object}
   */
  _initImages() {
    return {
      title: {
        x:    System.width / 2,
        y:    System.height / 6,
        path: 'assets/images/title.png',
      },
      'desc.main': {
        x:    System.width / 2,
        y:    System.height / 2 + 50,
        path: 'assets/images/description_main.png'
      },
      'desc.start': {
        x:    System.width / 2,
        y:    System.height * 4 / 5 + 50,
        path: 'assets/images/description_start.png',
      },
      'desc.trophy': {
        x:    System.width / 6,
        y:    System.height - 40,
        path: 'assets/images/description_trophy.png',
      },
    };
  }
}
