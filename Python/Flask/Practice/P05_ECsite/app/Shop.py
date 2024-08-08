# - Shop.py
#   - 商品一覧
#   - カートへの商品追加

from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask.views import MethodView

shop = Blueprint("shop", __name__, url_prefix="/shop")


# データ一覧の表示ページ
@shop.route("/")
def index():
    # 全件取得処理
    return render_template("index.html")
