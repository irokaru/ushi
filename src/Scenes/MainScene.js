'use strict';

import Base from './_BaseScene';

import ImageUtil  from '../Util/ImageUtil';
import KeyManager from '../Util/KeyManager';

import BgImages     from '../ImageGroup/BackGround';
import FieldImages  from '../ImageGroup/Field';
import NumberImages from '../ImageGroup/Number';
import UshiImages   from '../ImageGroup/Ushi';

export default class MainScene extends Base {
  constructor() {
    super({key: 'Main', active: false});

    // init variables
    this.$.distance = 0;
  }

  preload() {
    this.$.key = new KeyManager(this);
    this.$.loadImages = Object.assign(this.$.loadImages, ImageUtil.loadImages(this, NumberImages.images()));
  }

  create() {
    this.$.images = Object.assign(ImageUtil.addImageIterate(this, 'bg.sky', BgImages.skyPoss()),           // 背景
                                  ImageUtil.addImageIterate(this, 'field.load', FieldImages.fieldPoss()),  // 道
                                  ImageUtil.addImages(this, UshiImages.images()));                         // うし
  }

  async update() {
    // TODO: standby logic
    // TODO: action logic

    this.$.key.fresh();
  }
}
