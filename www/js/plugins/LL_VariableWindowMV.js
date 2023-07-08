//=============================================================================
// RPGツクールMZ - LL_VariableWindowMV.js v1.0.0
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================

/*:
 * @target MV
 * @plugindesc 変数を画面にウィンドウで表示します。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-variablewindow/
 *
 * @help LL_VariableWindowMV.js
 *
 * 変数を画面にウィンドウで表示します。
 * ウィンドウは同時に4つまで表示することができます。
 *
 * プラグインコマンド:
 *    # 変数をウィンドウで表示
 *    LL_VariableWindowMV show [ウィンドウ番号] [変数ID] [X] [Y] [横幅]
 *      ウィンドウ番号: 1～4の番号毎に異なる変数を割り当てることが可能
 *      変数ID: 表示する変数ID
 *      X: ウィンドウX座標 (省略した場合は416)
 *      Y: ウィンドウY座標 (省略した場合は0)
 *      横幅: ウィンドウ横幅 (省略した場合は400)
 *
 *    # 表示中のウィンドウを消去
 *    LL_VariableWindowMV hide [ウィンドウ番号]
 *
 *    # 変数ID:2をウィンドウ:1に表示
 *    LL_VariableWindowMV show 1 2
 *
 *    # 変数ID:2をウィンドウ:1に表示 (X:0 Y:60の位置に表示)
 *    LL_VariableWindowMV show 1 2 0 60
 *
 *    # 変数ID:2をウィンドウ:1に表示 (X:416 Y:0の位置、横幅200)
 *    LL_VariableWindowMV show 1 2 416 0 200
 *
 *    # 変数ID:2をウィンドウ:1に表示 (X:auto Y:60の位置に表示)
 *    LL_VariableWindowMV show 1 2 auto 60
 *
 *    # ウィンドウ:1を消去
 *    LL_VariableWindowMV hide 1
 *
 * 利用規約:
 *   ・著作権表記は必要ございません。
 *   ・利用するにあたり報告の必要は特にございません。
 *   ・商用・非商用問いません。
 *   ・R18作品にも使用制限はありません。
 *   ・ゲームに合わせて自由に改変していただいて問題ございません。
 *   ・プラグイン素材としての再配布（改変後含む）は禁止させていただきます。
 *
 * 作者: ルルの教会
 * 作成日: 2022/5/14
 */

(function () {
    "use strict";
    var pluginName = "LL_VariableWindowMV";
    var parameters = PluginManager.parameters(pluginName);


    // 変数名の横幅割合
    var variableWindowLabelWidth = 0.6;

    //-----------------------------------------------------------------------------
    // PluginCommand (for MV)
    //

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === pluginName) {
            switch (args[0]) {
                case "show":
                    var windowId = Number(args[1] || 1);
                    var variableId = Number(args[2] || 0);
                    var x = String(args[3] || 416);
                    var y = String(args[4] || 0);
                    var width = Number(args[5] || 400);

                    // 旧セーブデータ対策
                    if (!$gameSystem._LL_VariableWindow) {
                        $gameSystem._LL_VariableWindow = {};
                        $gameSystem._LL_VariableWindow[1] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[2] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[3] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[4] = { variableId: null, x: 0, y: 0, width: 0 };
                    }

                    $gameSystem._LL_VariableWindow[windowId] = { variableId: variableId, x: x, y: y, width: width };
                    break;
                case "hide":
                    var windowId = Number(args[1] || 1);

                    // 旧セーブデータ対策
                    if (!$gameSystem._LL_VariableWindow) {
                        $gameSystem._LL_VariableWindow = {};
                        $gameSystem._LL_VariableWindow[1] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[2] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[3] = { variableId: null, x: 0, y: 0, width: 0 };
                        $gameSystem._LL_VariableWindow[4] = { variableId: null, x: 0, y: 0, width: 0 };
                    }

                    $gameSystem._LL_VariableWindow[windowId] = { variableId: null, x: 0, y: 0, width: 0 };
                    break;
            }
        }
    };

    //-----------------------------------------------------------------------------
    // Game_System
    //
    // 変数ウィンドウ制御用の独自配列を追加定義します。

    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.apply(this, arguments);

        this._LL_VariableWindow = {};
        this._LL_VariableWindow[1] = { variableId: null, x: 0, y: 0, width: 0 };
        this._LL_VariableWindow[2] = { variableId: null, x: 0, y: 0, width: 0 };
        this._LL_VariableWindow[3] = { variableId: null, x: 0, y: 0, width: 0 };
        this._LL_VariableWindow[4] = { variableId: null, x: 0, y: 0, width: 0 };
    };


    //-----------------------------------------------------------------------------
    // Scene_Map
    //

    var _Scene_Map_stop = Scene_Map.prototype.stop;
    Scene_Map.prototype.stop = function () {
        this._exVariableWindow1.hide();
        this._exVariableWindow2.hide();
        this._exVariableWindow3.hide();
        this._exVariableWindow4.hide();
        _Scene_Map_stop.apply(this, arguments);
    };

    var _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.apply(this, arguments);
        if (!SceneManager.isNextScene(Scene_Battle)) {
            this._exVariableWindow1.hide();
            this._exVariableWindow2.hide();
            this._exVariableWindow3.hide();
            this._exVariableWindow4.hide();
        }
    };

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.apply(this, arguments);
        this.createExVariableWindow();
    };

    Scene_Map.prototype.createExVariableWindow = function () {
        this._exVariableWindow1 = new Window_ExVariableWindow();
        this._exVariableWindow1.setWindowId(1);
        this.addWindow(this._exVariableWindow1);
        this._exVariableWindow2 = new Window_ExVariableWindow();
        this._exVariableWindow2.setWindowId(2);
        this.addWindow(this._exVariableWindow2);
        this._exVariableWindow3 = new Window_ExVariableWindow();
        this._exVariableWindow3.setWindowId(3);
        this.addWindow(this._exVariableWindow3);
        this._exVariableWindow4 = new Window_ExVariableWindow();
        this._exVariableWindow4.setWindowId(4);
        this.addWindow(this._exVariableWindow4);
    };

    var _Scene_Map_callMenu = Scene_Map.prototype.callMenu;
    Scene_Map.prototype.callMenu = function () {
        _Scene_Map_callMenu.apply(this, arguments);
        this._exVariableWindow1.hide();
        this._exVariableWindow2.hide();
        this._exVariableWindow3.hide();
        this._exVariableWindow4.hide();
    };

    //-----------------------------------------------------------------------------
    // Window_ExVariableWindow
    //
    // 変数を表示するウィンドウです。

    function Window_ExVariableWindow() {
        this.initialize.apply(this, arguments);
    }

    Window_ExVariableWindow.prototype = Object.create(Window_Base.prototype);
    Window_ExVariableWindow.prototype.constructor = Window_ExVariableWindow;

    Window_ExVariableWindow.prototype.initialize = function () {
        Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);

        this.width = 0;
        this.height = 0;
        this._windowId = null;
    };

    Window_ExVariableWindow.prototype.setWindowId = function (id) {
        this._windowId = id;
    };

    Window_ExVariableWindow.prototype.update = function () {
        Window_Base.prototype.update.call(this);

        this.refresh();
    };

    Window_ExVariableWindow.prototype.windowWidth = function () {
        if ($gameSystem._LL_VariableWindow) {
            return $gameSystem._LL_VariableWindow[this._windowId].width;
        }
        return 400;
    };

    Window_ExVariableWindow.prototype.labelWidth = function () {
        return Math.floor(this.windowWidth() * variableWindowLabelWidth);
    };

    Window_ExVariableWindow.prototype.windowHeight = function () {
        return this.fittingHeight(1);
    };

    Window_ExVariableWindow.prototype.getVariableId = function () {
        if ($gameSystem._LL_VariableWindow) {
            return $gameSystem._LL_VariableWindow[this._windowId].variableId;
        }
        return null;
    };

    Window_ExVariableWindow.prototype.getX = function () {
        if ($gameSystem._LL_VariableWindow) {
            return $gameSystem._LL_VariableWindow[this._windowId].x;
        }
        return 0;
    };

    Window_ExVariableWindow.prototype.getY = function () {
        if ($gameSystem._LL_VariableWindow) {
            return $gameSystem._LL_VariableWindow[this._windowId].y;
        }
        return 0;
    };

    Window_ExVariableWindow.prototype.refresh = function () {
        if (this.getVariableId()) {
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            if (this.getX() === "auto") {
                this.x = (Graphics.boxWidth - this.windowWidth()) / 2;
            } else {
                this.x = Number(this.getX() || 0);
            }
            if (this.getY() === "auto") {
                this.y = (Graphics.boxHeight - this.windowHeight()) / 2;
            } else {
                this.y = Number(this.getY() || 0);
            }

            this.contents.clear();
            this.changeTextColor(this.systemColor());
            this.drawText($dataSystem.variables[this.getVariableId()], 0, 0, this.labelWidth());
            this.resetTextColor();
            this.drawText($gameVariables.value(this.getVariableId()), this.labelWidth(), 0, ((this.width - this.padding * 2) - this.labelWidth()), "right");
        } else {
            this.width = 0;
            this.height = 0;
        }
    };
})();
