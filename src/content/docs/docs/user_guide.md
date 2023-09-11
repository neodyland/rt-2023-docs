---
title: ユーザーガイド
---

RTの導入手順や操作方法等をここには書き記します。

## RTをサーバーに入れる
まずはRTをサーバーに入れなければ何も始まりません。  
[このリンク](https://app.dissoku.net/api/bots/716496407212589087/invite)を開いたところでサーバーを選択して、そのサーバーにRTを入れることができます。

### サーバーを選択する
![image](../../../../assets/invite/1.jpg)

### 認証を押す
![image2](../../../../assets/invite/2.jpg)

### 認証をする
![image2](../../../../assets/invite/3.jpg)

### 導入成功
これで導入成功しました！

## RTの操作方法
### 定義
DiscordではRT関係なくコマンドという言葉が頻繁にでてきます。  
これは、Botを操作するための文書のことを言います。  
コマンドは命令という意味で名前通りBotを命令するためのものです。
### スラッシュコマンド
スラッシュコマンドというのは、Discord公式が用意しているBotを操作するための方法です。  
例えば、テキストチャンネル等で`/ping`と入力してみましょう。  
すると、RTのアイコンと`/ping`と書かれた選択肢が恐らくでてくるはずです。  
(出てこない場合はネットが遅いか何かしらのバグが起きています。)  
その`/ping`と出てきた項目を押してメッセージを送信してみましょう。  
すると、RTが返信してくれるはずです。  
このように、RTに何かを指示するには大抵の場合、コマンド(命令)を書きメッセージで送る必要があります。
### メッセージコマンド
メッセージコマンドはとてもスラッシュコマンドと似ています。  
これは、スラッシュを使わないDiscord公式ではない非公式なBotの命令方法です。  
スラッシュと違い、普通のメッセージを送信して、RTがそのメッセージの内容を見てコマンドを実行するというものです。  
例えば、スラッシュコマンドの時に実行した`ping`コマンドを実行する場合は以下のようになります。  
> `rt!ping`

`/ping`の`/`が`rt!`となっただけです。  
このやり方は大昔からあるやり方で、今もRT以外でもこのやり方で操作するBotが恐らく残っています。  
スラッシュコマンドの場合は、補完という途中まで入力した文字に似たコマンドを表示してくれる機能があったりします。  
ですので、大抵の場合はスラッシュコマンドの方が操作しやすいと思います。  
ちなみに、この例では`rt!`が最初についていますが、これ以外にも`Rt!`や`りつ！`等でも呼び出すことができます。
### コマンドの存在を知る方法
といっても、何のコマンドがどんなことをするのかわからないと、RTを操ることはできません。  
もちろん、それを教えるための取扱説明書なるものが存在します。  
それはヘルプコマンドというものです。  
`/help`(または`rt!help`)と実行してみてください。  
すると、選択ボックスが二つついたメッセージをRTが送信します。  
この選択ボックスでカテゴリーとコマンドを選択することで、コマンドの説明(使用方法)を見ることができます。  
二つの選択ボックスのうち上にあるのが、コマンドの種類を表すカテゴリーの選択ボックスです。  
下にある選択ボックスが、そのカテゴリーに分類されているコマンドの選択ボックスとなります。  
試しに、先ほどから実行している`ping`コマンドを見てみましょう。  
`ping`コマンドはRTカテゴリーに分類されるので、上の選択ボックスからRTを探してRTを選択してみましょう。  
すると、メッセージが編集されてたくさん文章が出てきたと思います。  
出てきた文章は今選択したRTカテゴリーにあるコマンドの一覧です。  
そこに一覧されているコマンドを下の選択ボックスから選択します。  
そのコマンド一覧に`ping`があるはずです。  
下の選択ボックスから`ping`を選択してみましょう。  
すると、一覧が消えて短い文章がでてきたはずです。  
それが`ping`コマンドのヘルプ(説明)です。  
他のコマンドも同じようにして説明を閲覧することができます。

## コマンドの引数
引数というのはコマンド(命令)に入れる追加情報です。  
例えば、RTに「あなたが嫌いなの」または「あなたが好きなの。(NYN姉貴風)」と言わせるためのコマンド`/love`があるとします。  
あなたはRTに「あなたが好きなの」と言わせたいと思い、その言わせるコマンドを実行しようとするとします。  
ですが、その言わせるコマンドは好きではなく嫌いと言わせることもできます。  
あなたは同然嫌いとは言われたくありません。  
なので、RTにして欲しいことを伝える必要があります。  
もちろん、そのコマンドではそれを伝えることができます。  
そういったものが引数で用意されています。  
今回の場合はコマンドの後ろに好きか嫌いをつければいいようです。  
そして、あなたは`/love 好き`と実行して、無事好きと言われました！  
先ほど説明したヘルプコマンドの`/help`も、同じように引数を受け取ることができます。  
その引数に渡すことができる値(もの)はコマンドの名前か検索ワードです。  
例えば、先ほどから実行しまくっている`/ping`コマンドのヘルプを、`/help`の引数を使って選択ボックスを用いずにみてみましょう。  
勘のいい人はもうわかると思います。  
この場合は`/help ping`を実行することでできます。  
RTにヘルプコマンド(助けてくれ命令)に引数(追加情報)として`ping`を付け加えています。  
ここで注意ですが、瞬時に`/help ping`とは入力しないでください。  
コマンドを入力すると引数の選択肢がでてくるので(`/help`の場合は`word`)、それを押してから引数の内容(ここでは`ping`)を入力してください。
実行すると、`ping`のヘルプが出てきたと思います。
### 引数の説明の見方
ヘルプでの引数の見方をここでは説明していきます。  
ヘルプコマンドのヘルプを例としてここでは解説するので、`/help help`でヘルプコマンドのヘルプを表示してください。  

![`/help help`と実行した結果の画像](../../../../assets/help_help.png)  

まず
> **#** 使い方

という見出しの項目を見てください。  
> メッセージ: `rt!help [word=None]`  
スラッシュ: `/help [word=None]`

と書かれていますね。  
`[]`でかか壊れている部分が引数となります。  
`=`の左にあるのが引数の名前で、右にあるのがデフォルトの値です。  
デフォルトの値というのは、引数が未入力の時に代わりに渡される値です。  
今回のデフォルトの値は`None`(空という意味)になっています。  
ヘルプコマンドは引数を指定しない`/help`だけでも動くようになっているので、デフォルト値が`None`(空)なのは納得ですね。  
そして、その下には引数の説明がかかれています。
> word : 文字列, オプション  
　　検索ワードまたはコマンド名

ヘルプコマンドの場合は上記のように書かれています。  
先ほどの引数`word`の説明が書かれてますね。  
はい、RTのヘルプではコマンドと引数の名前を並べたものと、その引数の名前に対応するものを下に書き、それの説明を記載します。  
その引数の説明の書き方は以下のように書かれます。
```
引数名 : 引数が取る値の種類, (オプション(省略可能)かどうか)
    引数の説明
```
ヘルプの説明の詳細については[こちら](reference/help)をご覧ください。

## コンテキストメニュー
コンテキストメニューとは、メッセージをPCのDiscordでは右クリック、スマホやタブレットでは長押しした際にでるメニューのことです。  
ユーザーにも右クリック(スマホやタブレットではタッチ)で、メニューがでてきます。  
RTは、これで選択したメッセージやユーザーに対してなにかしらできるようになっています。  
RTの項目はコンテキストメニューの「アプリ」というところにあります。  
例えば、メッセージのコンテキストメニューのアプリと言う欄に、RTのアイコンと`Translate`というものがあるはずです。  
英語のメッセージを選択して、この`Translate`を押してみてください。  
すると、選択したメッセージが翻訳されます。  
このように選択したメッセージまたはユーザーに対して何かしらのアクションを行う機能がコンテキストメニューです。  
ヘルプでは、コンテキストメニューの〇〇のように書かれると思います。  
また、Discordではこのコンテキストメニューは最大五つまでしか登録できないようになっています。  
そのため、五つ以上登録できるように、`Other`と言う選択肢を作りました。  
この選択肢を押すと、登録しきれなかったコンテキストメニューを選択するように要求されます。  
もし、コンテキストメニューにないのに、ヘルプにはコンテキストメニューにあると書かれている場合は、この`Other`を押してみてください。  
ちなみに、`Other`と言う単語はその他という意味です。