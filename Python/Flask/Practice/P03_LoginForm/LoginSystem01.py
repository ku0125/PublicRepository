# MethodBase
from flask import Blueprint, flash, redirect, render_template, session, url_for

# Blueprintの名称：LoginSystem
# モジュール名：LoginSystem
# MethodBase
from flask.views import MethodView
from forms import InputForm

# url_prefixがメインの階層になる
Login = Blueprint("LoginSystem", __name__, url_prefix="/LoginSystem01")


class LoginSystem(MethodView):
    # getでのアクセス時
    def get(self):
        form = InputForm()  # ここでフォームを初期化
        return render_template("pages/login.html", form=form)

    # postでのアクセス時
    def post(self):
        form = InputForm()
        if form.validate_on_submit():
            session["id"] = form.id.data
            session["pw"] = form.pw.data
            if session.get("id") == "test" and session.get("pw") == "test":
                return redirect(url_for("LoginSystem.success"))
            else:
                flash("ログインに失敗しました。", "error")
                return redirect(url_for("LoginSystem.login"))
        return render_template("pages/login.html", form=form)


class Success(MethodView):
    def get(self):
        return render_template("pages/success.html")


# ログインページのルート
Login.add_url_rule("/login", view_func=LoginSystem.as_view("login"))


# 成功ページのルート
Login.add_url_rule("/success", view_func=Success.as_view("success"))
