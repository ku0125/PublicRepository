import os

from flask import Flask, redirect, render_template, session, url_for
from forms import InputForm

# ==================================================
# インスタンス生成
# ==================================================
app = Flask(__name__)

# 乱数を設定
app.config["SECRET_KEY"] = os.urandom(24)

# ==================================================
# ルーティング
# ==================================================


# 入力
@app.route("/", methods=["GET", "POST"])
def input():
    form = InputForm()
    # POST
    if form.validate_on_submit():
        session["name"] = form.name.data
        session["email"] = form.email.data
        return redirect(url_for("output"))
    # GET
    if "name" in session:
        form.name.data = session["name"]
    if "email" in session:
        form.email.data = session["email"]
    # GETリクエストの場合、またはフォームの値がバリデーションを通過しなかった場合
    return render_template("pages/input.html", form=form)


# 出力
@app.route("/output")
def output():
    return render_template("pages/output.html")


# ==================================================
# 実行
# ==================================================
if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=50001)
