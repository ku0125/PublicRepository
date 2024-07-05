# =============
# 関数
# =============


# 関数の定義
def add(x, y):
    print(x + y)


# 関数の呼び出し
add(3, 5)
add("aaa", "bbb")

# add(3, "aaa")
# TypeError: unsupported operand type(s) for +: 'int' and 'str'


# 型指定
def add2(x: int, y: int):
    print(x + y)


# エラーにならない
add2("a", "b")


# キャストで対策
def add_ex(x, y):
    # キャスト
    num1 = int(x)
    num2 = int(y)
    print(num1 + num2)


add_ex("1", 3)


# 型確認で対策
def add_ex2(x, y):
    if isinstance(x, (int, float)) and isinstance(y, (int, float)):
        print(x + y)


add_ex2("3", 3)
add_ex2(5, 3)
add_ex2(5.3, 3.2)


# 戻り値
def add_re(x, y):
    return x + y


print(add_re(4, 6))


# 仮引数の指定
def say(name, msg):
    print(f"{name}さんは『{msg}』と言っている。")


say("A", "こんにちは")
say(msg="こんばんは", name="B")


# デフォルト引数(デフォルト引数を指定できるのは後ろの引数のみ)
def say(msg, name="名無しの権兵衛"):
    print(f"{name}さんは『{msg}』と言っている。")


say(msg="こんばんは")
