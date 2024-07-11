# 登録した人をランダムで当てるアプリケーションを作成してください。
# こちらはtkまたはコンソールアプリケーションで、作成してください。
# tkで作成する場合はの結果出力先はアプリケーション上（ラベル）でも、ターミナルでも良いです。
# コンソールアプリケーションの作成例は追って送ります。
# 課題の段階ですが、
# 1段階目、任意の人を登録できるようにしてください。
# 2段階目、登録した人からランダムに1人を出力してください。
# 3段階目、偏らない様に、全員が平等に出力されるようにしてください。
# 4段階目、アプリケーションを終了しても、データを維持できるようにしてください。（データの読み込みと保存）

# jsonを使う

# 以下サンプルコード
# print("プログラムを開始します")
# endFlag = False
# while not endFlag:
#     print("選択してください。")
#     print("[1]挨拶[2]自己紹介[0]終了")
#     cmd = input()
#     if cmd == "1":
#         print("こんにちは")
#     elif cmd == "2":
#         print("どうも、コンソールアプリです。")
#     elif cmd == "0":
#         print("終了が選択されました。")
#         endFlag = True
#     else:
#         print("正しいコマンドを入力してください。")
# print("プログラムを終了します。")

# 1段階目、任意の人を登録できるようにしてください。

import tkinter as tk


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

        # 名前リストの初期化
        self.names = []

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

        # 結果表示ラベル
        self.result_label = tk.Label(master)
        self.result_label.pack(pady=10)

    # メソッド
    # 新しい名前を追加する
    def register_name(self):
        name = self.name_entry.get()
        if name:
            self.names.append(name)
            self.update_names_label()
            self.name_entry.delete(0, tk.END)
            self.result_label.config(text="")
        else:
            self.show_message("警告", "名前を入力してください")

        # メッセージを結果ラベルに表示

    def show_message(self, title, message):
        self.result_label.config(text=f"{title}: {message}")

        # 名前のラベルを更新

    def update_names_label(self):
        names_text = "登録された名前:\n" + "\n".join(self.names)
        self.names_label.config(text=names_text)


# 単体で動作させるときのイディオムらしい
if __name__ == "__main__":
    root = tk.Tk()
    app = RandomNameSelector(root)
    root.mainloop()
