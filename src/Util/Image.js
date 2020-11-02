import Validator from 'nonono-validator';

export default class Image {
  /**
   * @param {Phaser.scene} scene
   * @param {array|Phaser.Loader.LoaderPlugin.image} imgs
   * @param {object} param
   * @returns {Promise<any>}
   */
  static fadeIn(scene, imgs, {duration = 250, alpha = 1, delay = 0} = {}) {
    const imgsArray = Validator.isArray(imgs) ? imgs : [imgs];

    return new Promise(resolve => {
      imgsArray.forEach(v => v.alpha = 0);
      scene.tweens.add({
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
   * @param {array|Phaser.Loader.LoaderPlugin.image} imgs
   * @param {object} params
   * @returns {Promise<any>}
   */
  static fadeOut(scene, imgs, {destroy = true, duration = 250, delay = 0} = {}) {
    const imgsArray = Validator.isArray(imgs) ? imgs : [imgs];

    return new Promise(resolve => {
      scene.tweens.add({
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
