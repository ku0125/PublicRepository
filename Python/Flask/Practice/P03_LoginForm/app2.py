# MethodBase
from flask import Blueprint, render_template, request

# Blueprintの名称：LoginSystem
# モジュール名：LoginSystem
# MethodBase
from flask.views import MethodView

# url_prefixがメインの階層になる
Login = Blueprint("LoginSystem", __name__, url_prefix="/LoginSystem")


class LoginSystem(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("pages/login.html")

    # postでのアクセス時
    def post(self):
        id = request.form.get("id")
        pw = request.form.get("pw")

        return render_template("pages/success.html", id=id, pw=pw)


Login.add_url_rule("/", view_func=LoginSystem.as_view("login"))
