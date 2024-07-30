from flask import Flask,render_template

# インスタンス生成
app = Flask(__name__)

# 乱数を設定
import os
app.config["SECRET_KEY"] = os.urandom(24)

from LoginSystem04 import app2
app.register_blueprint(app2)

@app.route("/")
def index():
    return render_template("04/index.html",msg="ログイン画面です。")


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=8080)