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

        if id == "test":
            if pw == "test":
                return render_template("pages/success.html")
            else:
                msg = "パスワードが違います。"
                return render_template("pages/login.html", msg=msg)
        else:
            msg = "IDが違います。"
            return render_template("pages/login.html", msg=msg)


Login.add_url_rule("/", view_func=LoginSystem.as_view("login"))
