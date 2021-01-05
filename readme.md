# ウシのチキンレース

ウシでチキンレースをするゲーム。

## 開発のお話

### 動作環境

以下はirokaruの開発環境とも言えるもの。

- nodejs v14.x.x
- npm 6.14.x
- yarn v1.22.x

### 準備

```bash
# npm派
npm install

# yarn派
yarn
```

### 各種コマンド

#### ホットリロード付きdevコンパイル

```bash
# npm
npm run dev

# yarn
yarn run dev
```

#### 本番向けコンパイル

```bash
# npm
npm run build

# yarn
yarn run build
```

#### lint

```bash
# npm
npm run lint

# yarn
yarn run lint
```

### commit 時の挙動について

commit 時には husky を利用した eslint のコードチェックが実施される。エラーが出て commit に失敗したら、 lint の指示通りにソースコードを修正すること。
