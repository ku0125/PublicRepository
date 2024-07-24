# =============
# モジュール
# =============


# クラスの作成
# メンバークラス
class Member:
    def __init__(self, name, age):
        self.name = name
        self.age = age


print(f"{__name__}を読み込みました。")

# 単体で実行した時に実行する
if __name__ == "__main__":
    print("---- テストコード ----")
    member01 = Member("山本", 36)
    print(f"私の名前は{member01.name}です。")
    print(f"私の年齢は{member01.age}です。")
