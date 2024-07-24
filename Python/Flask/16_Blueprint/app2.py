from flask import Blueprint, render_template, request

# Blueprintの名称：APP2
# モジュール名：app2

# MethodBase
from flask.views import MethodView

# url_prefixがメインの階層になる
app2 = Blueprint("APP2", __name__, url_prefix="/APP2")


@app2.route("/")
def index():
    return render_template("index.html", msg="APP2のホームです。")


@app2.route("/next")
def next():
    return render_template("index.html", msg="APP2のネクストです。")


# MethodBase
class APP2A(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("index.html", msg="APP2AのGETです。")

    # postでのアクセス時
    def post(self):
        return render_template("index.html", msg="APP2AのPOSTです。")


app2.add_url_rule("/A", view_func=APP2A.as_view("APP2A"))
