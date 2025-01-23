# 1. Operators:
# a. Evaluate the following expressions and provide the results:

num_1 = 5 + 3 * 2
num_2 = (10 - 4) / 2
num_3 = 7 % 3
num_4 = 2 ** 3 + 1
print("5 + 3 * 2 = " + str(num_1))
print("(10 - 4) / 2 = " + str(num_2))
print("7 % 3 = " + str(num_3))
print("2 ** 3 + 1 = " + str(num_4))

# b. Write a Python program that checks if a number is divisible by both 3 and 5. Use the modulo operator (%).
divisible = input("enter a number")
if(int(divisible) % 3 == 0 and int(divisible) % 5 == 0):
    print(divisible + " is divisible by both 3 and 5")
else:
    print("Nope")

# # Example input: 15
# # Expected output: "15 is divisible by both 3 and 5."
# ________________________________________________________________________________________
# 2. Functions:
# a. Write a function square_and_cube(num) that takes a number as input and returns both its square and cube.
toSquare = int(input("Enter a number"))

def square_and_cube(num):
    squared = str(num*num)
    cubed = str(num*num*num)
    return "(" + squared + "," + cubed + ")"
print(square_and_cube(toSquare))
# # Example input: 3
# # Expected output: (9, 27)


# b. The following function has a bug. Fix it:

def greet_user(name):
    return "Hello, " + name
print(greet_user("Alice"))
# # Example input: "Alice"
# # Expected output: "Hello, Alice!"

# _______________________________________________________________________________________
# 3. Loops:
# a. Write a for loop to print all even numbers between 1 and 20.
for i in range(1,21):
    if(i%2 ==0):
        print(i)
# # Expected output: 2, 4, 6, ..., 20
# b. Write a while loop that continues to take input from the user until they type "exit". If the user enters a number, print whether it’s odd or even.
hello = True
while hello:
    leave = input("Enter a number or type exit to exit")
    if(leave == "exit"):
        break
    if(int(leave)%2 == 0):
        print(leave + " is even")
    else:
        print(leave + " is odd")

# # Input: 7
# # Output: "7 is odd."
# # Input: 10
# # Output: "10 is even."
# # Input: exit
# # Output: (Program ends)

# ______________________________________________________________________________________________________

 