class Television:
    def __init__(self, size) -> None:
        self.__volume = 50
        self.__chanel = 1
        self.__size = size
        self.__on = False
    
    @property
    def volume(self):
        return self.__volume
    
    @property
    def chanel(self):
        return self.__chanel

    @property
    def size(self):
        return self.__size

    @property
    def on(self):
        return self.__on

    def turn_on_off(self):
        if self.on is True:
            self.__on = False
        else:
            self.__on = True
    
    def increase_volume(self):
        if self.__volume < 100:
            self.__volume += 1

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def change_chanel(self, chanel):
        if 1 < chanel < 99:
            self.__chanel = chanel
        else:
            raise ValueError

    def __str__(self) -> str:
        return f"""
            - TV size: {self.size}
            - is on: {self.on}
            - volume: {self.volume}
            - chanel: {self.chanel}
        """

tv = Television(52)
tv.turn_on_off()
tv.change_chanel(42)
tv.decrease_volume()
if __name__ == '__main__':
    print(tv)