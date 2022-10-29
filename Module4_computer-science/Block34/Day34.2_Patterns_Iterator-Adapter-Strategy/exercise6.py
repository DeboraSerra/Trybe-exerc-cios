from abc import ABC, abstractmethod

class OrcamentoInterface(ABC):
    @abstractmethod
    def calcular_imposto(cls):
        raise NotImplementedError

class Orcamento_iss(OrcamentoInterface):
    @classmethod
    def calcular_imposto(cls, value):
        return value * 0.1


class Orcamento_icms(OrcamentoInterface):
    @classmethod
    def calcular_imposto(cls, value):
        return value * 0.06


class Orcamento_pis(OrcamentoInterface):
    @classmethod
    def calcular_imposto(cls, value):
        return value * 0.0065


class Orcamento_cofins(OrcamentoInterface):
    @classmethod
    def calcular_imposto(cls, value):
        return value * 0.03


class Orcamento():
    def __init__(self, value) -> None:
        self.__value = value

    def calcular(self, imposto):
        return imposto.calcular_imposto(self.__value)

orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular(Orcamento_iss)}")
print(f"ICMS: {orcamento.calcular(Orcamento_icms)}")
print(f"PIS: {orcamento.calcular(Orcamento_pis)}")
print(f"COFINS: {orcamento.calcular(Orcamento_cofins)}")