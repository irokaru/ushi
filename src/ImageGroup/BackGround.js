import System from '../System';

export default class BackGround {
  /**
   * @returns {object}
   */
  static images() {
    return {
      'bg.sky': {
        path: System.imagePath + 'background_sky.png',
      },
    };
  }

  /**
   * @returns {{x: number, y: number}[]}
   */
  static skyPoss() {
    const poss = [];

    for (const index of [...Array(2).keys()]) {
      poss.push({
        x: System.width / 2 + index * System.width,
        y: System.height / 2,
      });
    }

    return poss;
  }
}
