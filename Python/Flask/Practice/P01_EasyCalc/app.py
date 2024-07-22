from flask import Flask, render_template, request

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("pages/index.html")


@app.route("/result", methods=["get"])
def result():
    num1 = request.args.get("num1")
    num2 = request.args.get("num2")
    result = float(num1) + float(num2)
    return render_template("pages/result.html", result=result)


# # GETパラメータ(おまけ)
# # http://localhost:5001/get?id=100
# @app.route("/get")
# def get():
#     id = request.args.get("id")
#     return f'ページ{id}<a href="/">ホームへ戻る</a>'

if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
