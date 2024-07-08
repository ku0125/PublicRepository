import tkinter as tk
from functools import partial


class SimpleCalculator:
    def __init__(self, master):
        self.master = master
        master.title("簡易電卓")

        self.create_widgets()
        self.layout_widgets()

    def create_widgets(self):
        self.input01 = tk.Entry(self.master)
        self.input02 = tk.Entry(self.master)
        self.lbAns = tk.Label(self.master, text="答え")

        operations = [
            ("加算", self.calculate),
            ("減算", self.calculate),
            ("乗算", self.calculate),
            ("除算", self.calculate),
        ]
        self.buttons = [
            tk.Button(self.master, text=text, command=partial(func, op=text))
            for text, func in operations
        ]

    def layout_widgets(self):
        tk.Label(self.master, text="値1:").grid(row=0, column=0, sticky="e")
        self.input01.grid(row=0, column=1)
        tk.Label(self.master, text="値2:").grid(row=1, column=0, sticky="e")
        self.input02.grid(row=1, column=1)
        self.lbAns.grid(row=2, column=0, columnspan=2)

        for i, button in enumerate(self.buttons):
            button.grid(row=3, column=i)

    def calculate(self, op):
        try:
            num01 = float(self.input01.get())
            num02 = float(self.input02.get())
            result = {
                "加算": num01 + num02,
                "減算": num01 - num02,
                "乗算": num01 * num02,
                "除算": num01 / num02 if num02 != 0 else "エラー: ゼロ除算",
            }[op]
            self.lbAns.config(text=f"答え: {result}")
        except ValueError:
            self.lbAns.config(text="エラー: 無効な入力")


if __name__ == "__main__":
    root = tk.Tk()
    app = SimpleCalculator(root)
    root.mainloop()
