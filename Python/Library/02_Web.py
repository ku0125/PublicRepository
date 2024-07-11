# =============
# Web
# =============
import requests
import json

# DogAPI
URL = "https://dog.ceo/api/breeds/image/random"
# リクエストを送信
res = requests.get(URL)
# レスポンスのテキストデータを取得
dat = res.text
# テキストをjson解析(dict型に変換)
dic = json.loads(dat)
# 表示(URL)
print(dic["message"])

# 犬の画像の取得
res2 = requests.get(dic["message"])
# バイナリデータとして取得
dat2 = res2.content
# ファイルを(バイナリデータの)画像データとして書き込む
file = open("InputOutput/dog.jpg", "wb")
# 書き込み
file.write(dat2)
# 書き込み終了
file.close()
