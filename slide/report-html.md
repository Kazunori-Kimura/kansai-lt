---
theme: "night"
title: "HTMLで帳票を書く"
date: "2016-09-24" 
---

# HTMLで帳票を書く

---

あなたは 業務システムのWebアプリケーション を開発しています。

* 例えば...
  - 出退勤管理システム
  - 受注管理システム
  - 生産管理システム

---

「帳票が欲しい」という要望が来たら？

---

サーバーサイドでファイルを生成してダウンロードさせよう...

* どのライブラリを使おう...? (Apache POI, JasperReport, etc...)
* どこにファイルを出力しようかな...?
* ダウンロードが済んだファイルはどうしよう...?

---

実際に実装してみると、結構想定外なことが起こる

* 出力先のフォルダのアクセス権がない
* 出力しようと思ったらディスク容量が一杯
* 帳票作成に時間がかかる

---

どれもサーバーサイドでファイルを生成する事に起因

---

じゃあ、クライアントサイドでやりゃいいじゃん

---

* どこにファイルを出力しようかな...?
* ダウンロードが済んだファイルはどうしよう...?
* 出力先のフォルダのアクセス権がない
* 出力しようと思ったらディスク容量が一杯
* 帳票作成に時間がかかる

*考慮する必要なし！*

---

## 対象ブラウザ

* Chrome
* Firefox
* Edge
* Internet Explorer 11

---

## HTML印刷の注意点

* 背景は印刷されない
* 1px未満の線は印刷されない
* ブラウザ印刷時のヘッダー/フッターは自分で削除

---

## *紙っぽく* 画面表示する

```css
.sheet {
  width: 210mm;
  height: 296mm;
  page-break-after: always;
}
/* プレビュー用のスタイル */
@media screen {
  body {
    background: #eee;
  }
  .sheet {
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0,0,0,.3); /* ドロップシャドウ */
    margin: 5mm;
  }
}
```

---

![画面表示](https://qiita-image-store.s3.amazonaws.com/0/1858/3bb64f25-6591-6100-d709-9ae4531cb541.png)

---

## 印刷用紙の指定: `@page`

CSSで印刷時の紙サイズを指定できる

```css
@page { size: A5 }           /* A5タテ */
@page { size: A5 landscape } /* A5ヨコ */
@page { size: A4 }           /* A4タテ */
@page { size: A4 landscape } /* A4ヨコ */
@page { size: A3 }           /* A3タテ */
@page { size: A3 landscape } /* A3ヨコ */
```

---

### 参考: 用紙サイズ

* A3: 297mm x 420mm
* A4: 210mm x 297mm
* A5: 148mm x 210mm
* B4: 257mm x 364mm
* B5: 182mm x 257mm

出典: [用紙サイズ一覧.com](http://www.size-info.com/)

---

あとは HTML, CSS, JavaScript でゴリゴリ画面を作るだけ！

---

## 参考

* [そろそろ真面目に、HTMLで帳票を描く話をしようか](http://qiita.com/cognitom/items/d39d5f19054c8c8fd592)