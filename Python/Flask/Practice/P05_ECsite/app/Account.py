# - Account.py
#   - アカウントの新規作成
#   - アカウントの設定変更
#   - 購入履歴

from flask import Blueprint, flash, redirect, render_template, request, url_for
from . import db, login_manager
from app.src.model.models import Cart, CartItem, Product, Transaction, User
from flask.views import MethodView
from .forms import LoginForm, RegistrationForm


account = Blueprint("account", __name__, url_prefix="/account")


# データ一覧の表示ページ
@account.route("/")
def index():
    # 全件取得処理
    return render_template("index.html")


@account.route("/register", methods=["GET", "POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Registration successful")
        return redirect(url_for("main.login"))
    return render_template("register.html", form=form)
