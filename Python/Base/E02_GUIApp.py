import tkinter as tk

# インスタンス化
root = tk.Tk()
# ウィンドウの背景色の指定
root.configure(bg="#00FFFF")

# ウィンドウのタイトル
root.title("自己紹介")
# ウィンドウのサイズ
root.geometry("1600x900")

# ラベルのインスタンス化
lb = tk.Label(text="Hello, Tkinter!")
# ラベルの設置
lb.pack(expand=True)


# キャンパスのインスタンス化
def submit():
    result_label.config(text=f"こんにちは、{e.get()}さん!")


# 入力フォームのインスタンス化
e = tk.Entry(bg="#FF0000")
# 入力フォームの設置
e.pack(anchor=tk.NW)

# ボタンのインスタンス化と同時にコールバック関数の設定
bt = tk.Button(text="送信", command=submit)
# ボタンの設置
bt.pack(anchor=tk.NW)

# ラベルのインスタンス化
result_label = tk.Label(text="")
# ラベルの設置
result_label.pack()

# キャンパスのインスタンス化
c = tk.Canvas(bg="#FFFFFF", height=100, width=100)
# キャンパスの設置
c.pack(anchor=tk.NW)
# 線引き
c.create_line(0, 0, 60, 100, fill="#000000")

# 表示開始
root.mainloop()
