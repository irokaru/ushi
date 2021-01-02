import System from '../System';

export default class ImageGroup {
  /**
   * @returns {object}
   */
  static title() {
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

  /**
   * @returns {object}
   */
  static field() {
    return {
      'field.load': {
        path: 'assets/images/field_load.png',
      },
      'field.cliff': {
        path: 'assets/images/field_cliff.png',
      },
    };
  }

  /**
   * フィールド用画像の初期座標
   * @returns {[{x: number, y: number}]}
   */
  static fieldPoss() {
    const xSize = 40;
    const ySize = 128;
    const poss = [];

    for(let index = 0; index < System.width / xSize; index++) {
      poss.push({
        x: index * xSize + xSize / 2,
        y: System.height - ySize / 2,
      });
    }

    return poss;
  }
}
