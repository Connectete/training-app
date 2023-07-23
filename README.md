# healthy

## ローカル起動

①dockerでDBを起動
```
cd db
docker-compose up --build
```

②Nest起動

- パッケージインストールとDB準備
```
cd app
npm install
# スキーマからDB作成
npm run prisma:push
# prisma clientへ反映
npm run prisma:generate

# 必要ならDBテストデータ準備
# npm run prisma:generate
```

- 起動
```
npm run start:dev
```
デフォルトでは以下で起動
http://localhost:3001/


## ドキュメント
- docs以下にER図（DB設計）
- openapi配下にAPI設計
  - 以下のコマンドでopen api形式の仕様書を確認可能
```
cd openapi
npx serve
```