"""Add is_completed column to tasks table

Revision ID: 2dc1af317118
Revises: 7fe45a3ba26f
Create Date: 2023-07-23 10:57:33.317296

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2dc1af317118'
down_revision = '7fe45a3ba26f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_completed', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.drop_column('is_completed')

    # ### end Alembic commands ###
