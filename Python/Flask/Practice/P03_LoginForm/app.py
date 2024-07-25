# Blueprintの登録
import os
from app2 import Login
from flask import Flask, render_template

# インスタンス生成
app = Flask(__name__)

# 乱数を設定
app.config["SECRET_KEY"] = os.urandom(24)

# Blueprintの登録
app.register_blueprint(Login)


@app.route("/")
def index():
    return render_template("pages/index.html")


# ==================================================
# 実行
# ==================================================
if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0", port=5001)
