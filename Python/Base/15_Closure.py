# =============
# クロージャ
# =============


# 閉鎖関数
# xは変化しない変数
# yは変化する変数
def enclosure(x):
    def closure(y):
        return x + y

    return closure


# int10のxの値が10で確定する
int10 = enclosure(10)

# int33のxの値が33で確定する
int33 = enclosure(33)

print(int10(50))
print(int33(50))
