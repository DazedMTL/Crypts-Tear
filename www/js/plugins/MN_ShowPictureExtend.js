//=============================================================================
// MN_ShowPictureExtend - 画像の表示拡張
// ---------------------------------------------------------------------------
// author: minazuki
// ---------------------------------------------------------------------------
// ver:
//      1.0 (2020-05-15) 初版
// ---------------------------------------------------------------------------
// Copyright (c) 2020 minazuki
// Released under the MIT license
// https://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 画像表示を拡張 picturesのサブフォルダや別フォルダの画像が表示可能に
 * @author minazuki
 * @help 
 * 
 * --- 概要 --------------------------------------------------------------
 * $gameScreen.showPicture() では、pictureフォルダ直下の画像しか
 * 表示できませんでした。このプラグインを導入すると、ファイル名に
 * フォルダパスを入れた場合にはpictureフォルダ内のフォルダを参照して
 * 画像を表示することができます。また、ファイル名の先頭に'/'を入力すると
 * プロジェクトフォルダからのパスとなり、プロジェクト内のどの画像も
 * 表示することができます。
 * 
 * 
 * --- 導入方法 ----------------------------------------------------------
 * プラグインマネージャで読み込むだけで動作します。
 * 設定項目はありません。
 * 
 * 
 * --- 使い方 ------------------------------------------------------------
 * $gameScreen.showPicture()のファイル名にファイルパス指定ができます。
 * それだけです。詳しい使い方は以下の例をどうぞ。
 * ※「./」「../」は使用できません。
 * 
 * 
 * --- 例 ----------------------------------------------------------------
 * exp.1) picturesフォルダ内のサブフォルダにある画像を表示する
 *   
 *   img / pictures / サブフォルダ / image.png
 *   の「image.png」を表示したい
 *     -> $gameScreen.showPicture()のファイル名部分に
 *        'サブフォルダ/image'    と指定する。
 * 
 * 
 * exp.2) exp.1 より更に下層のフォルダにある画像を表示する
 * 
 *   img / pictures / サブフォルダ / サブフォルダ2 / image.png
 *   の「image.png」を表示したい
 *     -> $gameScreen.showPicture()のファイル名部分に
 *        'サブフォルダ/サブフォルダ2/image'    と指定する。
 * 
 * 
 * exp.3) enemiesフォルダ内の画像を表示する
 *   
 *   img / enemies / enemyImage.png
 *   の「enemyImage.png」を表示したい
 *     -> $gameScreen.showPicture()のファイル名部分に
 *        '/img/enemies/enemyImage'    と指定する。
 * 
 *   ※先頭の'/'に注意!!
 * 
 * 
 * exp.4) enemiesフォルダ内のサブフォルダにある画像を表示する
 *   
 *   img / enemies / サブフォルダ / enemyImage.png
 *   の「enemyImage.png」を表示したい
 *     -> $gameScreen.showPicture()のファイル名部分に
 *        '/img/enemies/サブフォルダ/enemyImage'    と指定する。
 * 
 *   ※先頭の'/'に注意!!
 * 
 * 
 * exp.5) プロジェクトフォルダ直下の画像を表示する
 *   
 *   (projectフォルダ) / projectImage.png
 *   の「projectImage.png」を表示したい
 *     -> $gameScreen.showPicture()のファイル名部分に
 *        '/projectImage'    と指定する。
 * 
 *   ※先頭の'/'に注意!!
 * 
 * 
 */

(function () {
    'use strict';

    const defaultFilePath = 'img/pictures/';
    const separator = '/';
    const sepReg = new RegExp(separator);

    var ImageManager_loadPicture = ImageManager.loadPicture;
    ImageManager.loadPicture = function (filename, hue) {
        if (filename.match(sepReg)) {
            var fn = filename.split(separator);
            var path = filename.slice(0, 1) == separator ? fn.shift() : defaultFilePath;
            for (var i = 0; i < fn.length - 1; i++) {
                path += fn[i] + separator;
            }
            return this.loadBitmap(path, fn[fn.length - 1], hue, true);
        }
        return ImageManager_loadPicture.call(this, filename, hue);
    };

})();