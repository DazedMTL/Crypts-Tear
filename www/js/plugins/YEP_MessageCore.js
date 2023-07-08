/*:ja

@plugindesc v1.19 文章の表示方法や機能を変更できます。
@author Yanfly Engine Plugins
@param ---一般---
@text ---一般---
@default
@param Default Rows
@parent ---一般---
@type number
@min 0
@text 文章ウィンドウの行数
@desc デフォルト:4
@default 4
@param Default Width
@parent ---一般---
@text 文章ウィンドウの幅
@desc ピクセル数。デフォルト:Graphics.boxWidth
@default Graphics.boxWidth
@param Face Indent
@parent ---一般---
@text 顔画像使用時のインデント値
@desc デフォルト:Window_Base._faceWidth + 24
@default Window_Base._faceWidth + 24
@param Fast Forward Key
@parent ---一般---
@text 早送りキー
@default pagedown
@param Enable Fast Forward
@parent ---一般---
@type boolean
@on 有効
@off 無効
@text 早送りキー有効化
@desc 無効:false / 有効:true
@default true
@param Word Wrapping
@parent ---一般---
@type boolean
@on 有効
@off 無効
@text ワードラップ有効化(2バイト文字は非機能)
@desc 無効:false / 有効:true
@default false
@param Description Wrap
@parent ---一般---
@type boolean
@on 有効
@off 無効
@text 詳細欄のワードラップ有効化(2バイト文字は非機能)
@desc 無効:false / 有効:true
@default false
@param Word Wrap Space
@parent ---一般---
@type boolean
@on 有効
@off 無効
@text 手動改行を有効化
@desc 無効:false / 有効:true
@default false
@param Tight Wrap
@parent ---一般---
@type boolean
@on 有効
@off 無効
@text 顔画像使用時にタイトラップ
@desc 無効:false / 有効:true
@default false
@param ---フォント---
@text ---フォント---
@default
@param Font Name
@parent ---フォント---
@text 文章ウィンドウのフォント
@desc デフォルト:GameFont
@default GameFont
@param Font Name CH
@parent ---フォント---
@text 中国語のデフォルトフォント
@desc デフォルト:SimHei, Heiti TC, sans-serif
@default SimHei, Heiti TC, sans-serif
@param Font Name KR
@parent ---フォント---
@text 韓国語のデフォルトフォント
@desc デフォルト:Dotum, AppleGothic, sans-serif
@default Dotum, AppleGothic, sans-serif
@param Font Size
@parent ---フォント---
@type number
@min 1
@text 文章ウィンドウのフォントサイズ
@desc デフォルト:28
@default 28
@param Font Size Change
@parent ---フォント---
@type number
@min 1
@text サイズ変更
@desc { と } が使われた際、このフォントサイズを適用。デフォルト:12
@default 12
@param Font Changed Max
@parent ---フォント---
@type number
@min 1
@text 最大フォントサイズ
@desc { による最大サイズ。デフォルト:96
@default 96
@param Font Changed Min
@parent ---フォント---
@type number
@min 1
@text 最小フォントサイズ
@desc { による最小サイズ。デフォルト:12
@default 12
@param Font Outline
@parent ---フォント---
@type number
@min 0
@text アウトライン幅
@desc デフォルト:4
@default 4
@param Maintain Font
@parent ---フォント---
@type boolean
@on 維持
@off 非維持
@text フォント維持
@desc フォント名/サイズを変更時、次の文章で維持
非維持:false / 維持:true
@default false
@param ---名前ボックス---
@text ---名前ボックス---
@default
@param Name Box Buffer X
@parent ---名前ボックス---
@type number
@min -9007
@max 9007
@text X軸位置
@default -28
@param Name Box Buffer Y
@parent ---名前ボックス---
@type number
@min -9007
@max 9007
@text Y軸位置
@default 0
@param Name Box Padding
@parent ---名前ボックス---
@text ボックス幅
@default this.standardPadding() * 4
@param Name Box Color
@parent ---名前ボックス---
@type number
@min 0
@max 31
@text テキスト色
@default 0
@param Name Box Clear
@parent ---名前ボックス---
@type boolean
@on 透明化
@off 通常
@text 透明化
@desc 通常:false / 透明化:true
@default false
@param Name Box Added Text
@parent ---名前ボックス---
@text 追加テキスト
@desc 名前ボックスに自動的に追加されるテキスト。自動的にカラー設定をしたい場合などに使われます。
@default \c[6]
@param Name Box Auto Close
@parent ---名前ボックス---
@type boolean
@on 閉じる
@off 閉じない
@text 自動クローズ
@desc 名前ボックスに別の名前が表示される時、文章ウィンドウを閉じる。閉じる:true / 閉じない:false
@default false
@help
翻訳:ムノクラ
https://fungamemake.com/
https://twitter.com/munokura/
===========================================================================
導入
===========================================================================
RPGツクールMVでは文章システムが強化されましたが、
このプラグインを使えば、更にアイテム・武器・防具・衣装の名前や、
アイコンの制御文字の変換を容易に行なうことができます。
またこのスクリプトでは、ゲーム中に文章ウィンドウのサイズを最適化したり
セパレートフォントや、テキストの早送り機能を提供します。
===========================================================================
ワードラップ
===========================================================================
※ワードラップ機能は2バイト文字では動作しません。
ワードラップ機能は、文章システム上で使うことができます。
プラグインコマンドを用いて、有効/無効の切り替えを行ってください。
ワードラップを使うことで、文章ウィンドウ外へはみ出た文章を、
自動的に次の行に折り返します。この際、エディターの改行入力は無効化され、
プラグインによる改行が優先されます。

もしくは
新しい行を始めたい部分の前、もしくは後にこのコードを入力してください。
ワードラップ機能は、文章ウィンドウ向けの機能ですが、
アイテム詳細など、それ以外の部分にもこの機能を用いたい場合、
そのテキストの先頭にと挿入すれば、利用することができます。
===========================================================================
制御文字
===========================================================================
文章に特定の制御文字を使用し、
次のコードに置き換えることができます。
Text Code Function
\V[n] n 番目の変数の値と置き換えられます。
\N[n] n 番目のアクター名と置き換えられます。
\P[n] n 番目のパーティメンバー名と置き換えられます。
\G 所持金と置き換えられます。
\C[n] 続くテキストを、n 番目のカラーで表示します。
\I[n] n 番目のアイコンを表示します。
{ テキストサイズを一段階大きくします。
} テキストサイズを一段階小さくします。
\ \のキャラクターと置き換えられます。
$ 所持金ウィンドウを開きます。
. 1/4 秒の間をあけます。
| 1 秒の間をあけます。
! ボタンインプットを待ちます。
> 同じラインの残りのテキストを一気に表示します。
< 上記のエフェクトをキャンセルします。
^ テキスト表示後にインプットを待たなくなります。
Wait: Effect:
\w[x] - x フレーム分の間をあけます (60フレーム = 1秒)
            文章ウィンドウ限定の機能です。
NameWindow: Effect:
\n - 左揃えで x の文字列で名前ボックスを作成します。 *注
\nc - 中央揃えで x の文字列で名前ボックスを作成します。 *注
\nr - 右揃えで x の文字列で名前ボックスを作成します。 *注
         *注:文章ウィンドウのみに有効
Line Break Effect:

- ワードラップモードで改行を行います。
Position: Effect:
\px[x] - テキストのx方向の位置を指定
\py[x] - テキストのy方向の位置を指定
Outline: Effect:
\oc[x] - アウトラインの色を x にします。
\ow[x] - アウトラインの幅を x にします。
Font: Effect:
\fr - 全てのフォント変更をリセットします。
\fs[x] - フォントサイズを x に変更します。
\fn - フォント名を x に変更します。
\fb - ボールド設定を切り替えます。
\fi - イタリック設定を切り替えます。
Actor: Effect:
\af[x] - アクター x の顔を表示します。(注)
\ac[x] - アクターの職業名を表示します。
\an[x] - アクターのニックネームを表示します。
         *注:文章ウィンドウのみで有効
Party: Effect:
\pf[x] - パーティメンバー x の顔を表示します。*注
\pc[x] - パーティメンバー x の職業名を表示します。
\pn[x] - パーティメンバー x のニックネームを表示します。
         *注:文章ウィンドウのみで有効
Names: Effect:
\nc[x] - 職業 x の名前を表示します。
\ni[x] - アイテム x の名前を表示します。
\nw[x] - 武器 x の名前を表示します。
\na[x] - 防具 x の名前を表示します。
\ns[x] - スキル x の名前を表示します。
\nt[x] - ステート x の名前を表示します。
Icon Names: Effect:
\nc[x] - 職業 x の名前を表示します。
\ni[x] - アイテム x の名前を表示します。
\nw[x] - 武器 x の名前を表示します。
\na[x] - 防具 x の名前を表示します。
\ns[x] - スキル x の名前を表示します。
\nt[x] - ステート x の名前を表示します。
これらはスクリプトと共に加えられた制御文字です。これらのコードは、
文章ウィンドウにのみ働くものであることに気を付けてください。
またそれ以外にも、ヘルプの詳細、アクタープロフィールなどにも有効です。
===========================================================================
プラグインコマンド
===========================================================================
イベントエディタを通して下記のプラグインコマンドを用いることで、文章
システムの様々な要素を変更することができます。
プラグインコマンド
MessageRows 6
表示される文章の列を6にします。
もし［文章の表示］を継続的に使っている場合、
行の上限に到達するまで、
あとに続く文章を表示し続けます。
それ以降の文章については、
重複回避のためにカットされます。
MessageWidth 400
文章ウィンドウの幅を400ピクセルに変更します。
右側に寄りすぎている文字は、
適宜カットされ調整が行われます。
EnableWordWrap
ワードラップを有効にします。
文がウィンドウサイズを超えてしまった時に、自動的に次の行に進みます。
改行する際は '\br'を挿入してください。
DisableWordWrap
ワードラップを無効にします。
エディタ内で新しい文が始まった地点で、自動的に改行されます。
EnableFastForward
文章内の早送りキーを有効にします。
DisableFastForward
文章内の早送りキーを無効にします。
===========================================================================
Changelog
===========================================================================
Version 1.19:
Updated for RPG Maker MV version 1.5.0.
Version 1.18:
Added new plugin parameters: 'Font Name CH' and 'Font Name KR'.
Version 1.17:
Compatibility update with Message Macros for 'Name Box Auto Close'
option.
Version 1.16:
Added 'Tight Wrap' plugin parameter as a word wrap option to make the
word wrap tighter when using faces.
Version 1.15:
Added a failsafe where if the name box window would be off the screen, it
will automatically reposition itself to under the main message window.
Version 1.14:
Added 'Name Box Close' plugin parameter. If this is enabled, the message
window will check for the Name Window speaker each time a follow up message
occurs. If the name in the currently Name Window matches the name in the
following Name Window, the message window will remain open. If it doesn't,
the Name Window will close and reopen to indicate a new speaker.
Version 1.13:
Added 'Maintain Font' plugin parameter under the Font category. This will
allow you to use text codes \fn and \fs[x] to permanently change the
font of your messages until you use it again. \fr will reset them to the
plugin's default parameter settings.
Version 1.12:
'Word Wrap Space' parameter no longer leaves a space at the beginning of
each message.
Version 1.11:
Added 'Font Outline' parameter for the plugin parameters. This adjusts
the font outline width used by default for only message fonts.
Version 1.10:
Updated the Message Row system for Extended Message Pack 1's Autosizing
feature to work with extended heights.
Version 1.09:
Replaced 'Fast Forward' parameter with the 'Fast Forward Key' parameter
and 'Enable Fast Forward' parameter. Two new Plugin Commands are added.
They are 'EnableFastForward' and 'DisableFastForward' for control over when
fast forwarding is allowed as to not cause timed cutscenes to desynch.
Version 1.08:
Fixed a bug regarding Input Number positioning when the Message Window's
position was middle.
Version 1.07:
Added 'Word Wrap Space' for word wrap users. This parameter will leave a
space behind for those who want a space left behind.
Version 1.06:
Fixed a bug that would cause masking problems with mobile devices.
Version 1.05:
Fixed a bug that would cause the namebox window to appear distorted.
Version 1.04:
Fixed a bug that captured too many text codes with the namebox window.
Timed Name Window's closing speed with main window's closing speed.
Verison 1.03:
Fixed a bug with textcodes that messed up wordwrapping.
Fixed a bug with font reset, italic, and bold textcodes.
Version 1.02:
Namebox Window's overlap feature that's in every MV window is now
disabled to allow for overlapping with main message window.
Updated window positioning for Branch Choices, Number Input, and Item
Selection windows.
Version 1.01:
Added 'Description Wrap' into the parameters to allow for all item
descriptions to be automatically processed with word wrapping.
Version 1.00:
Finished plugin! */