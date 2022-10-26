from dataclasses import dataclass
from statistics import mean, median, mode
from typing import Iterable


@dataclass
class Statistics():
    list: Iterable

    def average(self):
        return mean(list)

    def mode(self):
        return mode(list)

    def median(self):
        return median(list)

    def __str__(self) -> str:
        return f'avg: {self.average} | mode: {self.mode} | median: {self.median}'


numbers = [1, 2, 3, 4, 5]
stats = Statistics(numbers)
print(stats)