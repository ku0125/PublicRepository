from flask import Blueprint, redirect, render_template, request, url_for
from flask.views import MethodView

# Blueprintの名称：APP2
# モジュール名：app2
# URL：/APP2
app04 = Blueprint("LoginSystem04", __name__, url_prefix="/LoginSystem04")


# MethodBase


class LoginSystem(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("04/login.html")

    # postでのアクセス時
    def post(self):
        id = request.form.get("id")
        pw = request.form.get("pw")

        # id==idとpw==pwだったらLoginSystem.successに飛ぶ
        if id == "yui" and pw == "1021":
            return redirect(url_for("LoginSystem04.success"))
        else:
            print("idまたはpwが違います")
            return render_template("04/login.html")


class Success(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("04/success.html")


app04.add_url_rule("/login", view_func=LoginSystem.as_view("login"))
app04.add_url_rule("/success", view_func=Success.as_view("success"))
