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
    this.$.key = new KeyManager(this);

    const loadTarget  = Object.assign(ImageGroup.title(), ImageGroup.field());
    this.$.loadImages = ImageUtil.loadImages(this, loadTarget);
  }

  create() {
    this.$.images = Object.assign(ImageUtil.addImageIterate(this, 'field.load', ImageGroup.fieldPoss()),  // 道
                                  ImageUtil.addImages(this, ImageGroup.title()));                         // タイトル系統
  }

  async update() {
    if (this.$.key.isDownNew('down') && !this.$.leaveScene) {
      this.$.leaveScene = true;
      await ImageUtil.fadeOut(this, Object.values(this.$.images), {duration: 200});
      await this.sleep(400);
      this.scene.start('Temp');  // TODO: start main
    }

    this.$.key.fresh();
  }
}
