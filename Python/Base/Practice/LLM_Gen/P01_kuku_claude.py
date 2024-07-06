# 1の段から9の段までの答えを出力してください。
# 1の段から9の段までの式と答えをセットで出力してください。
# 1の段から9の段までの九九表を出力してください。


def print_multiplication_table(title, format_func):
    print(title)
    for i in range(1, 10):
        print(f"{i}の段: ", end="")
        results = [format_func(i, j) for j in range(1, 10)]
        print(", ".join(results))
    print()


# 1の段から9の段までの答えを出力
print_multiplication_table("1の段から9の段までの答え", lambda i, j: str(i * j))

# 1の段から9の段まで式と答えをセットで出力
print_multiplication_table("1の段から9の段まで式と答え", lambda i, j: f"{i}*{j}={i*j}")

# 1の段から9の段までの九九表を出力
print("1の段から9の段までの九九表")
for i in range(1, 10):
    print(" ".join(f"{i*j:2d}" for j in range(1, 10)))
