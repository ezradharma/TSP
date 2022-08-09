from flask import Flask, render_template, redirect, url_for, jsonify
import jyserver.Flask as jsf
from bs4 import BeautifulSoup
import requests
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import json
import datetime

from pyecharts import options as opts
from pyecharts.charts import Bar
# from DrawPicture import draw_picture

# from pyreact import useState, render, createElement as el

DRIVER_PATH = 'C:/Users/Tim/Downloads/drivers/chromedriver_win32/chromedriver.exe'
options = Options()
options.headless = True
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_argument("--window-size=1920,1200")

driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
ti = datetime.datetime.now()

app = Flask(__name__)

# @app.route('/')
# def index():
#     driver.get("https://www.cashbackmonitor.com/")

#     rates = []
#     providers = []

#     rate_box = driver.find_element_by_css_selector('div.fl div.fl table.cbm2 tbody')

#     for item in rate_box.find_elements_by_css_selector('tr'):
#         if (item.text.find('%') != -1):
#             tmp = item.text.split("%")[0]
#             tmp = re.sub("[^A-Za-z]", "", tmp)
#             providers.append(tmp)
#         else: continue
#         # for cell in item.find_elements_by_css_selector('td.l'):
#         #     # print(cell.text)
#         #     providers.append(cell.text)
#         for cell2 in item.find_elements_by_css_selector('td:nth-child(3) a'):
#             # print(cell2.text)
#             if (cell2.text.find('%') != -1):
#                 tmp = cell2.text.split("%")[0]
#                 rates.append(tmp + '%')
#             else: continue

#     return render_template('index.html', len = len(rates), rates = rates, providers = providers)

# @app.route('/rates/<store>')
# def ratepg(store):
#     driver.get("https://www.cashbackmonitor.com/cashback-store/" + store.lower())
#     print("https://www.cashbackmonitor.com/cashback-store/" + store.lower())
#     rates = []
#     providers = []
#     links = []
#     top5_rates = []
#     top5_stores = []

#     tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

#     for row in tbody.find_elements_by_tag_name('tr'):
#         if (row.text.find('%') != -1):
#             tmp = row.text.split("%")[0]
#             tmp = row.text.split("Up to")[0]
#             tmp = re.sub("[^A-Za-z]", "", tmp)
#             providers.append(tmp)
#         else: continue
#         # for cell in row.find_elements_by_css_selector('td.l.lo'):
#         #     print(cell.text)
#         #     providers.append(cell.text)
#         for cell2 in row.find_elements_by_css_selector('td.l span'):
#             # print(cell2.text)
#             if (cell2.text.find('$') != -1):
#                 if (cell2.text.find('%') != -1):
#                     tmp = cell2.text.split('%')[0]
#                     rates.append(tmp + '%')
#                 else: continue
#             else:
#                 rates.append(cell2.text)
#         for cell3 in row.find_elements_by_tag_name('td.l.lo a'):
#             # print(cell3.get_attribute('href'))
#             links.append(cell3.get_attribute('href'))

#     x = len(rates)
#     if x <= 5:
#         for i in range(0, x):
#             tmp = rates[i].split("%")[0]
#             tmp = re.sub("[^\d.]", "", tmp)
#             top5_rates.append(tmp)
#             top5_stores.append(providers[i])
#         for i in range(x, 5):
#             top5_rates.append('0')
#             top5_stores.append('Placeholder')
#         for i in range(0, 5):
#             print(top5_stores[i])
#             print(top5_rates[i])
#     else:
#         for i in range(0, len(rates)):
#             tmp = rates[i].split("%")[0]
#             tmp = re.sub("[^\d.]", "", tmp)
#             top5_rates.append(tmp)
#             top5_stores.append(providers[i])
#             if (i == 5): break

#         for i in range(0, len(rates)):
#             print(top5_stores[i])
#             print(top5_rates[i])
#             if (i == 5): break

#     send_stores = providers
#     send_rates = rates
#     return jsonify({
#         'top5_percents': top5_rates,
#         'top5_platforms': top5_stores,
#         'percents': send_rates,
#         'platforms': send_stores,
#         'links': links
#     })

@app.route('/rates/target')
def ratepg7():
    driver.get("https://www.cashbackmonitor.com/cashback-store/target")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/hotelscom')
def ratepg6():
    driver.get("https://www.cashbackmonitor.com/cashback-store/hotels.com")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/homedepot')
def ratepg5():
    driver.get("https://www.cashbackmonitor.com/cashback-store/homedepot")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/kohls')
def ratepg4():
    driver.get("https://www.cashbackmonitor.com/cashback-store/kohls")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/gap')
def ratepg3():
    driver.get("https://www.cashbackmonitor.com/cashback-store/gap")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/costco')
def ratepg2():
    driver.get("https://www.cashbackmonitor.com/cashback-store/costco")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/amazon')
def ratepg1():
    driver.get("https://www.cashbackmonitor.com/cashback-store/amazon")

    rates = []
    providers = []
    links = []
    imgs = []
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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })

@app.route('/rates/walmart')
def ratepg0():
    driver.get("https://www.cashbackmonitor.com/cashback-store/walmart")

    rates = []
    providers = []
    links = []
    top5_rates = []
    top5_stores = []
    imgs = []

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
        for cell4 in row.find_elements_by_tag_name('td.l.ro'):
            imgs.append(cell4.find_element_by_css_selector('a img').get_attribute("src"))

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
            if (i == 4): break

        for i in range(0, len(rates)):
            print(top5_stores[i])
            print(top5_rates[i])
            if (i == 4): break

    send_stores = providers
    send_rates = rates
    return jsonify({
        'top5_percents': top5_rates,
        'top5_platforms': top5_stores,
        'percents': send_rates,
        'platforms': send_stores,
        'links': links,
        'imgs': imgs
    })


@app.route('/main_data')
def main_data():
    driver.get("https://www.cashbackmonitor.com/")

    rates = []
    providers = []

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

    send_stores = providers
    send_rates = rates
    return jsonify({
        'ok': True,
        'msg': 'Success',
        'percents': send_rates,
        'stores': send_stores
    })

@app.route('/home_data')
def home_data():
    driver.get("https://www.cashbackmonitor.com/cashback-store/walmart")

    rates_tmp = []
    providers_tmp = []
    rates = []
    providers = []

    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Walmart')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/amazon")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Amazon')
            
    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/gap")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Gap')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/hotels.com")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Hotels.com')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/costco")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Costco')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/kohls")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Kohls')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/homedepot")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Home Depot')
            
    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    driver.get("https://www.cashbackmonitor.com/cashback-store/target")
    tbody = driver.find_element_by_css_selector('div.half.fl table tbody')

    for row in tbody.find_elements_by_tag_name('tr'):
        for cell2 in row.find_elements_by_css_selector('td.l span'):
            if (len(rates_tmp) >= 1): break
            # print(cell2.text)
            rates_tmp.append(cell2.text)
            providers_tmp.append('Target')

    rates.append(rates_tmp[0])
    providers.append(providers_tmp[0])
    rates_tmp = []
    providers_tmp = []

    send_stores = providers
    send_rates = rates
    return jsonify({
        'percents': send_rates,
        'stores': send_stores,
    })

@app.route('/')
def index():
    return 'hello world'

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True)