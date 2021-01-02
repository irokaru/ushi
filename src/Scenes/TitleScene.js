'use strict';

import Base from './_BaseScene';

import Image      from '../Util/Image';
import KeyManager from '../Util/KeyManager';
import ImageGroup from '../Image/ImageGroup';

export default class TitleScene extends Base {
  constructor() {
    super({key: 'Title', active: false});
  }

  preload() {
    this.$.key        = new KeyManager(this);
    this.$.loadImages = Image.loadImages(this, ImageGroup.title());
  }

  create() {
    this.$.images = Object.assign(this.$.images, Image.addImages(this, ImageGroup.title()));
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
}
