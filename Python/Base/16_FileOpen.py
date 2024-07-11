# =========
# ファイルの読み書き
# =========

# ファイルをオープン（読み込み専用）
inputFile = open("InputOutput/input.csv", encoding="utf-8")

# ファイルを一行ずつ読み込む処理
print("---ファイルを一行ずつ読み込む処理---")
for line in inputFile:
    # 一行ずつ文字列データを表示
    # print(line,end="")
    # 文字列データを配列に変換
    list = line.split(sep=",")
    print(list)

# 読込中の場所を最初に戻す
inputFile.seek(0)

# テキストデータ、全て読み込む
print("--- 全て読み ---")
text = inputFile.read()
print(text)

# 改行コードが\rの時
lines = text.split("\r")
if len(lines) == 1:
    # 改行コードが\nの時
    lines = text.split("\n")
print(lines)

memberList = []
for line in lines:
    memberList.append(line.split(","))
print(memberList)

# 読込中の場所を最初に戻す
inputFile.seek(0)

# 次の行を読み込む
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")
print(inputFile.readline(), end="")

# 読込中の場所を最初に戻す
inputFile.seek(0)

# 次の行を読み込むデータを配列で取得
print(inputFile.readlines())

# ファイルのハンドリングを終了
inputFile.close()

# ファイルをオープン（書き込み専用）
outputFile = open("InputOutput/output.csv", "wt", encoding="utf-8")
outputFile.write("No.,名前,年齢,性別\n")

for data in memberList:
    outputFile.write(",".join(data) + "\n")

outputFile.close()

# withバージョン
# blockを抜けると自動的にクローズが実行される。
with open("InputOutput/input.csv", encoding="utf-8") as csv:
    print(csv.read())
