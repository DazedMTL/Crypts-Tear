/*
############################################
	作者: COBRA
	改造や配布好き勝手にしても大丈夫だよ
	寧ろ積極的に配布して皆のゲーム開発を快適にしてあげて
	http://cobrara.blogspot.jp/
############################################
*/

// Version 1.1.5
// 2021/8/25 なんかセーブ？this.availablePage.lengthがおかしかったらしい
// 2021/5/20 ページ切り替える時←も→も同じ挙動になってました
// 2020/4/23 \C[0]に対応してませんでした
// 2018/4/26 ロードした際ステータスの変更もロードされるよう修正
// 2017/12/13 最新のバージョン(1.5)でデプロイメントすると1回目だけ画像が表示されない問題を修正
// 2017/8/27 1.1.0 ページの表示・非表示機能を追加しました
// 2017/7/30 1.0.4 最新のコアスクリプト(ver1.2c)にも対応しました
// 2017/5/4 1.0.3 エロステータス画面を開いてる最中NPCが動いてしまう問題を修正しました
// 2017/1/31 1.0.2 changeにおいて最後の項目に｢@@,@_,@=｣が含まれている場合エスケープされない問題を修正しました
// 2017/1/30 1.0.1 ピクチャ名に変数が反映されないバグを修正しました
// 2017/1/24 1.0.0

/*:
* @plugindesc エロステータス作れちゃうプラグイン(本体)
* @author COBRA
* @help Version 1.1.3
* 自由にいじれちゃうエロステータス画面
*
* 画像はimg/picturesにpngで保存してください
*
* 0pxの画像を表示しようとするとバグります
*
*
* 詳しくはこちらで
* http://cobrara.blogspot.jp/2017/01/blog-post_24.html
*
* 横幅：816　縦幅：624



* @param eroStaName
* @desc メニューに表示される名前だよ
* Default: エロステータス
* @default エロステータス
*
*
* @param
*
*
* @param commonEvent
* @desc エロステ画面を開く直前に実行されるコモンイベント、数値
* Default:
* @default
*/

var CBR_eroStatus = [];
var CBR_eroStatusState = {};


//表示するページ変える
Game_System.prototype.CBR_eroSta_page = function (list) {
	this.availablePage = list;
	CBR_eroStatusState.num = this.availablePage;
};


//起動・ロード・ニューゲーム時
var _CBR_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	_CBR_Game_System_initialize.call(this);

	//初期値
	CBR_eroStatus = [];
	CBR_eroStatusState.num = [];
	CBR_eroStatusState.numOrigin = [];
	CBR_eroStatusState.now = null;
	CBR_eroStatusState.name = null;
	CBR_eroStatusState.event = null;

	this.availablePage = [];

	//ページ数取得
	//こっちがあったら

	for (var i = 0, len = $plugins.length; i < len; i++) {
		var temp = $plugins[i].name.match(/^CBR_eroStatus_(\d+)/);//プラグインが存在して
		if (temp) {
			CBR_eroStatusState.numOrigin[CBR_eroStatusState.numOrigin.length] = Number(temp[1]);
			CBR_eroStatusState.num[CBR_eroStatusState.num.length] = Number(temp[1]);
		}
	}



	//変更箇所の保存
	CBR_eroStatusState.numOrigin.sort(function (a, b) { return a - b; });//_nの小さい順に
	this._CBR_eroSta_change_list = [];

	//numOriginに[1,2,4,8]ってページが入ってる

	//numには表示すべき[2,4]だけが入ってる

	//エロステには[obj,obj,obj,obj]とOriginに対応した順番で入ってる



	this._CBR_eroSta_pageList = [];


	var param = PluginManager.parameters('CBR_eroStatus_main');
	CBR_eroStatusState.name = '' + (param['eroStaName'] || 'エロステータス');
	CBR_eroStatusState.event = Number(param['commonEvent']) || null;

	for (var i = 0, len = CBR_eroStatusState.numOrigin.length; i < len; i++) {//ページの数だけ
		var n = CBR_eroStatusState.numOrigin[i];
		var param = PluginManager.parameters('CBR_eroStatus_' + n);
		//nは_n.js　1,2,3
		//iはページの順番　 0,1,2
		//保存する場合は0から99
		CBR_eroStatus[i] = { 'p': [], 't': [] };

		this._CBR_eroSta_change_list[i] = {
			'p': [],
			't': []
		};

		for (var k = 1; k < 100; k++) {
			this.CBR_eroSta_add(
				'p',
				i,
				k - 1,
				param['picName_' + k],
				param['picX_' + k],
				param['picY_' + k],
				param['picOrigin_' + k],
				param['picShow_' + k],
				param['picOpacity_' + k],
				param['picZoom_' + k]
			);
			this.CBR_eroSta_add(
				't',
				i,
				k - 1,
				param['txtSubject_' + k],
				param['txtX_' + k],
				param['txtY_' + k],
				param['txtOrigin_' + k],
				param['txtShow_' + k],
				param['txtAlign_' + k],
				param['txtSize_' + k]
			);
		}
	}

	this._CBR_eroSta_change_list = [];
	for (var i = 0, len = CBR_eroStatusState.numOrigin.length; i < len; i++) {//ページ分だけチェンジリスト作る
		this._CBR_eroSta_change_list[i] = {
			'p': [],
			't': []
		};
	}

};

//セーブデータ読み込み時に実行
var _CBR_Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function () {
	_CBR_Game_System_onAfterLoad.call(this);

	if (this.availablePage && this.availablePage.length) {
		CBR_eroStatusState.num = this.availablePage;
	};

	for (var i = 0, len = CBR_eroStatusState.numOrigin.length; i < len; i++) {//ページ数分繰り返す
		for (var j = 0; j < 2; j++) {
			var ty = (!j) ? 'p' : 't';
			var list = this._CBR_eroSta_change_list[i][ty];//変更したいナンバーリスト
			for (var k = 0, len2 = list.length; k < len2; k++) {
				var koumokuList = list[k].list;
				for (var m = 0, len3 = koumokuList.length; m < len3; m++) {//チェンジする項目数
					if (!CBR_eroStatus[i][ty][list[k].page]) {//その項目のデフォが存在しなかったら作成
						this.CBR_eroSta_add(ty, i);
					}
					CBR_eroStatus[i][ty][list[k].num][koumokuList[m].name] = koumokuList[m].val;
				}

			}
		}
	}
};

Game_System.prototype.CBR_eroSta_getPageIndex = function (num) {//aはaligin or opacity bはzoom
	var ary = CBR_eroStatusState.numOrigin;
	for (var i = 0, len = ary.length; i < len; i++) {
		if (ary[i] == num) {
			return i;
		}
	}
};

Game_System.prototype.CBR_eroSta_add = function (type, page, num, data, x, y, origin, show, a, b) {//aはaligin or opacity bはzoom
	if (type == 'p') {
		CBR_eroStatus[page].p[num] = {
			'name': data,
			'x': this.CBR_eroSta_changeVal('x', x),
			'y': this.CBR_eroSta_changeVal('y', y),
			'origin': origin || 'left',
			'show': (show == 'on'),
			'opacity': this.CBR_eroSta_changeVal('opacity', a),
			'zoom': this.CBR_eroSta_changeVal('zoom', b)
		};
	} else if (type == 't') {
		CBR_eroStatus[page].t[num] = {
			'subject': data,
			'x': this.CBR_eroSta_changeVal('x', x),
			'y': this.CBR_eroSta_changeVal('y', y),
			'origin': origin || 'left',
			'show': (show == 'on'),
			'align': a || 'top',
			'size': this.CBR_eroSta_changeVal('size', b)

		};
	}
};


Game_System.prototype.CBR_eroSta_changeVal = function (name, val) {//チェンジする時 add時　ロード時のチェンジで反映させよう
	switch (name) {
		case 'x':
		case 'y':
			return Number(val) || 0;
			break;
		case 'opacity':
		case 'zoom':
			if (val) {
				return Number(val) / 100;
			} else {
				return 1;
			}
			break;
		case 'show':
			return (val == 'on');
			break;
		case 'size':
			return Number(val) || 28;
			break;
		case 'name':
		case 'subject':
			return val || '';
			break;
		default:
			return val;
			break;
	}
};

Game_System.prototype.CBR_eroSta_change = function (ary) {
	var txt_ary = {
		'fontsize': 'fontSize',
		'vardigit': 'varDigit'
	};

	var checkList = {
		'p': ['name', 'origin', 'x', 'y', 'show', 'opacity', 'zoom'],
		't': ['subject', 'origin', 'x', 'y', 'show', 'align', 'size']
	}

	for (var i = 0, len = ary.length; i < len; i++) {//変更したいpage_type_nの分だけ
		var temp = ary[i].split(/@@|@_|@=|_|=/);
		var temp2 = ary[i].match(/@@|@_|@=|_|=/g);

		var list = [];//aryを分割したものを入れる
		var temp3 = '';
		for (var k = 0, len2 = temp.length; k < len2; k++) {
			if (temp2[k]) {
				if (temp2[k].charAt(0) == '@') {
					temp3 += temp[k] + temp2[k].charAt(1);
				} else {
					list[list.length] = temp3 + temp[k];
					temp3 = '';
				}
			} else {
				list[list.length] = temp3 + temp[k];
			}
		}

		list[0] = Number(list[0]);
		var page = null;
		for (var k = 0, len2 = CBR_eroStatusState.numOrigin.length; k < len2; k++) {//ページ数だけ回す
			if (CBR_eroStatusState.numOrigin[k] == list[0]) {//nと一致したら
				page = k;
			}
		}
		var type = list[1];
		var n = Number(list[2]) - 1;

		//しつこい気もするけどエロステータス開く時の軽さを最優先で
		var obj = this._CBR_eroSta_change_list[page][type];

		var objNum = false;
		for (var k = 0, len2 = obj.length; k < len2; k++) {//このページのchange数
			if (n == obj[k].num) {//nとチェンジしたい番号が一緒だったら
				objNum = k;
				break;
			}
		}
		if (objNum === false) {
			objNum = len2;
			obj[objNum] = {
				'num': n,
				'list': []
			};
		}

		//変更したいパラメータ数だけ回す
		var chaList = obj[objNum].list;
		for (var k = 3, len2 = list.length; k + 1 < len2; k += 2) {
			var listNum = false;
			for (var m = 0, len3 = chaList.length; m < len3; m++) {//既に存在するチェンジ数
				if (list[k] == chaList[m].name) {//一致する箇所があるかどうか
					listNum = m;
					break;
				}
			}
			if (listNum === false) {//無かったら
				listNum = len3;
				for (var m = 0, len3 = checkList[type].length; m < len3; m++) {//ちゃんと項目通りかチェック
					if (list[k] == checkList[type][m]) {
						break;
					} else if ((m + 1) == len3) {//もし無かったら
						alert('ERROR:CBR_eroSta_change引数');
					}
				}
			}
			list[k + 1] = this.CBR_eroSta_changeVal(list[k], list[k + 1]);
			chaList[listNum] = {
				'name': list[k],
				'val': list[k + 1]
			};
			CBR_eroStatus[page][type][n][list[k]] = list[k + 1];
		}
	}
};



//########### Scene ###########
function Scene_EroStatus() {
	this.initialize.apply(this, arguments);
}
Scene_EroStatus.prototype = Object.create(Scene_MenuBase.prototype);
Scene_EroStatus.prototype.constructor = Scene_EroStatus;

Scene_EroStatus.prototype.initialize = function () {
	Scene_MenuBase.prototype.initialize.call(this);
};
Scene_EroStatus.prototype.create = function () {
	Scene_MenuBase.prototype.create.call(this);
	if (CBR_eroStatusState.event) {
		$gameTemp.reserveCommonEvent(CBR_eroStatusState.event);

	}
	this._eroStatusWindow = new Window_EroStatus();
	this._eroStatusWindow.setHandler('cancel', this.popScene.bind(this));

	this._eroStatusWindow._margin = 0;//背景ピッチリする為
	this._eroStatusWindow.margin = 0;//本当はこっちだけどね
	this._eroStatusWindow._windowFrameSprite.visible = false;//枠線を消す

	this.addWindow(this._eroStatusWindow);
};

Scene_EroStatus.prototype.update = function () {

	$gameMap.refreshIfNeeded();
	if (this.isActive()) {
		$gameMap.updateInterpreter();
	}
	$gameMap.updateVehicles();

	Scene_Base.prototype.update.call(this);
};

//########### window ###########
function Window_EroStatus() {
	this.initialize.apply(this, arguments);
}

Window_EroStatus.prototype = Object.create(Window_Selectable.prototype);
Window_EroStatus.prototype.constructor = Window_EroStatus;

Window_EroStatus.prototype.initialize = function () {//windowを作る
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight;
	Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
	CBR_eroStatusState.now = 0;
	this._CBR_complete = false;
};

Window_EroStatus.prototype.CBR_complete = function () {//描写終わったかどうか
	return this._CBR_complete;
};

Window_EroStatus.prototype.update = function () {//毎回image描写してもいいけどそれだと負荷が多くなるのでこの方法で
	Window_Selectable.prototype.update.call(this);

	if (1 < CBR_eroStatusState.num.length && this.isOpenAndActive()) {//操作があった時
		if (Input.isRepeated('right')) {
			SoundManager.playCursor(2);//音楽鳴らす
			CBR_eroStatusState.now = ((CBR_eroStatusState.now + 1) < CBR_eroStatusState.num.length) ? CBR_eroStatusState.now + 1 : 0;
			this._CBR_complete = false;//初期化
			//this._statusWindow.refresh();//切り替えしたんでリフレッシュ
		} else if (Input.isRepeated('left')) {
			SoundManager.playCursor(2);//音楽鳴らす
			CBR_eroStatusState.now = ((CBR_eroStatusState.now) < 1) ? CBR_eroStatusState.num.length - 1 : CBR_eroStatusState.now - 1;
			this._CBR_complete = false;//初期化
		}
	}

	var page = $gameSystem.CBR_eroSta_getPageIndex(CBR_eroStatusState.num[CBR_eroStatusState.now]);

	if (!this.CBR_complete()) {//まだ画像の描写してないのなら
		var flag = false;
		var ary = CBR_eroStatus[page].p;
		var p_data = [];
		//ピクチャの数だけ
		for (var i = 0, len = ary.length; i < len; i++) {
			var name = ary[i].name;
			if (!name || !ary[i].show) {
				continue;
			}
			name = name.replace(/\\(\\)|\\([VNP])\[(\d+)\]|\\(<)(.+)\\>/g, function (a, b, c, d, e, f) {//汚いけどこれは毎回やらないとね
				if (b) {//\\
					return '\\';
				} else if (c) {//[VNP]
					d = Number(d);
					switch (c) {
						case 'V':
							return $gameVariables.value(d);
							break;
						case 'N':
							return $gameActors._data[d]._name;
							break;
						case 'P':
							return $dataActors[$gameParty._actors[d - 1]].name;
							break;
					}
				} else {//script
					return eval(f);
				}
			});

			if (ary[i].var) {//変数があったら入れる
				var v = '' + $gameVariables.value(ary[i].var);
				if (ary[i].varDigit) {//2ケタの時は2まで
					if (v.length >= ary[i].varDigit) {
						name += v.substr(-1 * ary[i].varDigit, 1);
					} else {
						name = false;
					}
				} else {
					name += v;
				}
			}
			if (name) {
				var temp = ImageManager.loadPicture(name);//初回読み込み
				if (temp) {
					//if(temp._isLoading || temp._loadingState == 'requesting'){//前者は古いver用 ロード中ならアウト
					if (!temp.width) {//前者は古いver用 ロード中ならアウト
						flag = true;
						break;
					}
				} else {//その名前の画像が無かったら
					flag = true;
					this._CBR_complete = true;
					break;
				}
				p_data[i] = {
					'w': temp.width,
					'h': temp.height,
				}
			}
		}

		if (!flag) {//全ロードが終わってたら
			this.contents.clear();

			//ピクチャの表示
			var ary = CBR_eroStatus[page].p;
			for (var i = 0, len = ary.length; i < len; i++) {
				var name = ary[i].name;
				if (!name || !ary[i].show) {
					continue;
				}

				//変数とか文字化
				name = name.replace(/\\(\\)|\\([VNP])\[(\d+)\]|\\(<)(.+)\\>/g, function (a, b, c, d, e, f) {
					if (b) {//\\
						return '\\';
					} else if (c) {//[VNP]
						d = Number(d);
						switch (c) {
							case 'V':
								return $gameVariables.value(d);
								break;
							case 'N':
								return $gameActors._data[d]._name;
								break;
							case 'P':
								return $dataActors[$gameParty._actors[d - 1]].name;
								break;
						}
					} else {//script
						return eval(f);
					}
				});

				if (name) {
					this.changePaintOpacity(ary[i].opacity);

					var x = ary[i].x;
					var y = ary[i].y;
					if (ary[i].origin == 'center') {
						x -= p_data[i].w * ary[i].zoom / 2;
						y -= p_data[i].h * ary[i].zoom / 2;
					}
					this.drawPicture('pictures', name, 0, 0, x, y, 0, 0, ary[i].zoom, 0);
				}
			}

			//テキストの表示
			this.resetTextColor();
			var ary = CBR_eroStatus[page].t;
			for (var i = 0, len = ary.length; i < len; i++) {
				var size = ary[i].size;// ary[i].fontSize;
				var temp = ary[i].subject;
				if (!temp || !ary[i].show) {
					continue;
				}

				var opAry = temp.match(/(\\\{|\\\}|\\[CI]\[\d+\])+/g);

				//先頭にある場合は"","tesa"になる
				var strAry = temp.split(/(?:\\\{|\\\}|\\[CI]\[\d+\])+/);

				var str = '';
				var allW = 0;
				var maxSize = null;
				var dataFAry = [];
				var dataWAry = [];
				var drawI = [];
				var drawC = [];
				//分割した配列の数
				for (var k = 0, len2 = strAry.length; k < len2; k++) {

					//前方にある\{のフォントサイズを入れる
					dataFAry[k] = k ? dataFAry[k - 1] : 0;
					drawI[k] = [];

					//変数とか文字化
					strAry[k] = strAry[k].replace(/\\(\\)|\\([VNP])\[(\d+)\]|\\(G)|\\(<)(.+)\\>/g, function (a, b, c, d, e, f, g) {
						if (b) {//\\
							return '\\';
						} else if (c) {//[VNP]
							d = Number(d);
							switch (c) {
								case 'V':
									return $gameVariables.value(d);
									break;
								case 'N':
									return $gameActors._data[d]._name;
									break;
								case 'P':
									return $dataActors[$gameParty._actors[d - 1]].name;
									break;
							}
						} else if (e) {//G
							return $dataSystem.currencyUnit;
						} else {//script
							return eval(g);
						}
					});

					//自身の前に区切りマッチがあったら
					if (0 < k) {
						var temp = opAry[k - 1].split('\\');//\\{\\}を分割する
						for (var m = 1, len3 = temp.length; m < len3; m++) {

							switch (temp[m].charAt(0)) {
								case '{':
									dataFAry[k] += 6;
									break;
								case '}':
									dataFAry[k] -= 6;
									break;
								case 'C':
									drawC[k] = Number(temp[m].match(/\[(\d+)\]/)[1]);//Cは複数あっても最後のが適応されれば良いわけで
									break;
								case 'I':
									drawI[k][drawI[k].length] = Number(temp[m].match(/\[(\d+)\]/)[1]);
									break;
							}
						}
					}
					this.contents.fontSize = size + dataFAry[k];
					this.contents.context.font = this.contents._makeFontNameText();
					dataWAry[k] = this.contents.context.measureText(strAry[k]).width;//何の為に+4するのか忘れた
					allW += dataWAry[k];

					if (strAry[k]) {//先頭に\{や変数がある時の問題　アイコン乃場合もここを通さないと
						if (maxSize === null) {//まだ記録されてなかったら入れよう
							maxSize = dataFAry[k];
						} else {
							maxSize = (maxSize < dataFAry[k]) ? dataFAry[k] : maxSize;
						}
					}
				}

				var x = ary[i].x;
				if (ary[i].origin == 'center') {
					x -= allW / 2;
				} else if (ary[i].origin == 'right') {
					x -= allW;
				}
				for (var k = 0, len2 = strAry.length; k < len2; k++) {
					this.contents.fontSize = size + dataFAry[k];
					this.contents.context.font = this.contents._makeFontNameText();
					//bottom→下揃え原点の上　top→上揃え原点の下　center→原点
					var line = ary[i].y;
					var iconLine = ary[i].y;
					if (ary[i].align == 'top') {
						line += (size + dataFAry[k]) / 2;
					} else if (ary[i].align == 'bottom') {
						line -= (size + dataFAry[k]) / 2;
						iconLine -= Window_Base._iconWidth;
					} else {
						iconLine -= Window_Base._iconWidth / 2;
					}
					if (drawI[k].length) {
						for (var m = 0, len3 = drawI[k].length; m < len3; m++) {
							this.drawIcon(drawI[k][m], x, iconLine);
							x += Window_Base._iconWidth;
						}
					}
					if (drawC[k] || drawC[k] === 0) {
						this.changeTextColor(this.textColor(drawC[k]));
					}
					this.contents.drawText(strAry[k], x, line, dataWAry[k], 0, 'left');
					x += dataWAry[k];
				}
				this.contents.fontSize = this.standardFontSize();
			}
			this.resetTextColor();
			this.changePaintOpacity(true);

			this.activate();
			this._CBR_complete = true;
		}
	}
};

Window_EroStatus.prototype.drawPicture = function (dir, filename, sx, sy, x, y, w, h, zoom, hue) {
	var bitmap = ImageManager.loadBitmap('img/' + dir + '/', filename, hue, true);
	this.contents.blt(bitmap, sx, sy, bitmap.width, bitmap.height, x, y, bitmap.width * zoom, bitmap.height * zoom);
};
Window_EroStatus.prototype.standardPadding = function () {
	return 0;
};
Window_Status.prototype.lineColor = function () {
	return this.normalColor();
};
Window_Status.prototype.maxEquipmentLines = function () {
	return 6;
};

//#########　コマンドの追加　##########
Scene_Menu.prototype.commandEroSta = function () {
	SceneManager.push(Scene_EroStatus);
};
setTimeout(function () {
	var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function () {
		_Scene_Menu_createCommandWindow.call(this);
		this._commandWindow.setHandler('eroStatus', this.commandEroSta.bind(this));
	};
}, 0);
_Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function () {
	_Window_MenuCommand_addOriginalCommands.call(this);
	this.addCommand(CBR_eroStatusState.name, 'eroStatus', true);
};
