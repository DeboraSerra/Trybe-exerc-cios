ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{LARANJA}Olá Mundo!{RESET}")

class Log:
    def dispara_log(self, message):
        return message

class LogError:
    def __init__(self, log) -> None:
        self.log = log

    def run_log(self, message):
        return f'{VERMELHO}{self.log.dispara_log(message)}{RESET}'


class LogSuccess:
    def __init__(self, log) -> None:
        self.log = log

    def run_log(self, message):
        return f'{VERDE}{self.log.dispara_log(message)}{RESET}'


class LogWarning():
    def __init__(self, log) -> None:
        self.log = log

    def run_log(self, message):
        return f'{LARANJA}{self.log.dispara_log(message)}{RESET}'

logger = Log()
error = LogError(logger)
success = LogSuccess(logger)
warning = LogWarning(logger)

print(error.run_log('The system has exceptions'))
print(success.run_log('The system is working'))
print(warning.run_log('The system is slow'))
