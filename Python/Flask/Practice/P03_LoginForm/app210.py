from flask import Flask,render_template,Blueprint,request,redirect,url_for

# Blueprintの名称：APP2
# モジュール名：app2
# URL：/LoginSystem10

#url_prefixはリンク先名
app2 = Blueprint("APP2",__name__,url_prefix="/LoginSystem10")

@app2.route("/")
def index():
    return render_template("index10.html",msg="トップページ(index)です。")

@app2.route("/login")
def next():
    return render_template("LoginSystem10/login.html",msg="ログインページです")

@app2.route("/success")
def abc():
    return render_template("LoginSystem10/success.html")

# MethodBase
from flask.views import MethodView
#get postをオーバーライド
class APP2A(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("LoginSystem10/success.html",msg="APP2Aのホームです。")
    
    # postでのアクセス時
    def post(self):
            id = request.form.get("id")
            pw = request.form.get("pw")
            if id == '' or pw == '':
                #return redirect('login')
                return render_template("LoginSystem10/login.html",msg="ログインページです",erromsg = "入力してください")
            else:
                return redirect(('success'))
                #return render_template("LoginSystem10/success.html",id=id,pw=pw,msg="APP2Aのポストホームです。")
            
 
app2.add_url_rule("/login",view_func=APP2A.as_view("APP2A"))