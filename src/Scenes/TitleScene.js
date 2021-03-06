'use strict';

import Base from './_BaseScene';

import ImageUtil  from '../Util/ImageUtil';
import KeyManager from '../Util/KeyManager';

import BgImages    from '../ImageGroup/BackGround';
import FieldImages from '../ImageGroup/Field';
import TitleImages from '../ImageGroup/Title';
import UshiImages  from '../ImageGroup/Ushi';

export default class TitleScene extends Base {
  constructor() {
    super({key: 'Title', active: false});
  }

  preload() {
    this.$.key = new KeyManager(this);

    const loadTarget  = Object.assign(BgImages.images(), TitleImages.images(), FieldImages.images(), UshiImages.images());
    this.$.loadImages = ImageUtil.loadImages(this, loadTarget);
  }

  create() {
    this.$.images = Object.assign(ImageUtil.addImageIterate(this, 'bg.sky', BgImages.skyPoss()),           // 背景
                                  ImageUtil.addImageIterate(this, 'field.load', FieldImages.fieldPoss()),  // 道
                                  ImageUtil.addImages(this, UshiImages.images()),                          // うし
                                  ImageUtil.addImages(this, TitleImages.images()));                        // タイトル系統
  }

  async update() {
    if (this.$.key.isNewDownArrow() && !this.$.leaveScene) {
      this.$.leaveScene = true;

      const titleImageDatas = ImageUtil.filterImages(this.$.images, "^title.");

      await ImageUtil.fadeOut(this, Object.values(titleImageDatas), {duration: 200});
      await this.sleep(400);

      this.scene.start('Main');
    }

    this.$.key.fresh();
  }
}
