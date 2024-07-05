import tkinter as tk

root = tk.Tk()

root.title("電卓")
root.geometry("500x500")


def add():
    result = {e1.get()} + {e2.get()}
    result_label.config(text=f"{result}")


def sub():
    result = {e1.get()} + {e2.get()}
    result_label.config(text=f"{result}")


def mul():
    result = {e1.get()} + {e2.get()}
    result_label.config(text=f"{result}")


def div():
    result = {e1.get()} + {e2.get()}
    result_label.config(text=f"{result}")


# 入力フォームのインスタンス化
e1 = tk.Entry(bg="#FF0000")
# 入力フォームの設置
e1.pack(anchor=tk.NW)

# 入力フォームのインスタンス化
e2 = tk.Entry(bg="#FF0000")
# 入力フォームの設置
e2.pack(anchor=tk.NW)

bt1 = tk.Button(text="加算", command=add)
# ボタンの設置
bt1.pack(anchor=tk.NW)
bt2 = tk.Button(text="減算", command=sub)
# ボタンの設置
bt2.pack(anchor=tk.NW)
bt3 = tk.Button(text="除算", command=mul)
# ボタンの設置
bt3.pack(anchor=tk.NW)
bt4 = tk.Button(text="乗算", command=div)
# ボタンの設置
bt4.pack(anchor=tk.NW)

# ラベルのインスタンス化
result_label = tk.Label(text="")
# ラベルの設置
result_label.pack()

# 表示開始
root.mainloop()
