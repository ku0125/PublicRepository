# =============
# クラス
# =============


class Car:
    # クラス変数の宣言 jsでいうところのプロパティ
    # イニシャライザで宣言した場合は下記を省略できる
    # speed = 0
    # number = 0

    # イニシャライザ(初期化メソッド)

    # defの引数はselfを入れるとアクセスできるようになる jsでいうところのthis
    # 初期化と宣言を同時に行える
    def __init__(self, speed=0, number=0):
        # アトリビュートの初期化処理
        self.speed = speed
        self.number = number

    # メソッド
    # 情報表示メソッド
    def disp(self):
        print("--------")
        print(f"番号:{self.number}")
        print(f"速度:{self.speed}")


# クラス変数へのアクセス
Car.number = 100
Car.speed = -100

# イニシャライザ引数のselfは無視してよい
car01 = Car(30, 50)
car01.disp()

# アトリビュートへのアクセス
# 簡単に値を書き換えられる
car01.number = 10
car01.speed = 5
car01.disp()

car02 = Car(5, 2)
car02.disp()

# 引数名を指定して代入できる
car03 = Car(number=100)
car03.disp()

# クラス変数へのアクセス
print(Car.number)
print(Car.speed)

print("------ 継承 ------")


class CarEx(Car):
    # 加速メソッド
    def accel(self, speed=1):
        self.speed += speed

    # オーバーライド
    def disp(self):
        print("--------")
        print(f"車種：{self.__class__.__name__}")
        # 親のメソッドの呼び出し
        super().disp()


carEx01 = CarEx()
carEx01.disp()
carEx01.accel(5)
carEx01.disp()


# 多重継承


# 人を乗せる機能を持った物
class Mobile:
    def __init__(self, driver="名無しさん"):
        self.driver = driver

    def disp(self):
        print(f"運転：{self.driver}")


# CarExに人を乗せる機能を追加
class Vehicle(CarEx, Mobile):
    def __init__(self, speed=0, number=0, driver="名無しさん"):
        CarEx.__init__(self, speed, number)
        Mobile.__init__(self, driver)

    def disp(self):
        CarEx.disp(self)
        Mobile.disp(self)


vehicle01 = Vehicle()
vehicle01.disp()

vehicle02 = Vehicle(driver="山本")
vehicle02.disp()
vehicle02.accel(15)
vehicle02.disp()


# プロトタイプベース
class Robot:
    pass


robot01 = Robot()
robot01.name = "一号機"


def disp(self):
    print(self.name)


robot01.disp = disp
robot01.disp2 = lambda self: print(self.name)

robot01.disp(robot01)
robot01.disp2(robot01)

robot02 = Robot()
robot02.name = "二号機"

robot01.disp2(robot02)
# robot02.dispは定義していないのでエラー
# robot02.disp(robot02)
