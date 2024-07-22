from flask import Flask, redirect, render_template, request, url_for

# インスタンス生成
app = Flask(__name__)


@app.route("/")
def index():
    err = request.args.get("errid")
    return render_template("pages/index.html", errid=err)


@app.route("/result")
def result():
    num1 = request.args.get("num1")
    num2 = request.args.get("num2")
    op = request.args.get("op")
    try:
        num1 = int(num1)
        num2 = int(num2)
    except TypeError:
        # err="入力エラー：整数を入れてください。"
        # 結果にエラーが出る
        # return render_template("pages/result.html",ans=ans)
        # return render_template("pages/index.html",errmsg=err)
        return redirect(url_for("index", errid="E001"))
    except ValueError:
        # err="入力エラー：整数を入れてください。"
        # 結果にエラーが出る
        # return render_template("pages/result.html",ans=ans)
        # return render_template("pages/index.html",errmsg=err)
        return redirect(url_for("index", errid="E001"))
    else:
        return calc(num1, num2, op)


def calc(num1, num2, op):
    if op == "add":
        ans = num1 + num2
    elif op == "minus":
        ans = num1 - num2
    elif op == "multi":
        ans = num1 * num2
    elif op == "divide":
        try:
            ans = num1 / num2
        except ZeroDivisionError:
            return redirect(url_for("index", errid="E002"))
    else:
        return redirect(url_for("index", errid="E003"))
    return render_template("pages/result.html", ans=ans)


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=8080)
