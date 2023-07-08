//=============================================================================
// KMS_QuickNotification.js
//   Last update: 2020/02/01
//=============================================================================

/*:
 * @plugindesc
 * [v0.1.1] Show popup notification.
 * 
 * @author Kameo (Kamesoft)
 *
 * @param Display duration
 * @default 300
 * @desc Display frame count.
 *
 * @param Display position
 * @default 0
 * @desc
 *  Notification position.
 *  0: TopLeft  1: TopRight  2: BottomLeft  3: BottomRight
 *
 * @param Face image size
 * @default 64
 * @desc Face image size in notification by pixel.
 *
 * @param Font size
 * @default 18
 * @desc Font size for notification.
 *
 * @param Max notification count
 * @default 4
 * @desc Max number of notifications which can be displayed together.
 *
 * @param Notification SE
 * @default Saint5
 * @require 1
 * @dir audio/se/
 * @type file
 * @desc SE for showing notification.
 *
 * @param Notification SE param
 * @default 100, 50
 * @desc
 * Format: Volume, Pitch, Pan
 * Parameters for notification SE.
 *
 * @param Notification skin
 * @default QuickNotificationSkin
 * @require 1
 * @dir img/system/
 * @type file
 * @desc Skin for notifications. Load from img/system.
 *
 *
 * @help
 *
 * ## Plugin command
 *
 * QuickNotification enable     # Enable quick notification
 * QuickNotification disable    # Display quick notification
 * QuickNotification register   # Register quick notification by the next message event
 *
 */

/*:ja
 * @plugindesc
 * [v0.1.1] ポップアップ通知を表示する機能を追加します。
 * 
 * @author かめお (Kamesoft)
 *
 * @param Display duration
 * @default 180
 * @desc 通知表示時間をフレーム単位で指定します。
 *
 * @param Display position
 * @default 0
 * @desc
 *  通知を表示する位置です。
 *  0: 左上  1: 右上  2: 左下  3: 右下
 *
 * @param Face image size
 * @default 64
 * @desc 通知用顔グラフィックのサイズをピクセル単位で指定します。
 *
 * @param Font size
 * @default 18
 * @desc 通知のフォントサイズを指定します。
 *
 * @param Max notification count
 * @default 4
 * @desc 同時に表示できる通知の最大数です。
 *
 * @param Notification SE
 * @default Saint5
 * @require 1
 * @dir audio/se/
 * @type file
 * @desc 通知表示時に演奏する SE のファイル名です。 audio/se から読み込みます。
 *
 * @param Notification SE param
 * @default 100, 50
 * @desc
 * 書式: ボリューム, ピッチ, パン
 * 通知表示時に演奏する SE のパラメータです。ピッチ以降省略可。
 *
 * @param Notification skin
 * @default QuickNotificationSkin
 * @require 1
 * @dir img/system/
 * @type file
 * @desc 通知の表示に使用するスキン画像です。 img/system から読み込みます。
 *
 *
 * @help
 *
 * ■ プラグインコマンド
 *
 * QuickNotification enable     # 通知を有効にします。
 * QuickNotification disable    # 通知を無効にします。
 * QuickNotification register   # 次の「文章の表示」コマンドで通知を登録します。
 *
 */

var KMS = KMS || {};

(function () {

    'use strict';

    // 定数
    var Const =
    {
        debug: false,               // デバッグモード
        pluginCode: 'QuickNotification', // プラグインコード

        // 表示位置
        displayPosition:
        {
            topLeft: 0,     // 左上
            topRight: 1,     // 右上
            bottomLeft: 2,     // 左下
            bottomRight: 3      // 右下
        }
    };

    var PluginName = 'KMS_' + Const.pluginCode;

    KMS.imported = KMS.imported || {};
    KMS.imported[Const.pluginCode] = true;

    // デフォルト値つきで文字列から int を解析
    function parseIntWithDefault(param, defaultValue) {
        var value = parseInt(param);
        return isNaN(value) ? defaultValue : value;
    }

    var pluginParams = PluginManager.parameters(PluginName);
    var Params = {};
    Params.displayDuration = Math.max(parseIntWithDefault(pluginParams['Display duration'], 300), 1);
    Params.displayGap = parseIntWithDefault(pluginParams['Display gap'], 16);
    Params.displayOffsetX = parseIntWithDefault(pluginParams['Display offset X'], -2);
    Params.displayOffsetY = parseIntWithDefault(pluginParams['Display offset Y'], 32);
    Params.faceImageSize = Math.max(parseIntWithDefault(pluginParams['Face image size'], 64), 1);
    Params.fadeFrameCount = Math.max(parseIntWithDefault(pluginParams['Fade frame count'], 8), 1);
    Params.fontSize = Math.max(parseIntWithDefault(pluginParams['Font size'], 18), 1);
    Params.notificationCountMax = Math.max(parseIntWithDefault(pluginParams['Max notification count'], 4), 1);
    Params.notificationSkin = pluginParams['Notification skin'] || 'QuickNotificationSkin';
    Params.displayPosition =
        Math.min(
            Math.max(
                parseIntWithDefault(pluginParams['Display position'], Const.displayPosition.topLeft),
                Const.displayPosition.topLeft),
            Const.displayPosition.bottomRight
        );

    // 通知 SE の解析
    (function () {
        Params.notificationSe = null;

        var paramFile = pluginParams['Notification SE'];
        if (!paramFile) {
            return;
        }

        var paramFileArgs = paramFile.replace(/\s+/g, '').split(/,/);
        if (paramFileArgs.length <= 0) {
            return;
        }

        Params.notificationSe = { name: paramFileArgs[0] };

        var paramArgs = { volume: 90, pitch: 100, pan: 0 };
        var paramDetail = pluginParams['Notification SE param'];
        if (paramDetail != null) {
            var paramDetailArgs = paramDetail.replace(/\s+/g, '').split(/,/);
            paramArgs.volume = Number(paramDetailArgs[0]) || paramArgs.volume;
            paramArgs.pitch = Number(paramDetailArgs[1]) || paramArgs.pitch;
            paramArgs.pan = Number(paramDetailArgs[2]) || paramArgs.pan;
        }

        Params.notificationSe.volume = Number(paramArgs.volume) || 90;
        Params.notificationSe.pitch = Number(paramArgs.pitch) || 100;
        Params.notificationSe.pan = Number(paramArgs.pan) || 0;
    })();

    // デバッグログ
    var debuglog;
    if (Const.debug) {
        debuglog = function () { console.log(arguments); }
    }
    else {
        debuglog = function () { }
    }

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command !== Const.pluginCode) {
            return;
        }

        switch (args[0]) {
            case 'enable':      // 有効化
                $gameSystem.setQuickNotificationEnabled(true);
                break;

            case 'disable':     // 無効化
                $gameSystem.setQuickNotificationEnabled(false);
                break;

            case 'register':    // 通知の登録開始
                $gameTemp.setQuickNotificationRegistrationMode(true);
                break;

            default:
                // 不明なコマンド
                console.error('[%s %s] Unknown command.', Const.pluginCode, args[0]);
                break;
        }
    };


    //-----------------------------------------------------------------------------
    // Game_Temp

    var _Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _Game_Temp_initialize.call(this);

        this.setQuickNotificationRegistrationMode(false);
        this.clearQuickNotification();
    };

    /**
     * 通知登録モードの切り替え
     */
    Game_Temp.prototype.setQuickNotificationRegistrationMode = function (flag) {
        this._isQuickNotificationRegistering = !!flag;
    };

    /**
     * 通知登録モードに設定されているか
     */
    Game_Temp.prototype.isQuickNotificationRegistrationMode = function () {
        return this._isQuickNotificationRegistering;
    };

    /**
     * 通知の登録
     */
    Game_Temp.prototype.registerQuickNotification = function (notification) {
        this._quickNotifications.push(notification);
    };

    /**
     * 通知のクリア
     */
    Game_Temp.prototype.clearQuickNotification = function () {
        this._quickNotifications = [];
    };

    /**
     * 次の通知を取得
     */
    Game_Temp.prototype.retrieveNextQuickNotification = function () {
        return this._quickNotifications.shift();
    };

    /**
     * 通知が登録されているか
     */
    Game_Temp.prototype.isQuickNotificationReady = function () {
        return this._quickNotifications.length > 0;
    };


    //-----------------------------------------------------------------------------
    // Game_System

    /**
     * 通知の有効状態を取得
     */
    Game_System.prototype.isQuickNotificationEnabled = function () {
        return this._quickNotificationEnabled != null ? this._quickNotificationEnabled : true;
    };

    /**
     * 通知の有効状態を設定
     */
    Game_System.prototype.setQuickNotificationEnabled = function (enabled) {
        this._quickNotificationEnabled = !!enabled;
    };


    //-----------------------------------------------------------------------------
    // Game_Interpreter

    var _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
    Game_Interpreter.prototype.command101 = function () {
        if (!$gameMessage.isBusy() &&
            $gameTemp.isQuickNotificationRegistrationMode()) {
            $gameTemp.setQuickNotificationRegistrationMode(false);

            var notification =
            {
                text: '',
                faceName: this._params[0],
                faceIndex: this._params[1]
            };
            //$gameMessage.setBackground(this._params[2]);
            //$gameMessage.setPositionType(this._params[3]);

            // テキストを改行区切りで連結
            while (this.nextEventCode() === 401) {
                if (notification.text.length > 0) {
                    notification.text += '\n';
                }

                this._index++;
                notification.text += this.currentCommand().parameters[0];
            }

            // 通知の登録
            $gameTemp.registerQuickNotification(notification);

            // 次のコマンドへ
            this._index++;

            return false;
        }

        return _Game_Interpreter_command101.call(this);
    };


    //-----------------------------------------------------------------------------
    // Window_QuickNotification
    //
    // 通知を表示するウィンドウ

    function Window_QuickNotification() {
        this.initialize.apply(this, arguments);
    }

    Window_QuickNotification.prototype = Object.create(Window_Base.prototype);
    Window_QuickNotification.prototype.constructor = Window_QuickNotification;

    // メッセージの一時描画バッファ
    Window_QuickNotification.tempMessageBuffer = null;

    /**
     * 通知用スキンの事前読み込み
     */
    Window_QuickNotification.preloadWindowskin = function () {
        ImageManager.loadSystem(Params.notificationSkin);
    };

    Window_QuickNotification.prototype.initialize = function () {
        // コンテンツサイズは内容に応じて可変なので、ウィンドウサイズは仮
        Window_Base.prototype.initialize.call(this, 0, 0, 64, 64);

        if (Window_QuickNotification.tempMessageBuffer == null) {
            Window_QuickNotification.tempMessageBuffer =
                new Bitmap(Graphics.boxWidth, Graphics.boxHeight / 2);
        }

        this.opacity = 0;
        this.contentsOpacity = 0;
        this.initMembers();
    };

    Window_QuickNotification.prototype.standardFontSize = function () {
        return Params.fontSize;
    };

    Window_QuickNotification.prototype.loadWindowskin = function () {
        // デフォルトのスキンの代わりに、通知用のスキンを読み込む
        this._windowskin = ImageManager.loadSystem(Params.notificationSkin);
    };

    Window_QuickNotification.prototype.initMembers = function () {
        this._textState = null;
        this._allTextWidth = 0;
        this._allTextHeight = 0;
        this._duration = 0;
        this._destinationY = -1;
        this._faceName = '';
        this._faceIndex = 0;
        this._faceBitmap = null;
    };

    /**
     * 目標 Y 座標を設定
     */
    Window_QuickNotification.prototype.setDestinationY = function (y) {
        // 最初は目標位置にそのまま表示する
        if (this._destinationY < 0) {
            this.y = y;
        }

        this._destinationY = y;
    };

    Window_QuickNotification.prototype.hide = function () {
        this._duration = 0;

        Window_Base.prototype.hide.call(this);
    };

    /**
     * フェードアウト
     */
    Window_QuickNotification.prototype.fadeOut = function () {
        if (this.isFadingOut()) {
            return;
        }

        if (this.isFadingIn()) {
            // フェードイン中は同じ不透明度からフェードアウトする
            this._duration = Params.displayDuration - this._duration;
        }
        else {
            this._duration = Params.fadeFrameCount;
        }
    };

    Window_QuickNotification.prototype.numVisibleRows = function () {
        return 4;
    };

    /**
     * 通知を表示中か
     */
    Window_QuickNotification.prototype.isDisplaying = function () {
        return this._duration > 0;
    };

    /**
     * フェードイン中か
     */
    Window_QuickNotification.prototype.isFadingIn = function () {
        return this._duration >= Params.displayDuration - Params.fadeFrameCount;
    };

    /**
     * フェードアウト中か
     */
    Window_QuickNotification.prototype.isFadingOut = function () {
        return this._duration < Params.fadeFrameCount;
    };

    /**
     * 顔グラフィックのロード中処理
     */
    Window_QuickNotification.prototype.updateLoading = function () {
        if (this._faceBitmap == null) {
            return false;
        }

        if (ImageManager.isReady()) {
            this.drawMessageFace();
            this._faceBitmap = null;
            return false;
        }
        else {
            return true;
        }
    };

    /**
     * 目標不透明度の取得
     */
    Window_QuickNotification.prototype.getTargetOpacity = function () {
        if (this.isFadingIn()) {
            // フェードイン
            return 255 * (Params.displayDuration - this._duration) / Params.fadeFrameCount;
        }
        else if (this.isFadingOut()) {
            // フェードアウト
            return 255 * this._duration / Params.fadeFrameCount;
        }
        else {
            return 255;
        }
    };

    /**
     * 通知の表示開始
     */
    Window_QuickNotification.prototype.display = function (notification) {
        this.initMembers();

        if (notification == null ||
            notification.text == null) {
            this.hide();
            return;
        }

        // 表示パラメータの設定
        this._textState =
        {
            index: 0,
            text: this.convertEscapeCharacters(notification.text)
        };
        this._allTextWidth = 0;
        this._duration = Params.displayDuration;
        this._faceName = notification.faceName || '';
        this._faceIndex = notification.faceIndex;
        this._faceBitmap = null;

        this.newPage(this._textState);
        this.updatePosition();
        this.updateOpacity();
        this.show();
    };

    /**
     * 新しいページの表示
     */
    Window_QuickNotification.prototype.newPage = function (textState) {
        // コンテンツを一時領域に書く
        this.contents = Window_QuickNotification.tempMessageBuffer;
        this.contents.clear();
        this.resetFontSettings();
        this.loadMessageFace();
        textState.x = this.newLineX();
        textState.y = 0;
        textState.left = this.newLineX();
        textState.height = this.calcTextHeight(textState, false);
        this._allTextHeight = this.calcTextHeight(textState, true);
        if (this._faceName) {
            this._allTextHeight = Math.max(this._allTextHeight, Params.faceImageSize);
        }

        this.updateMessage();

        // コンテンツを一時領域から正式に反映
        this.createContents();
        this.contents.blt(
            Window_QuickNotification.tempMessageBuffer,
            0, 0, this._allTextWidth, this._allTextHeight,
            0, 0, this._allTextWidth, this._allTextHeight
        );
    };

    /**
     * 顔グラフィックを読み込む
     */
    Window_QuickNotification.prototype.loadMessageFace = function () {
        this._faceBitmap = ImageManager.loadFace(this._faceName);
    };

    /**
     * 表示位置を設定
     */
    Window_QuickNotification.prototype.updatePosition = function () {
        // 不透明度に応じて位置をずらす
        var xOffset = Params.displayOffsetX - this.width / 2 * (255 - this.getTargetOpacity()) / 255;
        switch (Params.displayPosition) {
            case Const.displayPosition.topRight:
            case Const.displayPosition.bottomRight:
                // 右側
                this.x = Graphics.boxWidth - this.width - xOffset;
                break;

            default:
                // 左側
                this.x = xOffset;
                break;
        }

        var epsilon = 8;
        var diffY = this.y - this._destinationY;
        if (Math.abs(diffY) > epsilon) {
            // 目標位置とズレている場合はぬるっと移動
            if (diffY > 0) {
                this.y -= Math.max(diffY / 8, epsilon);
            }
            else {
                this.y -= Math.min(diffY / -8, -epsilon);
            }
        }
        else {
            this.y = this._destinationY;
        }
    };

    /**
     * ウィンドウのサイズを更新
     */
    Window_QuickNotification.prototype.updateWindowSize = function () {
        var offset = this.standardPadding() * 2;
        this.width = this._allTextWidth + offset;
        this.height = this._allTextHeight + offset;
    };

    /**
     * 不透明度の更新
     */
    Window_QuickNotification.prototype.updateOpacity = function () {
        this.opacity = this.contentsOpacity = this.getTargetOpacity();
    };

    Window_QuickNotification.prototype.update = function () {
        Window_Base.prototype.update.call(this);

        if (!this.isDisplaying()) {
            return;
        }

        if (this.updateLoading()) {
            // スキンのロード中
            return;
        }

        this._duration--;
        this.updateOpacity();
        this.updatePosition();

        // 表示が終了したら初期化
        if (!this.isDisplaying()) {
            this.initMembers();
        }
    };

    /**
     * メッセージの更新
     */
    Window_QuickNotification.prototype.updateMessage = function () {
        if (this._textState == null) {
            return false;
        }

        while (!this.isEndOfText(this._textState)) {
            this.processCharacter(this._textState);
            this._allTextWidth = Math.max(this._allTextWidth, this._textState.x);
        }

        this.updateWindowSize();

        return true;
    };

    /**
     * 顔グラフィックを描画
     */
    Window_QuickNotification.prototype.drawMessageFace = function () {
        // 指定サイズに拡縮して描画
        var size = Params.faceImageSize;
        var bitmap = ImageManager.loadFace(this._faceName);
        var sw = Window_Base._faceWidth;
        var sh = Window_Base._faceHeight;
        var sx = this._faceIndex % 4 * sw;
        var sy = Math.floor(this._faceIndex / 4) * sh;
        this.contents.blt(bitmap, sx, sy, sw, sh, 0, 0, size, size);
    };

    /**
     * 改行時の描画先 X 座標
     */
    Window_QuickNotification.prototype.newLineX = function () {
        return this._faceName === '' ? 0 : (Params.faceImageSize + 24);
    };

    /**
     * 改行の処理
     */
    Window_QuickNotification.prototype.processNewLine = function (textState) {
        this._allTextWidth = Math.max(this._allTextWidth, textState.x);

        Window_Base.prototype.processNewLine.call(this, textState);
    };

    /**
     * 改ページの処理
     */
    Window_QuickNotification.prototype.processNewPage = function (textState) {
        Window_Base.prototype.processNewPage.call(this, textState);
        if (textState.text[textState.index] === '\n') {
            textState.index++;
        }

        textState.y = this.contents.height;
    };

    /**
     * テキスト終端か
     */
    Window_QuickNotification.prototype.isEndOfText = function (textState) {
        return textState.index >= textState.text.length;
    };

    /**
     * 改ページが必要か
     */
    Window_QuickNotification.prototype.needsNewPage = function (textState) {
        return (!this.isEndOfText(textState) &&
            textState.y + textState.height > this.contents.height);
    };


    //-----------------------------------------------------------------------------
    // Scene_Base

    // シーンをまたいで保持するための通知ウィンドウの一覧
    Scene_Base._gQuickNotificationWindows = [];

    /**
     * 通知ウィンドウの作成
     */
    Scene_Base.prototype.createQuickNotificationWindow = function () {
        if (this._quickNotificationWindowLayer != null) {
            return;
        }

        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight;
        var x = (Graphics.width - width) / 2;
        var y = (Graphics.height - height) / 2;
        this._quickNotificationWindowLayer = new WindowLayer();
        this._quickNotificationWindowLayer.move(x, y, width, height);
        this.addChild(this._quickNotificationWindowLayer);

        Window_QuickNotification.preloadWindowskin();

        // 表示終了前の通知があれば表示
        Scene_Base._gQuickNotificationWindows.forEach(function (windowObj) {
            this._quickNotificationWindowLayer.addChild(windowObj);
        }, this);
    };

    /**
     * 通知ウィンドウを表示可能か
     */
    Scene_Base.prototype.isQuickNotificationAvailable = function () {
        // ゲーム起動時は $gameTemp と $gameSystem が生成されていない可能性があるのでチェック
        return this._quickNotificationWindowLayer != null &&
            $gameTemp != null &&
            $gameSystem != null;
    };

    var _Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
        _Scene_Base_update.call(this);

        this.updateQuickNotificationDisplay();
    };

    var _Scene_Base_terminate = Scene_Base.prototype.terminate;
    Scene_Base.prototype.terminate = function () {
        _Scene_Base_terminate.call(this);

        this.destroyQuickNotificationWindows();
    };

    /**
     * 通知ウィンドウの破棄
     */
    Scene_Base.prototype.destroyQuickNotificationWindows = function () {
        if (!this.isQuickNotificationAvailable()) {
            return;
        }

        var layer = this._quickNotificationWindowLayer;
        layer.children.forEach(function (child) {
            this._quickNotificationWindowLayer.removeChild(child);
        }, this);

        this.removeChild(layer);
        this._quickNotificationWindowLayer = null;
    };

    /**
     * 通知の表示を更新
     */
    Scene_Base.prototype.updateQuickNotificationDisplay = function () {
        if (!this.isQuickNotificationAvailable()) {
            return;
        }

        if (!$gameSystem.isQuickNotificationEnabled()) {
            // 通知を表示できないときは非表示にしつつ各種フラグを解除
            $gameTemp.clearQuickNotification();
            this._quickNotificationWindowLayer.children.forEach(function (windowObj) {
                windowObj.fadeOut();
            });
            return;
        }

        this.removeFinishedQuickNotification();

        // 最大数まで表示されている場合は追加表示しない
        if (this._quickNotificationWindowLayer.children.length >= Params.notificationCountMax) {
            return;
        }

        // 要求されているメッセージを表示できるだけ表示
        while ($gameTemp.isQuickNotificationReady()) {
            if (!this.displayQuickNotification()) {
                break;
            }
        }

        this.updateQuickNotificationPosition();
    };

    /**
     * 表示が終了した通知を削除
     */
    Scene_Base.prototype.removeFinishedQuickNotification = function () {
        var finishedWindows = this._quickNotificationWindowLayer.children.filter(function (child) {
            return !child.isDisplaying();
        });

        if (finishedWindows.length <= 0) {
            // 終了した通知がない
            return;
        }

        finishedWindows.forEach(function (windowObj) {
            this._quickNotificationWindowLayer.removeChild(windowObj);
        }, this);

        Scene_Base._gQuickNotificationWindows =
            Scene_Base._gQuickNotificationWindows.filter(function (windowObj) {
                return finishedWindows.indexOf(windowObj) < 0;
            });
    };

    /**
     * 通知の表示
     */
    Scene_Base.prototype.displayQuickNotification = function () {
        var notification = $gameTemp.retrieveNextQuickNotification();
        if (notification == null) {
            return false;
        }

        // 予約されている通知を表示
        var windowObj = new Window_QuickNotification();
        windowObj.display(notification);
        this._quickNotificationWindowLayer.addChild(windowObj);
        Scene_Base._gQuickNotificationWindows.push(windowObj);

        // 通知音を再生
        if (Params.notificationSe) {
            AudioManager.playSe(Params.notificationSe);
        }

        return true;
    };

    /**
     * 通知の表示位置を更新
     */
    Scene_Base.prototype.updateQuickNotificationPosition = function () {
        // 表示位置に応じた調整
        var isBottom;
        var y;
        var sign;
        switch (Params.displayPosition) {
            case Const.displayPosition.bottomLeft:
            case Const.displayPosition.bottomRight:
                // 下側
                isBottom = true;
                y = Graphics.boxHeight - Params.displayOffsetY;
                sign = -1;
                break;

            default:
                // 上側
                isBottom = false;
                y = Params.displayOffsetY;
                sign = 1;
                break;
        }

        var children = this._quickNotificationWindowLayer.children;
        for (var i = 0; i < children.length; i++) {
            var windowObj = children[i];
            if (isBottom) {
                y -= windowObj.height;
            }
            windowObj.setDestinationY(y);
            if (!isBottom) {
                y += windowObj.height;
            }

            y += sign * Params.displayGap;
        }
    };


    //-----------------------------------------------------------------------------
    // Scene_Base

    var _Scene_Base_start = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function () {
        _Scene_Base_start.call(this);

        // 他のオブジェクトより前面に表示するため、シーン開始時まで生成を遅延
        this.createQuickNotificationWindow();
    };


    //-----------------------------------------------------------------------------
    // Scene_Map

    var _Scene_Map_snapForBattleBackground = Scene_Map.prototype.snapForBattleBackground;
    Scene_Map.prototype.snapForBattleBackground = function () {
        // 通知はキャプチャしない
        var layer = this._quickNotificationWindowLayer;
        if (layer != null) {
            layer.visible = false;
        }

        _Scene_Map_snapForBattleBackground.call(this);

        if (layer != null) {
            layer.visible = true;
        }
    };

})();
