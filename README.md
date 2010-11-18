#要素を画面の定位置に表示させる jQuery プラグイン
---
##基本的な使い方
固定位置に表示させたい要素に対して .jStageAligner(position) を実行します。  
position には画面の四隅とそれぞれの辺の中央、画面中央の合計 9 つの場所を指定できます。  

- LEFT_TOP
- LEFT_MIDDLE
- LEFT_BOTTOM
- RIGHT_TOP
- RIGHT_MIDDLE
- RIGHT_BOTTOM
- CENTER_TOP
- CENTER_MIDDLE
- CENTER_BOTTOM

下記は、要素を画面の右下に配置するコードです。   

    $("#box").jStageAligner("RIGHT_BOTTOM");

###オプション
また、オプションで移動する時間やイージング、上下左右のマージンを指定できます。  
    $("#box").jStageAligner("RIGHT_BOTTOM", {time: 500, easing: "swing", marginRight: 100, marginBottom: 100});

移動完了時のコールバックも指定できます。  

    $("#box").jStageAligner("RIGHT_BOTTOM", {callback: function() {
      alert("done");
    }});

###不具合
ブラウザのスクロールバーが表示→非表示する際に、スクロールバー分の隙間が空いてしまいます。

