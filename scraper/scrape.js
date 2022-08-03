const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 9000;
const path = require('path');
const router = express.Router();

let info = [{
    "store_info" : ""
}];

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", path.join(__dirname, "views"));

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
    request('https://www.cashbackholic.com/', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            let rates = [];
            $('div.square').each((i, ele) => {
                const store_item = $(ele).text();
                if (store_item[store_item.length - 1] == '%'
                || store_item[store_item.length - 1] == '*') {
                    let item = "";
                    if (store_item.includes('$')) {
                        item = store_item.replace("$", " $");
                        item = item.split("$")[0];
                    } else {
                        item = store_item.replace(/[1-9]/, " $&");
                        item = item.split(/[1-9]/)[0];
                    }
                    if (store_item.includes("Up to")) {
                        item = store_item.replace("Up to", "");
                        item = item.split(/[1-9]/)[0];
                    }
                    if (item[item.length - 2] == '.') {
                        item = item.slice(0, item.length - 2);
                    }
                    console.log(item);
                    info.push({store_info: item});
                }
            });
            $('div.square div.cashback').each((i, ele) => {
                const scraped_rate = $(ele).text();
                if (scraped_rate[scraped_rate.length - 1] == '%'
                || scraped_rate[scraped_rate.length - 1] == '*') {
                    console.log(scraped_rate);
                    rates.push(scraped_rate);
                }
            });
            // $('div.square div.logos img').each((i, ele) => {
            //     const img = $(ele).attr('href');
            //     if (i == getImg[i]) {
            //         imgs.push(img);
            //     }
            //     console.log(img);
            // });
            let name = "TSP";
            res.render('index', { data: {store : info, title : name, rate : rates}});
        }
    });
});

router.get('/rates', function(req, res) {
    request('https://www.cashbackmonitor.com/cashback-store/', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            $('table.cbm2 tbody td:not(:nth-of-type(1))').each((i, ele) => {
                const scraped_rate = $(ele).text();
                console.log(scraped_rate);
            });
            res.render("rates");
        }
    });
});

let rates_arr = [];
router.get('/store_rates_walmart', function(req, res) {
    request('https://www.cashbackmonitor.com/cashback-store/walmart/', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            console.log("HYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
            console.log("#: " + $('#ra0').html())
            $('#ra0').each((i, ele) => {
                console.log($(ele).find('#ra0').text())
                const scraped_rate = $(ele).text();
                if (scraped_rate == '') {
                    console.log('correct')
                }
                console.log("Walmart____")
                rates_arr.push(scraped_rate);
                console.log(scraped_rate);
            });
            res.render("store_rates_walmart", {rates_arr});
        }
    });
});

router.get('/store_rates_amazon', function (req, res) {
    res.render("store_rates_amazon");
});

router.get('/store_rates_costco', function (req, res) {
    res.render("store_rates_costco");
});

router.get('/store_rates_gap', function (req, res) {
    res.render("store_rates_gap");
});

router.get('/store_rates_homedepot', function (req, res) {
    res.render("store_rates_homedepot");
});

router.get('/store_rates_hotels_com', function (req, res) {
    res.render("store_rates_hotels_com");
});

router.get('/store_rates_kohls', function (req, res) {
    res.render("store_rates_kohls");
});

router.get('/store_rates_target', function (req, res) {
    res.render("store_rates_target");
});

// For Test Practice
router.get('/hello', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/hello.html'));
    res.send('<p>Bye</p>');
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server Started in PORT ${PORT}`);
});