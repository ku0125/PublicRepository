from flask import Flask, render_template

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("pages/index.html")


@app.route("/next")
def next():
    return render_template("pages/next.html")


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
