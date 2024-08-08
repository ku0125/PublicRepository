# - main.py
#   - Shopの商品一覧画面へ遷移

from flask import render_template

from app import app


# データ一覧の表示ページ
@app.route("/")
def index():
    # 全件取得処理
    return render_template("index.html")
