'use strict';

import Base   from './_BaseScene';

import Image      from '../Util/Image';
import KeyManager from '../Util/KeyManager';

import System from '../System';

export default class TitleScene extends Base {
  constructor() {
    super({key: 'Title', active: false});
  }

  preload() {
    // TODO: picture load
    this.$.key      = new KeyManager(this);
    this.load.image('title', 'assets/images/title.png');
  }

  create() {
    // TODO: picture show and prepare logic
    this.$.title = this.add.image(System.width / 2, System.height / 4, 'title');
  }

  async update() {
    if (this.$.key.isDown('down')) {
      await Image.fadeOut(this, this.$.title, {duration: 100});
      await this.sleep(2500);
      this.scene.start('Temp');  // TODO: start main
    }
  }
}
