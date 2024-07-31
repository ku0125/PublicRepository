from app import db


class ToDo(db.Model):
    __tablename__ = "todo"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000))

    # 辞書型で取得
    def getData(self):
        return {"id": int(self.id), "text": str(self.text)}
