import math

terrainToRangeMiles = {
    "Flat": 15,
    "Hilly": 8,
    "Mountain": 3,
    "Forest": 0.4
}

reqConnectivityProb = 0.99
edgeEffectFactor = 1.2

def readUserInput():

    print("")
    sqMiles = int(input("Enter the square miles of the area where the goTenna network will be deployed : "))
    terrainType = input("Enter the terrain type, one of (Flat, Hilly, Mountain, Forest) : ")
    redundancy = int(input("Enter the additional redundancy factor from 1 (no redundancy) to 4 (max redundancy) : "))

    return sqMiles, terrainType, redundancy

def computeRequiredNodesGrid(area, range):
    """
    For now, assume a square area, so the side S is just the square root of the area. The nodes are placed
    in a manhattan grid like fashion, separated by the range r. The formula is (S/r + 1)^2
    :param area: The area in square miles
    :param range: The communication range of each node
    :return:
    """

    sideOfSquareArea = math.sqrt(float(area))
    numNodes = (sideOfSquareArea/float(range) + 1)**2
    numNodes = max(numNodes, 4)

    return math.ceil(numNodes)

def computeRequiredNodesRandomPlacementWithKConnectivity(A, r, k):
    """
    Using the formula from Betstetter Mobihoc 2003 (equation 22), we solve for n (number of nodes) by iterating from
    the minimum (4) to 1000000 (we assume that requirements will never exceed this!).
    :param A: The area of coverage
    :param r: The communication range of each node
    :param k: The desired connectivity. The network is connected up to the deletion of any k nodes.
    :return:
    """

    n = 4
    while n < 1000000:
        sigma = 0
        for N in range(k):
            expr1 = (((n/A)*3.14*r*r)**N)/math.factorial(N)
            expr2 = 2.718**(-(n/A)*3.14*r*r)
            sigma += expr1*expr2

        connProb = (1 - sigma)**n
        if connProb >= reqConnectivityProb:
            break
        n += 1

    return n

def printResult(numProXs, terrain, area):
    print("")
    print("******************************************************************************************")
    print("The number of ProX's needed in a", terrain, "terrain of", area, "square miles is approximately", numProXs)
    print("The corresponding number of goKits is ", math.ceil(numProXs / 30.0))
    print("******************************************************************************************")
    print("")

# MAIN

inputArea, inputTerrain, connectivity = readUserInput()

#numNodesRandom = computeRequiredNodesRandomPlacement(inputArea, terrainToRangeMiles[inputTerrain])
numNodesRandomKConn = computeRequiredNodesRandomPlacementWithKConnectivity(inputArea, terrainToRangeMiles[inputTerrain], connectivity)
numProXs = int(edgeEffectFactor*numNodesRandomKConn)

printResult(numProXs, inputTerrain, inputArea)

numNodesGrid = computeRequiredNodesGrid(inputArea, terrainToRangeMiles[inputTerrain])
print("For comparison, the corresponding number of ProX's with a controlled Grid like arrangement is approximately", numNodesGrid)
print("")

print("ESTIMATION ASSUMES RANDOMLY DISTRIBUTED PRO-Xs IN THE GIVEN AREA. ")
print("RANGE ESTIMATES (IN MILES) ARE BASED ON FIELD LOGS: FLAT = 15, HILLY = 8, MOUNTAIN = 3, FOREST = 0.4")
print("WITH THE INDICATED NUMBER OF PRO-Xs THE NETWORK WILL BE k-CONNECTED with 99% PROBABILITY")
print("DISCLAIMER: THE ABOVE IS SIMPLY A BALLPARK ESTIMATE. ACTUAL NEED WILL DEPEND ON THE PRECISE PROPAGATION CONDITIONS")
print("")



# area = 10000
# for r in range(1,11):
#     print("1 conn", computeRequiredNodesRandomPlacement(area, r))
#     print("k conn", computeRequiredNodesRandomPlacementWithKConnectivity(area, r, 2))

# def computeRequiredNodesRandomPlacement(A, r):
#
#     n = 4
#     while n < 1000000:
#         connProb = (1 - 2.718**(-(n/A)*3.14*r*r))**n
#         if connProb >= reqConnectivityProb:
#             break
#         n += 1
#
#     return n