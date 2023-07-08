//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 諠��ｱ陦ｨ遉ｺ繧ｦ繧｣繝ｳ繝峨え繧偵Γ繝九Η繝ｼ逕ｻ髱｢縺ｫ霑ｽ蜉�縺吶ｋ繝励Λ繧ｰ繧､繝ｳ
 * @author Me
 *
 * @help 諠��ｱ陦ｨ遉ｺ繧ｦ繧｣繝ｳ繝峨え繧偵Γ繝九Η繝ｼ逕ｻ髱｢荳翫↓霑ｽ蜉�縺励∪縺吶�
 *
 */

(function () {

	// 繝槭ャ繝嶺ｸ翫↓繧ｦ繧｣繝ｳ繝峨え陦ｨ遉ｺ縺吶ｋ繧亥ｮ｣險
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function () {
		Scene_map_start.call(this);
		this._InfoWindow = new Window_Info();
		this.addWindow(this._InfoWindow);
	};
	var _Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function () {
		_Scene_Map_update.call(this);
		this._InfoWindow.setText();
	};

	// 縺薙％縺九ｉ繝｡繝九Η繝ｼ繧ｦ繧｣繝ｳ繝峨え菴懊ｊ蟋九∪繧翫∪縺吶�
	function Window_Info() {
		this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function () {
		var x = 20;
		var y = 20;
		var width = 180;
		var height = 108;
		Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function (str) {
		this._text = str;
		this.refresh();
	};

	// 繧ｦ繧｣繝ｳ繝峨え縺ｫ霈峨○繧句�螳ｹ
	Window_Info.prototype.refresh = function () {
		this.contents.clear();
		this.changeTextColor(this.textColor(16));
		this.drawIcon(210, 1, 1);
		this.drawText("諡ｾ縺｣縺溷ｮ晉ｮｱ", 40, 1);
		this.resetTextColor();
		this.drawText($gameVariables.value(2) + " 蛟�", 0, this.lineHeight());
	};

	// 繝輔か繝ｳ繝医し繧､繧ｺ
	Window_Info.prototype.standardFontSize = function () {
		return 20;
	};
	// 繧ｦ繧｣繝ｳ繝峨え縺ｮ騾乗�蠎ｦ
	Window_Info.prototype.standardBackOpacity = function () {
		return 255;
	};
	// 繧ｦ繧｣繝ｳ繝峨え縺ｮ菴咏區
	Window_Info.prototype.standardPadding = function () {
		return 18;
	};
	// 繧ｦ繧｣繝ｳ繝峨え縺ｮ濶ｲ隱ｿ
	Window_Info.prototype.updateTone = function () {
		this.setTone(64, 0, 128);
	};

})();