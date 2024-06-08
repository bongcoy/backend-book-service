def no1():
    s = input("1. masukkan string (klik enter untuk nilai default): ")
    if len(s) == 0:
        s = "NEGIE1"
    # get number substring
    number = ''.join([i for i in s if i.isdigit()])
    # get alphabet substring
    alphabet = ''.join([i for i in s if i.isalpha()])
    # reverse alphabet
    alphabet = alphabet[::-1]
    # combine alphabet and number
    result = alphabet + number
    print(result)

def no2():
    s = input("2. masukkan string (klik enter untuk nilai default): ")
    if len(s) == 0:
        s = "Saya sangat senang mengerjakan soal algoritma"
    # get longest word in sentence
    longest_word = max(s.split(), key=len)
    print(f"{longest_word}: {len(longest_word)} character")

def no3():
    print("3. masukkan dua array: ")
    arr1 = input("INPUT (klik enter untuk nilai default) = ").split()
    arr2 = input("QUERY (klik enter untuk nilai default) = ").split()
    if len(arr1) == 0 or len(arr2) == 0:
        arr1 = ['xc', 'dz', 'bbb', 'dz'] 
        arr2 = ['bbb', 'ac', 'dz']
    # set arr2 unique element order by first appearance
    arr2 = list(dict.fromkeys(arr2))
    # create dictionary to store element count
    counts = {element: 0 for element in arr2}

    # count element in arr2 that are in arr1 with linear complexity
    for element in arr1:
        if element in counts:
            counts[element] += 1

    # get element count in arr2
    result = [counts[element] for element in arr2]

    print(result)

def no4():
    # input nxn matrix
    n = int(input("4. masukkan ukuran matriks nxn (klik enter untuk nilai default): "))
    matrix = []
    if n == 0:
        n = 3
        matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    else:
        matrix = [list(map(int, input(f"masukkan {n} bilangan untuk baris {i}: ").split())) for i in range(n)]
    # get sum of diagonal element
    sum1 = sum(matrix[i][i] for i in range(n))
    # get sum of anti-diagonal element
    sum2 = sum(matrix[i][n-i-1] for i in range(n))
    # get absolute difference
    result = abs(sum1 - sum2)

    print(result)

def main():
    # Uncomment salah satu fungsi dibawah ini untuk menjalankan soal yang diinginkan
    no1()
    # no2()
    # no3()
    # no4()

if __name__ == '__main__':
    main()