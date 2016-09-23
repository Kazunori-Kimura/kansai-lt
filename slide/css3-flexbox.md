---
theme: "night"
title: "flexible box (flexbox) is 何?"
date: "2016-09-24" 
---

# flexible box (flexbox) is 何?

---

> CSS3 Flexible Box (可変ボックス)、または flexbox は、ページレイアウトを様々なスクリーンサイズやディスプレイデバイスに適応しなければならない場合に、ページ上の要素が指定した通りに配置されるレイアウトモードです。多くのアプリケーションにおいて、flexible box モデルは、float を使わず、そして flex container のマージンがそのコンテンツのマージンを相殺することも無く、block モデルを超えるための手段を提供します。

[CSS flexible box の利用 | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

---

## どうして `flexbox` がよいの？

---

## これまでのレイアウト実装方法

ブログなどでよくあるヘッダー、フッター、左右にメニュー、中央にコンテンツというレイアウトを作成するには...

![3カラム](http://www.geocities.jp/multi_column/practice/img/3column_right.png)

1. `table` タグを駆使する
2. CSS の `float` を使用する
3. `Bootstrap` を使用する

---

`flexbox` だとシンプルかつ柔軟なレイアウトを構築できる

* サンプル: http://hashrock.github.io/flexbox-example/page4.html
* ソースコード: https://github.com/hashrock/flexbox-example/blob/master/page4.html

---

## こんなシチュエーションで便利！

* 不特定多数の項目を 縦 or 横 に並べる
  - 画面サイズによって並べる方向を切り替える
  - 等間隔に隙間を空ける
* 複数要素の高さを揃える
* 天地中央に要素を配置する

---

## 参考

* [floatより辛くない「flexbox」でざっくりレイアウト](http://qiita.com/hashrock/items/939684b9207dbab1d59e)
* [CSS Flexible Box Layout | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
