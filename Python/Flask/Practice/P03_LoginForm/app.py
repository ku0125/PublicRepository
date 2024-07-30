# Blueprintの登録
import os

from LoginSystem01 import Login
from app210 import app2
from app06_2 import app06_2
from LoginSystem04 import app04
from flask import Flask, render_template

# インスタンス生成
app = Flask(__name__)

# 乱数を設定
app.config["SECRET_KEY"] = os.urandom(24)

# Blueprintの登録
app.register_blueprint(Login)
app.register_blueprint(app2)
app.register_blueprint(app06_2)
app.register_blueprint(app04)


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
    app.run(host="0.0.0.0", port=8080)
