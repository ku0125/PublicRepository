# =============
# モジュール
# =============

# クラスを取り込み、利用する
from Member import Member


class ClassMember(Member):
    def __init__(self, name, age, classNumber):
        super().__init__(name, age)
        self.classNumber = classNumber

        # 挨拶メソッド

    def greeting(self):
        print(f"私の名前は{self.name}です。")
        print(f"私の年齢は{self.age}です。")
        print(f"{self.classNumber}クラスの皆さんよろしくお願いいたします。")


member01 = ClassMember("木内", 36, "0037")
member01.greeting()
