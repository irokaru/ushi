import System from '../System';

export default class Title {
  /**
   * @returns {object}
   */
  static images() {
    return {
      title: {
        x   : System.width / 2,
        y   : System.height / 6,
        path: System.imagePath + 'title.png',
      },
      'desc.main': {
        x   : System.width / 2,
        y   : System.height / 2 + 50,
        path: System.imagePath + 'description_main.png'
      },
      'desc.start': {
        x   : System.width / 2,
        y   : System.height * 4 / 5 + 50,
        path: System.imagePath + 'description_start.png',
      },
      'desc.trophy': {
        x   : System.width / 6,
        y   : System.height - 40,
        path: System.imagePath + 'description_trophy.png',
      },
    };
  }
}
