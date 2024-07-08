import tkinter as tk

root = tk.Tk()
root.title("電卓")
root.geometry("500x500")

root.grid_columnconfigure(0, weight=1)
root.grid_rowconfigure(0, weight=1)
root.grid_rowconfigure(1, weight=1)
root.grid_rowconfigure(2, weight=1)
root.grid_rowconfigure(3, weight=1)


def calculate(operation):
    try:
        num1 = int(e1.get())
        num2 = int(e2.get())
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 == 0:
                raise ZeroDivisionError("0で割ることはできません")
            result = num1 / num2
        result_label.config(text=f"結果: {result}")
    except ValueError:
        result_label.config(text="エラー: 有効な数値を入力してください")
    except ZeroDivisionError as e:
        result_label.config(text=f"エラー: {str(e)}")


e1 = tk.Entry(root)
e1.grid(row=0, column=0, padx=5, pady=5, sticky="ew")

e2 = tk.Entry(root)
e2.grid(row=1, column=0, padx=5, pady=5, sticky="ew")


# 入力フォームのインスタンス化と設置
e1 = tk.Entry(root)
e1.grid(row=0, column=0, columnspan=4, padx=5, pady=5, sticky="ew")

e2 = tk.Entry(root)
e2.grid(row=1, column=0, columnspan=4, padx=5, pady=5, sticky="ew")

# ボタンの設置（横並び）
bt1 = tk.Button(root, text="加算", command=lambda: calculate("+"))
bt1.grid(row=2, column=0, padx=5, pady=5)

bt2 = tk.Button(root, text="減算", command=lambda: calculate("-"))
bt2.grid(row=2, column=1, padx=5, pady=5)

bt3 = tk.Button(root, text="乗算", command=lambda: calculate("*"))
bt3.grid(row=2, column=2, padx=5, pady=5)

bt4 = tk.Button(root, text="除算", command=lambda: calculate("/"))
bt4.grid(row=2, column=3, padx=5, pady=5)

# 結果表示用ラベルの設置
result_label = tk.Label(root, text="")
result_label.grid(row=3, column=0, columnspan=4, padx=5, pady=5)

# 表示開始
root.mainloop()
