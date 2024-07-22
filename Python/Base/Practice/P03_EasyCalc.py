import tkinter

# インスタンス化
root = tkinter.Tk()

# ウィンドウの設定
# ウィンドウのタイトル
root.title("簡易電卓")
# ウィンドウのサイズ
# サイズ宣言がない場合はオートレイアウト
# root.geometry("200x210")

# フレーム宣言
# デザインを整えるため、ウィジェットをまとめるウィジェット
frame01 = tkinter.Frame()
frame02 = tkinter.Frame()
frame03 = tkinter.Frame()
frame04 = tkinter.Frame()

# ラベルの設定
lb01 = tkinter.Label(frame01, text="値1:")
lb02 = tkinter.Label(frame02, text="値2:")
lbAns = tkinter.Label(frame03, text="答え")

# 入力フォームの設定
input01 = tkinter.Entry(frame01)
input02 = tkinter.Entry(frame02)

ADD = 1
SUB = 2
MUL = 3
DIV = 4


def calc(mode):
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())

        if mode == ADD:
            output = num01 + num02
        elif mode == SUB:
            output = num01 - num02
        elif mode == MUL:
            output = num01 * num02
        elif mode == DIV:
            if num02 == 0:
                raise ZeroDivisionError("0で割ることはできません")
            output = num01 / num02
    except ValueError:
        output = "エラー: 有効な数値を入力してください"
    except ZeroDivisionError as e:
        output = f"エラー: {str(e)}"
    finally:
        lbAns.configure(text=output)


# ボタンの設定
butAdd = tkinter.Button(frame04, text="加算", command=lambda: calc(ADD))
butSub = tkinter.Button(frame04, text="減算", command=lambda: calc(SUB))
butMul = tkinter.Button(frame04, text="乗算", command=lambda: calc(MUL))
butDiv = tkinter.Button(frame04, text="除算", command=lambda: calc(DIV))

# デザインの設定
# フレーム
frame01.pack()
frame02.pack()
frame03.pack()
frame04.pack()

# ウィジェット
lb01.pack(side=tkinter.LEFT)
input01.pack(side=tkinter.LEFT)
lb02.pack(side=tkinter.LEFT)
input02.pack(side=tkinter.LEFT)
lbAns.pack(side=tkinter.LEFT)
butAdd.pack(side=tkinter.LEFT)
butSub.pack(side=tkinter.LEFT)
butMul.pack(side=tkinter.LEFT)
butDiv.pack(side=tkinter.LEFT)


root.mainloop()