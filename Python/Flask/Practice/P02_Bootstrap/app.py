from flask import Flask, render_template

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def hello_world():
    # レンダリングエンジン実行メソッド
    return render_template("pages/index.html")


if __name__ == "__main__":
    # デバッグモード
    # app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    # serve(app, host="0.0.0.0", port=50001)
    app.run(host="0.0.0.0", port=50001)
