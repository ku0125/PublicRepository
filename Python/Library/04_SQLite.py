# =============
# データベース
# =============
import sqlite3

# 接続処理
con = sqlite3.connect("InputOutput/Person.db")

# テーブル生成
# SQLをテキストで準備
# sql = "CREATE TABLE person(id,name,gender,age)"
# SQL実行
# con.execute(sql)

# レコード挿入
# sql = "INSERT INTO person VALUES(1,'木内和也',1,35)"
# con.execute(sql)

# 全件取得
sql = "SELECT * FROM person"
res = con.execute(sql)

# resはカーソル型なので表示できない
# print(res)

for record in res:
    print(record)

# コミット
con.commit()
# 接続解除
con.close()
