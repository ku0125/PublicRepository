# =============
# タイマー
# =============
from datetime import datetime
from threading import Timer
import time

# 現在時刻を取得
date01 = datetime.now()
# そのまま表示
print(date01)
# フォーマット設定して表示
timeStr01 = date01.strftime("%Y/%m/%d %H:%M:%S")
print(timeStr01)


# ======
# 遅延実行
# ======
# 遅延実行(コールバック関数)
def dutation():
    print("遅延実行されました。")
    # 現在時刻を取得
    date02 = datetime.now()
    # フォーマット設定して表示
    timeStr02 = date02.strftime("%Y/%m/%d %H:%M:%S")
    print(timeStr02)


# 遅延実行
# 設定
thread01 = Timer(5, dutation)
# 開始
thread01.start()

# ======
# 定期実行
# ======

# 定期実行終了フラグ
stopFlag = False


# 定期実行(コールバック関数)
def tick():
    # 定期実行したい処理
    print("定期実行されました。")
    # 現在時刻を取得
    date03 = datetime.now()
    # フォーマット設定して表示
    timeStr03 = date03.strftime("%Y/%m/%d %H:%M:%S")
    print(timeStr03)

    # Trueになるまで実行
    if not stopFlag:
        # 定期実行関数の再帰登録
        thread03 = Timer(1, tick)
        thread03.start()


# 定期実行
# 設定
thread02 = Timer(1, tick)
# 開始
thread02.start()

# 10秒間強制的にプログラムを一時停止
time.sleep(10)

# 定期実行終了フラグ
stopFlag = True
