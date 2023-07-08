/*:ja

@plugindesc v1.03 メインメニューに様々な変更を加えます。
@author Yanfly Engine Plugins
@param ---General---
@text ---一般---
@default
@param Hide Actor Window
@parent ---General---
@type boolean
@on 非表示
@off 表示
@text アクターウィンドウ非表示
@desc 表示:false / 非表示:true
@default false
@param Hide Gold Window
@parent ---General---
@type boolean
@on 非表示
@off 表示
@text 所持金ウィンドウ非表示
@desc 表示:false / 非表示:true
@default false
@param Blurry Background
@parent ---General---
@type boolean
@on ぼかす
@off 鮮明
@text 背景表示
@desc 鮮明:false / ぼかす:true / デフォルト:true
@default true
@param ---Command---
@text ---コマンド---
@default
@param Command Alignment
@parent ---Command---
@type combo
@option left
@option center
@option right
@text テキスト揃え
@desc left(左) / center(中央) / right(右)
@default left
@param Command Position
@parent ---Command---
@type combo
@option left
@option right
@text ウィンドウの位置
@desc left(左) / right(右)
@default left
@param Command Columns
@parent ---Command---
@text ウィンドウの列数
@desc 式で設定可能。デフォルト:1
@default 1
@param Command Rows
@parent ---Command---
@text ウィンドウの行数
@desc 式で設定可能。
@default Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))
@param Command Width
@parent ---Command---
@text ウィンドウの幅
@desc 式で設定可能。デフォルト:240
@default 240
@param ---Menu Items---
@text ---メニュー項目---
@default
@param ---Menu 1---
@text ---メニュー 1---
@parent ---Menu Items---
@default
@param Menu 1 Name
@parent ---Menu 1---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 1 Symbol
@parent ---Menu 1---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 1 Show
@parent ---Menu 1---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 1 Enabled
@parent ---Menu 1---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 1 Ext
@parent ---Menu 1---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 1 Main Bind
@parent ---Menu 1---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 1 Actor Bind
@parent ---Menu 1---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 2---
@text ---メニュー 2---
@parent ---Menu Items---
@default
@param Menu 2 Name
@parent ---Menu 2---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 2 Symbol
@parent ---Menu 2---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 2 Show
@parent ---Menu 2---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 2 Enabled
@parent ---Menu 2---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 2 Ext
@parent ---Menu 2---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 2 Main Bind
@parent ---Menu 2---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 2 Actor Bind
@parent ---Menu 2---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 3---
@text ---メニュー 3---
@parent ---Menu Items---
@default
@param Menu 3 Name
@parent ---Menu 3---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 3 Symbol
@parent ---Menu 3---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 3 Show
@parent ---Menu 3---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 3 Enabled
@parent ---Menu 3---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 3 Ext
@parent ---Menu 3---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 3 Main Bind
@parent ---Menu 3---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 3 Actor Bind
@parent ---Menu 3---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 4---
@text ---メニュー 4---
@parent ---Menu Items---
@default
@param Menu 4 Name
@parent ---Menu 4---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 4 Symbol
@parent ---Menu 4---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 4 Show
@parent ---Menu 4---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 4 Enabled
@parent ---Menu 4---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 4 Ext
@parent ---Menu 4---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 4 Main Bind
@parent ---Menu 4---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 4 Actor Bind
@parent ---Menu 4---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 5---
@text ---メニュー 5---
@parent ---Menu Items---
@default
@param Menu 5 Name
@parent ---Menu 5---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 5 Symbol
@parent ---Menu 5---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 5 Show
@parent ---Menu 5---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 5 Enabled
@parent ---Menu 5---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 5 Ext
@parent ---Menu 5---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 5 Main Bind
@parent ---Menu 5---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 5 Actor Bind
@parent ---Menu 5---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 6---
@text ---メニュー 6---
@parent ---Menu Items---
@default
@param Menu 6 Name
@parent ---Menu 6---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 6 Symbol
@parent ---Menu 6---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 6 Show
@parent ---Menu 6---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 6 Enabled
@parent ---Menu 6---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 6 Ext
@parent ---Menu 6---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 6 Main Bind
@parent ---Menu 6---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 6 Actor Bind
@parent ---Menu 6---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 7---
@text ---メニュー 7---
@parent ---Menu Items---
@default
@param Menu 7 Name
@parent ---Menu 7---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 7 Symbol
@parent ---Menu 7---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 7 Show
@parent ---Menu 7---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 7 Enabled
@parent ---Menu 7---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 7 Ext
@parent ---Menu 7---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 7 Main Bind
@parent ---Menu 7---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 7 Actor Bind
@parent ---Menu 7---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 8---
@text ---メニュー 8---
@parent ---Menu Items---
@default
@param Menu 8 Name
@parent ---Menu 8---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 8 Symbol
@parent ---Menu 8---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 8 Show
@parent ---Menu 8---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 8 Enabled
@parent ---Menu 8---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 8 Ext
@parent ---Menu 8---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 8 Main Bind
@parent ---Menu 8---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 8 Actor Bind
@parent ---Menu 8---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 9---
@text ---メニュー 9---
@parent ---Menu Items---
@default
@param Menu 9 Name
@parent ---Menu 9---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 9 Symbol
@parent ---Menu 9---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 9 Show
@parent ---Menu 9---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 9 Enabled
@parent ---Menu 9---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 9 Ext
@parent ---Menu 9---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 9 Main Bind
@parent ---Menu 9---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 9 Actor Bind
@parent ---Menu 9---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 10---
@text ---メニュー 10---
@parent ---Menu Items---
@default
@param Menu 10 Name
@parent ---Menu 10---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.item
@param Menu 10 Symbol
@parent ---Menu 10---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default item
@param Menu 10 Show
@parent ---Menu 10---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('item')
@param Menu 10 Enabled
@parent ---Menu 10---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.areMainCommandsEnabled()
@param Menu 10 Ext
@parent ---Menu 10---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 10 Main Bind
@parent ---Menu 10---
@text 機能
@desc コマンドで実行されるeval
@default this.commandItem.bind(this)
@param Menu 10 Actor Bind
@parent ---Menu 10---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 11---
@text ---メニュー 11---
@parent ---Menu Items---
@default
@param Menu 11 Name
@parent ---Menu 11---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 11 Symbol
@parent ---Menu 11---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 11 Show
@parent ---Menu 11---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 11 Enabled
@parent ---Menu 11---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 11 Ext
@parent ---Menu 11---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 11 Main Bind
@parent ---Menu 11---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 11 Actor Bind
@parent ---Menu 11---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 12---
@text ---メニュー 12---
@parent ---Menu Items---
@default
@param Menu 12 Name
@parent ---Menu 12---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 12 Symbol
@parent ---Menu 12---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 12 Show
@parent ---Menu 12---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 12 Enabled
@parent ---Menu 12---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 12 Ext
@parent ---Menu 12---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 12 Main Bind
@parent ---Menu 12---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 12 Actor Bind
@parent ---Menu 12---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 13---
@text ---メニュー 13---
@parent ---Menu Items---
@default
@param Menu 13 Name
@parent ---Menu 13---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 13 Symbol
@parent ---Menu 13---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 13 Show
@parent ---Menu 13---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 13 Enabled
@parent ---Menu 13---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 13 Ext
@parent ---Menu 13---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 13 Main Bind
@parent ---Menu 13---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 13 Actor Bind
@parent ---Menu 13---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 14---
@text ---メニュー 14---
@parent ---Menu Items---
@default
@param Menu 14 Name
@parent ---Menu 14---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 14 Symbol
@parent ---Menu 14---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 14 Show
@parent ---Menu 14---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 14 Enabled
@parent ---Menu 14---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 14 Ext
@parent ---Menu 14---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 14 Main Bind
@parent ---Menu 14---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 14 Actor Bind
@parent ---Menu 14---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 15---
@text ---メニュー 15---
@parent ---Menu Items---
@default
@param Menu 15 Name
@parent ---Menu 15---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.skill
@param Menu 15 Symbol
@parent ---Menu 15---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default skill
@param Menu 15 Show
@parent ---Menu 15---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('skill')
@param Menu 15 Enabled
@parent ---Menu 15---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.areMainCommandsEnabled()
@param Menu 15 Ext
@parent ---Menu 15---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 15 Main Bind
@parent ---Menu 15---
@text 機能
@desc コマンドで実行されるeval
@default this.commandPersonal.bind(this)
@param Menu 15 Actor Bind
@parent ---Menu 15---
@text アクター機能
@desc アクターに実行されるeval
@default SceneManager.push(Scene_Skill)
@param ---Menu 16---
@text ---メニュー 16---
@parent ---Menu Items---
@default
@param Menu 16 Name
@parent ---Menu 16---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 16 Symbol
@parent ---Menu 16---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 16 Show
@parent ---Menu 16---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 16 Enabled
@parent ---Menu 16---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 16 Ext
@parent ---Menu 16---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 16 Main Bind
@parent ---Menu 16---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 16 Actor Bind
@parent ---Menu 16---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 17---
@text ---メニュー 17---
@parent ---Menu Items---
@default
@param Menu 17 Name
@parent ---Menu 17---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 17 Symbol
@parent ---Menu 17---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 17 Show
@parent ---Menu 17---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 17 Enabled
@parent ---Menu 17---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 17 Ext
@parent ---Menu 17---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 17 Main Bind
@parent ---Menu 17---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 17 Actor Bind
@parent ---Menu 17---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 18---
@text ---メニュー 18---
@parent ---Menu Items---
@default
@param Menu 18 Name
@parent ---Menu 18---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 18 Symbol
@parent ---Menu 18---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 18 Show
@parent ---Menu 18---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 18 Enabled
@parent ---Menu 18---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 18 Ext
@parent ---Menu 18---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 18 Main Bind
@parent ---Menu 18---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 18 Actor Bind
@parent ---Menu 18---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 19---
@text ---メニュー 19---
@parent ---Menu Items---
@default
@param Menu 19 Name
@parent ---Menu 19---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 19 Symbol
@parent ---Menu 19---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 19 Show
@parent ---Menu 19---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 19 Enabled
@parent ---Menu 19---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 19 Ext
@parent ---Menu 19---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 19 Main Bind
@parent ---Menu 19---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 19 Actor Bind
@parent ---Menu 19---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 20---
@text ---メニュー 20---
@parent ---Menu Items---
@default
@param Menu 20 Name
@parent ---Menu 20---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.equip
@param Menu 20 Symbol
@parent ---Menu 20---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default equip
@param Menu 20 Show
@parent ---Menu 20---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('equip')
@param Menu 20 Enabled
@parent ---Menu 20---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.areMainCommandsEnabled()
@param Menu 20 Ext
@parent ---Menu 20---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 20 Main Bind
@parent ---Menu 20---
@text 機能
@desc コマンドで実行されるeval
@default this.commandPersonal.bind(this)
@param Menu 20 Actor Bind
@parent ---Menu 20---
@text アクター機能
@desc アクターに実行されるeval
@default SceneManager.push(Scene_Equip)
@param ---Menu 21---
@text ---メニュー 21---
@parent ---Menu Items---
@default
@param Menu 21 Name
@parent ---Menu 21---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 21 Symbol
@parent ---Menu 21---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 21 Show
@parent ---Menu 21---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 21 Enabled
@parent ---Menu 21---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 21 Ext
@parent ---Menu 21---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 21 Main Bind
@parent ---Menu 21---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 21 Actor Bind
@parent ---Menu 21---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 22---
@text ---メニュー 22---
@parent ---Menu Items---
@default
@param Menu 22 Name
@parent ---Menu 22---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 22 Symbol
@parent ---Menu 22---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 22 Show
@parent ---Menu 22---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 22 Enabled
@parent ---Menu 22---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 22 Ext
@parent ---Menu 22---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 22 Main Bind
@parent ---Menu 22---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 22 Actor Bind
@parent ---Menu 22---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 23---
@text ---メニュー 23---
@parent ---Menu Items---
@default
@param Menu 23 Name
@parent ---Menu 23---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 23 Symbol
@parent ---Menu 23---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 23 Show
@parent ---Menu 23---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 23 Enabled
@parent ---Menu 23---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 23 Ext
@parent ---Menu 23---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 23 Main Bind
@parent ---Menu 23---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 23 Actor Bind
@parent ---Menu 23---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 24---
@text ---メニュー 24---
@parent ---Menu Items---
@default
@param Menu 24 Name
@parent ---Menu 24---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 24 Symbol
@parent ---Menu 24---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 24 Show
@parent ---Menu 24---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 24 Enabled
@parent ---Menu 24---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 24 Ext
@parent ---Menu 24---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 24 Main Bind
@parent ---Menu 24---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 24 Actor Bind
@parent ---Menu 24---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 25---
@text ---メニュー 25---
@parent ---Menu Items---
@default
@param Menu 25 Name
@parent ---Menu 25---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default Yanfly.Param.CCCCmdName
@param Menu 25 Symbol
@parent ---Menu 25---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default class
@param Menu 25 Show
@parent ---Menu 25---
@text 表示条件
@desc コマンドを表示するevalの状態
@default Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()
@param Menu 25 Enabled
@parent ---Menu 25---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default $gameSystem.isEnableClass() && this.areMainCommandsEnabled()
@param Menu 25 Ext
@parent ---Menu 25---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 25 Main Bind
@parent ---Menu 25---
@text 機能
@desc コマンドで実行されるeval
@default this.commandPersonal.bind(this)
@param Menu 25 Actor Bind
@parent ---Menu 25---
@text アクター機能
@desc アクターに実行されるeval
@default SceneManager.push(Scene_Class)
@param ---Menu 26---
@text ---メニュー 26---
@parent ---Menu Items---
@default
@param Menu 26 Name
@parent ---Menu 26---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 26 Symbol
@parent ---Menu 26---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 26 Show
@parent ---Menu 26---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 26 Enabled
@parent ---Menu 26---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 26 Ext
@parent ---Menu 26---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 26 Main Bind
@parent ---Menu 26---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 26 Actor Bind
@parent ---Menu 26---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 27---
@text ---メニュー 27---
@parent ---Menu Items---
@default
@param Menu 27 Name
@parent ---Menu 27---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 27 Symbol
@parent ---Menu 27---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 27 Show
@parent ---Menu 27---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 27 Enabled
@parent ---Menu 27---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 27 Ext
@parent ---Menu 27---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 27 Main Bind
@parent ---Menu 27---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 27 Actor Bind
@parent ---Menu 27---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 28---
@text ---メニュー 28---
@parent ---Menu Items---
@default
@param Menu 28 Name
@parent ---Menu 28---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 28 Symbol
@parent ---Menu 28---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 28 Show
@parent ---Menu 28---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 28 Enabled
@parent ---Menu 28---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 28 Ext
@parent ---Menu 28---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 28 Main Bind
@parent ---Menu 28---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 28 Actor Bind
@parent ---Menu 28---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 29---
@text ---メニュー 29---
@parent ---Menu Items---
@default
@param Menu 29 Name
@parent ---Menu 29---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 29 Symbol
@parent ---Menu 29---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 29 Show
@parent ---Menu 29---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 29 Enabled
@parent ---Menu 29---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 29 Ext
@parent ---Menu 29---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 29 Main Bind
@parent ---Menu 29---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 29 Actor Bind
@parent ---Menu 29---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 30---
@text ---メニュー 30---
@parent ---Menu Items---
@default
@param Menu 30 Name
@parent ---Menu 30---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 30 Symbol
@parent ---Menu 30---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 30 Show
@parent ---Menu 30---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 30 Enabled
@parent ---Menu 30---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 30 Ext
@parent ---Menu 30---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 30 Main Bind
@parent ---Menu 30---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 30 Actor Bind
@parent ---Menu 30---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 31---
@text ---メニュー 31---
@parent ---Menu Items---
@default
@param Menu 31 Name
@parent ---Menu 31---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 31 Symbol
@parent ---Menu 31---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 31 Show
@parent ---Menu 31---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 31 Enabled
@parent ---Menu 31---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 31 Ext
@parent ---Menu 31---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 31 Main Bind
@parent ---Menu 31---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 31 Actor Bind
@parent ---Menu 31---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 32---
@text ---メニュー 32---
@parent ---Menu Items---
@default
@param Menu 32 Name
@parent ---Menu 32---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 32 Symbol
@parent ---Menu 32---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 32 Show
@parent ---Menu 32---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 32 Enabled
@parent ---Menu 32---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 32 Ext
@parent ---Menu 32---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 32 Main Bind
@parent ---Menu 32---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 32 Actor Bind
@parent ---Menu 32---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 33---
@text ---メニュー 33---
@parent ---Menu Items---
@default
@param Menu 33 Name
@parent ---Menu 33---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 33 Symbol
@parent ---Menu 33---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 33 Show
@parent ---Menu 33---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 33 Enabled
@parent ---Menu 33---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 33 Ext
@parent ---Menu 33---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 33 Main Bind
@parent ---Menu 33---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 33 Actor Bind
@parent ---Menu 33---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 34---
@text ---メニュー 34---
@parent ---Menu Items---
@default
@param Menu 34 Name
@parent ---Menu 34---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 34 Symbol
@parent ---Menu 34---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 34 Show
@parent ---Menu 34---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 34 Enabled
@parent ---Menu 34---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 34 Ext
@parent ---Menu 34---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 34 Main Bind
@parent ---Menu 34---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 34 Actor Bind
@parent ---Menu 34---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 35---
@text ---メニュー 35---
@parent ---Menu Items---
@default
@param Menu 35 Name
@parent ---Menu 35---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 35 Symbol
@parent ---Menu 35---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 35 Show
@parent ---Menu 35---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 35 Enabled
@parent ---Menu 35---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 35 Ext
@parent ---Menu 35---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 35 Main Bind
@parent ---Menu 35---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 35 Actor Bind
@parent ---Menu 35---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 36---
@text ---メニュー 36---
@parent ---Menu Items---
@default
@param Menu 36 Name
@parent ---Menu 36---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 36 Symbol
@parent ---Menu 36---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 36 Show
@parent ---Menu 36---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 36 Enabled
@parent ---Menu 36---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 36 Ext
@parent ---Menu 36---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 36 Main Bind
@parent ---Menu 36---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 36 Actor Bind
@parent ---Menu 36---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 37---
@text ---メニュー 37---
@parent ---Menu Items---
@default
@param Menu 37 Name
@parent ---Menu 37---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 37 Symbol
@parent ---Menu 37---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 37 Show
@parent ---Menu 37---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 37 Enabled
@parent ---Menu 37---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 37 Ext
@parent ---Menu 37---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 37 Main Bind
@parent ---Menu 37---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 37 Actor Bind
@parent ---Menu 37---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 38---
@text ---メニュー 38---
@parent ---Menu Items---
@default
@param Menu 38 Name
@parent ---Menu 38---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 38 Symbol
@parent ---Menu 38---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 38 Show
@parent ---Menu 38---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 38 Enabled
@parent ---Menu 38---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 38 Ext
@parent ---Menu 38---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 38 Main Bind
@parent ---Menu 38---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 38 Actor Bind
@parent ---Menu 38---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 39---
@text ---メニュー 39---
@parent ---Menu Items---
@default
@param Menu 39 Name
@parent ---Menu 39---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 39 Symbol
@parent ---Menu 39---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 39 Show
@parent ---Menu 39---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 39 Enabled
@parent ---Menu 39---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 39 Ext
@parent ---Menu 39---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 39 Main Bind
@parent ---Menu 39---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 39 Actor Bind
@parent ---Menu 39---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 40---
@text ---メニュー 40---
@parent ---Menu Items---
@default
@param Menu 40 Name
@parent ---Menu 40---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 40 Symbol
@parent ---Menu 40---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 40 Show
@parent ---Menu 40---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 40 Enabled
@parent ---Menu 40---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 40 Ext
@parent ---Menu 40---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 40 Main Bind
@parent ---Menu 40---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 40 Actor Bind
@parent ---Menu 40---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 41---
@text ---メニュー 41---
@parent ---Menu Items---
@default
@param Menu 41 Name
@parent ---Menu 41---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 41 Symbol
@parent ---Menu 41---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 41 Show
@parent ---Menu 41---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 41 Enabled
@parent ---Menu 41---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 41 Ext
@parent ---Menu 41---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 41 Main Bind
@parent ---Menu 41---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 41 Actor Bind
@parent ---Menu 41---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 42---
@text ---メニュー 42---
@parent ---Menu Items---
@default
@param Menu 42 Name
@parent ---Menu 42---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 42 Symbol
@parent ---Menu 42---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 42 Show
@parent ---Menu 42---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 42 Enabled
@parent ---Menu 42---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 42 Ext
@parent ---Menu 42---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 42 Main Bind
@parent ---Menu 42---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 42 Actor Bind
@parent ---Menu 42---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 43---
@text ---メニュー 43---
@parent ---Menu Items---
@default
@param Menu 43 Name
@parent ---Menu 43---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 43 Symbol
@parent ---Menu 43---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 43 Show
@parent ---Menu 43---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 43 Enabled
@parent ---Menu 43---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 43 Ext
@parent ---Menu 43---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 43 Main Bind
@parent ---Menu 43---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 43 Actor Bind
@parent ---Menu 43---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 44---
@text ---メニュー 44---
@parent ---Menu Items---
@default
@param Menu 44 Name
@parent ---Menu 44---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 44 Symbol
@parent ---Menu 44---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 44 Show
@parent ---Menu 44---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 44 Enabled
@parent ---Menu 44---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 44 Ext
@parent ---Menu 44---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 44 Main Bind
@parent ---Menu 44---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 44 Actor Bind
@parent ---Menu 44---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 45---
@text ---メニュー 45---
@parent ---Menu Items---
@default
@param Menu 45 Name
@parent ---Menu 45---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 45 Symbol
@parent ---Menu 45---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 45 Show
@parent ---Menu 45---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 45 Enabled
@parent ---Menu 45---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 45 Ext
@parent ---Menu 45---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 45 Main Bind
@parent ---Menu 45---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 45 Actor Bind
@parent ---Menu 45---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 46---
@text ---メニュー 46---
@parent ---Menu Items---
@default
@param Menu 46 Name
@parent ---Menu 46---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 46 Symbol
@parent ---Menu 46---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 46 Show
@parent ---Menu 46---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 46 Enabled
@parent ---Menu 46---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 46 Ext
@parent ---Menu 46---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 46 Main Bind
@parent ---Menu 46---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 46 Actor Bind
@parent ---Menu 46---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 47---
@text ---メニュー 47---
@parent ---Menu Items---
@default
@param Menu 47 Name
@parent ---Menu 47---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 47 Symbol
@parent ---Menu 47---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 47 Show
@parent ---Menu 47---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 47 Enabled
@parent ---Menu 47---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 47 Ext
@parent ---Menu 47---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 47 Main Bind
@parent ---Menu 47---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 47 Actor Bind
@parent ---Menu 47---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 48---
@text ---メニュー 48---
@parent ---Menu Items---
@default
@param Menu 48 Name
@parent ---Menu 48---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 48 Symbol
@parent ---Menu 48---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 48 Show
@parent ---Menu 48---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 48 Enabled
@parent ---Menu 48---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 48 Ext
@parent ---Menu 48---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 48 Main Bind
@parent ---Menu 48---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 48 Actor Bind
@parent ---Menu 48---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 49---
@text ---メニュー 49---
@parent ---Menu Items---
@default
@param Menu 49 Name
@parent ---Menu 49---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 49 Symbol
@parent ---Menu 49---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 49 Show
@parent ---Menu 49---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 49 Enabled
@parent ---Menu 49---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 49 Ext
@parent ---Menu 49---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 49 Main Bind
@parent ---Menu 49---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 49 Actor Bind
@parent ---Menu 49---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 50---
@text ---メニュー 50---
@parent ---Menu Items---
@default
@param Menu 50 Name
@parent ---Menu 50---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.status
@param Menu 50 Symbol
@parent ---Menu 50---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default status
@param Menu 50 Show
@parent ---Menu 50---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('status')
@param Menu 50 Enabled
@parent ---Menu 50---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.areMainCommandsEnabled()
@param Menu 50 Ext
@parent ---Menu 50---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 50 Main Bind
@parent ---Menu 50---
@text 機能
@desc コマンドで実行されるeval
@default this.commandPersonal.bind(this)
@param Menu 50 Actor Bind
@parent ---Menu 50---
@text アクター機能
@desc アクターに実行されるeval
@default SceneManager.push(Scene_Status)
@param ---Menu 51---
@text ---メニュー 51---
@parent ---Menu Items---
@default
@param Menu 51 Name
@parent ---Menu 51---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 51 Symbol
@parent ---Menu 51---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 51 Show
@parent ---Menu 51---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 51 Enabled
@parent ---Menu 51---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 51 Ext
@parent ---Menu 51---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 51 Main Bind
@parent ---Menu 51---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 51 Actor Bind
@parent ---Menu 51---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 52---
@text ---メニュー 52---
@parent ---Menu Items---
@default
@param Menu 52 Name
@parent ---Menu 52---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 52 Symbol
@parent ---Menu 52---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 52 Show
@parent ---Menu 52---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 52 Enabled
@parent ---Menu 52---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 52 Ext
@parent ---Menu 52---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 52 Main Bind
@parent ---Menu 52---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 52 Actor Bind
@parent ---Menu 52---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 53---
@text ---メニュー 53---
@parent ---Menu Items---
@default
@param Menu 53 Name
@parent ---Menu 53---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 53 Symbol
@parent ---Menu 53---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 53 Show
@parent ---Menu 53---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 53 Enabled
@parent ---Menu 53---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 53 Ext
@parent ---Menu 53---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 53 Main Bind
@parent ---Menu 53---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 53 Actor Bind
@parent ---Menu 53---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 54---
@text ---メニュー 54---
@parent ---Menu Items---
@default
@param Menu 54 Name
@parent ---Menu 54---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 54 Symbol
@parent ---Menu 54---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 54 Show
@parent ---Menu 54---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 54 Enabled
@parent ---Menu 54---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 54 Ext
@parent ---Menu 54---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 54 Main Bind
@parent ---Menu 54---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 54 Actor Bind
@parent ---Menu 54---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 55---
@text ---メニュー 55---
@parent ---Menu Items---
@default
@param Menu 55 Name
@parent ---Menu 55---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.formation
@param Menu 55 Symbol
@parent ---Menu 55---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default formation
@param Menu 55 Show
@parent ---Menu 55---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('formation')
@param Menu 55 Enabled
@parent ---Menu 55---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.isFormationEnabled()
@param Menu 55 Ext
@parent ---Menu 55---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 55 Main Bind
@parent ---Menu 55---
@text 機能
@desc コマンドで実行されるeval
@default this.commandFormation.bind(this)
@param Menu 55 Actor Bind
@parent ---Menu 55---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 56---
@text ---メニュー 56---
@parent ---Menu Items---
@default
@param Menu 56 Name
@parent ---Menu 56---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 56 Symbol
@parent ---Menu 56---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 56 Show
@parent ---Menu 56---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 56 Enabled
@parent ---Menu 56---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 56 Ext
@parent ---Menu 56---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 56 Main Bind
@parent ---Menu 56---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 56 Actor Bind
@parent ---Menu 56---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 57---
@text ---メニュー 57---
@parent ---Menu Items---
@default
@param Menu 57 Name
@parent ---Menu 57---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 57 Symbol
@parent ---Menu 57---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 57 Show
@parent ---Menu 57---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 57 Enabled
@parent ---Menu 57---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 57 Ext
@parent ---Menu 57---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 57 Main Bind
@parent ---Menu 57---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 57 Actor Bind
@parent ---Menu 57---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 58---
@text ---メニュー 58---
@parent ---Menu Items---
@default
@param Menu 58 Name
@parent ---Menu 58---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 58 Symbol
@parent ---Menu 58---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 58 Show
@parent ---Menu 58---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 58 Enabled
@parent ---Menu 58---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 58 Ext
@parent ---Menu 58---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 58 Main Bind
@parent ---Menu 58---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 58 Actor Bind
@parent ---Menu 58---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 59---
@text ---メニュー 59---
@parent ---Menu Items---
@default
@param Menu 59 Name
@parent ---Menu 59---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 59 Symbol
@parent ---Menu 59---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 59 Show
@parent ---Menu 59---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 59 Enabled
@parent ---Menu 59---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 59 Ext
@parent ---Menu 59---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 59 Main Bind
@parent ---Menu 59---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 59 Actor Bind
@parent ---Menu 59---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 60---
@text ---メニュー 60---
@parent ---Menu Items---
@default
@param Menu 60 Name
@parent ---Menu 60---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 60 Symbol
@parent ---Menu 60---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 60 Show
@parent ---Menu 60---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 60 Enabled
@parent ---Menu 60---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 60 Ext
@parent ---Menu 60---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 60 Main Bind
@parent ---Menu 60---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 60 Actor Bind
@parent ---Menu 60---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 61---
@text ---メニュー 61---
@parent ---Menu Items---
@default
@param Menu 61 Name
@parent ---Menu 61---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 61 Symbol
@parent ---Menu 61---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 61 Show
@parent ---Menu 61---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 61 Enabled
@parent ---Menu 61---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 61 Ext
@parent ---Menu 61---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 61 Main Bind
@parent ---Menu 61---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 61 Actor Bind
@parent ---Menu 61---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 62---
@text ---メニュー 62---
@parent ---Menu Items---
@default
@param Menu 62 Name
@parent ---Menu 62---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 62 Symbol
@parent ---Menu 62---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 62 Show
@parent ---Menu 62---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 62 Enabled
@parent ---Menu 62---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 62 Ext
@parent ---Menu 62---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 62 Main Bind
@parent ---Menu 62---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 62 Actor Bind
@parent ---Menu 62---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 63---
@text ---メニュー 63---
@parent ---Menu Items---
@default
@param Menu 63 Name
@parent ---Menu 63---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 63 Symbol
@parent ---Menu 63---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 63 Show
@parent ---Menu 63---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 63 Enabled
@parent ---Menu 63---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 63 Ext
@parent ---Menu 63---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 63 Main Bind
@parent ---Menu 63---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 63 Actor Bind
@parent ---Menu 63---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 64---
@text ---メニュー 64---
@parent ---Menu Items---
@default
@param Menu 64 Name
@parent ---Menu 64---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 64 Symbol
@parent ---Menu 64---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 64 Show
@parent ---Menu 64---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 64 Enabled
@parent ---Menu 64---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 64 Ext
@parent ---Menu 64---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 64 Main Bind
@parent ---Menu 64---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 64 Actor Bind
@parent ---Menu 64---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 65---
@text ---メニュー 65---
@parent ---Menu Items---
@default
@param Menu 65 Name
@parent ---Menu 65---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 65 Symbol
@parent ---Menu 65---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 65 Show
@parent ---Menu 65---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 65 Enabled
@parent ---Menu 65---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 65 Ext
@parent ---Menu 65---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 65 Main Bind
@parent ---Menu 65---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 65 Actor Bind
@parent ---Menu 65---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 66---
@text ---メニュー 66---
@parent ---Menu Items---
@default
@param Menu 66 Name
@parent ---Menu 66---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 66 Symbol
@parent ---Menu 66---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 66 Show
@parent ---Menu 66---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 66 Enabled
@parent ---Menu 66---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 66 Ext
@parent ---Menu 66---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 66 Main Bind
@parent ---Menu 66---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 66 Actor Bind
@parent ---Menu 66---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 67---
@text ---メニュー 67---
@parent ---Menu Items---
@default
@param Menu 67 Name
@parent ---Menu 67---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 67 Symbol
@parent ---Menu 67---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 67 Show
@parent ---Menu 67---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 67 Enabled
@parent ---Menu 67---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 67 Ext
@parent ---Menu 67---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 67 Main Bind
@parent ---Menu 67---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 67 Actor Bind
@parent ---Menu 67---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 68---
@text ---メニュー 68---
@parent ---Menu Items---
@default
@param Menu 68 Name
@parent ---Menu 68---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 68 Symbol
@parent ---Menu 68---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 68 Show
@parent ---Menu 68---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 68 Enabled
@parent ---Menu 68---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 68 Ext
@parent ---Menu 68---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 68 Main Bind
@parent ---Menu 68---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 68 Actor Bind
@parent ---Menu 68---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 69---
@text ---メニュー 69---
@parent ---Menu Items---
@default
@param Menu 69 Name
@parent ---Menu 69---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 69 Symbol
@parent ---Menu 69---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 69 Show
@parent ---Menu 69---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 69 Enabled
@parent ---Menu 69---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 69 Ext
@parent ---Menu 69---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 69 Main Bind
@parent ---Menu 69---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 69 Actor Bind
@parent ---Menu 69---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 70---
@text ---メニュー 70---
@parent ---Menu Items---
@default
@param Menu 70 Name
@parent ---Menu 70---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 70 Symbol
@parent ---Menu 70---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 70 Show
@parent ---Menu 70---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 70 Enabled
@parent ---Menu 70---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 70 Ext
@parent ---Menu 70---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 70 Main Bind
@parent ---Menu 70---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 70 Actor Bind
@parent ---Menu 70---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 71---
@text ---メニュー 71---
@parent ---Menu Items---
@default
@param Menu 71 Name
@parent ---Menu 71---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 71 Symbol
@parent ---Menu 71---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 71 Show
@parent ---Menu 71---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 71 Enabled
@parent ---Menu 71---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 71 Ext
@parent ---Menu 71---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 71 Main Bind
@parent ---Menu 71---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 71 Actor Bind
@parent ---Menu 71---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 72---
@text ---メニュー 72---
@parent ---Menu Items---
@default
@param Menu 72 Name
@parent ---Menu 72---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 72 Symbol
@parent ---Menu 72---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 72 Show
@parent ---Menu 72---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 72 Enabled
@parent ---Menu 72---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 72 Ext
@parent ---Menu 72---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 72 Main Bind
@parent ---Menu 72---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 72 Actor Bind
@parent ---Menu 72---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 73---
@text ---メニュー 73---
@parent ---Menu Items---
@default
@param Menu 73 Name
@parent ---Menu 73---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 73 Symbol
@parent ---Menu 73---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 73 Show
@parent ---Menu 73---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 73 Enabled
@parent ---Menu 73---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 73 Ext
@parent ---Menu 73---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 73 Main Bind
@parent ---Menu 73---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 73 Actor Bind
@parent ---Menu 73---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 74---
@text ---メニュー 74---
@parent ---Menu Items---
@default
@param Menu 74 Name
@parent ---Menu 74---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 74 Symbol
@parent ---Menu 74---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 74 Show
@parent ---Menu 74---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 74 Enabled
@parent ---Menu 74---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 74 Ext
@parent ---Menu 74---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 74 Main Bind
@parent ---Menu 74---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 74 Actor Bind
@parent ---Menu 74---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 75---
@text ---メニュー 75---
@parent ---Menu Items---
@default
@param Menu 75 Name
@parent ---Menu 75---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 75 Symbol
@parent ---Menu 75---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 75 Show
@parent ---Menu 75---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 75 Enabled
@parent ---Menu 75---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 75 Ext
@parent ---Menu 75---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 75 Main Bind
@parent ---Menu 75---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 75 Actor Bind
@parent ---Menu 75---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 76---
@text ---メニュー 76---
@parent ---Menu Items---
@default
@param Menu 76 Name
@parent ---Menu 76---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 76 Symbol
@parent ---Menu 76---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 76 Show
@parent ---Menu 76---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 76 Enabled
@parent ---Menu 76---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 76 Ext
@parent ---Menu 76---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 76 Main Bind
@parent ---Menu 76---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 76 Actor Bind
@parent ---Menu 76---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 77---
@text ---メニュー 77---
@parent ---Menu Items---
@default
@param Menu 77 Name
@parent ---Menu 77---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 77 Symbol
@parent ---Menu 77---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 77 Show
@parent ---Menu 77---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 77 Enabled
@parent ---Menu 77---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 77 Ext
@parent ---Menu 77---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 77 Main Bind
@parent ---Menu 77---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 77 Actor Bind
@parent ---Menu 77---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 78---
@text ---メニュー 78---
@parent ---Menu Items---
@default
@param Menu 78 Name
@parent ---Menu 78---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 78 Symbol
@parent ---Menu 78---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 78 Show
@parent ---Menu 78---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 78 Enabled
@parent ---Menu 78---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 78 Ext
@parent ---Menu 78---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 78 Main Bind
@parent ---Menu 78---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 78 Actor Bind
@parent ---Menu 78---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 79---
@text ---メニュー 79---
@parent ---Menu Items---
@default
@param Menu 79 Name
@parent ---Menu 79---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 79 Symbol
@parent ---Menu 79---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 79 Show
@parent ---Menu 79---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 79 Enabled
@parent ---Menu 79---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 79 Ext
@parent ---Menu 79---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 79 Main Bind
@parent ---Menu 79---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 79 Actor Bind
@parent ---Menu 79---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 80---
@text ---メニュー 80---
@parent ---Menu Items---
@default
@param Menu 80 Name
@parent ---Menu 80---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 80 Symbol
@parent ---Menu 80---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 80 Show
@parent ---Menu 80---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 80 Enabled
@parent ---Menu 80---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 80 Ext
@parent ---Menu 80---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 80 Main Bind
@parent ---Menu 80---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 80 Actor Bind
@parent ---Menu 80---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 81---
@text ---メニュー 81---
@parent ---Menu Items---
@default
@param Menu 81 Name
@parent ---Menu 81---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default 'Common Event 1'
@param Menu 81 Symbol
@parent ---Menu 81---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default common event
@param Menu 81 Show
@parent ---Menu 81---
@text 表示条件
@desc コマンドを表示するevalの状態
@default false
@param Menu 81 Enabled
@parent ---Menu 81---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default true
@param Menu 81 Ext
@parent ---Menu 81---
@text 拡張
@desc コマンドを拡張するeval
@default 1
@param Menu 81 Main Bind
@parent ---Menu 81---
@text 機能
@desc コマンドで実行されるeval
@default this.callCommonEvent.bind(this)
@param Menu 81 Actor Bind
@parent ---Menu 81---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 82---
@text ---メニュー 82---
@parent ---Menu Items---
@default
@param Menu 82 Name
@parent ---Menu 82---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default 'Common Event 2'
@param Menu 82 Symbol
@parent ---Menu 82---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default common event
@param Menu 82 Show
@parent ---Menu 82---
@text 表示条件
@desc コマンドを表示するevalの状態
@default false
@param Menu 82 Enabled
@parent ---Menu 82---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default true
@param Menu 82 Ext
@parent ---Menu 82---
@text 拡張
@desc コマンドを拡張するeval
@default 2
@param Menu 82 Main Bind
@parent ---Menu 82---
@text 機能
@desc コマンドで実行されるeval
@default this.callCommonEvent.bind(this)
@param Menu 82 Actor Bind
@parent ---Menu 82---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 83---
@text ---メニュー 83---
@parent ---Menu Items---
@default
@param Menu 83 Name
@parent ---Menu 83---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default 'Common Event 3'
@param Menu 83 Symbol
@parent ---Menu 83---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default common event
@param Menu 83 Show
@parent ---Menu 83---
@text 表示条件
@desc コマンドを表示するevalの状態
@default false
@param Menu 83 Enabled
@parent ---Menu 83---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default true
@param Menu 83 Ext
@parent ---Menu 83---
@text 拡張
@desc コマンドを拡張するeval
@default 3
@param Menu 83 Main Bind
@parent ---Menu 83---
@text 機能
@desc コマンドで実行されるeval
@default this.callCommonEvent.bind(this)
@param Menu 83 Actor Bind
@parent ---Menu 83---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 84---
@text ---メニュー 84---
@parent ---Menu Items---
@default
@param Menu 84 Name
@parent ---Menu 84---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 84 Symbol
@parent ---Menu 84---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 84 Show
@parent ---Menu 84---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 84 Enabled
@parent ---Menu 84---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 84 Ext
@parent ---Menu 84---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 84 Main Bind
@parent ---Menu 84---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 84 Actor Bind
@parent ---Menu 84---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 85---
@text ---メニュー 85---
@parent ---Menu Items---
@default
@param Menu 85 Name
@parent ---Menu 85---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 85 Symbol
@parent ---Menu 85---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 85 Show
@parent ---Menu 85---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 85 Enabled
@parent ---Menu 85---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 85 Ext
@parent ---Menu 85---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 85 Main Bind
@parent ---Menu 85---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 85 Actor Bind
@parent ---Menu 85---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 86---
@text ---メニュー 86---
@parent ---Menu Items---
@default
@param Menu 86 Name
@parent ---Menu 86---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 86 Symbol
@parent ---Menu 86---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 86 Show
@parent ---Menu 86---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 86 Enabled
@parent ---Menu 86---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 86 Ext
@parent ---Menu 86---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 86 Main Bind
@parent ---Menu 86---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 86 Actor Bind
@parent ---Menu 86---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 87---
@text ---メニュー 87---
@parent ---Menu Items---
@default
@param Menu 87 Name
@parent ---Menu 87---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 87 Symbol
@parent ---Menu 87---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 87 Show
@parent ---Menu 87---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 87 Enabled
@parent ---Menu 87---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 87 Ext
@parent ---Menu 87---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 87 Main Bind
@parent ---Menu 87---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 87 Actor Bind
@parent ---Menu 87---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 88---
@text ---メニュー 88---
@parent ---Menu Items---
@default
@param Menu 88 Name
@parent ---Menu 88---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 88 Symbol
@parent ---Menu 88---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 88 Show
@parent ---Menu 88---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 88 Enabled
@parent ---Menu 88---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 88 Ext
@parent ---Menu 88---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 88 Main Bind
@parent ---Menu 88---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 88 Actor Bind
@parent ---Menu 88---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 89---
@text ---メニュー 89---
@parent ---Menu Items---
@default
@param Menu 89 Name
@parent ---Menu 89---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 89 Symbol
@parent ---Menu 89---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 89 Show
@parent ---Menu 89---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 89 Enabled
@parent ---Menu 89---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 89 Ext
@parent ---Menu 89---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 89 Main Bind
@parent ---Menu 89---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 89 Actor Bind
@parent ---Menu 89---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 90---
@text ---メニュー 90---
@parent ---Menu Items---
@default
@param Menu 90 Name
@parent ---Menu 90---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.options
@param Menu 90 Symbol
@parent ---Menu 90---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default options
@param Menu 90 Show
@parent ---Menu 90---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('options')
@param Menu 90 Enabled
@parent ---Menu 90---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.isOptionsEnabled()
@param Menu 90 Ext
@parent ---Menu 90---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 90 Main Bind
@parent ---Menu 90---
@text 機能
@desc コマンドで実行されるeval
@default this.commandOptions.bind(this)
@param Menu 90 Actor Bind
@parent ---Menu 90---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 91---
@text ---メニュー 91---
@parent ---Menu Items---
@default
@param Menu 91 Name
@parent ---Menu 91---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 91 Symbol
@parent ---Menu 91---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 91 Show
@parent ---Menu 91---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 91 Enabled
@parent ---Menu 91---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 91 Ext
@parent ---Menu 91---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 91 Main Bind
@parent ---Menu 91---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 91 Actor Bind
@parent ---Menu 91---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 92---
@text ---メニュー 92---
@parent ---Menu Items---
@default
@param Menu 92 Name
@parent ---Menu 92---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 92 Symbol
@parent ---Menu 92---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 92 Show
@parent ---Menu 92---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 92 Enabled
@parent ---Menu 92---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 92 Ext
@parent ---Menu 92---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 92 Main Bind
@parent ---Menu 92---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 92 Actor Bind
@parent ---Menu 92---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 93---
@text ---メニュー 93---
@parent ---Menu Items---
@default
@param Menu 93 Name
@parent ---Menu 93---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 93 Symbol
@parent ---Menu 93---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 93 Show
@parent ---Menu 93---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 93 Enabled
@parent ---Menu 93---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 93 Ext
@parent ---Menu 93---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 93 Main Bind
@parent ---Menu 93---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 93 Actor Bind
@parent ---Menu 93---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 94---
@text ---メニュー 94---
@parent ---Menu Items---
@default
@param Menu 94 Name
@parent ---Menu 94---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 94 Symbol
@parent ---Menu 94---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 94 Show
@parent ---Menu 94---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 94 Enabled
@parent ---Menu 94---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 94 Ext
@parent ---Menu 94---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 94 Main Bind
@parent ---Menu 94---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 94 Actor Bind
@parent ---Menu 94---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 95---
@text ---メニュー 95---
@parent ---Menu Items---
@default
@param Menu 95 Name
@parent ---Menu 95---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.save
@param Menu 95 Symbol
@parent ---Menu 95---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default save
@param Menu 95 Show
@parent ---Menu 95---
@text 表示条件
@desc コマンドを表示するevalの状態
@default this.needsCommand('save')
@param Menu 95 Enabled
@parent ---Menu 95---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.isSaveEnabled()
@param Menu 95 Ext
@parent ---Menu 95---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 95 Main Bind
@parent ---Menu 95---
@text 機能
@desc コマンドで実行されるeval
@default this.commandSave.bind(this)
@param Menu 95 Actor Bind
@parent ---Menu 95---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 96---
@text ---メニュー 96---
@parent ---Menu Items---
@default
@param Menu 96 Name
@parent ---Menu 96---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 96 Symbol
@parent ---Menu 96---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 96 Show
@parent ---Menu 96---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 96 Enabled
@parent ---Menu 96---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 96 Ext
@parent ---Menu 96---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 96 Main Bind
@parent ---Menu 96---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 96 Actor Bind
@parent ---Menu 96---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 97---
@text ---メニュー 97---
@parent ---Menu Items---
@default
@param Menu 97 Name
@parent ---Menu 97---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 97 Symbol
@parent ---Menu 97---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 97 Show
@parent ---Menu 97---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 97 Enabled
@parent ---Menu 97---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 97 Ext
@parent ---Menu 97---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 97 Main Bind
@parent ---Menu 97---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 97 Actor Bind
@parent ---Menu 97---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 98---
@text ---メニュー 98---
@parent ---Menu Items---
@default
@param Menu 98 Name
@parent ---Menu 98---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default
@param Menu 98 Symbol
@parent ---Menu 98---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default
@param Menu 98 Show
@parent ---Menu 98---
@text 表示条件
@desc コマンドを表示するevalの状態
@default
@param Menu 98 Enabled
@parent ---Menu 98---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default
@param Menu 98 Ext
@parent ---Menu 98---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 98 Main Bind
@parent ---Menu 98---
@text 機能
@desc コマンドで実行されるeval
@default
@param Menu 98 Actor Bind
@parent ---Menu 98---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 99---
@text ---メニュー 99---
@parent ---Menu Items---
@default
@param Menu 99 Name
@parent ---Menu 99---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default 'デバッグ'
@param Menu 99 Symbol
@parent ---Menu 99---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default debug
@param Menu 99 Show
@parent ---Menu 99---
@text 表示条件
@desc コマンドを表示するevalの状態
@default $gameTemp.isPlaytest()
@param Menu 99 Enabled
@parent ---Menu 99---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default true
@param Menu 99 Ext
@parent ---Menu 99---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 99 Main Bind
@parent ---Menu 99---
@text 機能
@desc コマンドで実行されるeval
@default this.commandDebug.bind(this)
@param Menu 99 Actor Bind
@parent ---Menu 99---
@text アクター機能
@desc アクターに実行されるeval
@default
@param ---Menu 100---
@text ---メニュー 100---
@parent ---Menu Items---
@default
@param Menu 100 Name
@parent ---Menu 100---
@text 表示コマンド名
@desc evalで指定。文字を設定したい場合は、名前を''で囲います。
@default TextManager.gameEnd
@param Menu 100 Symbol
@parent ---Menu 100---
@text コマンド識別子
@desc コマンド毎に重複しないものを指定
@default gameEnd
@param Menu 100 Show
@parent ---Menu 100---
@text 表示条件
@desc コマンドを表示するevalの状態
@default true
@param Menu 100 Enabled
@parent ---Menu 100---
@text 有効条件
@desc コマンドを有効にするevalの状態
@default this.isGameEndEnabled()
@param Menu 100 Ext
@parent ---Menu 100---
@text 拡張
@desc コマンドを拡張するeval
@default
@param Menu 100 Main Bind
@parent ---Menu 100---
@text 機能
@desc コマンドで実行されるeval
@default this.commandGameEnd.bind(this)
@param Menu 100 Actor Bind
@parent ---Menu 100---
@text アクター機能
@desc アクターに実行されるeval
@default
@help
翻訳:ムノクラ
https://fungamemake.com/
https://twitter.com/munokura/
===========================================================================
導入
===========================================================================
ソースコードを触らずにメニューコマンドの様々な要素を変更したい方は、
このプラグインを使ってください。
このプラグインは主に、メニュー生成プロセスを、プラグインの
パラメータへ移植します。メニューコマンドのマネジメントプロセスを、
より明瞭なものにすることができます。
===========================================================================
使用方法
===========================================================================
パラメータは様々なパートに分かれており、それぞれのパートが、
メニューコマンドがどのように働くかを決定しています。
下記にそれぞれの役割を記載します。
Name
メインメニューでの、コマンドの表示方法を表しています。
これはevalで、すなわちコード方式です。
コマンドをそのまま表示したければ、''で囲んでください。
Symbol
コマンド識別子です。各コマンドは独自のシンボルを持っており、
お互いに干渉を起こさないようになっています。
その一方で、同時の機能実行が許容されるのであれば、
シンボルは共通のものでも問題はありません。
Show
メインメニューにコマンドを表示させるか決定することができます。
常に表示させたい時には、trueと入れるだけでOKです。
Enabled
コマンドが有効かどうかを決定することができます。
コマンド自体は表示されていても、選択できるか否かはここで変更できます。
常に有効にしたい時には、trueと入れるだけでOKです。
Ext
"エクステンション(拡張)"の略で、第二のコマンドを提供します。
拡張値に対象が関連付けられていなければ、
コマンドに直接的な影響を与えることは有りません。
コマンドの大多数は、この拡張値を必要としません。
Main Bind
メインメニューからこのコマンドが直接選択された時、実行される機能です。
このコマンドに紐づく機能へは、Scene_Menuからアクセスする必要があります。
アクターを最初に選択し、'this.commandItem.bind(this)' と入れてください。
(ここに '' はつけないでください)
Actor Bind
このコマンドを選択後、アクターを選択した際に実行される機能です。
アクターの選択が不要なメニューコマンドに関しては、この機能は不要です。
===========================================================================
使用例
===========================================================================
下記の例は、メインメニューでコマンドが表示される方法を追加/変更する
いくつかの例です。
  Name: TextManager.item
Symbol: item
  Show: this.needsCommand('item')
Enabled: this.areMainCommandsEnabled()
   Ext:
Main Bind: this.commandItem.bind(this)
Actor Bind:
アイテムコマンドは上記の例を使って作成されます。
'TextManager.item' は、コマンド名がどのように表示されるかを表します。
データベースのテキストマネージャから 'item' に、任意の名前を挿入します。
シンボル 'Item' は、アイテムコマンドの独自の識別子として用いられます。
コマンドを表示させるために'needsCommand'を実行し、それを確認します。
'needsCommand'機能は、アイテムをそこに表示させたいかどうかという
データベースと紐づけられています。
このコマンドを有効にするために、メインコマンドが有効かどうかを確認し、
それは現在のパーティにアクターが居るかいないかに関連付けられます。
そして最終的には、アイテム項目が選択された時、
'this.commandItem.bind(this)' が実行されます。
  Name: TextManager.skill
Symbol: skill
  Show: this.needsCommand('skill')
Enabled: this.areMainCommandsEnabled()
   Ext:
Main Bind: this.commandPersonal.bind(this)
Actor Bind: SceneManager.push(Scene_Skill)
アイテムコマンドは上記の例を使って作成されます。
'TextManager.skill' は、コマンド名がどのように表示されるかを表します。
データベースのテキストマネージャから 'Skill' に、任意の名前を挿入します。
シンボル 'Skill' は、アイテムコマンドの独自の識別子として用いられます。
コマンドを表示させるために'needsCommand'を実行し、それを確認します。
この'needsCommand'機能は、スキルオプションを表示させたいかどうかという
データベースと紐づけられています。
このコマンドを有効にするために、メインコマンドが有効かどうかを確認し、
それは現在のパーティにアクターが居るかいないかに関連付けられます。
この時、メインのBindコマンドは
'this.commandPersonal.bind(this)'を代わりに用いて、アクター選択に進みます。
プレイヤーがアクターを選んだ時、'SceneManager.push(Scene_Skill)' が実行され
プレイヤーを Scene_Skill へ飛ばし、アクターのスキルを管理させます。
  Name: 'Common Event 1'
Symbol: common event
  Show: false
Enabled: true
   Ext: 1
Main Bind: this.callCommonEvent.bind(this)
Actor Bind:
プラグインのデフォルトで含まれているカスタマイズコマンドです。
このコマンドの名前は 'Common Event 1'ですが、
パラメータ設定内で''内を変更することで好きなように変更することができます。
シンボルは全てのコモンイベントに対する識別子となります。
しかしデフォルトではこのコモンイベントはメインメニューには表示されません。
もし表示させたい場合、表示オプションを true にすれば表示されます。
Enabledオプションが 'true'のため、プレイヤーは常にコマンドを選択できます。
Extはどのコモンイベントが再生されるか決定します。
例えば、Extの値が 1 の場合、このコマンドが選択された時、
「コモンイベント1」が再生されることになります。
コマンドオプションに対するメインバインドは
'this.callCommonEvent.bind(this)'で、これがコモンイベントを実行します。
===========================================================================
Changelog
===========================================================================
Version 1.03:
Updated for RPG Maker MV version 1.5.0.
Version 1.02:
The gold window will now match the command window's width.
Version 1.01:
Added 'Hide Actor Window', 'Hide Gold Window', 'Blurry Background'
parameters for the plugin settings.
Version 1.00:
Finished plugin! */