# Rocky Linux + Apache Dockerイメージの使い方

## 1. Dockerイメージのビルド
このディレクトリで以下のコマンドを実行してください。

```bash
docker build -t rocky:apache01 .
```

## 2. コンテナの起動
ビルドしたイメージからコンテナを起動します。

```bash
docker run -d -p 8080:80 --name rocky-httpd01 rocky:apache01
```

- `-d` : バックグラウンドで起動
- `-p 8080:80` : ホストの8080ポートをコンテナの80ポートに割り当て
- `--name rocky-httpd01` : コンテナ名を指定

## 3. 動作確認
ブラウザで `http://localhost:8080` にアクセスすると、
`Hello from Rocky Linux 9.3` というメッセージが表示されます。

## 4. コンテナの停止・削除
```bash
docker stop rocky-httpd01
# コンテナを削除する場合
docker rm rocky-httpd01
```
