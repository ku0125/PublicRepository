import tkinter as tk
import random
import json
import os

# グローバル変数
names = []
result = []

def load_names():
    global names
    try:
        with open("names.json", "r") as file:
            names = json.load(file)
    except FileNotFoundError:
        names = []

def save_names():
    with open("names.json", "w") as file:
        json.dump(names, file)

def load_results():
    global result
    try:
        with open("results.json", "r") as file:
            result = json.load(file)
    except FileNotFoundError:
        result = []

def save_results():
    with open("results.json", "w") as file:
        json.dump(result, file)

def register_name():
    name = name_entry.get()
    if name:
        count = sum(1 for n in names if n.startswith(name))
        if count > 0:
            name = f"{name}{count + 1}"
        names.append(name)
        update_names_label()
        save_names()
        name_entry.delete(0, tk.END)
        result_label.config(text="")
    else:
        show_message("警告", "名前を入力してください")

def show_message(title, message):
    result_label.config(text=f"{title}: {message}")

def update_names_label():
    names_text = "登録された名前:\n" + "\n".join(names)
    names_label.config(text=names_text)

def pick_random():
    global result
    if not names:
        show_message("警告", "名前が登録されていません")
        return

    if len(result) == len(names):
        show_message("情報", "全ての名前が選ばれました")
        return

    remaining_names = [name for name in names if name not in result]
    picked_name = random.choice(remaining_names)
    result.append(picked_name)
    update_result_label()
    save_results()

def update_result_label():
    result_text = "結果:\n" + "\n".join(f"{i + 1}. {name}" for i, name in enumerate(result))
    result_name_label.config(text=result_text)

def reset_data():
    global names, result
    names = []
    result = []
    save_names()
    save_results()
    update_names_label()
    update_result_label()
    result_label.config(text="データがリセットされました")

    if os.path.exists("names.json"):
        os.remove("names.json")
    if os.path.exists("results.json"):
        os.remove("results.json")

# メインウィンドウの設定
root = tk.Tk()
root.title("ランダムで当てるアプリ")
root.geometry("300x800")

# GUI要素の作成と配置
name_entry = tk.Entry(root)
name_entry.pack(pady=10)

register_button = tk.Button(root, text="名前を登録", command=register_name)
register_button.pack()

names_label = tk.Label(root, text="登録された名前:")
names_label.pack(pady=10)

pick_button = tk.Button(root, text="一人選択", command=pick_random)
pick_button.pack()

result_name_label = tk.Label(root)
result_name_label.pack(pady=10)

result_label = tk.Label(root)
result_label.pack(pady=10)

reset_button = tk.Button(root, text="リセット", command=reset_data)
reset_button.pack(pady=10)

# 初期化
load_names()
load_results()
update_names_label()
update_result_label()

root.mainloop()