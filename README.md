## 1. 環境構築

#### 1-1 依存関係の構築 & プログラムの実行

```bash
# install dependencies
$ yarn install
$ yarn dev
# or
$ npm install
$ npm run dev
```

---

<br/>

#### 1-2 Firebase の設定

Firebase Console から 設定データを取得する。 <br/>
[設定ファイルをダウンロードする](https://support.google.com/firebase/answer/7015592?hl=ja&ref_topic=6400762#zippy=%2C%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AE%E5%86%85%E5%AE%B9)

`.env.local`を作成、設定データをファイルに追加する。(`.env.example`ファイルを参照)

#### 1-3 Visual Studio Code の拡張機能

Visual Studio Code を利用する場合は、以下の拡張機能をインストールします。

| 拡張機能                               | インストール条件 |
| -------------------------------------- | ---------------- |
| ESLint                                 | 推奨             |
| Prettier - Code formatter              | 推奨             |
| ES7+ React/Redux/React-Native snippets | 推奨             |

---

<br/>

## 2. ブランチルール

Pull Request を送る際のブランチは、以下のネーミングルールに従ったブランチにしてください。
また merge 後はブランチを削除すること。

### 2-1. ブランチの命名規則

| 種類               | ブランチのネーミングルール             |
| ------------------ | -------------------------------------- |
| 機能追加系         | `feature/2022_01_05/branch_title_name` |
| ホットフィックス系 | `hotfix/2022_01_05/branch_title_name`  |

### 2-2. 主要ブランチ

| 目的         | ブランチ    | 確認 URL            | 備考                                                                                    |
| ------------ | ----------- | ------------------- | --------------------------------------------------------------------------------------- |
| ステージング | development | https://........../ | base branch。基本は、この`development`ブランチに Pull Request を送ってください。        |
| 本番         | main        | https://........../ | `develop`(ホットフィックスを除いて)以外のブランチから`main`へのプルリクは原則禁止です。 |

---

<br/>

## 3. 開発ルール

- [命名ルール](https://www.notion.so/89f3e011e0984acdacb8f9b1d2a0c66e)
- [開発者ルール](https://www.notion.so/238e59e066fd4005af59a5abbd894872)
- [API 作成ルール](https://www.notion.so/API-304cc651dbe04fe999be2dfd7f262bf8)
- [コーディング規約(script)](https://www.notion.so/script-754f0eee403c46fea8af1e8c4e4cc421)
- [コードレビュールール](https://www.notion.so/669b7eabdf4c4bcf9ff55f2badfc8ea3)

---

<br/>

## 4. 使用言語・ライブラリ

- React(Next.js)
- Material UI
- Redux & redux-toolkit
- storybook

---

<br/>

## 5. ディレクトリ構成

- types/

  > アプリケーション全体で汎用的に使える型を配置する

- src/components/・・・/{ディレクトリ名}

  > UI コンポーネントを配置する。<br>
  > Atomic Design の分類に基づいてコンポーネント振り分ける。<br>
  > ex.) .../components/Input.tsx

- src/hooks/

  > 汎用的な react hooks ユーティリティを配置。<br>
  > 特定のコンテキストに依存しないようにする。<br> >
  > 命名ルール: `use-{name}.ts`

- utils/

  > ライブラリの初期化をするファイル等を配置。

- src/pages/

  > Nextjs でルーティングされるページコンポーネントを配置する。

- src/stores/

  > グローバル状態を管理する hooks を配置する。

- src/styles/
  > 全体的なスタイリングに関するファイルを配置する。

---

<br/>

## 6. Storybook について

stories.tsx ファイルは

- /Sample
  - /Sample.tsx
  - /Sample.stories.tsx

のように配置してください。

Story の作成方針としては基本的に共通の Template を作成したあと以下のコードのようにそれぞれの story ごとに bind し引数を与えてください。

title はコンポーネントの分類(Atoms, Molecules etc...)をプレフィックスとしてつけた後にコンポーネント名を書いてください(e.g. `Atoms/Sample`)

また今回 storybook の導入に対して figma 用のプラグインを導入しています。
figma アプリの右上の Share ボタンをクリックした後、出現する以下の画像のモーダルから Copy link をクリックし以下のコードのように url を指定すると Storybook 内で figma が見れるようになります。

![image](https://user-images.githubusercontent.com/49422601/151144619-06e0c978-3423-4db0-9a98-54feb7f083c6.png)

```tsx
export default {
  title: 'Atoms/Sample',
  component: Sample,
  decorators: [withDesign]
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: Props) => <Input {...args} />;

export const SimpleInput = Template.bind({});

SimpleInput.args = {
  value: '値',
  type: 'text',
  placeholder: '値入力'
};

SimpleInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Db6UcdyXxHEEP6tGIjZhFb/Scheeme-finance-super-app---UI-Kit_saka-edit?node-id=2665%3A26079'
  }
};
```

<br/>

## 7. テストについて

#### 7-1 使用ライブラリ

- Jest
- testing-library/react
- cypress
- testing-library/cypress

#### 7-2 テストコマンド

```bash
# Jest(Unitテスト)
$ yarn unit
# Cypress(E2Eテスト)
$ npx cypress open
$ yarn cy:run
```

#### 7-3 テストの粒度について

**unit テスト** <br>
※ 非同期処理のテストはモックを作成する(api は api でテストを書くため) <br/>

- 条件分岐
- 計算式
- api
- 複雑な処理
- Redux <br/>

**Integration テスト(コンポーネント)** <br>
下記理由のためIntegrationテストは不必要と考えています。
- 基本的にロジックはpagesに書く方針のため、E2Eテストと重複
- Atoms等についてはMUIをラップしてるいるため、テストを書く必要性が少ない。
<br/>

**E2E テスト**

- 「レンダリング」レスポンスで正確な内容をレンダリングしてるか
- 「パーミッション」はレスポンスと権利状態に基づいてユーザーにその許可を与えているか、表示は正しいかなどを判断します。
- 「バリデーション」で、ユーザーがフォームを送信または入力する際に、その入力が正しいかを検証します。
- 「アクション」は、ユーザーによるボタンのクリックやフォーム送信の際、正確なリクエストを生成して DOM を正確に更新しているかです。
