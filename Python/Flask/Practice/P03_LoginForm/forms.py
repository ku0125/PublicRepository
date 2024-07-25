from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


# ==================================================
# Formクラス
# ==================================================
# 入力クラス
class InputForm(FlaskForm):
    id = StringField("ID：", validators=[DataRequired("必須入力です")])
    pw = StringField(
        "パスワード：",
        validators=[DataRequired("必須入力です")],
    )
    submit = SubmitField("送信")
