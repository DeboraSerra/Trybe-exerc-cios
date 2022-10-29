from abc import ABC, abstractmethod
from xmlrpc.client import Boolean

class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, can_access = False) -> None:
        pass

    @abstractmethod
    def set_access(self, access: Boolean):
        pass

class SupportSystem(SystemAccess):
    def __init__(self, can_access=False) -> None:
        self.name = "Support"
        self.can_access = can_access

    def set_access(self, access: Boolean):
        self.can_access = access

class SalesSystem(SystemAccess):
    def __init__(self, can_access=False) -> None:
        self.name = "Sales"
        self.can_access = can_access

    def set_access(self, access: Boolean):
        self.can_access = access

class FinanceSystem(SystemAccess):
    def __init__(self, can_access=False) -> None:
        self.name = "Finance"
        self.can_access = can_access

    def set_access(self, access: Boolean):
        self.can_access = access

class Account(ABC):
    def __init__(self, username) -> None:
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account(self):
        pass
  
    def show_permissions(self):
        list = [permission.name for permission in self.permissions]
        print(list)

    def add_permission(self, access: SystemAccess):
        self.permissions.append(access)

class SupportAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystem(True))

class SupportSalesAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystem(True))
        self.add_permission(SalesSystem(True))

class ManagerAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystem(True))
        self.add_permission(SalesSystem(True))
        self.add_permission(FinanceSystem(True))

if __name__ == '__main__':
    response = input('What is account you want to create? \n1 - Support \n2 - Sales and support \n3 - Management ')
    username = input('What is the username for your account? ')
    if response == '1':
        account = SupportAccount(username)
    elif response == '2':
        account = SupportSalesAccount(username)
    elif response == '3':
        account = ManagerAccount(username)

    print(account.username)
    print(account.show_permissions())