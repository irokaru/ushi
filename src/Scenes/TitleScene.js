'use strict';

import Base from './_BaseScene';

import ImageUtil  from '../Util/ImageUtil';
import KeyManager from '../Util/KeyManager';
import ImageGroup from '../Image/ImageGroup';

export default class TitleScene extends Base {
  constructor() {
    super({key: 'Title', active: false});
  }

  preload() {
    this.$.key        = new KeyManager(this);
    this.$.loadImages = ImageUtil.loadImages(this, ImageGroup.title());
  }

  create() {
    this.$.images = Object.assign(this.$.images, ImageUtil.addImages(this, ImageGroup.title()));
    // this.$.images = Object.assign(this.$.images, ImageUtil.addImageIterate(this, 'field.load', ImageGroup.fieldPoss()));
  }

  async update() {
    if (this.$.key.isDownNew('down') && !this.$.leaveScene) {
      console.log(ImageGroup.fieldPoss());
      this.$.leaveScene = true;
      await ImageUtil.fadeOut(this, Object.values(this.$.images), {duration: 200});
      await this.sleep(400);
      this.scene.start('Temp');  // TODO: start main
    }

    this.$.key.fresh();
  }
}
