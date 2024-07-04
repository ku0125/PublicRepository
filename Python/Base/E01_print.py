# =============
# print関数の使い方
# =============

int01 = int(input("値1を入力してください。\n>"))
int02 = int(input("値2を入力してください。\n>"))

# 複数のデータ出力
print(int01,int02,"abc")
# 区切り文字の変更(defaultは" "(半角スペース))
print(int01,int02,"abc",sep="/")
# 語尾文字の変更(defaultは"\n"(改行コード))
print(int01,int02,"abc",end="/")
