from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

url = "https://quotes.toscrape.com/"

# options = webdriver.FirefoxOptions()
# options.add_argument('--ignore-certificate-errors')
# options.add_argument('--ignore-ssl-errors')
# options.add_argument('--start-maximized')

# firefox = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)
options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox()
firefox.get(url)

quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

print(quote)
