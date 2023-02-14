/**
 * Selenium Webdriver
 */
const { Builder, By, until, Key } = require('selenium-webdriver');


/**
 * HTML Encoder And Decoder
 */
const HTMLDecoderEncoder = require("html-encoder-decoder");

/**
 * NodeMailer
 */
const nodemailer = require("nodemailer");

/**
 * AWS SDK
 */
const aws = require("aws-sdk");

/**
 * Selenium Chrom Webdriver Settings and options
 */
// const chrome = require('selenium-webdriver/chrome');
// let o = new chrome.Options();
// o.addArguments('start-fullscreen');
// o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
// o.setUserPreferences({ credential_enable_service: false });

/**
 * LamdaTest Credentials
 */
/**
 * LambdaTest Capabilities
 */
var capabilities = {
    'build': 'Design Service Pro', //Build name
    'name': 'Design Service Pro Testing', // Test name
    'platform': 'Windows 10', // OS name
    'browserName': 'chrome', // Browser name
    'version': 'latest', // Browser version
    'visual': false, // To take step by step screenshot
    'network': false, // To capture network Logs
    'console': false, // To capture console logs.
    'tunnel': false // If you want to run the localhost than change it to true
};

aws.config.setPromisesDependency(null)

var Page = function () {
    this.driver = new Builder()
        // .usingServer(
        //     "http://" +
        //     LT_USERNAME +
        //     ":" +
        //     LT_ACCESS_KEY +
        //     "@hub.lambdatest.com/wd/hub"
        // )
        .withCapabilities(capabilities)
        // .withCapabilities({
        //     'goog:chromeOptions': {
        //         prefs: {
        //             // 0 - Default, 1 - Allow, 2 - Block
        //             'profile.managed_default_content_settings.notifications': 1
        //         }
        //     }
        // })
        // .usingServer('http://localhost:4444/wd/hub')
        .forBrowser('chrome')
        .build();

    /**
     * Visit | This method will visit the url that given by the script then 
     * get the selinium driver to get that url to run on automate browser
     * 
     * @param String theUrl 
     * @returns 
     */
    this.visit = async function (theUrl) {
        await this.driver.manage().window().maximize();
        return await this.driver.get(theUrl);
    };

    /**
     * Navigate | This method will navigate the automate browser
     * 
     * @param String method 
     * @param String to | URL  
     * @returns 
     */
    this.navigate = async function (method, to) {

        if (method == 'forward') {
            return await this.driver.navigate().forward();
        } else if (method == 'back') {
            return await this.driver.navigate().back();
        } else if (method == 'refresh') {
            return await this.driver.navigate().refresh();
        } else {
            return await this.driver.navigate().to(to);
        }
    }

    /**
     * Quit | This method will run for quit the automate browser
     * 
     * @returns 
     */
    this.quit = async function () {
        return await this.driver.quit();
    };

    this.close = async function () {
        return await this.driver.close();
    };


    /**
     * Find By ID | This method using selenium driver for looking element and return the object of the element
     * 
     * @param String id 
     * @param Integer timeout 
     * @returns 
     */
    this.findById = async function (id, timeout) {
        await this.driver.wait(until.elementLocated(By.id(id)), timeout, 'Looking for Id element');
        return await this.driver.findElement(By.id(id));
    };

    /**
     * Find By Class | This method will get the selinium driver and get the element by 
     * waiting and looking for the class element to be visible and return the element of given class
     * 
     * @param String | className 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByClass = async function (className, timeout) {
        await this.driver.wait(until.elementLocated(By.className(className)), timeout, 'Looking for class element');
        return await this.driver.findElement(By.className(className));
    };

    /**
     * Find By Link Text
     * 
     * @param String | linkText 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByLinkText = async function (linkText, timeout) {
        await this.driver.wait(until.elementLocated(By.linkText(linkText)), timeout, 'Looking for link text element');
        return await this.driver.findElement(By.linkText(linkText));
    };

    /**
     * Find By Name
     * 
     * @param String | name 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByName = async function (name, timeout) {
        await this.driver.wait(until.elementLocated(By.name(name)), timeout, 'Looking for name element');
        return await this.driver.findElement(By.name(name));
    };

    /**
     * Find By XPATH | This method is using selenium driver for looking xpath element and return the element object
     * 
     * @param String xpath 
     * @param Integer timeout 
     * @returns 
     */
    this.findByXpath = async function (xpath, timeout) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), timeout, 'Looking for xpath element');
        return await this.driver.findElement(By.xpath(xpath));
    };

    /**
     * Find By CSS Selector
     * 
     * @param String css 
     * @param Integer timeout 
     * @returns 
     */
    this.findByCss = async function (css, timeout) {
        await this.driver.wait(until.elementLocated(By.css(css)), timeout, 'Looking for CSS element');
        return await this.driver.findElement(By.css(css));
    };

    /**
     * Write | This method is for writing in element or input by getting the element from the selenium driver
     * 
     * @param Object el 
     * @param String txt 
     * @returns 
     */
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };


    /**
     * Reset | This method is for reset in element or input by getting the element from the selenium driver
     * 
     * @param Object el 
     * @param String txt 
     * @returns 
     */
    this.reset = async function (el, txt) {
        return await el.sendKeys(Key.CONTROL + "a", Key.DELETE);
    };

    /**
     * 
     * @param {*} el 
     * @returns 
     */
    this.enter = async function (el) {
        return await el.sendKeys(Key.ENTER)
    }

    /**
     * Convert HTML Entities to text
     */
    this.encodeHtml = async function (string) {
        const encoded = await HTMLDecoderEncoder.encode(string)
        return await HTMLDecoderEncoder.decode(encoded)

    }

    this.emailWithAttachments = async function (from, subject, html, attachments = []) {

        const ses = new aws.SES({
            apiVersion: "2010-12-01",
            region: "us-west-2",
        });

        let transporter = nodemailer.createTransport({
            SES: { ses, aws },
        });


        // create reusable transporter object using the default SMTP transport
        // let transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true, // true for 465, false for other ports
        //     auth: {
        //         user: 'support@boxesandprintings.com', // User 
        //         pass: '4>PRjTM90', // Password
        //     },
        // });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: from, // '"Fred Foo 👻" <foo@example.com>', // sender address
            to: ['fashafi9018@sbtjapan.com', 'ammadali9751@sbtjapan.com'], //"bar@example.com, baz@example.com", // list of receivers
            cc: ['mufakhruddin9417@sbtjapan.com', '', 'tirmizi9772@sbtjapan.com', 'yousra9427@sbtjapan.com', 'fazila9774@sbtjapan.com', 'mohsinali9104@sbtjapan.com'],
            subject: subject, //"Hello ✔", // Subject line
            html: html, //"<b>Hello world?</b>", // html body
            attachments: attachments
        });
        console.log(info)
        // console.log("Message sent: %s", info.messageId);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return await this.driver.wait(async function () {
            return info.messageId;
        });
    }

    this.uploadToS3 = async function (bucket, filename, data) {
        console.log('AWS_ACCESS_KEY_ID', process.env.AWS_ACCESS_KEY_ID)
        console.log('AWS_SECRET_ACCESS_KEY', process.env.AWS_SECRET_ACCESS_KEY)
        const s3 = new aws.S3({
            apiVersion: "2010-12-01",
            region: "us-west-2",
        });

        const params = {
            Bucket: bucket,
            Key: 'testReports/' + filename,
            Body: data,
            ContentType: 'application/zip; charset=utf8',
            ACL: 'public-read',
        }

        let uploadedObject = await s3.upload(params).on('httpUploadProgress', (evt) => {
            console.log("Uploaded : " + Math.round(Number(evt.loaded * 100) / Number(evt.total)) + '%');
        }).promise();
        if (uploadedObject) return { location: uploadedObject.Location, filename: params.Key };
        else {
            console.log('error in Putting Object AWS ERROR RESPONSE');
            return undefined;
        }
    }




};

module.exports = Page;