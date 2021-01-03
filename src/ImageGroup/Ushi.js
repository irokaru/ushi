import System from '../System';

export default class Ushi {
  /**
   * @returns {object}
   */
  static images() {
    return {
      ushi: {
        x   : System.width / 2,
        y   : System.height / 2,
        path: System.imagePath + 'ushi.png',
      },
    };
  }
}
