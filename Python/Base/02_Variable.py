# -------------
# 変数とデータ型
# -------------

# 変数の宣言は不必要
print("--- 整数型 ---")
int01 = 123
print(int01)

# データ型の表示
print(type(int01))
print(type(10))

print("10進数")
print(10)
print("2進数")
print(0b10)
print("8進数")
print(0o10)
print("16進数")
print(0x1F)

print("--- 浮動小数点型 ---")
float01 = 1.23
print(float01)
print(type(float01))

# 指数指定
print(1.2e-5)
print(type(1.2e-5))

print("--- 文字列型 ---")
str01 = "abc"
str02 = "abc"

print(str01, str02)
print(type(str01), type(str02))

print("--- 論理型 ---")
# PythonはTrue大文字 小文字だとエラー
bool01 = True
bool02 = False

print(bool01, bool02)
print(type(bool01), type(bool02))
