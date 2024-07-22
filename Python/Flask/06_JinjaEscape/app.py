from flask import Flask, request, render_template

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def index():
    scriptCode = '<script>alert("アラート実行")</script>'
    return render_template("index.html", scriptCode=scriptCode)


@app.route("/<flag>")
def index2(flag):
    if flag == "T":
        flag = True
    else:
        flag = False

    scriptCode = '<script>alert("アラート実行")</script>'
    return render_template("index2.html", flag=flag, scriptCode=scriptCode)


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
