import random

# =============
# 反復構文
# =============

print("--- for文 ---")
# 配列の要素を一つずつ取り出す繰り返し処理を行う。

print("0 - 9")
for i in range(10):
    print(i, end=",")
print()

print("0 - 9")
for i in range(1, 10):
    print(i, end=",")
print()

print("文字を一文字ずつ取り出す")
str01 = "abcdefg"
for c in str01:
    print(c, end=",")
print()

print("--- while文 ---")
print("0 - 9")
int01 = 0
while int01 < 100:
    print(int01, end=",")
    int01 += 1
print()

print("-- continue,break --")
# 乱数を発生させて
# 3の倍数のときは何も表示しない (continue)
# 3の倍数では無い時はメッセージ
# 4の時は終了 (break)

# 乱数ライブラリのインポート

count = 0

while True:
    # カウントアップ
    count += 1
    # 乱数を発生
    rnd = random.randint(1, 9)
    # 値の表示
    print(f"{count} : {rnd}")
    if rnd == 4:
        # whileを終了
        break
    elif rnd % 3 == 0:
        # whileの先頭に戻る
        continue
    print("3の倍数じゃないよ！")
print(f"{count}回繰り返しました。")

print("-- elseについて --")
# forとwhileに対するelseについて
arr01 = ["A", "B", "C", "D"]
# ループが正常に終了した場合（breakで中断されなかった場合）にelseブロックが実行される
for element in arr01:
    print(element, end=",")
else:
    print("出力完了")

print("-- elseとbreakについて --")
# breakで終了した場合はelseが実行されない
for element in arr01:
    print(element, end=",")
    if element == "C":
        break
else:
    print("出力完了")

# おまけ
# 配列の要素と添字を扱いたい時にenumerate関数を利用する。
arr02 = ["りんご", "みかん", "もも", "ぶどう", "メロン"]
for index, element in enumerate(arr02, 1):
    print(index, element)
