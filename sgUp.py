import cv2

class ImageViewer:
    def __init__(self, image_path):
        self.image = cv2.imread(image_path)
        self.window_name = "output"
        cv2.namedWindow(self.window_name, cv2.WINDOW_AUTOSIZE)
        cv2.setMouseCallback(self.window_name, self.mouse_callback)
        self.zoom_factor = 1.0
        self.pan_x = 0
        self.pan_y = 0

    def mouse_callback(self, event, x, y, flags, params):
        if event == cv2.EVENT_LBUTTONDOWN:
            print(f"({x}, {y})")

    def draw_window_size(self, frame):
        height, width, _ = frame.shape
        text = f"Window Size: {width}x{height}"
        cv2.putText(frame, text, (10, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)

    def display_image(self):
        resized_image = cv2.resize(self.image, None, fx=self.zoom_factor, fy=self.zoom_factor)
        panned_image = resized_image.copy()
        panned_image = panned_image[self.pan_y:, self.pan_x:]
        self.draw_window_size(panned_image)
        cv2.imshow(self.window_name, panned_image)

    def start(self):
        while True:
            self.display_image()
            key = cv2.waitKey(1) & 0xFF
            if key == 27:
                break
            if key == ord('='):
                self.zoom_factor += 0.1
            elif key == ord('-'):
                self.zoom_factor -= 0.1
            if key == ord('a'):
                self.pan_x += 10
            elif key == ord('d'):
                self.pan_x -= 10
            elif key == ord('w'):
                self.pan_y += 10
            elif key == ord('s'):
                self.pan_y -= 10
        cv2.destroyAllWindows()

if __name__ == "__main__":
    image_viewer = ImageViewer("2.png")
    image_viewer.start()