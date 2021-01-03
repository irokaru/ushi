import Validator from 'nonono-validator';

export default class ImageUtil {
  /**
   * 画像を一括で読み込むやつ
   * @param {Phaser.scene} scene
   * @param {{key: {path: string}}} images
   * @returns {{key: Phaser.Loader.LoaderPlugin}}
   */
  static loadImages(scene, images) {
    const ret = {};

    for (const [key, image] of Object.entries(images)) {
      ret[key] = scene.load.image(key, image.path);
    }

    return ret;
  }

  /**
   * 読み込ませた画像を一括で表示するやつ
   * @param {Phaser.scene} scene
   * @param {{key: {x: number, y: number}}} images
   * @returns {{key: Phaser.GameObjects.Image}}
   */
  static addImages(scene, images) {
    const ret = {};

    for (const [key, image] of Object.entries(images)) {
      if (!Validator.hasKeyInObject(image, 'x') || !Validator.hasKeyInObject(image, 'y')) {
        continue;
      }
      ret[key] = scene.add.image(image.x, image.y, key);
    }

    return ret;
  }

  /**
   * possの数だけ同一の画像を一括で表示するやつ
   * @param {Phaser.scene} scene
   * @param {string} image
   * @param {[{x: number, y: number}]} poss
   * @returns {{key: Phaser.GameObjects.Image}}
   */
  static addImageIterate(scene, key, poss) {
    const ret = {};

    for (const [index, pos] of poss.entries()) {
      ret[`${key}${index}`] = scene.add.image(pos.x, pos.y, key);
    }

    return ret;
  }

  /**
   * キー名を基に画像一覧をフィルタリングする
   * @param {{key: Phaser.GameObjects.Image}} images
   * @param {string} keyRgx
   */
  static filterImages(images, keyRgx) {
    const rgx = new RegExp(keyRgx);

    return Object.keys(images)
                 .filter(key => key.match(rgx))
                 .reduce((obj, key) => {
                   obj[key] = images[key];
                   return obj;
                 }, {});
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
