---
theme: "solarized"
title: "Electron事始め"
date: "2016-05-28" 
---
# Electron事始め

K1342 木村 憲規

---

## Electronとは？

* [Electron](http://electron.atom.io/)
  - Build cross platform desktop apps with web technologies

---

## Electronで作られたアプリ

![アプリアイコン](./images/electron-apps.png)

---

## Electronでアプリ作ってみた

Webアプリケーションのログを解析するツール

![ログ解析ツール](./images/electron-app-sample.png)

---

## ツールの構成

* 画面
  - *knockout.js* と *Bootstrap3*
* ロジック
  - *co*
  - *glob*
  - *fs-extra-promise*

---

## 良さ

* まさしく *desktop apps with web technologies*
  - コード書いてて楽しい！

---

## つらさ

* 画面側の処理とバックエンドの処理が混じりそう
  - スパゲッティ不可避（かも）
* Windows向けにビルドすると、dllファイル多数
  - 大したアプリじゃないのに結構なファイルサイズ
  - Mac向けのビルドは知らん
