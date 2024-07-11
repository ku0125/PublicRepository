# =============
# コマンドライン引数
# =============
import sys
# コマンドライン引数の取得(配列
args = sys.argv

# 0番要素はスクリプトのファイルパス
# 1番以降は引数が代入される。
print(args)

# 配列の展開
for arg in args:
    print(arg)

if "-r" in args:
    print("rオプションを認識しました。")
