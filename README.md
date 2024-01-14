# どすこい塾Webサイト！

URL : [https://dosukoi-juku.github.io/DosukoiWebSite/](https://dosukoi-juku.github.io/DosukoiWebSite/)

# 概要
HTML、CSS、JavaScriptを使ったシンプルなサイトです。
ターミナルのイメージで作成しています。

## メンバー情報
メンバーは members.json で管理しています。
将来的にサーバーと通信することを予想して JSON で管理するようにしています。

# contribution
基本的にIssue、PullRequestはWelcomeです。

内容の変更等はIssue、PRからお願いします。

## アイコンの編集
アイコンは、[Font Awesome](https://fontawesome.com/search)を使っています。
members.json の `"platforms":` に該当するアイコンを追加していきます。
追加する箇所は、`<i class="fa-brands fa-android"></i>` の `fa-`以下の文字列です。
例えば、[android](https://fontawesome.com/icons/android?f=brands&s=solid) を追加したい場合は、`fa-android` の `android` を `"platforms"` に追加していきます。

## ローカル環境での編集
このリポジトリをクローンして、プロジェクトファイルに移動します。

```sh
git clone git@github.com:dosukoi-juku/DosukoiWebSite.git
cd DosukoiWebSite
```

以下のコマンドをターミナル上で入力し、ローカルサーバーを起動します。
これによって、メンバー情報が `API/members.json` から読み込まれます。
```ruby
# Ruby の場合
ruby -run -ehttpd . -p8000
```

[MIT](./LICENSE.txt)
