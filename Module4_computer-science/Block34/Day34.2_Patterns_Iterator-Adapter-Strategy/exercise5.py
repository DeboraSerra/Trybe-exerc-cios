from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class ConvertSvgImage(PngInterface):
    def __init__(self, svg_img) -> None:
        self.__svg_img = svg_img

    def draw(self):
        return self.__svg_img.get_image()


print(PngImage('img_path.png').draw())
print(SvgImage('img_path.svg').get_image())
print(ConvertSvgImage(SvgImage('img_path_to_png.svg')).draw())