// HP
import Setouchi from "../../images/works/setouchi.png"
import Confidence from "../../images/works/confidence.png"
import Remaker from "../../images/works/remaker.png"
import Tuda from "../../images/works/tuda.png"
import Portfolio from "../../images/works/portfolio.png"
import GogoIsland from "../../images/works/gogoisland.png"

// WEB site
import Hearbvest from  "../../images/works/hearbvest.png"
import Micropost from "../../images/works/micropost.png"
import NewsApp from "../../images/works/NewsApp.png"
import QuoteApp from "../../images/works/quote-table.png"
import ReactWeather from "../../images/works/react-weather.png"
// Other
import TypingGame from "../../images/works/typing-game.png"
import MusicPlayer from "../../images/works/music-player.png"
import GAS from "../../images/works/GoogleAppScript.png"

// lang
import html from "../../images/lang/html.svg";
import css from "../../images/lang/css.svg";
import sass from "../../images/lang/sass.svg";
import javascript from "../../images/lang/javascript.svg";
import jquery from "../../images/lang/jquery.svg";
import nodejs from "../../images/lang/nodejs.svg";
import express from "../../images/lang/express.svg";
import react from "../../images/lang/react.svg";
import gatsby from "../../images/lang/gatsby.svg";
import gatsbyCloud from "../../images/lang/gatsby-cloud.svg";
import mui from "../../images/lang/material-ui.svg";
import php from "../../images/lang/php.svg";
import wordpress from "../../images/lang/wordpress.svg";
import mysql from "../../images/lang/mysql.svg";
import gas from "../../images/lang/google_script_apps_logo_icon.svg";
import slack from "../../images/lang/slack.svg";
import trello from "../../images/lang/trello.svg";
import gmail from "../../images/lang/gmail.svg";
import gcalendar from "../../images/lang/g-calendar.svg";
import spreadsheet from "../../images/lang/spreadsheet.svg";
import github from "../../images/lang/github.svg";

export const WorksHP = [
  {
    id: 1,
    name: "GoGoIsland",
    img: GogoIsland,
    title: "GoGoIsland HP制作",
    text: "みかん農家を営んでいるGoGoIslandのHP",
    year: "2022",
    company: "GoGoIsland 様",
    detail: {
      link: "https://gogo-island.com",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "sass",
          img: sass,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "react",
          img: react,
        },
        {
          name: "gatsby",
          img: gatsby,
        },
        {
          name: "php",
          img: php,
        },
      ],
      detailText:
        `みかんが特産品の愛媛県。少しでも多くの方に愛媛県/興居島で育てたみかんを食べてもらいたい。広めたい。という気持ちからHP制作のご依頼をいただきました。
        また、インターネット上で販売も行っていくためにECサイトも一緒に制作させていただきました。
        Instagramにて日々の発信をしておりその内容をHPにも反映させたいというご要望があったため、InstagramのAPIを使用して投稿の内容が反映されるようにしました。
        また、アクセス回数に制限があるためcronを使用して1日1回InstagramのAPIを叩くようにプログラムしました。`,
    },
  },
  {
    id: 2,
    name: "Confidence",
    img: Confidence,
    title: "Personal Gym CONFIDENCE HP制作",
    text: "パーソナルジムを営んでいるPersonal Gym CONFIDENCEのHP",
    year: "2022",
    company: "Personal Gym CONFIDENCE 様",
    detail: {
      link: "https://pg-confidence.com/",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "sass",
          img: sass,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "wordpress",
          img: wordpress,
        },
      ],
      detailText:
        `2022年9月より愛媛県松山市にてスタートをしたPersonal Gym CONFIDENCE。新規立ち上げのためブランドを確立させたいという気持ちからHP制作のご依頼をいただきました。
        スタイリッシュかつ高級感のあるデザインでメニューの内容をわかりやすくしたいとご要望があったため、デザイナーと協力しつつご要望にあったHPを制作させていただきました。`,
    },
  },
  {
    id: 3,
    name: "Remaker",
    img: Remaker,
    title: "株式会社 Remaker 様",
    text: "株式会社Remakerのコーポレートサイト",
    year: "2022",
    company: "株式会社 Remaker 様",
    detail: {
      link: "https://remaker-m.com/",
      detailText:
        `愛媛県松山市にて様々な事業を展開している株式会社Remaker。
        信頼感のあるデザインで事業の内容をわかりやすくしたいとご要望があったため、デザイナーと協力しつつご要望にあったHPを制作させていただきました。
        また、「社員紹介」の部分は社員が増えた際にクライアント側で追加できるように専用の投稿機能を制作しました。`,
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "jquery",
          img: jquery,
        },
        {
          name: "wordpress",
          img: wordpress,
        },
      ],
    },
  },
  {
    id: 4,
    name: "Tuda",
    img: Tuda,
    title: "株式会社ツダ企画 HP制作",
    text: "株式会社ツダ企画のコーポレートサイト",
    year: "2021",
    company: "株式会社 ツダ企画 様",
    detail: {
      link: "https://tsuda-planning.com/",
      detailText:
        `愛媛県松山市にて新築・リノベーションを行っている株式会社ツダ企画。
        信頼感のあるデザインで施工事例を掲載したいとご要望があったため、デザイナーと協力しつつご要望にあったHPを制作させていただきました。
        また、施工事例をクライアント側で掲載可能にするため、新築とリフォームで分けて投稿できる機能を制作しました。
        `,
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "jquery",
          img: jquery,
        },
        {
          name: "wordpress",
          img: wordpress,
        },
      ],
    },
  },
  {
    id: 5,
    name: "Setouchi",
    img: Setouchi,
    title: "有限会社せとうち通商 HP制作",
    text: "有限会社せとうち通商のコーポレートサイト",
    year: "2021",
    company: "有限会社せとうち通商 様",
    detail: {
      link: "https://setouchi-trade.jp/",
      detailText:
        `鉄・非鉄金属スクラップ全般や中古農業用・工業用機械全般の買取を行っている有限会社せとうち通商。
        WEB広告を運用するためHPとは別にLPの制作もさせていただきました。
        HP内のアニメーションはjQueryを使用せずVanilla JSで対応しました。`,
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "wordpress",
          img: wordpress,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Portfolio",
    img: Portfolio,
    title: "ポートフォリオサイト",
    text: "大本 泰史のポートフォリオサイト。",
    year: "2022",
    company: "個人制作",
    detail: {
      link: "https://myportfoliomain43061.gatsbyjs.io/",
      detailText:
        `大本 泰史のポートフォリオサイト。
        エンジニアであれば誰しもが1度は目にしたことのあるであろうプログラミング言語のドキュメントを参考に、
        シンプルなデザインでコンテンツを見やすく、わかりやすくまとめることを意識して制作しました。
        また、爆速でコンテンツが表示されるように、サイトの構築にはGatsbyを使用しユーザーにストレスを与えないサイトを目指しました。
        `,
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "gatsby",
          img: gatsby,
        },
        {
          name: "gatsbycloud",
          img: gatsbyCloud,
        },
      ],
    },
  },
];

export const WorksWEBSITE = [
  {
    id: 1,
    name: "Hearbvest",
    img: Hearbvest,
    title: "Hearbvest フロントエンド開発",
    text: "暮らしに取り入れて欲しい愛媛の産物を紹介・販売するプロジェクト",
    year: "2021",
    company: "株式会社 愛媛新聞社 様",
    detail: {
      link: "https://hearbvest.jp/",
      detailText:
        `暮らしに取り入れて欲しい愛媛の産物を紹介・販売するプロジェクトで、
        「とっておきのものと出会い実り多き人生を過ごせますように」という思いを込めて情報をお届けしています。
        愛媛県の産物を紹介するページは動的なページのため、文字数や画像が変更されても綺麗に表示されるように対応しました。
        `,
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
      ],
    },
  },
  {
    id: 2,
    name: "Micropost",
    img: Micropost,
    title: "Micropost -ひとこと掲示板-",
    text: "Node.jsで作成したひとこと掲示板です",
    year: "2022",
    company: "個人制作",
    github: "https://github.com/taic-dev/Micropost",
    detail: {
      link: "",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "nodejs",
          img: nodejs,
        },
        {
          name: "express",
          img: express,
        },
        {
          name: "mysql",
          img: mysql,
        },
      ],
      detailText:
        `JavaScriptの魅力の1つとして、フロントエンドだけでなくバックエンドでも動作させることが可能な点が挙げられる。
        今までバックエンドはPHPでしか構築したことがなかったため、学習の一環としてNode.jsを使用してCRUD機能を開発しました。
        フレームワークのExpressを使用して、Laravelライクな記述をして実装してみました。
        `,
    },
  },
  {
    id: 3,
    name: "NewsApp",
    img: NewsApp,
    title: "ニュースアプリ -最新情報をお届け-",
    text: "Reactを使用して制作したニュースアプリです",
    year: "2022",
    company: "個人制作",
    github: "https://github.com/taic-dev/training_react/tree/main/react-news-api",
    detail: {
      link: "",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "react",
          img: react,
        },
      ],
      detailText:
        `Reactを使用して開発したはじめての制作物です。ReactとAPIを使用してなにか開発してみたいという思いで開発をはじめました。
        News APIを使用して日本の最新のニュースを取得しており、6つのカテゴリのニュースを別々で取得できるようにしている。
        実装方法はカテゴリ名をstateで管理してクリックされたカテゴリによって取得するAPIを分けるようにしている。
        `,
    },
  },
  {
    id: 4,
    name: "QuoteApp",
    img: QuoteApp,
    title: "見積書作成アプリ -PDF化まで楽ちん-",
    text: "Reactを使用して制作した見積書作成アプリです",
    year: "2022",
    company: "個人制作",
    github : "https://github.com/taic-dev/training_react/tree/main/react-quote-table",
    detail: {
      link: "",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "react",
          img: react,
        },
        {
          name: "mui",
          img: mui,
        },
      ],
      detailText:
        `Excelで見積書を作成するのが面倒だったため、より簡単に見積書を作成したいと思いこちらのアプリの開発をはじめました。
        プラスのボタンを押せば簡単に項目を増やすことができ、金額や数量を入力すれば小計と合計を計算してくれます。
        また、右上のPDFのボタンをクリックすればPDF形式で見積書をダウンロードすることもできます。`,
    },
  },
  {
    id: 5,
    name: "WeatherApp",
    img: ReactWeather,
    title: "お天気アプリ -全国のお天気を配信-",
    text: "Reactを使用して制作したお天気アプリです",
    year: "2022",
    company: "個人制作",
    github: "https://github.com/taic-dev/training_react/tree/main/weather-app",
    detail: {
      link: "",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
        {
          name: "react",
          img: react,
        },
        {
          name: "mui",
          img: mui,
        },
      ],
      detailText:
        `Weatherページでは選択された都道府県の天気情報を取得するようにしています。
        また、今日の1時間ごとの天気、今日から1週間の天気を一覧で確認できるようになっています。
        こだわりポイントとして。今日の天気によって背景画像が変更されるようにしています。（快晴、一分曇り、曇、雨 など）

        デフォルトは東京の天気を取得していますが、Locationのページで調べたい都道府県名を入力すると変更されます。
        Open-Meteoや都道府県や市町村、緯度/経度を取得できるAPIを使用して情報を取得しています。
        `,
    },
  },
];

export const Other = [
  {
    id: 1,
    name: "TypingGame",
    img: TypingGame,
    title: "タイピングゲーム -JS関数編-",
    text: "Vanilla JS を使用して制作したタイピングゲームです",
    year: "2022",
    company: "個人制作",
    github: "https://github.com/taic-dev/typingGame_JavaScript",
    detail: {
      link: "https://app-typing-game.herokuapp.com/",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
      ],
      detailText:
        `タイポミスを無くしなるべく早くコードを書くスキルは、エンジニアにとって必要不可欠な能力です。
        JavaScriptの学習を始めたばかりの方は、関数名が長すぎて苦戦されている方が多いのではないでしょうか？
        （自分もその1人でした。）そんな苦戦を強いられている駆け出しJSerのために、JavaScriptの関数をタイピング練習できるゲームを制作しました。
        制限時間は60秒で、タイピング完了（success）とタイピングミス（typo）をカウントするようになっています。
        ※Game Startをした瞬間に音がなるため注意してください！
        `,
    },
  },
  {
    id: 2,
    name: "MusicPlayer",
    img: MusicPlayer,
    title: "Music Player",
    text: "Vanilla JS を使用して制作したMusic Playerです",
    year: "2021",
    company: "個人制作",
    github: "https://github.com/taic-dev/Music-Player",
    detail: {
      link: "https://music-player-taic-dev.herokuapp.com/",
      langs: [
        {
          name: "html",
          img: html,
        },
        {
          name: "css",
          img: css,
        },
        {
          name: "javascript",
          img: javascript,
        },
      ],
      detailText:
        `僕は音楽鑑賞が好きでサブスクの音楽提供サービスのヘビーユーザーです。
        日々サービスを使用している中で、音楽アプリって作れないのかな〜と思ったのが制作のきっかけです。
        JavaScriptを使用して音楽を流せることを知り、限定4曲（フリー音楽素材）で再生できるMusic Playerを制作しました。
        いつもなんとなく使っているMusic Playerですが、いざ自分が制作するとなると難しい機能ばかりで苦戦しました。
        特にMusic Playerのツマミを引っ張って時間帯をずらすと、流れている音楽もその時間帯の内容に変更されるように実装することに苦戦した。
        `,
    },
  },
  {
    id: 3,
    name: "GAS",
    img: GAS,
    title: "GASを使用した業務効率化",
    text: "GASと様々なサービスを紐付けて業務効率化を実施",
    year: "2020",
    company: "個人制作",
    detail: {
      link: "",
      langs: [
        {
          name: "gas",
          img: gas,
        },
        {
          name: "gmail",
          img: gmail,
        },
        {
          name: "gcalendar",
          img: gcalendar,
        },
        {
          name: "spreadsheet",
          img: spreadsheet,
        },
        {
          name: "slack",
          img: slack,
        },
        {
          name: "trello",
          img: trello,
        },
      ],
      detailText:
        `GASの魅力を知ったのはJavaScriptでできていると知った時です。
        ほぼ、JavaScriptの文法なので抵抗感なく使用することができました。
        GASと掛け合わせて使用できるツールがたくさんあるのでGASの沼にどんどん浸かっていきました。
        中でも力を入れたのは、業務の中で使用するGoogle関連のサービスやSlack、Trelloなどと掛け合わせた様々な業務効率化です。
        事務タスクをすべてワンポチ（ボタンを1回クリック）で終わらせることを目標に日々開発に取り組んでいます。
        `,
    },
  },
];
