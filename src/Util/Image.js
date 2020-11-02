import Validator from 'nonono-validator';

export default class Image {
  /**
   * @param {Phaser.scene} scene
   * @param {array|string} imgs
   * @param {object} param2
   * @returns {Promise<any>}
   */
  static fadeIn(scene, imgs, {duration = 250, alpha = 1, delay = 0} = {}) {
    const imgsArray = Validator.isArray(imgs) ? imgs : [imgs];
    return new Promise(resolve => {
      imgsArray.forEach(v => v.alpha = 0);
      scene.add.tween({
        targets: imgsArray,
        duration,
        ease: 'Power2',
        delay,
        alpha,
        onComplete() {
          resolve();
        },
      });
    });
  }

  /**
   * @param {Phaser.scene} scene
   * @param {array|string} imgs
   * @param {object} param2
   * @returns {Promise<any>}
   */
  static fadeOut(scene, imgs, {destroy = true, duration = 250, delay = 0} = {}) {
    const imgsArray = Validator.isArray(imgs) ? imgs : [imgs];
    return new Promise(resolve => {
      scene.add.tween({
        targets: imgsArray,
        duration,
        ease: 'Power2',
        delay,
        alpha: 0,
        onComplete() {
          if (destroy) {
            imgsArray.forEach(v => v.destroy.bind(v));
          }
          resolve();
        },
      });
    });
  }
}
