from flask import render_template, request, Blueprint
from flask.views import MethodView

# Blueprintの名称：APP06_2
# モジュール名：app06_2
# URL：/(フォルダLoginSystem06内で遷移、ルートはlogin.html）
app06_2 = Blueprint("APP06_2", __name__, url_prefix="/")


@app06_2.route("/LoginSystem06")
def login():
    return render_template("LoginSystem06/login.html", msg="")


class LoginSystem06(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("LoginSystem06/login.html", msg="")

    # postでのアクセス時
    def post(self):
        id = request.form.get("id")
        pw = request.form.get("pw")

        if id != "id" or pw != "pw":
            # return redirect(url_for('login',msg='ログイン失敗'))
            return render_template("LoginSystem06/login.html", msg="ログイン失敗")
        elif id == "id" and pw == "pw":
            return render_template(
                "LoginSystem06/success.html", msg="ログイン成功", id=id, pw=pw
            )


app06_2.add_url_rule("/LoginSystem06", view_func=LoginSystem06.as_view("/"))
