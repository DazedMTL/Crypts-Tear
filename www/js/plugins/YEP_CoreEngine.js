/*:ja
 * @plugindesc v1.50 解像度、通貨、アイテム、レベル、能力値の上限の変更など様々な変更が可能です。
 * @author Yanfly Engine Plugins
 *
 * @param ---画面---
 * @default
 *
 * @param Screen Width
 * @parent ---画面---
 * @type number
 * @min 0
 * @desc スクリーンの横幅を設定
 * Default: 816
 * @default 816
 *
 * @param Screen Height
 * @parent ---画面---
 * @type number
 * @min 0
 * @desc スクリーンの縦幅を設定
 * Default: 624
 * @default 624
 *
 * @param Scale Battlebacks
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 戦闘背景のサイズを解像度に合わせるか設定
 * NO - false     YES - true
 * @default true
 *
 * @param Scale Title
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc タイトルスクリーンのサイズを解像度に合わせるか設定
 * NO - false     YES - true
 * @default true
 *
 * @param Scale Game Over
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 解像度に合わせて画面上のゲームを拡大縮小させるか設定
 * NO - false     YES - true
 * @default true
 *
 * @param Open Console
 * @parent ---画面---
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc テスト/デバッグ用に、コンソール画面の設定
 * 開かない - false     開く - true
 * @default false
 *
 * @param Reposition Battlers
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 解像度に合わせてバトラーの位置を変更させるか設定
 * NO - false     YES - true
 * @default true
 *
 * @param GameFont Load Timer
 * @parent ---画面---
 * @type number
 * @min 0
 * @desc ゲームフォントをロードするためのタイマーを設定
 * 無制限は0に設定してください。 Default: 20000
 * @default 0
 *
 * @param Update Real Scale
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 変更を非推奨。画面に合わせた引き伸ばしを可能に設定。 NO - false   YES - true
 * @default false
 *
 * @param Collection Clear
 * @parent ---画面---
 * @type boolean
 * @on YES
 * @off NO
 * @desc シーンを切り替えてメモリを解放する時、主要シーン内に保存されているオブジェクトを消去。 NO - false   YES - true
 * @default true
 *
 * @param ---通貨---
 * @desc
 *
 * @param Gold Max
 * @parent ---通貨---
 * @type number
 * @min 1
 * @desc プレイヤーが持てる通貨の最大値を設定
 * Default: 99999999
 * @default 99999999
 *
 * @param Gold Font Size
 * @parent ---通貨---
 * @type number
 * @min 1
 * @desc 通貨を表示する際のフォントサイズを指定
 * Default: 28
 * @default 20
 *
 * @param Gold Icon
 * @parent ---通貨---
 * @type number
 * @min 0
 * @desc 通貨を意味するアイコンを指定。無表示（通常の単位）は0
 * @default 313
 *
 * @param Gold Overlap
 * @parent ---通貨---
 * @desc 通貨が割り当てられた範囲のサイズを超えた際に表示
 * @default A lotta
 *
 * @param ---アイテム---
 * @desc
 *
 * @param Default Max
 * @parent ---アイテム---
 * @type number
 * @min 1
 * @desc プレイヤーが所持できるアイテム数の上限を設定
 * Default: 99
 * @default 99
 *
 * @param Quantity Text Size
 * @parent ---アイテム---
 * @type number
 * @min 1
 * @desc アイテム数を表示する際のフォントサイズを指定
 * Default: 28
 * @default 20
 *
 * @param ---能力値---
 * @default
 *
 * @param Max Level
 * @parent ---能力値---
 * @type number
 * @min 1
 * @desc アクターのレベルの上限値を設定
 * Default: 99
 * @default 99
 *
 * @param Actor MaxHP
 * @parent ---能力値---
 * @type number
 * @min 1
 * @desc アクターのHPの上限値を設定
 * Default: 9999
 * @default 9999
 *
 * @param Actor MaxMP
 * @parent ---能力値---
 * @type number
 * @min 0
 * @desc アクターのMPの上限値を設定
 * Default: 9999
 * @default 9999
 *
 * @param Actor Parameter
 * @parent ---能力値---
 * @type number
 * @min 1
 * @desc アクターの能力値の上限値を設定
 * Default: 999
 * @default 999
 *
 * @param Enemy MaxHP
 * @parent ---能力値---
 * @type number
 * @min 1
 * @desc 敵のHPの上限値を設定
 * Default: 999999
 * @default 999999
 *
 * @param Enemy MaxMP
 * @parent ---能力値---
 * @type number
 * @min 0
 * @desc 敵のMPの上限値を設定
 * Default: 9999
 * @default 9999
 *
 * @param Enemy Parameter
 * @parent ---能力値---
 * @type number
 * @min 1
 * @desc 敵の能力値の上限値を設定
 * Default: 999
 * @default 999
 *
 * @param ---戦闘---
 * @desc
 *
 * @param Animation Rate
 * @parent ---戦闘---
 * @type number
 * @min 1
 * @desc 戦闘アニメーションのレートを設定
 * Default: 4
 * @default 4
 *
 * @param Flash Target
 * @parent ---戦闘---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 敵を対象に選んだ際、光らせるか白く表示
 * NO - false     YES - true
 * @default false
 *
 * @param Show Events Transition
 * @parent ---戦闘---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 戦闘移行中のイベントを表示するか設定
 * 表示 - true     非表示 - false     Default: false
 * @default true
 *
 * @param Show Events Snapshot
 * @parent ---戦闘---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc バトルバックグラウンドスナップショットのイベントを表示するか設定
 * 表示 - true     非表示 - false     Default: false
 * @default true
 *
 * @param ---マップ最適化---
 * @desc
 *
 * @param Refresh Update HP
 * @parent ---マップ最適化---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc マップ上でHPを更新する時にすべてのアクターを更新するか設定
 * 表示 - true   非表示 - false   Default: true
 * @default true
 *
 * @param Refresh Update MP
 * @parent ---マップ最適化---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc マップ上でMPを更新する時にすべてのアクターを更新するか設定
 * 表示 - true   非表示 - false   Default: true
 * @default true
 *
 * @param Refresh Update TP
 * @parent ---マップ最適化---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc マップ上でTPを更新する時にすべてのアクターを更新するか設定
 * 表示 - true   非表示 - false   Default: true
 * @default false
 *
 * @param ---フォント---
 * @desc
 *
 * @param Chinese Font
 * @parent ---フォント---
 * @desc 中国語のRPGに使われるデフォルトフォントを設定
 * Default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Korean Font
 * @parent ---フォント---
 * @desc 韓国語のRPGに使われるデフォルトフォントを設定
 * Default: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Default Font
 * @parent ---フォント---
 * @desc それ以外のRPGに使われるデフォルトフォントを設定
 * Default: GameFont
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param Font Size
 * @parent ---フォント---
 * @type number
 * @min 1
 * @desc ウィンドウに使われるデフォルトフォントのサイズを設定
 * Default: 28
 * @default 28
 *
 * @param Text Align
 * @parent ---フォント---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc コマンドウィンドウ内でのテキスト配置方法を設定
 * left(左)     center(中央)     right(右)
 * @default left
 *
 * @param ---ウィンドウ---
 * @default
 *
 * @param Digit Grouping
 * @parent ---ウィンドウ---
 * @type boolean
 * @on ON
 * @off OFF
 * @desc 数字の桁区切り
 * false - OFF     true - ON
 * @default true
 *
 * @param Line Height
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc ウィンドウ内での行高設定
 * Default: 36
 * @default 36
 *
 * @param Icon Width
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc アイコン幅の設定
 * Default: 32
 * @default 32
 *
 * @param Icon Height
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc アイコン高の設定
 * Default: 32
 * @default 32
 *
 * @param Face Width
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc アクターの顔グラフィックの幅を設定
 * Default: 144
 * @default 144
 *
 * @param Face Height
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc アクターの顔グラフィックの高さを設定
 * Default: 144
 * @default 144
 *
 * @param Window Padding
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc 全てのスタンダードウィンドウのパディングを設定
 * Default: 18
 * @default 18
 *
 * @param Text Padding
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc ウィンドウ内のテキストの適用パディング量
 * Default: 6
 * @default 6
 *
 * @param Window Opacity
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc 背景の不透明度を設定
 * Default: 192
 * @default 192
 *
 * @param Gauge Outline
 * @parent ---ウィンドウ---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc ゲージのアウトラインを表示
 * 表示 - true   非表示 - false   Default: true
 * @default true
 *
 * @param Gauge Height
 * @parent ---ウィンドウ---
 * @type number
 * @min 0
 * @desc ゲージの高さを設定
 * Default: 6
 * @default 18
 *
 * @param Menu TP Bar
 * @parent ---ウィンドウ---
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc アクターのメニュー能力値にTPバーを表示
 * 表示 - true   非表示 - false
 * @default true
 *
 * @param ---ウィンドウ色---
 * @default
 *
 * @param Color: Normal
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 0
 * @default 0
 *
 * @param Color: System
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 16
 * @default 16
 *
 * @param Color: Crisis
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 17
 * @default 17
 *
 * @param Color: Death
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 18
 * @default 18
 *
 * @param Color: Gauge Back
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 19
 * @default 19
 *
 * @param Color: HP Gauge 1
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 20
 * @default 20
 *
 * @param Color: HP Gauge 2
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 21
 * @default 21
 *
 * @param Color: MP Gauge 1
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 22
 * @default 22
 *
 * @param Color: MP Gauge 2
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 23
 * @default 23
 *
 * @param Color: MP Cost
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 23
 * @default 23
 *
 * @param Color: Power Up
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 24
 * @default 24
 *
 * @param Color: Power Down
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 25
 * @default 25
 *
 * @param Color: TP Gauge 1
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 28
 * @default 28
 *
 * @param Color: TP Gauge 2
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 29
 * @default 29
 *
 * @param Color: TP Cost Color
 * @parent ---ウィンドウ色---
 * @type number
 * @min 0
 * @max 31
 * @desc テキスト色で指定
 * Default: 29
 * @default 29
 *
 * @help
 * 翻訳:ムノクラ
 * https://munokura.tk/
 * https://twitter.com/munokura/
 *
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * このプラグインはRPGツクールMV用のプラグインです。
 * このプラグインはバグを修正したり、
 * 画面の解像度・フォント・ウィンドウ色などの設定を可能にします。
 *
 * このプラグインは、他の全てのYanfly Engine Pluginsの
 * 一番上に置くようにしてください。
 *
 * ============================================================================
 * Bug Fixes
 * ============================================================================
 *
 * このプラグインは、昨今発見されているRPGツクールMVのバグを修正します。
 * 詳細は下記を参照してください。
 *
 * アニメーションオーバーレイ
 * フルスクリーンアニメーションを使用して一度に複数の敵を対象にする
 * スキル/アイテムが複数回オーバーレイすると、一連のオーバーレイ効果によって
 * 画像が歪んで見えます。
 * プラグインはこの問題を解決するために、1つのアニメーションのみを
 * グループで再生します。
 *
 * 音量スタッキング
 * 同じフレーム内で複数の効果音が正確な設定で再生されると
 * (通常はアニメーションのため)、
 * 音量が互いに重なって、目的の音量で再生されないことがあります。
 * このプラグインは、同じフレーム内で同じ設定のサウンドエフェクトが
 * 再生されないようにすることで、この問題を解決します。
 *
 * ・イベント動作スピード
 * ソースコードのエラーにより、イベントの動作に遅延が生じていましたが、
 * このプラグインにより修正を行うことができます。
 *
 * ・イベント動作キュー
 * イベントがコマンドにより動作する場合、
 * 別ページに移動するイベントの状態変更を行なうと、
 * イベント動作が途中で停止することがありました。
 * このプラグインでは上記の問題に修正を行い、イベントを完了することができます。
 *
 * ・イベント衝突
 * Below Playerの設定では、イベント同士を重ねて動作させることができず、
 * 特定のパズルやイベントの作成が困難であることが課題でした。
 * このプラグインでは、「キャラクターと同列」の優先度を持つイベントに対してのみ
 * コリジョンチェックを行うことで、上記の問題を解決します。
 * キャラクターの上位もしくは下位に配置されるイベントは、
 * 他のイベントと衝突することはありません。
 *
 * ・スクリーンティアリング
 * 動作の遅いコンピュータでは、タイルが分裂して表示されてしまいました。
 * このプラグインは、スクリーンカメラの動きとタイルのペースを同期させて、
 * この問題を解決します。
 *
 * ・スプライトディストーション
 * JavaSctiptの計算により、少数値が用いられる際、
 * スプライトシートに歪みが生じてしまうことがたびたびあります。
 * このプラグインは少数を取り除き、整数のみを用いることで、
 * スプライトシートが正しくフレームを取り出せるようにします。
 *
 * ============================================================================
 * Gold
 * ============================================================================
 *
 * このプラグインコマンドを使用することで、9,999,999のリミットを無視して
 * 通貨を追加もしくは減らすことができます。
 * メモタグを挿入することで、アイテム、武器、防具についても
 * 999,999のコストリミットを解除させることができます。
 *
 * プラグインコマンド:
 *   GainGold 1234567890       # パーティは 1234567890 G 手に入れます
 *   LoseGold 9876543210       # パーティは 9876543210 G を失います
 *
 * アイテム、武器、防具のメモタグ
 *   <Price: x>
 *   アイテムの値段を x に設定。
 *   このメモタグは999,999の制限を無視して使うことができます。
 *
 * 敵のメモタグ
 *   <Gold: x>
 *   敵の落とす通貨の値を x に設定。
 *   このメモタグは999,999の制限を無視して使うことができます。
 *
 * ============================================================================
 * Items
 * ============================================================================
 *
 * プレイヤーが所持できるアイテム最大数を設定するには、
 * パラメータの変更を行ないます。アイテム毎に異なる最大値を振り分けるには、
 * 以下のメモタグを使用してください。
 *
 * アイテム、武器、防具のメモタグ
 *   <Max Item: x>
 *   アイテムの最大数を x に設定。
 *
 * ============================================================================
 * Stats
 * ============================================================================
 *
 * 能力値の制限値を上げたとしても、
 * RPGツクールMVのデフォルト制限値に引っかかってしまいます。
 * 以下のメモタグを用いて、より高度な能力値ー設定を行うことができます。
 *
 * アクターのメモタグ
 *   <Initial Level: x>
 *   アクターの初期レベルを x に設定。
 *   このメモタグは99レベルの制限を無視して使うことができます。
 *
 *   <Max Level: x>
 *   アクターの最大レベルを x に設定。
 *   このメモタグは99レベルの制限を無視して使うことができます。 
 *
 * 職業の習得するスキルのメモタグ
 *   <Learn at Level: x>
 *   職業の「習得するスキル」のメモ欄にメモタグに挿入することで、
 *   x レベルでスキルを習得させることができます。
 *
 * 武器と防具のメモタグ
 *   <stat: +x>
 *   <stat: -x>
 *   武器や防具に、プラス/マイナス x の能力値を付与します。
 *   ”stat”の部分を”hp”, ”mp”, ”atk”, ”def”, ”mat”, ”mdf”, ”agi”, ”luk”
 *   に変更することで、その他の能力値にも変更を加えることができます。
 *   このメモタグはデフォルトの制限を無視して使うことができます。
 *
 * 敵のメモタグ
 *   <stat: x>
 *   敵の能力値を x の値に設定。
 *   ”stat”の部分を”hp”, ”mp”, ”atk”, ”def”, ”mat”, ”mdf”, ”agi”, ”luk”
 *   に変更することで、その他の能力値にも変更を加えることができます。
 *   このメモタグはデフォルトの制限を無視して使うことができます。
 *
 *   <exp: x>
 *   敵からもらえる経験値を x の値に設定。
 *   このメモタグはデフォルトの999,999の制限を無視して使うことができます。
 *
 * ============================================================================
 * Script Call Fail Safe
 * ============================================================================
 *
 * ダメージ計算式、スクリプトコール、条件付き分岐、および可変イベント内の
 * 不規則なコードがゲームをクラッシュさせることはもうありません。
 * 代わりに、テストプレイ中にのみコンソールウィンドウを開いて
 * エラーを表示させます。
 * 
 * プレーヤーがテストプレイではない場合、エラーは表示されずに
 * ゲームは通常どおり続行されます。
 * ゲームがブラウザで再生されている場合は、
 * コンソールウィンドウを開いてもエラーが表示されます。
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.32:
 * - Reversed the disable for the screen jitter fix from version 1.24. Somehow
 * it came back and I don't know when, but now it needs to go. 
 *
 * Version 1.31:
 * - Added Fallen Angel Olivia's full error message display to the Core Engine
 * (with her permission of course).
 * - Bug fixed regarding blend modes and bush depth making sprites not blend
 * properly in-game.
 * - Tab key no longer requires you to press it twice before triggering Tab-key
 * related inputs.
 *
 * Version 1.30:
 * - Bug fixed for audio Sound Effect stacking.
 * - Optimization update.
 *
 * Version 1.29:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.28:
 * - Upon pressing F5 to reload your game, this will close the DevTools Debug
 * Console if it is opened before reloading. This is because reloading with it
 * closed ends up reloading the game faster.
 * - New plugin parameters added: Refresh Update HP, MP, and TP
 *   - Option to choose to do a full actor refresh upon changing HP, MP, or TP
 *   - This is to reduce overall map lagging.
 *
 * Version 1.27:
 * - Updated for RPG Maker MV version 1.6.0:
 *   - Fixing script call checks made with switches and self switches under
 *   conditional branches due to how ES6 handles === differently.
 *
 * Version 1.26:
 * - Updated for RPG Maker MV version 1.6.0:
 *   - Removal of the destructive code in Scene_Item.update function.
 *   - Open Console parameter now occurs after the map's been loaded or after
 *   the battle has started. This is because after the 1.6.0 changes, loading
 *   the console before anything else will lock up other aspects of RPG Maker
 *   from loading properly.
 *
 * Version 1.25:
 * - Updated for RPG Maker MV version 1.5.0.
 * - Updated Scale Title and Scale GameOver to work with 1.5.0.
 *
 * Version 1.24:
 * - Screen jittering prevention is now prevented for RPG Maker MV 1.3.4 and
 * above since Pixi4 handles that now.
 *
 * Version 1.23:
 * - For RPG Maker MV version 1.3.2 and above, the 'Scale Battlebacks' plugin
 * parameter will now recreate the battleback sprites in a different format.
 * This is because battleback scaling with Tiling Sprites is just too volatile.
 * Battleback sprites are now just regular sprites instead of tiling sprites.
 * This may or may not cause plugin incompatibilities with other plugins that
 * alter battlebacks.
 * - For RPG Maker MV version 1.3.4, Game_Actor.meetsUsableItemConditions is
 * now updated to return a check back to the original Game_BattlerBase version
 * to maintain compatibility with other plugins.
 *
 * Version 1.22:
 * - Added 'Show Events Transition' plugin parameter. Enabling this will make
 * events on the map no longer hide themselves while entering battle during the
 * transition.
 * - Added 'Show Events Snapshot' plugin parameter. Enabling this will keep
 * events shown as a part of the battle snapshot when entering battle.
 * - Irregular code in damage formulas, script calls, conditional branches, and
 * variable events will no longer crash the game. Instead, it will force open
 * the console window to display the error only during Test Play.
 *
 * Version 1.21:
 * - Fixed a bug with scaling battlebacks not working properly for Front View.
 * - Optimization update to keep garbage collection across all scenes.
 *
 * Version 1.20:
 * - Altered increasing resolution function.
 * - Added 'Update Real Scale' plugin parameter. This is best left alone for
 * now and to be used if a later update meshes with rendered scaling.
 * - Added memory clear functionality for versions under 1.3.2 to free up more
 * memory upon leaving the map scene.
 * - Added 'Collection Clear' plugin parameter. This option, if left on, will
 * clear the attached children to Scene_Map and Scene_Battle upon switching to
 * a different scene. This will potentially free up memory from various objects
 * added to those scenes from other plugins (depending on how they're added)
 * and serve as a means of reducing memory bloat.
 *
 * Version 1.19:
 * - Updated for RPG Maker MV version 1.3.2.
 * - Fixed 'LearnSkill' function for actors to not be bypassed if a piece of
 * equipment has temporarily added a skill.
 *
 * Version 1.18:
 * - Fixed a bug with scaling battlebacks not working properly for Front View.
 *
 * Version 1.17:
 * - Updated for RPG Maker MV version 1.3.0.
 *
 * Version 1.16:
 * - Fixed a bug with RPG Maker MV's inherent 'drawTextEx' function. By default
 * it calculates the text height and then resets the font settings before
 * drawing the text, which makes the text height inconsistent if it were to
 * match the calculated height settings.
 *
 * Version 1.15:
 * - Window's are now set to have only widths and heights of whole numbers. No
 * longer is it possible for them to have decimal values. This is to reduce any
 * and all clipping issues caused by non-whole numbers.
 *
 * Version 1.14:
 * - Optimization update for RPG Maker MV itself by replacing more memory
 * intensive loops in commonly used functions with more efficient loops.
 *
 * Version 1.13:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.12:
 * - Fixed a bug with a notetag: <Learn at Level: x>. Now, the notetag works
 * with both <Learn at Level: x> and <Learn Level: x>
 *
 * Version 1.11:
 * - Made fixes to the MV Source Code where FaceWidth was using a hard-coded
 * 144 value regardless of what was changed for the Face Width parameter.
 * - Fixed a notetag that wasn't working with the enemy EXP values.
 * - Updated battler repositioning to no longer clash when entering-exiting the
 * scene with Row Formation.
 *
 * Version 1.10:
 * - Removed an MV bugfix that was applied through MV's newes tupdate.
 *
 * Version 1.09:
 * - Changed minimum display width for status drawing to accomodate Party
 * Formation defaults.
 *
 * Version 1.08:
 * - Fixed a bug within the MV Source with changing classes and maintaining
 * levels, even though the feature to maintain the levels has been removed.
 *
 * Version 1.07:
 * - Fixed an issue with the gauges drawing outlines thicker than normal at odd
 * intervals when windows are scaled irregularly.
 *
 * Version 1.06:
 * - Removed event frequency bug fix since it's now included in the source.
 *
 * Version 1.05:
 * - Added 'Scale Game Over' parameter to plugin settings.
 *
 * Version 1.04:
 * - Reworked math for calculating scaled battleback locations.
 * - Fixed a bug where if the party failed to escape from battle, states that
 * would be removed by battle still get removed. *Fixed by Emjenoeg*
 *
 * Version 1.03:
 * - Fixed a strange bug that made scaled battlebacks shift after one battle.
 *
 * Version 1.02:
 * - Fixed a bug that made screen fading on mobile devices work incorrectly.
 * - Added 'Scale Battlebacks' and 'Scale Title' parameters.
 *
 * Version 1.01:
 * - Fixed a bug that where if button sprites had different anchors, they would
 * not be properly clickable. *Fixed by Zalerinian*
 *
 * Version 1.00:
 * - Finished plugin!
 */