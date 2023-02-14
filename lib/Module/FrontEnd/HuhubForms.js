const { ExtensionField } = require("@aws-sdk/client-ses");
const { assert } = require("chai");
const { WebElement } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const {
  elementIsSelected,
  titleContains,
  titleMatches,
} = require("selenium-webdriver/lib/until");
let Page = require("../../Core/basePage");

let inquiryName = null;
let inquiryEmail = null;
let inquiryPhone = null;
let inquirybusinessName = null;
let inquirytitleLink = null;
let inquiryMessage = null;
let submitButton = null;
let subscriptionEmail = null;
let navigation = null;
let websiteDevelopment = null;
let webApplication = null;
let animation = null;
let ecommerce = null;
let branding = null;
let inputCity = null;
let inquiryCoverletter = null;
let mobileApplication = null;
let inquirySelection;

Page.prototype.openModal = async function () {
  await this.driver.sleep(500);
  modal = await this.findByXpath(
    '//*[@id="collapsingNavbar"]/ul/li[6]/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", modal);
  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.navigateProductPage = async function () {
  await this.driver.sleep(500);
  modal = await this.findByXpath(
    '//*[@id="collapsingNavbar"]/ul/li[2]/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", modal);
  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.clickCTA = async function () {
  await this.driver.sleep(500);
  viewJobsCTA = await this.findByXpath('//*[@id="link"]', 5000);
  await this.driver.executeScript("arguments[0].click();", viewJobsCTA);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.homeCta_1 = async function () {
  await this.driver.sleep(500);
  enterPriseCTA = await this.findByXpath(
    '//*[@id="our-products"]/div/div[2]/div[1]/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", enterPriseCTA);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.homeCta_2 = async function () {
  await this.driver.sleep(500);
  smallBusinessSolutionsCTA = await this.findByXpath(
    '//*[@id="our-products"]/div/div[2]/div[2]/a',
    5000
  );
  await this.driver.executeScript(
    "arguments[0].click();",
    smallBusinessSolutionsCTA
  );
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.homeCta_3 = async function () {
  await this.driver.sleep(500);
  aboutUSCTA = await this.findByXpath(
    '//*[@id="about-us"]/div/div[3]/div/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", aboutUSCTA);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.homeCta_4 = async function () {
  await this.driver.sleep(500);
  exploreCareersCTA = await this.findByXpath(
    '//*[@id="careers"]/div/div[2]/div[2]/div/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", exploreCareersCTA);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.servicePageCta_1 = async function () {
  await this.driver.sleep(500);
  freeConsultationCta = await this.findByXpath(
    '//*[@id="hero-banner"]/div/div/div/div/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", freeConsultationCta);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.productPage = async function () {
  await this.driver.sleep(1500);
  freeConsultationCta = await this.findByXpath(
    '//*[@id="hero-banner"]/div/div/div/div/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", freeConsultationCta);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.jobDesignation = async function () {
  await this.driver.sleep(500);
  jobDesignationCTA = await this.findByXpath(
    '//*[@id="all"]/div/div/ul/li[1]/a/div[2]',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", jobDesignationCTA);
  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.career = async function (name, email, phone, city, coverletter) {
  await this.driver.sleep(2000);

  inquiryName = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[1]/div[1]/input',
    5000 * 5
  );
  inquiryEmail = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[1]/div[2]/input',
    5000 * 5
  );
  inquiryPhone = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[1]/div[3]/div/div/input',
    5000 * 5
  );
  inputCity = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[1]/div[4]/input'
  );
  inquiryCoverletter = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[1]/div[5]/textarea',
    5000 * 5
  );
  inquirySelection = await (
    await this.findByXpath('//*[@id="file"]', 5000)
  ).sendKeys("C:/Automation/Hulhub/SampleFile.pdf");
  console.log(inquirySelection);

  await this.driver.sleep(1000);
  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inputCity, city);
  await this.write(inquiryCoverletter, coverletter);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="formResource"]/div/div/form/div[2]/div[2]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);
  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return true;
  });
};

Page.prototype.contactus_Form = async function (name, email, phone, message) {
  await this.driver.sleep(5000);
  inquiryName = await this.findById("name", 5000);
  inquiryEmail = await this.findById("email", 5000);
  inquiryPhone = await this.findByXpath(
    '//*[@id="app"]/main/section/div/div/div/form/div[1]/div[3]/div/div/input',
    5000
  );
  inquirySelection = await (
    await this.findByXpath(
      '//*[@id="app"]/main/section/div/div/div/form/div[1]/div[4]/select',
      5000
    )
  ).sendKeys("Website Design and Development");
  inquiryProject = await this.findById("exampleFormControlTextarea1", 5000);

  await this.driver.sleep(1000);
  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquiryProject, message);
  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section/div/div/div/form/div[2]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);
  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.productPageForm = async function (name, email, phone, message) {
  await this.driver.sleep(1000);
  inquiryName = await this.findById("name", 5000);
  inquiryEmail = await this.findById("email", 5000);
  inquiryPhone = await this.findByXpath(
    '//*[@id="hero-banner"]/div/div/div[2]/form/div[1]/div[3]/div/div/input',
    5000
  );
  inquirySelection = await (
    await this.findByXpath(
      '//*[@id="app"]/main/section/div/div/div/form/div[1]/div[4]/select',
      5000
    )
  ).sendKeys("Website Design and Development");
  inquiryProject = await this.findById("exampleFormControlTextarea1", 5000);

  await this.driver.sleep(1000);
  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquiryProject, message);
  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section/div/div/div/form/div[2]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);
  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.getNavigationLinks = async function () {
  navigation = [
    {
      name: "Infrastructure Cloud And Devops Service Page - Main Service Page",
      url: "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops",
    },
    {
      name: "Infrastructure Cloud And Devops - Managed Service - Sub Services Page",
      url: "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops/managed-services",
    },
    {
      name: "Infrastructure Cloud And Devops - Cloud Service - Sub Services Page",
      url: "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops/cloud-services",
    },
    {
      name: "Infrastructure Cloud And Devops - Cloud Application - Sub Services Page",
      url: "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops/cloud-application-development",
    },
    {
      name: "Mobile App Development Services - Main Service Page",
      url: "http://hulv2.hul-hub.com/mobile-applications",
    },
    {
      name: "Mobile App Development Services - Game Service - Sub Service Page",
      url: "http://hulv2.hul-hub.com/mobile-applications/games",
    },
    {
      name: "Mobile App Development Services - Native Service - Sub Service Page",
      url: "http://hulv2.hul-hub.com/mobile-applications/native",
    },
    {
      name: "Mobile App Development Services - React Native Service - Sub Service Page",
      url: "http://hulv2.hul-hub.com/mobile-applications/react-native",
    },
    {
      name: "Mobile App Development Services - Flutter Service - Sub Service Page",
      url: "http://hulv2.hul-hub.com/mobile-applications/flutter",
    },
    {
      name: "Web Application - Main Service Page",
      url: "http://hulv2.hul-hub.com/web-applications",
    },
    {
      name: "Web Application - Web App Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/web-apps",
    },
    {
      name: "Web Application - Mean/Mern Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/mean-mern",
    },
    {
      name: "Web Application - Dot Net Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/dot-net",
    },
    {
      name: "Web Application - Javascript Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/javascript",
    },
    {
      name: "Web Application - PHP Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/php",
    },
    {
      name: "Web Application - Python Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/web-applications/python",
    },
    {
      name: "Design and Marketing - Main Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing",
    },
    {
      name: "Design and Marketing - Seo Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/seo",
    },
    {
      name: "Design and Marketing - Content Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/content",
    },
    {
      name: "Design and Marketing - Social Media Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/social-media",
    },
    {
      name: "Design and Marketing - 4d Anomprphic Design Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/4d-anamorphic-design",
    },
    {
      name: "Design and Marketing - PPC Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/ppc",
    },
    {
      name: "Design and Marketing - Link Building Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/link-building",
    },
    {
      name: "Design and Marketing - Website Design Development  Service Page - Sub Service Page",
      url: "http://hulv2.hul-hub.com/digital-marketing/website-design-development",
    },
    {
      name: "Data Science - Main Service Page",
      url: "http://hulv2.hul-hub.com/data-science",
    },
    {
      name: "Block Chain - Main Service Page",
      url: "http://hulv2.hul-hub.com/blockchain",
    },
    {
      name: "Data Dynamo Page",
      url: "http://hulv2.hul-hub.com/data-dynamo",
    },
    {
      name: "Work Base HCM - Product Page",
      url: "http://hulv2.hul-hub.com/data-dynamo",
    },
    {
      name: "Beelinks - Product Page",
      url: "http://hulv2.hul-hub.com/beelinks",
    },
    {
      name: "Fleet Management - Product  Page",
      url: "http://hulv2.hul-hub.com/easyy-fleet-management-system",
    },
    {
      name: "eCampus Hub Page",
      url: "http://hulv2.hul-hub.com/ecampushub",
    },
    { name: "About Us", url: "http://hulv2.hul-hub.com/about-us" },
  ];

  return await this.driver.wait(async function () {
    return await navigation;
  });
};

Page.prototype.subscriptionForm = async function (email) {
  await this.driver.sleep(1000);

  subscriptionEmail = await this.findByXpath('//*[@id="email"]', 5000 * 5);
  submitButton = await this.findByXpath(
    '//*[@id="app"]/footer/div/div[1]/div[4]/form/button',
    5000 * 5
  );

  /**
   * Clear Form When submit a valid entry or invalid entry
   */
  // await this.write(subscriptionEmail, "");

  await this.driver.sleep(1000);

  await this.write(subscriptionEmail, email);

  await this.driver.sleep(1000);

  submitButton.click();

  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.contactusform = async function (name, email, phone, message) {
  await this.driver.sleep(2000);

  inquiryName = await this.findById("contact-name", 5000 * 5);
  inquiryEmail = await this.findById("contact-email", 5000 * 5);
  inquiryPhone = await this.findByXpath(
    '//*[@id="contact-phone"]/input',
    5000 * 5
  );
  inquiryMessage = await this.findByXpath(
    '//*[@id="contact-message"]',
    5000 * 5
  );

  /**
   * Clear Form When submit a valid entry or invalid entry
   */
  // await modalInqueryForm.reset()

  await this.driver.sleep(1000);

  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquiryMessage, message);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section[4]/div/div[2]/div[1]/div/form/div[3]/div[1]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);

  await this.driver.sleep(3000);

  inquiryName.clear();
  inquiryEmail.clear();
  inquiryPhone.clear();
  inquiryMessage.clear();

  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.submitForm = async function (name, email, phone, message) {
  await this.driver.sleep(3000);

  inquiryName = await this.findById("inquiry-name", 5000 * 5);
  inquiryEmail = await this.findById("inquiry-email", 5000 * 5);
  inquiryPhone = await this.findByXpath('//*[@id="phone"]/input', 5000 * 5);
  inquiryMessage = await this.findById("inquiry-message", 5000 * 5);

  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquiryMessage, message);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section[1]/div/div/div[2]/form/button',
    5000 * 5
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);

  await this.driver.sleep(2000);
  inquiryName.clear();
  inquiryEmail.clear();
  inquiryPhone.clear();
  inquiryMessage.clear();

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.packagescta1 = async function (name, email, phone, message) {
  await this.driver.sleep(1000);

  modal = await this.findByXpath(
    '//*[@id="webdesign"]/div/div/div/div/div/div[4]/div/div/div[3]/div/a',
    5000
  );
  await this.driver.executeScript("arguments[0].click();", modal);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.submitpackagesForm = async function (name, email, phone) {
  await this.driver.sleep(1000);

  inquiryName = await this.findByXpath('//*[@id="name"]', 5000);
  inquiryEmail = await this.findByXpath('//*[@id="email"]', 5000);
  inquiryPhone = await this.findByXpath('//*[@id="phone"]/input', 5000);

  /**
   * Clear Form When submit a valid entry or invalid entry
   */
  // await modalInqueryForm.reset()

  await this.driver.sleep(1000);

  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section[3]/div/div/div/div[2]/form/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);

  await this.driver.sleep(2000);

  inquiryName.clear();
  inquiryEmail.clear();
  inquiryMessage.clear();

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.portfolioForm = async function (
  name,
  email,
  phone,
  businessName,
  titlelink,
  message
) {
  await this.driver.sleep(500);

  inquiryName = await this.findByXpath(
    "/html/body/div[1]/main/section[4]/div/form/div/div/div/div/div[2]/div[1]/div/input",
    5000 * 5
  );
  inquiryEmail = await this.findById("email", 5000 * 5);
  inquiryPhone = await this.findByXpath('//*[@id="phone"]/input', 5000 * 5);
  inquirybusinessName = await this.findByXpath(
    "/html/body/div[1]/main/section[4]/div/form/div/div/div/div/div[2]/div[4]/div/input",
    5000 * 5
  );
  inquirytitleLink = await this.findById("website", 5000 * 5);
  inquiryMessage = await this.findByXpath('//*[@id="message"]', 5000 * 5);
  /**
   * Brand Checkboxes
   */
  // await this.driver.sleep(500);

  ecommerce = await this.findByXpath(' //*[@id="customCheck2"]', 5000 * 5);
  console.log(ecommerce);
  await this.driver.executeScript("arguments[0].click();", ecommerce);
  webApplication = await this.findByXpath('//*[@id="customCheck3"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", webApplication);
  branding = await this.findByXpath(' //*[@id="customCheck4"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", branding);
  animation = await this.findByXpath(' //*[@id="customCheck5"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", animation);
  mobileApplication = await this.findByXpath(
    ' //*[@id="customCheck6"]',
    5000 * 5
  );
  await this.driver.executeScript("arguments[0].click();", mobileApplication);

  await this.driver.sleep(1000);
  // websiteDevelopment = await this.findByXpath('//*[@id="customCheck1"]', 5000 * 5)
  // await this.driver.executeScript("arguments[0].click();", websiteDevelopment);

  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquirybusinessName, businessName);
  await this.write(inquirytitleLink, titlelink);
  await this.write(inquiryMessage, message);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section[4]/div/form/div/div/div/div/div[4]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);

  await this.driver.sleep(2000);

  inquiryName.clear();
  inquiryEmail.clear();
  inquiryPhone.clear();
  inquirybusinessName.clear();
  inquirytitleLink.clear();
  inquiryMessage.clear();

  await this.driver.sleep(2000);
  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.packagesForm = async function (
  name,
  email,
  phone,
  businessName,
  titlelink,
  message
) {
  await this.driver.sleep(500);

  inquiryName = await this.findByXpath(
    "/html/body/div[1]/main/section[4]/div/form/div/div/div/div/div[2]/div[1]/div/input",
    5000 * 5
  );
  inquiryEmail = await this.findByXpath('//*[@id="email"]', 5000 * 5);
  inquiryPhone = await this.findByXpath('//*[@id="phone"]/input', 5000 * 5);
  inquirybusinessName = await this.findByXpath(
    "/html/body/div[1]/main/section[4]/div/form/div/div/div/div/div[2]/div[4]/div/input",
    5000 * 5
  );
  inquirytitleLink = await this.findById("website", 5000 * 5);
  inquiryMessage = await this.findByXpath('//*[@id="message"]', 5000 * 5);
  /**
   * Brand Checkboxes
   */
  await this.driver.sleep(500);
  websiteDevelopment = await this.findByXpath(
    '//*[@id="customCheck1"]',
    5000 * 5
  );
  await this.driver.executeScript("arguments[0].click();", websiteDevelopment);
  ecommerce = await this.findByXpath(' //*[@id="customCheck2"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", ecommerce);
  webApplication = await this.findByXpath('//*[@id="customCheck3"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", webApplication);
  branding = await this.findByXpath(' //*[@id="customCheck4"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", branding);
  animation = await this.findByXpath(' //*[@id="customCheck5"]', 5000 * 5);
  await this.driver.executeScript("arguments[0].click();", animation);
  mobileApplication = await this.findByXpath(
    ' //*[@id="customCheck6"]',
    5000 * 5
  );
  await this.driver.executeScript("arguments[0].click();", mobileApplication);

  await this.driver.sleep(1000);

  await this.write(inquiryName, name);
  await this.write(inquiryEmail, email);
  await this.write(inquiryPhone, phone);
  await this.write(inquirybusinessName, businessName);
  await this.write(inquirytitleLink, titlelink);
  await this.write(inquiryMessage, message);

  await this.driver.sleep(1000);

  submitButton = await this.findByXpath(
    '//*[@id="app"]/main/section[4]/div/form/div/div/div/div/div[4]/button',
    5000 * 2
  );
  await this.driver.executeScript("arguments[0].click();", submitButton);

  await this.driver.sleep(2000);

  inquiryName.clear();
  inquiryEmail.clear();
  inquiryPhone.clear();
  inquirybusinessName.clear();
  inquirytitleLink.clear();
  inquiryMessage.clear();
  await this.driver.sleep(2000);

  return await this.driver.wait(async function () {
    return await true;
  });
};

Page.prototype.getTitle = async function () {
  const elementTitle = await this.findByXpath(
    '//meta[contains(@property,"og:title")]',
    7000
  );
  console.log(
    "start getting title:",
    await elementTitle.getAttribute("content")
  );
  title = await elementTitle.getAttribute("content");
  return await this.driver.wait(async function () {
    return await title;
  });
};

Page.prototype.getTitles = async function () {
  const elementTitle = await this.findByXpath(
    '//meta[contains(@property,"og:title")]',
    7000
  );
  console.log(
    "start getting title:",
    await elementTitle.getAttribute("content")
  );
  title = await elementTitle.getAttribute("content");

  return await this.driver.wait(async function () {
    return await title;
  });
};

Page.prototype.getMetaTitles = async function () {
  servicestitles = [
    {
      name: "Infrastructure cloud and DevOps Page",
      title: "Cloud | DevOps And Infrastructure Services | Hul Hub",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Managed Services",
      title: "Cloud | DevOps And Infrastructure Services | Hul Hub",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Cloud Services",
      title: "Cloud | DevOps And Infrastructure Services | Hul Hub",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Cloud Application Development Services",
      title: "Cloud | DevOps And Infrastructure Services | Hul Hub",
    },
    {
      name: "Mobile-applications Services",
      title: "Top Mobile App Development Services | Hul Hub",
    },
    {
      name: "Mobile-applications - Games - Services",
      title: "Top Mobile App Development Services | Hul Hub",
    },
    {
      name: "Mobile-applications - Native - Services",
      title: "Top Mobile App Development Services | Hul Hub",
    },
    {
      name: "Mobile-applications - React Native - Services",
      title: "Top Mobile App Development Services | Hul Hub",
    },
    {
      name: "Mobile-applications - Flutter - Services",
      title: "Top Mobile App Development Services | Hul Hub",
    },
    {
      name: "Web-applications - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - Web-apps - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - Mean/Mern - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - .NET - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - JavaScript - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - PHP - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Web-applications - Python - Services",
      title: "Web Application Development and Web Design Services | Hul Hub",
    },
    {
      name: "Design and Marketing - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - SEO - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - Content - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - Social Media - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - 4D Anamorphic Design Portfolio - Services",
      title: "4D Anamorphic Digital Billboard Advertising | Hul Hub",
    },
    {
      name: "Design and Marketing - PPC - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - Link Building - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Design and Marketing - Website Design & Development - Services",
      title: "Best Digital Marketing Services | Hul Hub",
    },
    {
      name: "Data-science Service",
      title: "Data Science Consultants | Data Consultants | Hul Hub",
    },
    {
      name: "Blockchain Services",
      title: "Blockchain Consulting Services And Solutions | Hul Hub",
    },
    {
      name: "Products Page",
      title: "Products | Payroll -  HRMS - Chatbot - Inspection App | Hul Hub",
    },
    {
      name: "About-us Page",
      title: "About Us | Hul Hub",
    },
    {
      name: "Social Impact Page",
      title: "Creating A Social Impact With Hul Hub",
    },
    {
      name: "Insights Page",
      title: "News &amp; Resources On Fastest Growing IT Industry By Hul Hub",
    },
    {
      name: "Careers Page",
      title: "Join Our Team | Hul Hub",
    },
    {
      name: "Content Marketing Services",
      title: "Design Service Pro | Open Source Web Development",
    },
    {
      name: "Contact Us",
      title: "Hul Hub | Contact Us",
    },
    {
      name: "Privacy Policy",
      title: "Privacy Policy | Hul Hub",
    },
    {
      name: "Terms of Service for Dynamo",
      title: "Terms of Service | Hul Hub",
    },
    {
      name: "Data Dynamo",
      title: "Dynamo Car APIs | Empowering Your Vehicle Business | Hul Hub",
    },
    {
      name: "Work-Base HCM ",
      title: "Work Base HCM | Best Human Capital Management Software",
    },
    {
      name: "Beelinks",
      title: "CRM Solution",
    },
    {
      name: "Easyy Fleet Management System",
      title: "Easyy Fleet | Enterprise Fleet Management System ",
    },
    {
      name: "eCampus Hub",
      title: "eCampus Hub | A Trusted Institute Management System",
    },
  ];
  return await this.driver.wait(async function () {
    return await servicestitles;
  });
};

Page.prototype.getDescription = async function () {
  const elementTitle = await this.findByXpath(
    '//meta[contains(@property,"og:description")]',
    7000
  );
  console.log(
    "start getting description:",
    await elementTitle.getAttribute("content")
  );
  let desc = await elementTitle.getAttribute("content");
  let descAfterTrim = desc.replace(/\s/g, " ").trim();
  return await this.driver.wait(async function () {
    return await descAfterTrim;
  });
};

Page.prototype.getMetaDescription = async function () {
  servicesDescription = [
    {
      name: "Infrastructure cloud and DevOps Page",
      description:
        "Hul Hub is a top provider of infrastructure services to the global software development community. We help startups, corporations scale their DevOps efforts.",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Managed Services",
      description:
        "Hul Hub is a top provider of infrastructure services to the global software development community. We help startups, corporations scale their DevOps efforts.",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Cloud Services",
      description:
        "Hul Hub is a top provider of infrastructure services to the global software development community. We help startups, corporations scale their DevOps efforts.",
    },
    {
      name: "Infrastructure cloud and DevOps Page - Cloud Application Development Services",
      description:
        "Hul Hub is a top provider of infrastructure services to the global software development community. We help startups, corporations scale their DevOps efforts.",
    },
    {
      name: "Mobile-applications Services",
      description:
        "Hul Hub is a leading mobile app development company, providing custom iPhone, iPad, and Android app development services. Give us a call or send an email.",
    },
    {
      name: "Mobile-applications - Games - Services",
      description:
        "Hul Hub is a leading mobile app development company, providing custom iPhone, iPad, and Android app development services. Give us a call or send an email.",
    },
    {
      name: "Mobile-applications - Native - Services",
      description:
        "Hul Hub is a leading mobile app development company, providing custom iPhone, iPad, and Android app development services. Give us a call or send an email.",
    },
    {
      name: "Mobile-applications - React Native - Services",
      description:
        "Hul Hub is a leading mobile app development company, providing custom iPhone, iPad, and Android app development services. Give us a call or send an email.",
    },
    {
      name: "Mobile-applications - Flutter - Services",
      description:
        "Hul Hub is a leading mobile app development company, providing custom iPhone, iPad, and Android app development services. Give us a call or send an email.",
    },
    {
      name: "Web-applications - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - Web-apps - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - Mean/Mern - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - .NET - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - JavaScript - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - PHP - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Web-applications - Python - Services",
      description:
        "Hul Hub is the best web application development company that provides affordable, user-friendly, and secure solutions for enterprise level businesses. Call now!",
    },
    {
      name: "Design and Marketing - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - SEO - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - Content - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - Social Media - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - 4D Anamorphic Design Portfolio - Services",
      description:
        "Discover the new age of advertising with 4D anamorphic digital billboards by Hul Hub. Check out our portfolio to view the 4D illusions in action.",
    },
    {
      name: "Design and Marketing - PPC - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - Link Building - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Design and Marketing - Website Design & Development - Services",
      description:
        "Hul Hub is a digital marketing agency offering SEO, web design, social media services and more. Contact us today to learn how we can help your business grow!",
    },
    {
      name: "Data-science Service",
      description:
        "At Hul Hub, we provide world-class data science consulting services. We help businesses harness the power of data to make better decisions and grow faster.",
    },
    {
      name: "Blockchain Services",
      description:
        "Hul Hub offers blockchain consulting services and solutions for building decentralized  blockchain based systems to help businesses succeed.",
    },
    {
      name: "Products Page",
      description:
        "Hul Hubs top products solutions include HRMS, inspection app, Payroll management, auction services integration, and chatbot. Read more about our products.",
    },
    {
      name: "About-us Page",
      description:
        "Hul Hub has successfully implemented solutions for clients from 20+ different countries and delivered over 50+ chatbot solutions worldwide.",
    },
    {
      name: "Social Impact Page",
      description:
        "Hul Hub is committed to utilizing its people, resources, and products to create a positive social impact that empowers communities and people around us.",
    },
    {
      name: "Insights Page",
      description:
        "Get the latest and insightful updates, news, resources, blogs and case studies on the fastest growing IT industry from our experts at Hul Hub.",
    },
    {
      name: "Careers Page",
      description:
        "Come join our team and be a part of the fastest growing IT industry. Send your resume to careers@hulhub.co.",
    },
    {
      name: "Contact Us",
      description:
        "Want to start a project with our skilled industry specialists? Contact at support@hulhub.co. Get in touch to discuss business opportunities and collaborations.",
    },
    {
      name: "Privacy Policy",
      description:
        "The following privacy policy outlines how your personal information may get collected, used, or shared each time you visit our website.",
    },
    {
      name: "WorkBase Hub",
      description:
        "Work Base HCM is a cloud-based human capital management software that automates employee lifecycle. It includes features such as onboarding, payroll and benefits, time and attendance tracking, performance reviews",
    },
    {
      name: "Data Dynamo",
      description:
        "Dynamo provides multiple car APIs for vehicle businesses. Integrate our vehicle APIs for car price estimation, car inspection APIs, and custom APIs for vehicles.",
    },
    {
      name: "Beelinks",
      description:
        "Beelinks is a cloud-based human capital management software that automates employee lifecycle. It includes features such as onboarding, payroll and benefits, time and attendance tracking, performance reviews",
    },
    {
      name: "Easyy Fleet",
      description:
        "Easyy  Fleet  is  the  solution  that  will  help  you  transform  how  you  manage  your  fleets.  Highly customizable and easy to integrate with existing systems.",
    },
    {
      name: "eCampus Hub",
      description:
        "eCampus Hub - a cloud-based institute management software for streamlining organizational processes. The built-in portals for LMS, finance, HR, admin & parents automate everything seamlessly.",
    },
  ];
  return await this.driver.wait(async function () {
    return await servicesDescription;
  });
};

module.exports = Page;
