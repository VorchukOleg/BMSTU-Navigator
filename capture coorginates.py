import cv2
import matplotlib.pyplot as plt
import numpy as np

def Capture_Event(event, x, y, flags, params):
	# If the left mouse button is pressed
	if event == cv2.EVENT_LBUTTONDOWN:
		# Print the coordinate of the 
		# clicked point
		print(f"({x}, {y})")




# The Main Function
if __name__=="__main__":
    # Read the Image.
    cv2.namedWindow("output", cv2.WINDOW_AUTOSIZE)
    img = cv2.imread("test.png") #тут ваше фото. переименовывайте изначальный файл во что-то примитивное из ASCII, чтобы не было ошибки
    # Show the Image
#    imS = cv2.resize(img, (960, 540))
    print(img.shape)
    cv2.imshow('output', img)
	
	# Set the Mouse Callback function, and call
	# the Capture_Event function.
    cv2.setMouseCallback('output', Capture_Event)
	# Press any key to exit
    cv2.waitKey(0)
	# Destroy all the windows
    cv2.destroyAllWindows()
