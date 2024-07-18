# 登録した人をランダムで当てるアプリケーションを作成してください。
# こちらはtkまたはコンソールアプリケーションで、作成してください。
# tkで作成する場合はの結果出力先はアプリケーション上（ラベル）でも、ターミナルでも良いです。
# コンソールアプリケーションの作成例は追って送ります。
# 課題の段階ですが、
# 1段階目、任意の人を登録できるようにしてください。
# 2段階目、登録した人からランダムに1人を出力してください。
# 3段階目、偏らない様に、全員が平等に出力されるようにしてください。
# 4段階目、アプリケーションを終了しても、データを維持できるようにしてください。（データの読み込みと保存）


# 4段階目、アプリケーションを終了しても、データを維持できるようにしてください。（データの読み込みと保存）

# 名前のデータだけ？結果のデータも？
# jsonを使う
# 起動時に読み込む、読み込んだら表示を更新する
# 追加時に書き込む

import tkinter as tk
import random
import json
import os


# クラスをつかう
class RandomNameSelector:
    # イニシャライザ(初期化メソッド)
    # defの引数はselfを入れるとアクセスできるようになる jsでいうところのthis
    # 初期化と宣言を同時に行える
    def __init__(self, master):
        # メインウィンドウの設定
        self.master = master
        self.master.title("ランダムで当てるアプリ")
        self.master.geometry("300x800")

        # 名前、結果リストの読み込み、初期化
        self.names = self.load_names()
        self.result = self.load_results()

        # GUI要素の作成と配置
        # 入力フォーム
        self.name_entry = tk.Entry(master)
        self.name_entry.pack(pady=10)

        # 登録ボタン
        self.register_button = tk.Button(
            master, text="名前を登録", command=self.register_name
        )
        self.register_button.pack()

        # 登録された名前表示用ラベル
        self.names_label = tk.Label(master, text="登録された名前:")
        self.names_label.pack(pady=10)

        # 一人を選択するボタン
        self.pick_button = tk.Button(master, text="一人選択", command=self.pick_random)
        self.pick_button.pack()

        # 名前の結果表示ラベル
        self.result_name_label = tk.Label(master)
        self.result_name_label.pack(pady=10)

        # 結果表示ラベル
        self.result_label = tk.Label(master)
        self.result_label.pack(pady=10)

        # リセットボタンを追加
        self.reset_button = tk.Button(master, text="リセット", command=self.reset_data)
        self.reset_button.pack(pady=10)

        # 名前・結果リストの更新（データを読み込んだ時）
        self.update_names_label()
        self.update_result_label()

    # メソッド
    def register_name(self):
        # 新しい名前を追加する
        name = self.name_entry.get()
        if name:
            # 重複を避けるために重複したとき名前に番号を付ける
            count = sum(1 for n in self.names if n.startswith(name))
            if count > 0:
                name = f"{name}{count + 1}"

            self.names.append(name)
            self.update_names_label()
            # jsonに保存する
            self.save_names()
            self.name_entry.delete(0, tk.END)
            self.result_label.config(text="")
        else:
            self.show_message("警告", "名前を入力してください")

    def show_message(self, title, message):
        # メッセージを結果ラベルに表示
        self.result_label.config(text=f"{title}: {message}")

    def update_names_label(self):
        # 名前のラベルを更新
        names_text = "登録された名前:\n" + "\n".join(self.names)
        self.names_label.config(text=names_text)

    def pick_random(self):
        # ランダムに名前を選択し、結果を表示
        if not self.names:
            self.show_message("警告", "名前が登録されていません")
            return

        # 結果リストが名前のリストと同じ数になったら終了
        if len(self.result) == len(self.names):
            self.show_message("情報", "全ての名前が選ばれました")
            return

        # 結果リストに入ってない名前を選ぶ
        remaining_names = [name for name in self.names if name not in self.result]

        # random.choiceでランダムに一つの要素を選んでくれるらしい
        picked_name = random.choice(remaining_names)
        # 結果リストに名前を追加
        self.result.append(picked_name)
        self.update_result_label()
        # 結果をjsonに保存
        self.save_results()

    def update_result_label(self):
        # 結果を代入(番号をふる)
        result_text = "結果:\n" + "\n".join(
            f"{i + 1}. {name}" for i, name in enumerate(self.result)
        )
        # 名前の結果表示ラベルに表示させる
        self.result_name_label.config(text=result_text)

    def load_names(self):
        # jsonから名前データを読み込む
        try:
            # 読み込めたら配列にいれる
            with open("names.json", "r") as file:
                # json.loadで読み込めるらしい　便利
                return json.load(file)
        except FileNotFoundError:
            # なかったら新規作成
            return []

    def save_names(self):
        # jsonへ名前データを書き込む
        with open("names.json", "w") as file:
            # json.dumpで書き込めるらしい　便利
            json.dump(self.names, file)

    def load_results(self):
        try:
            with open("results.json", "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return []

    def save_results(self):
        with open("results.json", "w") as file:
            json.dump(self.result, file)

    def reset_data(self):
        self.names = []
        self.result = []
        self.update_names_label()
        self.update_result_label()
        self.result_label.config(text="データがリセットされました")

        # JSONファイルを削除
        if os.path.exists("names.json"):
            os.remove("names.json")
        if os.path.exists("results.json"):
            os.remove("results.json")


# 単体で動作させるときのイディオム 12_Module/Main.py参照
if __name__ == "__main__":
    root = tk.Tk()
    app = RandomNameSelector(root)
    root.mainloop()
