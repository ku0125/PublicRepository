# - Login.py
#   - ログイン
#   - ログアウト
# WTForms,Flask-Loginをつかう

from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask_login import current_user, login_required, login_user, logout_user
from flask.views import MethodView
from app.src.model.models import Cart, CartItem, Product, Transaction, User
from app import db, login_manager
from forms import LoginForm, RegistrationForm


login = Blueprint("account", __name__, url_prefix="/login")


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# データ一覧の表示ページ
@login.route("/")
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.password == form.password.data:
            login_user(user)
            return redirect(url_for("main.index"))
        flash("Invalid username or password")
    return render_template("login.html", form=form)


@login.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("main.index"))
