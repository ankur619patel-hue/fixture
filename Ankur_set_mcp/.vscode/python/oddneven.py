# number=int(input("enter a number: "))
# if(number%2==0):
#     print("the number is even")
# else:
#     print("the number is odd")

numA=int(input("enter a number A: "))
numB=int(input("enter a number B: "))
numC=int(input("enter a number C: "))
if(numA>=numB and numA>=numC):
    print("the number A is greater",numA)
elif(numB>=numC):
    print("the number B is greater",numB)
else:
    print("the number C is greater",numC)