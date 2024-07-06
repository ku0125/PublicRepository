# =============
# print関数の使い方
# =============

# int01 = int(input("値1を入力してください。\n>"))
# int02 = int(input("値2を入力してください。\n>"))
int01 = 100
int02 = 200

# 複数のデータ出力
print(int01, int02, "abc")
# 区切り文字の変更(defaultは" "(半角スペース))
print(int01, int02, "abc", sep="/")
# 語尾文字の変更(defaultは"\n"(改行コード))
print(int01, int02, "abc", end="です。")
print(int01, int02, "abc", end="です。")
print(int01, int02, "abc", end="です。\n")
print(int01, int02, "abc", end="です。\n")
# 組み合わせることもできる。
print(int01, int02, "abc", sep="/", end="です。\n")
print(int01, int02, "abc", end="です。\n", sep="/")

print("--- 文字列内変数の展開 ---")
# ,で区切る
print(int01, int02, "abc", end="です。\n")
# formatメソッド(printではなくstrの機能)
str01 = "数値{}です。".format(int01)
print(str01)
str01 = "数値{}と{}です。".format(int01, int02)
print(str01)
str01 = "数値{1}と{0}です。".format(int01, int02)
print(str01)
str01 = "数値{A}と{B}です。".format(A=int01, B=int02)
print(str01)

# 文字連結
str01 = "abc" + "def"
# str01 = "abc" + int01
print(str01)
str01 = "abc" * 3
print(str01)

# 書式化演算子
str01 = "数値%d" % int01
print(str01)
str01 = "数値%f" % int01
print(str01)
str01 = "数値%s" % int01
print(str01)

# なんとかリテラル
# フォーマット済み文字列リテラル
str01 = f"数値{int01}"
print(str01)

# 生リテラル
str01 = r"abc/def/ghi\n\n\n"
print(str01)
str01 = "abc/def/ghi\n\n\n"
print(str01)

# バイト列リテラル
str01 = b"abc/def/ghi\n\n\n"
print(str01)
print(type(str01))

# Unicodeに変換する
str01 = "abc/def/ghi\n\n\n"
print(str01)
print(type(str01))

# 文字コード指定
str01 = "abc/def/ghi\n\n\n".encode("utf-8")
print(str01)
print(type(str01))
