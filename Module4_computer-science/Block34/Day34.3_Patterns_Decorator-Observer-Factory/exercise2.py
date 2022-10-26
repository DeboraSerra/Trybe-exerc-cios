from abc import ABC, abstractmethod

class Action(ABC):
    @abstractmethod
    def turn_on(self):
        pass

class TurnOnLights(Action):
    def turn_on(self):
        print('Light is on')

class BrewCoffee(Action):
    def turn_on(self):
        print('Coffee is ready')

class TurnOnPC(Action):
    def turn_on(self):
        print('PC is on')


class Alarm:
    def __init__(self) -> None:
        self.actions = []

    def add_action(self, action: Action):
        self.actions.append(action)

    def start_actions(self):
        for action in self.actions:
            action.turn_on()
        
    def ring(self):
        print("It's time to wake up!")
        self.start_actions()

lights = TurnOnLights()
coffee = BrewCoffee()
pc = TurnOnPC()

alarm = Alarm()
alarm.add_action(lights)
alarm.add_action(coffee)
alarm.add_action(pc)

alarm.ring()