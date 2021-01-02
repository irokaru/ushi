class System {
  constructor() {
    const values = {
      width : 1280,
      height: 960,
      imagePath: 'assets/images/',
    };

    this._setupStaticValues(values);
  }

  /**
   * 定数定義用
   * @param {object} values
   */
  _setupStaticValues(values) {
    for (const [key, value] of Object.entries(values)) {
      Object.defineProperties(this, {
        [key]: {
          configurable: true,
          writable    : false,
          value       : value,
        }
      });
    }
  }
}

export default new System();
