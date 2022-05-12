import math

terrainToRangeMiles = {
    "Flat": 15,
    "Hilly": 8,
    "Mountain": 3,
    "Forest": 0.4
}

def readUserInput():

    print("")
    sqMiles = int(input("Enter the square miles of the area where the goTenna network will be deployed :"))
    terrainType = input("Enter the terrain type, one of (Flat, Hilly, Mountain, Forest) : ")

    return sqMiles, terrainType

def computeRequiredNodesExample(area, range):
    """
    For now, assume a square area, so the side S is just the square root of the area. The nodes are placed
    in a manhattan grid like fashion, separated by the range r. The formula is (S/r + 1)^2
    :param area:
    :param range:
    :return:
    """

    sideOfSquareArea = math.sqrt(float(area))
    numNodes = (sideOfSquareArea/float(range))**2

    return math.ceil(numNodes)

def computeRequiredNodesRandomPlacement(area, range):
    pass

def printResult(numProXs):
    print("")
    print("The number of ProX's needed in a", terrain, "terrain of", area, "square miles is", numProXs)
    print("The corresponding number of goKits is ", math.ceil(numProXs / 30.0))
    print("")

# MAIN

area, terrain = readUserInput()
numNodes = computeRequiredNodesExample(area, terrainToRangeMiles[terrain])
printResult(numNodes)