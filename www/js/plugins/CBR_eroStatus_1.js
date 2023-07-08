/*
############################################
	作者: COBRA
	改造や配布好き勝手にしても大丈夫だよ
	寧ろ積極的に配布して皆のゲーム開発を快適にしてあげて
	http://cobrara.blogspot.jp/
############################################
*/

// Version 1.0.0
// 2017/1/24 1.0.0

/*:
* @plugindesc エロステータス作れちゃうプラグイン(追加用)
* @author COBRA
* @help Version 1.0.0
* 自由にいじれちゃうエロステータス画面
* の付属品
* 詳しくはこちらで
* http://cobrara.blogspot.jp/2017/01/blog-post_24.html


*
* @param #### ピクチャ1 ####
*
* @param picName_1
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_1
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_1
* @desc ピクチャのX座標
* @default 0
*
* @param picY_1
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_1
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_1
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_1
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ2 ####
*
* @param picName_2
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_2
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_2
* @desc ピクチャのX座標
* @default 0
*
* @param picY_2
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_2
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_2
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_2
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ3 ####
*
* @param picName_3
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_3
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_3
* @desc ピクチャのX座標
* @default 0
*
* @param picY_3
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_3
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_3
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_3
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ4 ####
*
* @param picName_4
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_4
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_4
* @desc ピクチャのX座標
* @default 0
*
* @param picY_4
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_4
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_4
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_4
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ5 ####
*
* @param picName_5
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_5
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_5
* @desc ピクチャのX座標
* @default 0
*
* @param picY_5
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_5
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_5
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_5
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ6 ####
*
* @param picName_6
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_6
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_6
* @desc ピクチャのX座標
* @default 0
*
* @param picY_6
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_6
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_6
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_6
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ7 ####
*
* @param picName_7
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_7
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_7
* @desc ピクチャのX座標
* @default 0
*
* @param picY_7
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_7
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_7
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_7
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ8 ####
*
* @param picName_8
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_8
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_8
* @desc ピクチャのX座標
* @default 0
*
* @param picY_8
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_8
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_8
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_8
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ9 ####
*
* @param picName_9
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_9
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_9
* @desc ピクチャのX座標
* @default 0
*
* @param picY_9
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_9
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_9
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_9
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ10 ####
*
* @param picName_10
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_10
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_10
* @desc ピクチャのX座標
* @default 0
*
* @param picY_10
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_10
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_10
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_10
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ11 ####
*
* @param picName_11
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_11
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_11
* @desc ピクチャのX座標
* @default 0
*
* @param picY_11
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_11
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_11
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_11
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ12 ####
*
* @param picName_12
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_12
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_12
* @desc ピクチャのX座標
* @default 0
*
* @param picY_12
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_12
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_12
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_12
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ13 ####
*
* @param picName_13
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_13
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_13
* @desc ピクチャのX座標
* @default 0
*
* @param picY_13
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_13
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_13
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_13
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ14 ####
*
* @param picName_14
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_14
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_14
* @desc ピクチャのX座標
* @default 0
*
* @param picY_14
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_14
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_14
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_14
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ15 ####
*
* @param picName_15
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_15
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_15
* @desc ピクチャのX座標
* @default 0
*
* @param picY_15
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_15
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_15
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_15
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ16 ####
*
* @param picName_16
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_16
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_16
* @desc ピクチャのX座標
* @default 0
*
* @param picY_16
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_16
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_16
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_16
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ17 ####
*
* @param picName_17
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_17
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_17
* @desc ピクチャのX座標
* @default 0
*
* @param picY_17
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_17
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_17
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_17
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ18 ####
*
* @param picName_18
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_18
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_18
* @desc ピクチャのX座標
* @default 0
*
* @param picY_18
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_18
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_18
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_18
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ19 ####
*
* @param picName_19
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_19
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_19
* @desc ピクチャのX座標
* @default 0
*
* @param picY_19
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_19
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_19
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_19
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ20 ####
*
* @param picName_20
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_20
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_20
* @desc ピクチャのX座標
* @default 0
*
* @param picY_20
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_20

* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_20
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_20
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ21 ####
*
* @param picName_21
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_21
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_21
* @desc ピクチャのX座標
* @default 0
*
* @param picY_21
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_21
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_21
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_21
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ22 ####
*
* @param picName_22
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_22
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_22
* @desc ピクチャのX座標
* @default 0
*
* @param picY_22
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_22
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_22
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_22
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ23 ####
*
* @param picName_23
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_23
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_23
* @desc ピクチャのX座標
* @default 0
*
* @param picY_23
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_23
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_23
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_23
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ24 ####
*
* @param picName_24
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_24
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_24
* @desc ピクチャのX座標
* @default 0
*
* @param picY_24
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_24
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_24
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_24
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ25 ####
*
* @param picName_25
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_25
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_25
* @desc ピクチャのX座標
* @default 0
*
* @param picY_25
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_25
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_25
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_25
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ26 ####
*
* @param picName_26
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_26
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_26
* @desc ピクチャのX座標
* @default 0
*
* @param picY_26
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_26
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_26
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_26
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ27 ####
*
* @param picName_27

* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_27
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_27
* @desc ピクチャのX座標
* @default 0
*
* @param picY_27
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_27
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_27
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_27
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ28 ####
*
* @param picName_28
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_28
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_28
* @desc ピクチャのX座標
* @default 0
*
* @param picY_28
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_28
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_28
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_28
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ29 ####
*
* @param picName_29
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_29
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_29
* @desc ピクチャのX座標
* @default 0
*
* @param picY_29
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_29
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_29
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_29
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ30 ####
*
* @param picName_30
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_30
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_30
* @desc ピクチャのX座標
* @default 0
*
* @param picY_30
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_30
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_30
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_30
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ31 ####
*
* @param picName_31
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_31
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_31
* @desc ピクチャのX座標
* @default 0
*
* @param picY_31
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_31
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_31
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_31
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ32 ####
*
* @param picName_32
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_32
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_32
* @desc ピクチャのX座標
* @default 0
*
* @param picY_32
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_32
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_32
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_32
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ33 ####
*
* @param picName_33
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_33
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_33
* @desc ピクチャのX座標
* @default 0
*
* @param picY_33
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_33
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_33
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_33
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ34 ####
*
* @param picName_34
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_34
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_34
* @desc ピクチャのX座標
* @default 0
*
* @param picY_34
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_34
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_34
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_34
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ35 ####
*
* @param picName_35
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_35
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_35
* @desc ピクチャのX座標
* @default 0
*
* @param picY_35
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_35
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_35
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_35
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ36 ####
*
* @param picName_36
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_36
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_36
* @desc ピクチャのX座標
* @default 0
*
* @param picY_36
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_36
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_36
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_36
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ37 ####
*
* @param picName_37
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_37
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_37
* @desc ピクチャのX座標
* @default 0
*
* @param picY_37
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_37
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_37
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_37
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ38 ####
*
* @param picName_38
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_38
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_38
* @desc ピクチャのX座標
* @default 0
*
* @param picY_38
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_38
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_38
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_38
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ39 ####
*
* @param picName_39
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_39
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_39
* @desc ピクチャのX座標
* @default 0
*
* @param picY_39
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_39
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_39
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_39
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ40 ####
*
* @param picName_40
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_40
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_40
* @desc ピクチャのX座標
* @default 0
*
* @param picY_40
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_40
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_40
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_40
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ41 ####
*
* @param picName_41
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_41
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_41
* @desc ピクチャのX座標
* @default 0
*
* @param picY_41
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_41
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_41
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_41
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ42 ####
*
* @param picName_42
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_42
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_42
* @desc ピクチャのX座標
* @default 0
*
* @param picY_42
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_42
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_42
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_42
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ43 ####
*
* @param picName_43
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_43
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_43
* @desc ピクチャのX座標
* @default 0
*
* @param picY_43
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_43
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_43
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_43
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ44 ####
*
* @param picName_44
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_44
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_44
* @desc ピクチャのX座標
* @default 0
*
* @param picY_44
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_44
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_44
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_44
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ45 ####
*
* @param picName_45
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_45
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_45
* @desc ピクチャのX座標
* @default 0
*
* @param picY_45
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_45
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_45
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_45
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ46 ####
*
* @param picName_46
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_46
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_46
* @desc ピクチャのX座標
* @default 0
*
* @param picY_46
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_46
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_46
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_46
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ47 ####
*
* @param picName_47
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_47
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_47
* @desc ピクチャのX座標
* @default 0
*
* @param picY_47
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_47
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_47
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_47
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ48 ####
*
* @param picName_48
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_48
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_48
* @desc ピクチャのX座標
* @default 0
*
* @param picY_48
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_48
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_48
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_48
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ49 ####
*
* @param picName_49
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_49
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_49
* @desc ピクチャのX座標
* @default 0
*
* @param picY_49
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_49
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_49
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_49
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ50 ####
*
* @param picName_50
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_50
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_50
* @desc ピクチャのX座標
* @default 0
*
* @param picY_50
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_50
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_50
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_50
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ51 ####
*
* @param picName_51
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_51
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_51
* @desc ピクチャのX座標
* @default 0
*
* @param picY_51
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_51
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_51
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_51
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ52 ####
*
* @param picName_52
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_52
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_52
* @desc ピクチャのX座標
* @default 0
*
* @param picY_52
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_52
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_52
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_52
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ53 ####
*
* @param picName_53
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_53
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_53
* @desc ピクチャのX座標
* @default 0
*
* @param picY_53
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_53
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_53
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_53
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ54 ####
*
* @param picName_54
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_54
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_54
* @desc ピクチャのX座標
* @default 0
*
* @param picY_54
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_54
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_54
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_54
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ55 ####
*
* @param picName_55
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_55
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_55
* @desc ピクチャのX座標
* @default 0
*
* @param picY_55
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_55
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_55
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_55
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ56 ####
*
* @param picName_56
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_56
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_56
* @desc ピクチャのX座標
* @default 0
*
* @param picY_56
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_56
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_56
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_56
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ57 ####
*
* @param picName_57
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_57
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_57
* @desc ピクチャのX座標
* @default 0
*
* @param picY_57
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_57
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_57
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_57
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ58 ####
*
* @param picName_58
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_58
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_58
* @desc ピクチャのX座標
* @default 0
*
* @param picY_58
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_58
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_58
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_58
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ59 ####
*
* @param picName_59
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_59
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_59
* @desc ピクチャのX座標
* @default 0
*
* @param picY_59
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_59
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_59
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_59
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ60 ####
*
* @param picName_60
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_60
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_60
* @desc ピクチャのX座標
* @default 0
*
* @param picY_60
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_60
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_60
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_60
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ61 ####
*
* @param picName_61
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_61
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_61
* @desc ピクチャのX座標
* @default 0
*
* @param picY_61
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_61
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_61
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_61
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ62 ####
*
* @param picName_62
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_62
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_62
* @desc ピクチャのX座標
* @default 0
*
* @param picY_62
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_62
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_62
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_62
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ63 ####
*
* @param picName_63
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_63
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_63
* @desc ピクチャのX座標
* @default 0
*
* @param picY_63
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_63
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_63
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_63
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ64 ####
*
* @param picName_64
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_64
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_64
* @desc ピクチャのX座標
* @default 0
*
* @param picY_64
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_64
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_64
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_64
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ65 ####
*
* @param picName_65
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_65
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_65
* @desc ピクチャのX座標
* @default 0
*
* @param picY_65
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_65
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_65
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_65
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ66 ####
*
* @param picName_66
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_66
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_66
* @desc ピクチャのX座標
* @default 0
*
* @param picY_66
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_66
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_66
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_66
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ67 ####
*
* @param picName_67
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_67
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_67
* @desc ピクチャのX座標
* @default 0
*
* @param picY_67
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_67
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_67
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_67
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ68 ####
*
* @param picName_68
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_68
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_68
* @desc ピクチャのX座標
* @default 0
*
* @param picY_68
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_68
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_68
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_68
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ69 ####
*
* @param picName_69
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_69
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_69
* @desc ピクチャのX座標
* @default 0
*
* @param picY_69
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_69
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_69
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_69
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ70 ####
*
* @param picName_70
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_70
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_70
* @desc ピクチャのX座標
* @default 0
*
* @param picY_70
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_70
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_70
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_70
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ71 ####
*
* @param picName_71
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_71
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_71
* @desc ピクチャのX座標
* @default 0
*
* @param picY_71
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_71
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_71
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_71
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ72 ####
*
* @param picName_72
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_72
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_72
* @desc ピクチャのX座標
* @default 0
*
* @param picY_72
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_72
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_72
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_72
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ73 ####
*
* @param picName_73
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_73
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_73
* @desc ピクチャのX座標
* @default 0
*
* @param picY_73
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_73
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_73
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_73
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ74 ####
*
* @param picName_74
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_74
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_74
* @desc ピクチャのX座標
* @default 0
*
* @param picY_74
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_74
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_74
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_74
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ75 ####
*
* @param picName_75
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_75
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_75
* @desc ピクチャのX座標
* @default 0
*
* @param picY_75
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_75
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_75
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_75
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ76 ####
*
* @param picName_76
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_76
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_76
* @desc ピクチャのX座標
* @default 0
*
* @param picY_76
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_76
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_76
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_76
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ77 ####
*
* @param picName_77
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_77
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_77
* @desc ピクチャのX座標
* @default 0
*
* @param picY_77
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_77
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_77
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_77
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ78 ####
*
* @param picName_78
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_78
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_78
* @desc ピクチャのX座標
* @default 0
*
* @param picY_78
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_78
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_78
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_78
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ79 ####
*
* @param picName_79
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_79
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_79
* @desc ピクチャのX座標
* @default 0
*
* @param picY_79
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_79
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_79
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_79
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ80 ####
*
* @param picName_80
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_80
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_80
* @desc ピクチャのX座標
* @default 0
*
* @param picY_80
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_80
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_80
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_80
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ81 ####
*
* @param picName_81
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_81
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_81
* @desc ピクチャのX座標
* @default 0
*
* @param picY_81
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_81
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_81
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_81
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ82 ####
*
* @param picName_82
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_82
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_82
* @desc ピクチャのX座標
* @default 0
*
* @param picY_82
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_82
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_82
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_82
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ83 ####
*
* @param picName_83
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_83
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_83
* @desc ピクチャのX座標
* @default 0
*
* @param picY_83
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_83
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_83
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_83
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ84 ####
*
* @param picName_84
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_84
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_84
* @desc ピクチャのX座標
* @default 0
*
* @param picY_84
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_84
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_84
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_84
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ85 ####
*
* @param picName_85
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_85
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_85
* @desc ピクチャのX座標
* @default 0
*
* @param picY_85
* @desc ピクチャのY座標

* @default 0
*
* @param picOpacity_85
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_85
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_85
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ86 ####
*
* @param picName_86
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_86
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_86
* @desc ピクチャのX座標
* @default 0
*
* @param picY_86
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_86
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_86
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_86
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ87 ####
*
* @param picName_87
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_87
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_87
* @desc ピクチャのX座標
* @default 0
*
* @param picY_87
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_87
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_87
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_87
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ88 ####
*
* @param picName_88
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_88
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_88
* @desc ピクチャのX座標
* @default 0
*
* @param picY_88
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_88
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_88
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_88
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ89 ####
*
* @param picName_89
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_89
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_89
* @desc ピクチャのX座標
* @default 0
*
* @param picY_89
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_89
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_89
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_89
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ90 ####
*
* @param picName_90
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_90
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_90
* @desc ピクチャのX座標
* @default 0
*
* @param picY_90
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_90
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_90
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_90
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ91 ####
*
* @param picName_91
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_91
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_91
* @desc ピクチャのX座標
* @default 0
*
* @param picY_91
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_91
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_91
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_91
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ92 ####
*
* @param picName_92
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_92
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_92
* @desc ピクチャのX座標
* @default 0
*
* @param picY_92
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_92
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_92
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_92
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ93 ####
*
* @param picName_93
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_93
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_93
* @desc ピクチャのX座標
* @default 0
*
* @param picY_93
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_93
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_93
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_93
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ94 ####
*
* @param picName_94
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_94
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_94
* @desc ピクチャのX座標
* @default 0
*
* @param picY_94
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_94
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_94
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_94
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ95 ####
*
* @param picName_95
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_95
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_95
* @desc ピクチャのX座標
* @default 0
*
* @param picY_95
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_95
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_95
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_95
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ96 ####
*
* @param picName_96
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_96
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_96
* @desc ピクチャのX座標
* @default 0
*
* @param picY_96
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_96
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_96
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_96
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ97 ####
*
* @param picName_97
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_97
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_97
* @desc ピクチャのX座標
* @default 0
*
* @param picY_97
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_97
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_97
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_97
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ98 ####
*
* @param picName_98
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_98
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_98
* @desc ピクチャのX座標
* @default 0
*
* @param picY_98
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_98
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_98
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_98
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### ピクチャ99 ####
*
* @param picName_99
* @desc 表示したいピクチャの名前
* @default
*
* @param picOrigin_99
* @desc ピクチャの原点
* 中央→center　左上→left
* @default left
*
* @param picX_99
* @desc ピクチャのX座標
* @default 0
*
* @param picY_99
* @desc ピクチャのY座標
* @default 0
*
* @param picOpacity_99
* @desc 画像の透明度
* 0→半透明 100→そのまま
* @default 100
*
* @param picZoom_99
* @desc ピクチャ拡大率
* @default 100
*
* @param picShow_99
* @desc ピクチャ表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト1 ####
*
* @param txtSubject_1
* @desc テキスト
* Default:
* @default
*
* @param txtSize_1
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_1
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_1
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_1
* @desc 表示するX座標
* @default 0
*
* @param txtY_1
* @desc 表示するY座標
* @default 0
*
* @param txtShow_1
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト2 ####
*
* @param txtSubject_2
* @desc テキスト
* Default:
* @default
*
* @param txtSize_2
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_2
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_2
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_2
* @desc 表示するX座標
* @default 0
*
* @param txtY_2
* @desc 表示するY座標
* @default 0
*
* @param txtShow_2
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト3 ####
*
* @param txtSubject_3
* @desc テキスト
* Default:
* @default
*
* @param txtSize_3
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_3
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_3
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_3
* @desc 表示するX座標
* @default 0
*
* @param txtY_3
* @desc 表示するY座標
* @default 0
*
* @param txtShow_3
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト4 ####
*
* @param txtSubject_4
* @desc テキスト
* Default:
* @default
*
* @param txtSize_4
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_4
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_4
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_4
* @desc 表示するX座標
* @default 0
*
* @param txtY_4
* @desc 表示するY座標
* @default 0
*
* @param txtShow_4
* @desc テキストを表示するかどうか
*
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト5 ####
*
* @param txtSubject_5
* @desc テキスト
* Default:
* @default
*
* @param txtSize_5
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_5
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_5
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_5
* @desc 表示するX座標
* @default 0
*
* @param txtY_5
* @desc 表示するY座標
* @default 0
*
* @param txtShow_5
* @desc テキストを表示するかどうか
*
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト6 ####
*
* @param txtSubject_6
* @desc テキスト
* Default:
* @default
*
* @param txtSize_6
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_6
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_6
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_6
* @desc 表示するX座標
* @default 0
*
* @param txtY_6
* @desc 表示するY座標
* @default 0
*
* @param txtShow_6
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト7 ####
*
* @param txtSubject_7
* @desc テキスト
* Default:
* @default
*
* @param txtSize_7
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_7
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_7
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_7
* @desc 表示するX座標
* @default 0
*
* @param txtY_7
* @desc 表示するY座標
* @default 0
*
* @param txtShow_7
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト8 ####
*
* @param txtSubject_8
* @desc テキスト
* Default:
* @default
*
* @param txtSize_8
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_8
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_8
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_8
* @desc 表示するX座標
* @default 0
*
* @param txtY_8
* @desc 表示するY座標
* @default 0
*
* @param txtShow_8
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト9 ####
*
* @param txtSubject_9
* @desc テキスト
* Default:
* @default
*
* @param txtSize_9
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_9
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_9
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_9
* @desc 表示するX座標
* @default 0
*
* @param txtY_9
* @desc 表示するY座標
* @default 0
*
* @param txtShow_9
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト10 ####
*
* @param txtSubject_10
* @desc テキスト
* Default:
* @default
*
* @param txtSize_10
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_10
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_10
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_10
* @desc 表示するX座標
* @default 0
*
* @param txtY_10
* @desc 表示するY座標
* @default 0
*
* @param txtShow_10
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト11 ####
*
* @param txtSubject_11
* @desc テキスト
* Default:
* @default
*
* @param txtSize_11
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_11
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_11
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_11
* @desc 表示するX座標
* @default 0
*
* @param txtY_11
* @desc 表示するY座標
* @default 0
*
* @param txtShow_11
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト12 ####
*
* @param txtSubject_12
* @desc テキスト
* Default:
* @default
*
* @param txtSize_12
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_12
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_12
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_12
* @desc 表示するX座標
* @default 0
*
* @param txtY_12
* @desc 表示するY座標
* @default 0
*
* @param txtShow_12
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト13 ####
*
* @param txtSubject_13
* @desc テキスト
* Default:
* @default
*
* @param txtSize_13
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_13
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_13
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_13
* @desc 表示するX座標
* @default 0
*
* @param txtY_13
* @desc 表示するY座標
* @default 0
*
* @param txtShow_13
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト14 ####
*
* @param txtSubject_14
* @desc テキスト
* Default:
* @default
*
* @param txtSize_14
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_14
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_14
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_14
* @desc 表示するX座標
* @default 0
*
* @param txtY_14
* @desc 表示するY座標
* @default 0
*
* @param txtShow_14
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト15 ####
*
* @param txtSubject_15
* @desc テキスト
* Default:
* @default
*
* @param txtSize_15
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_15
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_15
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_15
* @desc 表示するX座標
* @default 0
*
* @param txtY_15
* @desc 表示するY座標
* @default 0
*
* @param txtShow_15
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト16 ####
*
* @param txtSubject_16
* @desc テキスト
* Default:
* @default
*
* @param txtSize_16
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_16
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_16
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_16
* @desc 表示するX座標
* @default 0
*
* @param txtY_16
* @desc 表示するY座標
* @default 0
*
* @param txtShow_16
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト17 ####
*
* @param txtSubject_17
* @desc テキスト
* Default:
* @default
*
* @param txtSize_17
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_17
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_17
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_17
* @desc 表示するX座標
* @default 0
*
* @param txtY_17
* @desc 表示するY座標
* @default 0
*
* @param txtShow_17
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト18 ####
*
* @param txtSubject_18
* @desc テキスト
* Default:
* @default
*
* @param txtSize_18
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_18
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_18
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_18
* @desc 表示するX座標
* @default 0
*
* @param txtY_18
* @desc 表示するY座標
* @default 0
*
* @param txtShow_18
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト19 ####
*
* @param txtSubject_19
* @desc テキスト
* Default:
* @default
*
* @param txtSize_19
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_19
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_19
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_19
* @desc 表示するX座標
* @default 0
*
* @param txtY_19
* @desc 表示するY座標
* @default 0
*
* @param txtShow_19
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト20 ####
*
* @param txtSubject_20
* @desc テキスト
* Default:
* @default
*
* @param txtSize_20
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_20
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_20
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_20
* @desc 表示するX座標
* @default 0
*
* @param txtY_20
* @desc 表示するY座標
* @default 0
*
* @param txtShow_20
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト21 ####
*
* @param txtSubject_21
* @desc テキスト
* Default:
* @default
*
* @param txtSize_21
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_21
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_21
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_21
* @desc 表示するX座標
* @default 0
*
* @param txtY_21
* @desc 表示するY座標
* @default 0
*
* @param txtShow_21
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト22 ####
*
* @param txtSubject_22
* @desc テキスト
* Default:
* @default
*
* @param txtSize_22
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_22
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_22
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_22
* @desc 表示するX座標
* @default 0
*
* @param txtY_22
* @desc 表示するY座標
* @default 0
*
* @param txtShow_22
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト23 ####
*
* @param txtSubject_23
* @desc テキスト
* Default:
* @default
*
* @param txtSize_23
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_23
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_23
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_23
* @desc 表示するX座標
* @default 0
*
* @param txtY_23
* @desc 表示するY座標
* @default 0
*
* @param txtShow_23
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト24 ####
*
* @param txtSubject_24
* @desc テキスト
* Default:
* @default
*
* @param txtSize_24
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_24
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_24
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_24
* @desc 表示するX座標
* @default 0
*
* @param txtY_24
* @desc 表示するY座標
* @default 0
*
* @param txtShow_24
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト25 ####
*
* @param txtSubject_25
* @desc テキスト
* Default:
* @default
*
* @param txtSize_25
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_25
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_25
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_25
* @desc 表示するX座標
* @default 0
*
* @param txtY_25
* @desc 表示するY座標
* @default 0
*
* @param txtShow_25
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト26 ####
*
* @param txtSubject_26
* @desc テキスト
* Default:
* @default
*
* @param txtSize_26
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_26
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_26
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_26
* @desc 表示するX座標
* @default 0
*
* @param txtY_26
* @desc 表示するY座標
* @default 0
*
* @param txtShow_26
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト27 ####
*
* @param txtSubject_27
* @desc テキスト
* Default:
* @default
*
* @param txtSize_27
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_27
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_27
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_27
* @desc 表示するX座標
* @default 0
*
* @param txtY_27
* @desc 表示するY座標
* @default 0
*
* @param txtShow_27
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト28 ####
*
* @param txtSubject_28
* @desc テキスト
* Default:
* @default
*
* @param txtSize_28
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_28
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_28
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_28
* @desc 表示するX座標
* @default 0
*
* @param txtY_28
* @desc 表示するY座標
* @default 0
*
* @param txtShow_28
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト29 ####
*
* @param txtSubject_29
* @desc テキスト
* Default:
* @default
*
* @param txtSize_29
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_29
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_29
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_29
* @desc 表示するX座標
* @default 0
*
* @param txtY_29
* @desc 表示するY座標
* @default 0
*
* @param txtShow_29
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト30 ####
*
* @param txtSubject_30
* @desc テキスト
* Default:
* @default
*
* @param txtSize_30
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_30
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_30
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_30
* @desc 表示するX座標
* @default 0
*
* @param txtY_30
* @desc 表示するY座標
* @default 0
*
* @param txtShow_30
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト31 ####
*
* @param txtSubject_31
* @desc テキスト
* Default:
* @default
*
* @param txtSize_31
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_31
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_31
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_31
* @desc 表示するX座標
* @default 0
*
* @param txtY_31
* @desc 表示するY座標
* @default 0
*
* @param txtShow_31
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト32 ####
*
* @param txtSubject_32
* @desc テキスト
* Default:
* @default
*
* @param txtSize_32
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_32
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_32
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_32
* @desc 表示するX座標
* @default 0
*
* @param txtY_32
* @desc 表示するY座標
* @default 0
*
* @param txtShow_32
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト33 ####
*
* @param txtSubject_33
* @desc テキスト
* Default:
* @default
*
* @param txtSize_33
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_33
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_33
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_33
* @desc 表示するX座標
* @default 0
*
* @param txtY_33
* @desc 表示するY座標
* @default 0
*
* @param txtShow_33
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト34 ####
*
* @param txtSubject_34
* @desc テキスト
* Default:
* @default
*
* @param txtSize_34
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_34
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_34
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_34
* @desc 表示するX座標
* @default 0
*
* @param txtY_34
* @desc 表示するY座標
* @default 0
*
* @param txtShow_34
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト35 ####
*
* @param txtSubject_35
* @desc テキスト
* Default:
* @default
*
* @param txtSize_35
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_35
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_35
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_35
* @desc 表示するX座標
* @default 0
*
* @param txtY_35
* @desc 表示するY座標
* @default 0
*
* @param txtShow_35
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト36 ####
*
* @param txtSubject_36
* @desc テキスト
* Default:
* @default
*
* @param txtSize_36
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_36
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_36
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_36
* @desc 表示するX座標
* @default 0
*
* @param txtY_36
* @desc 表示するY座標
* @default 0
*
* @param txtShow_36
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト37 ####
*
* @param txtSubject_37
* @desc テキスト
* Default:
* @default
*
* @param txtSize_37
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_37
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_37
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_37
* @desc 表示するX座標
* @default 0
*
* @param txtY_37
* @desc 表示するY座標
* @default 0
*
* @param txtShow_37
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト38 ####
*
* @param txtSubject_38
* @desc テキスト
* Default:
* @default
*
* @param txtSize_38
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_38
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_38
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_38
* @desc 表示するX座標
* @default 0
*
* @param txtY_38
* @desc 表示するY座標
* @default 0
*
* @param txtShow_38
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト39 ####
*
* @param txtSubject_39
* @desc テキスト
* Default:
* @default
*
* @param txtSize_39
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_39
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_39
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_39
* @desc 表示するX座標
* @default 0
*
* @param txtY_39
* @desc 表示するY座標
* @default 0
*
* @param txtShow_39
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト40 ####
*
* @param txtSubject_40
* @desc テキスト
* Default:
* @default
*
* @param txtSize_40
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_40
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_40
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_40
* @desc 表示するX座標
* @default 0
*
* @param txtY_40
* @desc 表示するY座標
* @default 0
*
* @param txtShow_40
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト41 ####
*
* @param txtSubject_41
* @desc テキスト
* Default:
* @default
*
* @param txtSize_41
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_41
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_41
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_41
* @desc 表示するX座標
* @default 0
*
* @param txtY_41
* @desc 表示するY座標
* @default 0
*
* @param txtShow_41
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト42 ####
*
* @param txtSubject_42
* @desc テキスト
* Default:
* @default
*
* @param txtSize_42
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_42
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_42
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_42
* @desc 表示するX座標
* @default 0
*
* @param txtY_42
* @desc 表示するY座標
* @default 0
*
* @param txtShow_42
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト43 ####
*
* @param txtSubject_43
* @desc テキスト
* Default:
* @default
*
* @param txtSize_43
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_43
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_43
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_43
* @desc 表示するX座標
* @default 0
*
* @param txtY_43
* @desc 表示するY座標
* @default 0
*
* @param txtShow_43
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト44 ####
*
* @param txtSubject_44
* @desc テキスト
* Default:
* @default
*
* @param txtSize_44
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_44
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_44
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_44
* @desc 表示するX座標
* @default 0
*
* @param txtY_44
* @desc 表示するY座標
* @default 0
*
* @param txtShow_44
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト45 ####
*
* @param txtSubject_45
* @desc テキスト
* Default:
* @default
*
* @param txtSize_45
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_45
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_45
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_45
* @desc 表示するX座標
* @default 0
*
* @param txtY_45
* @desc 表示するY座標
* @default 0
*
* @param txtShow_45
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト46 ####
*
* @param txtSubject_46
* @desc テキスト
* Default:
* @default
*
* @param txtSize_46
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_46
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_46
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_46
* @desc 表示するX座標
* @default 0
*
* @param txtY_46
* @desc 表示するY座標
* @default 0
*
* @param txtShow_46
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト47 ####
*
* @param txtSubject_47
* @desc テキスト
* Default:
* @default
*
* @param txtSize_47
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_47
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_47
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_47
* @desc 表示するX座標
* @default 0
*
* @param txtY_47
* @desc 表示するY座標
* @default 0
*
* @param txtShow_47
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト48 ####
*
* @param txtSubject_48
* @desc テキスト
* Default:
* @default
*
* @param txtSize_48
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_48
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_48
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_48
* @desc 表示するX座標
* @default 0
*
* @param txtY_48
* @desc 表示するY座標
* @default 0
*
* @param txtShow_48
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト49 ####
*
* @param txtSubject_49
* @desc テキスト
* Default:
* @default
*
* @param txtSize_49
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_49
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_49
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_49
* @desc 表示するX座標
* @default 0
*
* @param txtY_49
* @desc 表示するY座標
* @default 0
*
* @param txtShow_49
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト50 ####
*
* @param txtSubject_50
* @desc テキスト
* Default:
* @default
*
* @param txtSize_50
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_50
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_50
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_50
* @desc 表示するX座標
* @default 0
*
* @param txtY_50
* @desc 表示するY座標
* @default 0
*
* @param txtShow_50
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト51 ####
*
* @param txtSubject_51
* @desc テキスト
* Default:
* @default
*
* @param txtSize_51
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_51
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_51
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_51
* @desc 表示するX座標
* @default 0
*
* @param txtY_51
* @desc 表示するY座標
* @default 0
*
* @param txtShow_51
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト52 ####
*
* @param txtSubject_52
* @desc テキスト
* Default:
* @default
*
* @param txtSize_52
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_52
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_52
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_52
* @desc 表示するX座標
* @default 0
*
* @param txtY_52
* @desc 表示するY座標
* @default 0
*
* @param txtShow_52
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト53 ####
*
* @param txtSubject_53
* @desc テキスト
* Default:
* @default
*
* @param txtSize_53
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_53
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_53
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_53
* @desc 表示するX座標
* @default 0
*
* @param txtY_53
* @desc 表示するY座標
* @default 0
*
* @param txtShow_53
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト54 ####
*
* @param txtSubject_54
* @desc テキスト
* Default:
* @default
*
* @param txtSize_54
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_54
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_54
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_54
* @desc 表示するX座標
* @default 0
*
* @param txtY_54
* @desc 表示するY座標
* @default 0
*
* @param txtShow_54
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト55 ####
*
* @param txtSubject_55
* @desc テキスト
* Default:
* @default
*
* @param txtSize_55
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_55
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_55
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_55
* @desc 表示するX座標
* @default 0
*
* @param txtY_55
* @desc 表示するY座標
* @default 0
*
* @param txtShow_55
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト56 ####
*
* @param txtSubject_56
* @desc テキスト
* Default:
* @default
*
* @param txtSize_56
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_56
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_56
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_56
* @desc 表示するX座標
* @default 0
*
* @param txtY_56
* @desc 表示するY座標
* @default 0
*
* @param txtShow_56
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト57 ####
*
* @param txtSubject_57
* @desc テキスト
* Default:
* @default
*
* @param txtSize_57
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_57
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_57
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_57
* @desc 表示するX座標
* @default 0
*
* @param txtY_57
* @desc 表示するY座標
* @default 0
*
* @param txtShow_57
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト58 ####
*
* @param txtSubject_58
* @desc テキスト
* Default:
* @default
*
* @param txtSize_58
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_58
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_58
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_58
* @desc 表示するX座標
* @default 0
*
* @param txtY_58
* @desc 表示するY座標
* @default 0
*
* @param txtShow_58
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト59 ####
*
* @param txtSubject_59
* @desc テキスト
* Default:
* @default
*
* @param txtSize_59
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_59
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_59
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_59
* @desc 表示するX座標
* @default 0
*
* @param txtY_59
* @desc 表示するY座標
* @default 0
*
* @param txtShow_59
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト60 ####
*
* @param txtSubject_60
* @desc テキスト
* Default:
* @default
*
* @param txtSize_60
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_60
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_60
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_60
* @desc 表示するX座標
* @default 0
*
* @param txtY_60
* @desc 表示するY座標
* @default 0
*
* @param txtShow_60
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト61 ####
*
* @param txtSubject_61
* @desc テキスト
* Default:
* @default
*
* @param txtSize_61
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_61
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_61
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_61
* @desc 表示するX座標
* @default 0
*
* @param txtY_61
* @desc 表示するY座標
* @default 0
*
* @param txtShow_61
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト62 ####
*
* @param txtSubject_62
* @desc テキスト
* Default:
* @default
*
* @param txtSize_62
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_62
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_62
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_62
* @desc 表示するX座標
* @default 0
*
* @param txtY_62
* @desc 表示するY座標
* @default 0
*
* @param txtShow_62
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト63 ####
*
* @param txtSubject_63
* @desc テキスト
* Default:
* @default
*
* @param txtSize_63
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_63
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_63
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_63
* @desc 表示するX座標
* @default 0
*
* @param txtY_63
* @desc 表示するY座標
* @default 0
*
* @param txtShow_63
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト64 ####
*
* @param txtSubject_64
* @desc テキスト
* Default:
* @default
*
* @param txtSize_64
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_64
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_64
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_64
* @desc 表示するX座標
* @default 0
*
* @param txtY_64
* @desc 表示するY座標
* @default 0
*
* @param txtShow_64
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト65 ####
*
* @param txtSubject_65
* @desc テキスト
* Default:
* @default
*
* @param txtSize_65
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_65
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_65
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_65
* @desc 表示するX座標
* @default 0
*
* @param txtY_65
* @desc 表示するY座標
* @default 0
*
* @param txtShow_65
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト66 ####
*
* @param txtSubject_66
* @desc テキスト
* Default:
* @default
*
* @param txtSize_66
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_66
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_66
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_66
* @desc 表示するX座標
* @default 0
*
* @param txtY_66
* @desc 表示するY座標
* @default 0
*
* @param txtShow_66
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト67 ####
*
* @param txtSubject_67
* @desc テキスト
* Default:
* @default
*
* @param txtSize_67
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_67
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_67
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_67
* @desc 表示するX座標
* @default 0
*
* @param txtY_67
* @desc 表示するY座標
* @default 0
*
* @param txtShow_67
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト68 ####
*
* @param txtSubject_68
* @desc テキスト
* Default:
* @default
*
* @param txtSize_68
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_68
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_68
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_68
* @desc 表示するX座標
* @default 0
*
* @param txtY_68
* @desc 表示するY座標
* @default 0
*
* @param txtShow_68
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト69 ####
*
* @param txtSubject_69
* @desc テキスト
* Default:
* @default
*
* @param txtSize_69
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_69
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_69
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_69
* @desc 表示するX座標
* @default 0
*
* @param txtY_69
* @desc 表示するY座標
* @default 0
*
* @param txtShow_69
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト70 ####
*
* @param txtSubject_70
* @desc テキスト
* Default:
* @default
*
* @param txtSize_70
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_70
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_70
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_70
* @desc 表示するX座標
* @default 0
*
* @param txtY_70
* @desc 表示するY座標
* @default 0
*
* @param txtShow_70
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト71 ####
*
* @param txtSubject_71
* @desc テキスト
* Default:
* @default
*
* @param txtSize_71
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_71
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_71
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_71
* @desc 表示するX座標
* @default 0
*
* @param txtY_71
* @desc 表示するY座標
* @default 0
*
* @param txtShow_71
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト72 ####
*
* @param txtSubject_72
* @desc テキスト
* Default:
* @default
*
* @param txtSize_72
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_72
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_72
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_72
* @desc 表示するX座標
* @default 0
*
* @param txtY_72
* @desc 表示するY座標
* @default 0
*
* @param txtShow_72
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト73 ####
*
* @param txtSubject_73
* @desc テキスト
* Default:
* @default
*
* @param txtSize_73
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_73
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_73
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_73
* @desc 表示するX座標
* @default 0
*
* @param txtY_73
* @desc 表示するY座標
* @default 0
*
* @param txtShow_73
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト74 ####
*
* @param txtSubject_74
* @desc テキスト
* Default:
* @default
*
* @param txtSize_74
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_74
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_74
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_74
* @desc 表示するX座標
* @default 0
*
* @param txtY_74
* @desc 表示するY座標
* @default 0
*
* @param txtShow_74
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト75 ####
*
* @param txtSubject_75
* @desc テキスト
* Default:
* @default
*
* @param txtSize_75
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_75
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_75
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_75
* @desc 表示するX座標
* @default 0
*
* @param txtY_75
* @desc 表示するY座標
* @default 0
*
* @param txtShow_75
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト76 ####
*
* @param txtSubject_76
* @desc テキスト
* Default:
* @default
*
* @param txtSize_76
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_76
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_76
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_76
* @desc 表示するX座標
* @default 0
*
* @param txtY_76
* @desc 表示するY座標
* @default 0
*
* @param txtShow_76
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト77 ####
*
* @param txtSubject_77
* @desc テキスト
* Default:
* @default
*
* @param txtSize_77
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_77
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_77
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_77
* @desc 表示するX座標
* @default 0
*
* @param txtY_77
* @desc 表示するY座標
* @default 0
*
* @param txtShow_77
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト78 ####
*
* @param txtSubject_78
* @desc テキスト
* Default:
* @default
*
* @param txtSize_78
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_78
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_78
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_78
* @desc 表示するX座標
* @default 0
*
* @param txtY_78
* @desc 表示するY座標
* @default 0
*
* @param txtShow_78
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト79 ####
*
* @param txtSubject_79
* @desc テキスト
* Default:
* @default
*
* @param txtSize_79
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_79
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_79
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_79
* @desc 表示するX座標
* @default 0
*
* @param txtY_79
* @desc 表示するY座標
* @default 0
*
* @param txtShow_79
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト80 ####
*
* @param txtSubject_80
* @desc テキスト
* Default:
* @default
*
* @param txtSize_80
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_80
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_80
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_80
* @desc 表示するX座標
* @default 0
*
* @param txtY_80
* @desc 表示するY座標
* @default 0
*
* @param txtShow_80
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト81 ####
*
* @param txtSubject_81
* @desc テキスト
* Default:
* @default
*
* @param txtSize_81
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_81
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_81
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_81
* @desc 表示するX座標
* @default 0
*
* @param txtY_81
* @desc 表示するY座標
* @default 0
*
* @param txtShow_81
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト82 ####
*
* @param txtSubject_82
* @desc テキスト
* Default:
* @default
*
* @param txtSize_82
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_82
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_82
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_82
* @desc 表示するX座標
* @default 0
*
* @param txtY_82
* @desc 表示するY座標
* @default 0
*
* @param txtShow_82
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト83 ####
*
* @param txtSubject_83
* @desc テキスト
* Default:
* @default
*
* @param txtSize_83
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_83
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_83
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_83
* @desc 表示するX座標
* @default 0
*
* @param txtY_83
* @desc 表示するY座標
* @default 0
*
* @param txtShow_83
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト84 ####
*
* @param txtSubject_84
* @desc テキスト
* Default:
* @default
*
* @param txtSize_84
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_84
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_84
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_84
* @desc 表示するX座標
* @default 0
*
* @param txtY_84
* @desc 表示するY座標
* @default 0
*
* @param txtShow_84
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト85 ####
*
* @param txtSubject_85
* @desc テキスト
* Default:
* @default
*
* @param txtSize_85
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_85
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_85
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_85
* @desc 表示するX座標
* @default 0
*
* @param txtY_85
* @desc 表示するY座標
* @default 0
*
* @param txtShow_85
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト86 ####
*
* @param txtSubject_86
* @desc テキスト
* Default:
* @default
*
* @param txtSize_86
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_86
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_86
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_86
* @desc 表示するX座標
* @default 0
*
* @param txtY_86
* @desc 表示するY座標
* @default 0
*
* @param txtShow_86
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト87 ####
*
* @param txtSubject_87
* @desc テキスト
* Default:
* @default
*
* @param txtSize_87
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_87
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_87
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_87
* @desc 表示するX座標
* @default 0
*
* @param txtY_87
* @desc 表示するY座標
* @default 0
*
* @param txtShow_87
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト88 ####
*
* @param txtSubject_88
* @desc テキスト
* Default:
* @default
*
* @param txtSize_88
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_88
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_88
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_88
* @desc 表示するX座標
* @default 0
*
* @param txtY_88
* @desc 表示するY座標
* @default 0
*
* @param txtShow_88
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト89 ####
*
* @param txtSubject_89
* @desc テキスト
* Default:
* @default
*
* @param txtSize_89
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_89
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_89
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_89
* @desc 表示するX座標
* @default 0
*
* @param txtY_89
* @desc 表示するY座標
* @default 0
*
* @param txtShow_89
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト90 ####
*
* @param txtSubject_90
* @desc テキスト
* Default:
* @default
*
* @param txtSize_90
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_90
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_90
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_90
* @desc 表示するX座標
* @default 0
*
* @param txtY_90
* @desc 表示するY座標
* @default 0
*
* @param txtShow_90
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト91 ####
*
* @param txtSubject_91
* @desc テキスト
* Default:
* @default
*
* @param txtSize_91
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_91
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_91
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_91
* @desc 表示するX座標
* @default 0
*
* @param txtY_91
* @desc 表示するY座標
* @default 0
*
* @param txtShow_91
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト92 ####
*
* @param txtSubject_92
* @desc テキスト
* Default:
* @default
*
* @param txtSize_92
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_92
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_92
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_92
* @desc 表示するX座標
* @default 0
*
* @param txtY_92
* @desc 表示するY座標
* @default 0
*
* @param txtShow_92
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト93 ####
*
* @param txtSubject_93
* @desc テキスト
* Default:
* @default
*
* @param txtSize_93
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_93
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_93
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_93
* @desc 表示するX座標
* @default 0
*
* @param txtY_93
* @desc 表示するY座標
* @default 0
*
* @param txtShow_93
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト94 ####
*
* @param txtSubject_94
* @desc テキスト
* Default:
* @default
*
* @param txtSize_94
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_94
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_94
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_94
* @desc 表示するX座標
* @default 0
*
* @param txtY_94
* @desc 表示するY座標
* @default 0
*
* @param txtShow_94
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト95 ####
*
* @param txtSubject_95
* @desc テキスト
* Default:
* @default
*
* @param txtSize_95
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_95
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_95
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_95
* @desc 表示するX座標
* @default 0
*
* @param txtY_95
* @desc 表示するY座標
* @default 0
*
* @param txtShow_95
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト96 ####
*
* @param txtSubject_96
* @desc テキスト
* Default:
* @default
*
* @param txtSize_96
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_96
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_96
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_96
* @desc 表示するX座標
* @default 0
*
* @param txtY_96
* @desc 表示するY座標
* @default 0
*
* @param txtShow_96
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト97 ####
*
* @param txtSubject_97
* @desc テキスト
* Default:
* @default
*
* @param txtSize_97
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_97
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_97
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_97
* @desc 表示するX座標
* @default 0
*
* @param txtY_97
* @desc 表示するY座標
* @default 0
*
* @param txtShow_97
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト98 ####
*
* @param txtSubject_98
* @desc テキスト
* Default:
* @default
*
* @param txtSize_98
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_98
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_98
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_98
* @desc 表示するX座標
* @default 0
*
* @param txtY_98
* @desc 表示するY座標
* @default 0
*
* @param txtShow_98
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*
*
* @param
*
*
* @param #### テキスト99 ####
*
* @param txtSubject_99
* @desc テキスト
* Default:
* @default
*
* @param txtSize_99
* @desc 基本となるフォントサイズ
* @default 28
*
* @param txtOrigin_99
* @desc 原点
* 左上→left 中央→center 右上→right
* @default left
*
* @param txtAlign_99
* @desc テキストの揃え方
* 上揃え→top 中央→center 下揃え→bottom
* @default top
*
* @param txtX_99
* @desc 表示するX座標
* @default 0
*
* @param txtY_99
* @desc 表示するY座標
* @default 0
*
* @param txtShow_99
* @desc テキストを表示するかどうか
* on→表示　off→非表示
* @default on
*/