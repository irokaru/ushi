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
      load: {

      },
      cliff: {

      },
    };
  }
}
