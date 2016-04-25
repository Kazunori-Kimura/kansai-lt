---
theme: "moon"
title: "Node.jsのススメ"
date: "2016-05-28" 
---
# Node.jsのススメ

K1342 木村 憲規

---

## Node.jsとは？

* [nodejs.org](https://nodejs.org/en/)
  - `event-driven`
  - `non-blocking I/O model`

---

## C10K問題

* Apacheなどで採用されているマルチスレッドモデルの難点
  - スレッド毎のメモリ領域の圧迫
  - ロック制御など処理の複雑化
  - I/O待ち

---

## Node.jsは

* `event-driven` と `non-blocking I/O model` でサーバーリソースの効率的使用とI/O待ちの低減を実現

---

## そんなことより

* JavaScriptでサーバー処理が書ける！

---

## npm

* 他言語と比べてダントツのパッケージ数

![モジュール数の比較](./images/modulecounts.png)

> http://www.modulecounts.com/

---

## コマンドラインツールの導入/作成も簡単

* 拙作 `node-gi` (コマンドラインで .gitignore を作成) をインストールする

```sh
> npm install -g node-gi
```

---

## フロントエンド開発では不可欠

* gulp, grunt
* babel, TypeScript
* SASS, SCSS
* minify
* WebPack, browserify

---

## 様々なツール

* *Apache Cordova* : HTMLとJavaScriptでスマフォアプリ開発
* *Electron* : HTMLとJavaScriptでデスクトップアプリ開発

---

## NodeSchool

* Node.jsについて勉強するNode.jsのツール
  - [NodeSchool](http://nodeschool.io/ja/index.html)

---

## JavaScript研究会

* 近日開催予定！