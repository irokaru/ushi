import System from '../System';

export default class Field {
  /**
   * @returns {object}
   */
  static images() {
    return {
      'field.load': {
        path: System.imagePath + 'field_load.png',
      },
      'field.cliff': {
        path: System.imagePath + 'field_cliff.png',
      },
    };
  }

  /**
   * フィールド用画像の初期座標
   * @returns {[{x: number, y: number}]}
   */
  static fieldPoss() {
    const xSize = 80;
    const ySize = 560;

    const poss = [];
    const fieldLen = (System.width + xSize) / xSize;

    for(const index of [...Array(fieldLen).keys()]) {
      poss.push({
        x: index * xSize + xSize / 2,
        y: System.height - ySize / 2,
      });
    }

    return poss;
  }
}
