# 1の段から9の段までの答えを出力してください。
# 1の段から9の段までの式と答えをセットで出力してください。
# 1の段から9の段までの九九表を出力してください。

print("1の段から9の段までの答え")
for i in range(1, 10):
    # print(f"{i}の段 :")
    for j in range(1, 10):
        print(i * j, end=",")

print("1の段から9の段まで式と答え")
for i in range(1, 10):
    print("\n,"f"{i}の段 ")
    for j in range(1, 10):
        print(f"{i}*{j}={i*j}", end=",")

print("1の段から9の段までの九九表")
for i in range(1, 10):
    print()
    for j in range(1, 10):
        print(f"{i * j:2}", end=" ")
        # print(f"{i * j}", end=" ")
print()
