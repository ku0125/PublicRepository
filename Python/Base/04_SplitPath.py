# =============
# 分岐構文
# =============

int01 = int(input("値を入力してください。\n>"))

print("--- 分岐構文 ---")
print("--- if文 ---")

print("--| if文 |--")
if int01 >= 60:
    print("60点以上です。")

print("--| if-else文 |--")
if int01 >= 60:
    print("60点以上です。")
else:
    print("60点未満です。")

print("--| if-else if-else文 |--")
if int01 >= 80:
    print("80点以上です。")
elif int01 >= 60:
    print("60点以上です。")
else:
    print("60点未満です。")

# 三項演算子
str01 = input("はい[Y]いいえ[N]\n>")
str02 = "[Y]と入力された。" if str01 == "Y" else "[Y]以外が入力された。"
print(str02)

