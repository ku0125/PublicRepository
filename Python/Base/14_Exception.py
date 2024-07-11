# =============
# 例外処理
# =============

# 入力受付

inputStr = input("整数を入力してください。\n>")

# 例外処理
try:
    inputInt = int(inputStr)
    print(inputInt + 100)
# exceptに指定がないとすべての例外を検出
except:
    print("エラー発生")

# 例外処理(エラー指定)
try:
    # 例外が発生する可能性のある処理
    inputInt = int(inputStr)
    print(100 / inputInt)
except ValueError as ex:
    # 例外が発生した時の処理
    print("整数を入力してください。")
    print(ex.args)
except ZeroDivisionError:
    # 例外が発生した時(0除算エラー)の処理
    print("0除算エラーです。")
except:
    # その他の例外が発生した時の処理
    print("想定外のエラーが発生しました。")

# Finallyについて
try:
    inputInt = int(inputStr)
    print(inputInt + 100)
# exceptに指定がないとすべての例外を検出
except:
    print("エラー発生")
finally:
    print("エラーが発生してもしなくても実行します。")
print("プログラムが終了しました。")