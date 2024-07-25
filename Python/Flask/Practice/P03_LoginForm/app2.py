# MethodBase
from flask import Blueprint, redirect, render_template, session, url_for

# Blueprintの名称：LoginSystem
# モジュール名：LoginSystem
# MethodBase
from flask.views import MethodView
from forms import InputForm


# url_prefixがメインの階層になる
Login = Blueprint("LoginSystem", __name__, url_prefix="/LoginSystem")


class LoginSystem(MethodView):
    # getでのアクセス時
    def get(self):
        form = InputForm()  # ここでフォームを初期化
        return render_template("pages/login.html", form=form)

    # postでのアクセス時
    def post(self):
        form = InputForm()
        # POST
        if form.validate_on_submit():
            session["id"] = form.id.data
            session["pw"] = form.pw.data
            return redirect(url_for("LoginSystem.login"))
        # GET
        if "name" in session:
            form.id.data = session["id"]
        if "email" in session:
            form.pw.data = session["pw"]

        if session.get("id") == "test" and session.get("pw") == "test":
            return render_template("pages/success.html")

        # GETリクエストの場合、またはフォームの値がバリデーションを通過しなかった場合
        return render_template("pages/login.html", form=form)


Login.add_url_rule("/", view_func=LoginSystem.as_view("login"))
