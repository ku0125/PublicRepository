import tkinter as tk

root = tk.Tk()
root.title("電卓")
root.geometry("500x500")


# {e1.get()}→文字列として取得している　数値の変数として持ってくる場合は中かっこ不要


def add():
    result = int(e1.get()) + int(e2.get())
    result_label.config(text=f"結果:{result}")


def sub():
    result = int(e1.get()) - int(e2.get())
    result_label.config(text=f"結果:{result}")


def mul():
    result = int(e1.get()) * int(e2.get())
    result_label.config(text=f"結果:{result}")


def div():
    result = int(e1.get()) / int(e2.get())
    result_label.config(text=f"結果:{result}")


# 入力フォームのインスタンス化
e1 = tk.Entry()
# 入力フォームの設置
e1.pack(anchor=tk.NW)

print(type({e1.get()}))

# 入力フォームのインスタンス化
e2 = tk.Entry()
# 入力フォームの設置
e2.pack(anchor=tk.NW)

bt1 = tk.Button(text="加算", command=add)
# ボタンの設置
bt1.pack(anchor=tk.NW)
bt2 = tk.Button(text="減算", command=sub)
# ボタンの設置
bt2.pack(anchor=tk.NW)
bt3 = tk.Button(text="乗算", command=mul)
# ボタンの設置
bt3.pack(anchor=tk.NW)
bt4 = tk.Button(text="除算", command=div)
# ボタンの設置
bt4.pack(anchor=tk.NW)

# ラベルのインスタンス化
result_label = tk.Label(text="")
# ラベルの設置
result_label.pack(expand=True)


# 表示開始
root.mainloop()
