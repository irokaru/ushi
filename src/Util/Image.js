import Validator from 'nonono-validator';

export default class Image {
  /**
   * 画像を一括で読み込むやつ
   * @param {Phaser.scene} scene
   * @param {{key: {path: string}}} images
   * @returns {Phaser.Loader.LoaderPlugin{}}
   */
  static loadImages(scene, images) {
    let ret = {};

    for (const [key, image] of Object.entries(images)) {
      ret[key] = scene.load.image(key, image.path);
    }

    return ret;
  }

  /**
   * 読み込ませた画像を一括で表示するやつ
   * @param {Phaser.scene} scene
   * @param {{key: {x: number, y: number},}} images
   * @returns {Phaser.GameObjects.Image{}}
   */
  static addImages(scene, images) {
    let ret = [];

    for (const [key, image] of Object.entries(images)) {
      if (!Validator.hasKeyInObject(image, 'x') || !Validator.hasKeyInObject(image, 'y')) {
        continue;
      }
      ret[key] = scene.add.image(image.x, image.y, key);
    }

    return ret;
  }

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
