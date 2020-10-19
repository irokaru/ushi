'use strict';

import Base   from './_BaseScene';
import System from '../System';

export default class TempScene extends Base {
  constructor() {
    super({key: 'Temp', active: false});
  }

  create() {
    this.add.text(System.width / 2, System.height / 2, 'this is temp', {fontSize: '48px'}).setOrigin(0.5);
  }

  update() {
  }
}
