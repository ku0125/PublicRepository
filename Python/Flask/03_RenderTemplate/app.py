from flask import Flask, render_template, request

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def hello_world():
    # レンダリングエンジン実行メソッド
    return render_template("index.html")


@app.route("/page")
def page():
    return render_template("page.html", id="abc")


@app.route("/pages/<id>")
def pages(id):
    return render_template("page.html", id=id)


@app.route("/get")
def get():
    id = request.args.get("id")
    return render_template("page.html", id=id)


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
