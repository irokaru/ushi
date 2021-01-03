import System from '../System';

export default class Number {
  /**
   * @returns {object}
   */
  static images() {
    const images = {};

    for (const number of [...Array(10).keys()]) {
      images[`number.${number}`] = {
        path: System.imagePath + `number_${number}`
      };
    }

    return images;
  }
}
