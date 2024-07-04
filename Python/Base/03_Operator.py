# =============
# 演算子
# =============

print("--- 演算子 ---")
print("--- 四則演算子 ---")

# 標準入力input()
str01 = input("値1を入力してください:\n>")
# 型変換(文字列型→整数型)
int01 = int(str01)
int02 = int(input("値2を入力してください:\n>"))

# 加算
print(int01 + int02)
# 減算
print(int01 - int02)
# 乗算
print(int01 * int02)
# 除算
print(int01 / int02)
print(type(int01 / int02))
# 商
print(int01 // int02)
print(type(int01 // int02))
# 剰余算
print(int01 % int02)
print(type(int01 % int02))
# 冪（べき）乗・累乗
print(int01 ** int02)

print("--- 代入演算子 ---")
# 代入
int03 = 10
print(int03)
# 加算代入等
int03 += 3
print(int03)
int03 **= 4
print(int03)

# インクリメント、デクリメントは存在しない
# i = 10
# i++
