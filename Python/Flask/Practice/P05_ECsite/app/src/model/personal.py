from app import db
from datetime import datetime


class PersonalInfo(db.Model):
    __tablename__ = "personal_data"

    id = db.Column(db.Integer, db.ForeignKey("user.id"), primary_key=True)
    last_name = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150), nullable=False)
    address1 = db.Column(db.String(250), nullable=False)
    address2 = db.Column(db.String(250), nullable=True)
    address3 = db.Column(db.String(250), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    deleted = db.Column(db.Boolean, default=False)
