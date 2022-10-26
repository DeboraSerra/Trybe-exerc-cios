from typing import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)

class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, order):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__order = order

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        if self.__order == 'reverse':
            return CardsIterator(self._cartas, 'reverse')
        else:
            return CardsIterator(self._cartas)


class CardsIterator(Iterator):
    def __init__(self, cards, order='common'):
        self.__cards = cards
        self.__order = order
        if order == 'reverse':
            self.__card_index = cards.__len__() - 1
        else:
            self.__card_index = 0

    def reverse(self):
        try:
            card = self.__cards[self.__card_index]
        except IndexError:
            raise StopIteration()
        else:
            self.__card_index -= 1
        return card

    def common(self):
        try:
            card = self.__cards[self.__card_index]
        except IndexError:
            raise StopIteration()
        else:
            self.__card_index += 1
        return card

    def __next__(self):
        if self.__order == 'reverse':
            return self.reverse()
        else:
            return self.common()


cards = Baralho('reverse')

for card in cards:
    print(card)