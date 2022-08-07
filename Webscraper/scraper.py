from flask import Flask, render_template, redirect, url_for
import jyserver.Flask as jsf
from bs4 import BeautifulSoup
import requests
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from pyecharts import options as opts
from pyecharts.charts import Bar
# from DrawPicture import draw_picture

DRIVER_PATH = 'C:/Users/Tim/Downloads/drivers/chromedriver_win32/chromedriver.exe'
options = Options()
options.headless = True
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_argument("--window-size=1920,1200")

driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)

app = Flask(__name__)

@app.route('/')
def index():
    driver.get("https://www.cashbackmonitor.com/")

    rates = []
    providers = []
    doget = []

    rate_box = driver.find_element_by_css_selector('div.fl div.fl table.cbm2 tbody')

    for item in rate_box.find_elements_by_css_selector('tr'):
        if (item.text.find('%') != -1):
            tmp = item.text.split("%")[0]
            tmp = re.sub("[^A-Za-z]", "", tmp)
            providers.append(tmp)
        else: continue
        # for cell in item.find_elements_by_css_selector('td.l'):
        #     # print(cell.text)
        #     providers.append(cell.text)
        for cell2 in item.find_elements_by_css_selector('td:nth-child(3) a'):
            # print(cell2.text)
            if (cell2.text.find('%') != -1):
                tmp = cell2.text.split("%")[0]
                rates.append(tmp + '%')
            else: continue

    return render_template('index.html', len = len(rates), rates = rates, providers = providers)

@app.route('/rates/<store>', methods=['GET'])
def ratepg(store):
    driver.get("https://www.cashbackmonitor.com/cashback-store/" + store.lower())
    print("https://www.cashbackmonitor.com/cashback-store/" + store.lower())
    rates = []
    providers = []
    links = []
    top5_rates = []
    top5_stores = []

    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        if (row.text.find('%') != -1):
            tmp = row.text.split("%")[0]
            tmp = row.text.split("Up to")[0]
            tmp = re.sub("[^A-Za-z]", "", tmp)
            providers.append(tmp)
        else: continue
        # for cell in row.find_elements_by_css_selector('td.l.lo'):
        #     print(cell.text)
        #     providers.append(cell.text)
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            # print(cell2.text)
            if (cell2.text.find('$') != -1):
                if (cell2.text.find('%') != -1):
                    tmp = cell2.text.split('%')[0]
                    rates.append(tmp + '%')
                else: continue
            else:
                rates.append(cell2.text)
        for cell3 in row.find_elements_by_tag_name('td.l.lo a'):
            # print(cell3.get_attribute('href'))
            links.append(cell3.get_attribute('href'))

    x = len(rates)
    if x <= 5:
        for i in range(0, x):
            tmp = rates[i].split("%")[0]
            tmp = re.sub("[^\d.]", "", tmp)
            top5_rates.append(tmp)
            top5_stores.append(providers[i])
        for i in range(x, 5):
            top5_rates.append('0')
            top5_stores.append('Placeholder')
        for i in range(0, 5):
            print(top5_stores[i])
            print(top5_rates[i])
    else:
        for i in range(0, len(rates)):
            tmp = rates[i].split("%")[0]
            tmp = re.sub("[^\d.]", "", tmp)
            top5_rates.append(tmp)
            top5_stores.append(providers[i])
            if (i == 5): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 5): break


    driver.close()

    return render_template('rates.html', len = len(rates), rates = rates,
    providers = providers, links = links, store = store, top5_rates = top5_rates,
    top5_stores = top5_stores)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)