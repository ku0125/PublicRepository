import tkinter as tk
from tkinter import messagebox
import random
import json


class RandomNameSelector:
    def __init__(self, master):
        # メインウィンドウの設定
        self.master = master
        self.master.title("ランダム名前選択アプリ")
        self.master.geometry("300x400")

        # 名前リストの初期化と読み込み
        self.names = self.load_names()
        self.selected_names = []

        # GUI要素の作成と配置
        self.name_entry = tk.Entry(master)
        self.name_entry.pack(pady=10)

        self.add_button = tk.Button(
            master, text="名前を追加", command=self.add_name
            )
        self.add_button.pack()

        self.select_button = tk.Button(
            master, text="ランダムに選択", command=self.select_random_name
        )
        self.select_button.pack(pady=10)

        self.result_label = tk.Label(master, text="")
        self.result_label.pack()

        self.name_listbox = tk.Listbox(master)
        self.name_listbox.pack(pady=10, fill=tk.BOTH, expand=True)

        # 選択結果を表示するリストボックスを追加
        self.selected_listbox = tk.Listbox(master)
        self.selected_listbox.pack(pady=10, fill=tk.BOTH, expand=True)

        self.update_name_list()

    def add_name(self):
        # 新しい名前を追加し、リストを更新
        name = self.name_entry.get()
        if name:
            self.names.append(name)
            self.name_entry.delete(0, tk.END)
            self.update_name_list()
            self.save_names()

    def select_random_name(self):
        # ランダムに名前を選択し、結果を表示
        if not self.names:
            messagebox.showinfo("エラー", "名前が登録されていません。")
            return

        # 全員が選ばれたらリセット
        if len(self.selected_names) == len(self.names):
            self.selected_names = []
            self.selected_listbox.delete(0, tk.END)

        # まだ選ばれていない名前からランダムに選択
        available_names = [
            name for name in self.names if name not in self.selected_names
        ]
        selected_name = random.choice(available_names)
        self.selected_names.append(selected_name)

        self.result_label.config(text=f"選ばれた名前: {selected_name}")

        # 選択結果をリストボックスに追加
        self.selected_listbox.insert(tk.END, selected_name)

    def update_name_list(self):
        # 名前リストの表示を更新
        self.name_listbox.delete(0, tk.END)
        for name in self.names:
            self.name_listbox.insert(tk.END, name)

    def load_names(self):
        # 保存された名前リストを読み込む
        try:
            with open("names.json", "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return []

    def save_names(self):
        # 名前リストをファイルに保存
        with open("names.json", "w") as file:
            json.dump(self.names, file)


if __name__ == "__main__":
    # アプリケーションの起動
    root = tk.Tk()
    app = RandomNameSelector(root)
    root.mainloop()
