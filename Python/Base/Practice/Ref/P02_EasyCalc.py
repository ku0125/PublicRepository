import tkinter as tk

# インスタンス化
root = tk.Tk()

# ウィンドウの設定
# ウィンドウのタイトル
root.title("簡易電卓")
# ウィンドウのサイズ
# サイズ宣言がない場合はオートレイアウト
# root.geometry("200x210")

# フレーム宣言
# デザインを整えるため、ウィジェットをまとめるウィジェット
frame01 = tk.Frame()
frame02 = tk.Frame()
frame03 = tk.Frame()
frame04 = tk.Frame()

# ラベルの設定
lb01 = tk.Label(frame01, text="値1:")
lb02 = tk.Label(frame02, text="値2:")
lbAns = tk.Label(frame03, text="答え")

# 入力フォームの設定
input01 = tk.Entry(frame01)
input02 = tk.Entry(frame02)


def add():
    # 加算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 + num02)


def sub():
    # 減算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 - num02)


def mul():
    # 乗算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 * num02)


def div():
    # 除算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 / num02)


# ボタンの設定
butAdd = tk.Button(frame04, text="加算", command=add)
butSub = tk.Button(frame04, text="減算", command=sub)
butMul = tk.Button(frame04, text="乗算", command=mul)
butDiv = tk.Button(frame04, text="除算", command=div)

# デザインの設定
# フレーム
frame01.pack()
frame02.pack()
frame03.pack()
frame04.pack()

# ウィジェット
lb01.pack(side=tk.LEFT)
input01.pack(side=tk.LEFT)
lb02.pack(side=tk.LEFT)
input02.pack(side=tk.LEFT)
lbAns.pack(side=tk.LEFT)
butAdd.pack(side=tk.LEFT)
butSub.pack(side=tk.LEFT)
butMul.pack(side=tk.LEFT)
butDiv.pack(side=tk.LEFT)


root.mainloop()
