# 登録した人をランダムで当てるアプリケーションを作成してください。
# こちらはtkまたはコンソールアプリケーションで、作成してください。
# tkで作成する場合はの結果出力先はアプリケーション上（ラベル）でも、ターミナルでも良いです。
# コンソールアプリケーションの作成例は追って送ります。
# 課題の段階ですが、
# 1段階目、任意の人を登録できるようにしてください。
# 2段階目、登録した人からランダムに1人を出力してください。
# 3段階目、偏らない様に、全員が平等に出力されるようにしてください。
# 4段階目、アプリケーションを終了しても、データを維持できるようにしてください。（データの読み込みと保存）


# 3段階目、偏らない様に、全員が平等に出力されるようにしてください。

# 結果リスト(配列)を用意する
# 名前を選んだときに結果リストに追加していく
# 結果リストと名前リストを比較して、結果リストにない名前を選ぶ
# 最初の名前リストの数と結果リストの数が同じになったら終了
# 順番の結果を表示する領域を新しく作る
# 結果で、名前の順番に番号をつけて出力するように修正する
# 名前が重複したときに、勝手に名前に番号を振るように修正

import tkinter as tk
import random


# クラスをつかう
class RandomNameSelector:
    # イニシャライザ(初期化メソッド)
    # defの引数はselfを入れるとアクセスできるようになる jsでいうところのthis
    # 初期化と宣言を同時に行える
    def __init__(self, master):
        # メインウィンドウの設定
        self.master = master
        self.master.title("ランダムで当てるアプリ")
        self.master.geometry("300x400")

        # 名前、結果リストの初期化
        self.names = []
        self.result = []

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
        # 結果を代入(番号をふる)
        result_text = "結果:\n" + "\n".join(
            f"{i + 1}. {name}" for i, name in enumerate(self.result)
        )
        # 名前の結果表示ラベルに表示させる
        self.result_name_label.config(text=result_text)


# 単体で動作させるときのイディオム 12_Module/Main.py参照
if __name__ == "__main__":
    root = tk.Tk()
    app = RandomNameSelector(root)
    root.mainloop()
