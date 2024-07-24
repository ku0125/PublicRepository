from flask import Flask, render_template

# Blueprintの登録
from app2 import app2

# インスタンス生成
app = Flask(__name__)

# Blueprintの登録
app.register_blueprint(app2)


@app.route("/")
def index():
    return render_template("index.html", msg="ホームです。")


@app.route("/next")
def next():
    return render_template("index.html", msg="ネクストです。")


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
