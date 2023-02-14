const { describe, it, after, before } = require("mocha");
const Hulhubforms = require("../../lib/Module/FrontEnd/HuhubForms");
const chai = require("chai");
const should = require("chai").should();
const expect = chai.expect;
// const should  = chai.should;
const chaiAsPromised = require("chai-as-promised");
const { assert } = require("chai");
// var assert = require('chai').assert
chai.use(chaiAsPromised);
const fs = require("fs");
const parse = require("csv-parse");
// const expect = require('chai').expect;
const csvData = [];
const reader = require("xlsx");
const { ConnectContactLens } = require("aws-sdk");

process.on("unhandledRejection", () => {});

(async function Forms() {
  try {
    describe("Hulhub - Forms Testings", async function () {
      this.timeout(5000000);
      let driver, page, pageNavigation;

      beforeEach(async () => {
        /**
         * This hook will perform on every it run then this hook event will be trigger
         * so when there is any case you need to perform with closing the browser on
         * every it then use this other wise after and before perform the same as this, but not on the every `it` perform
         */
      });

      afterEach(async () => {
        /**
         * This hook will perform on every it run then this hook event will be trigger
         * so when there is any case you need to perform with closing the browser on
         * every it then use this other wise after and before perform the same as this, but not on the every `it` perform
         */
      });

      before(async () => {
        console.log("--> Hulhub before");
        page = new Hulhubforms();
        driver = page.driver;
        await page.visit("http://hulv2.hul-hub.com/");
      });

      after(async () => {
        // await page.quit();
      });

      /**
       * Open Header Modal
       */
      describe("Hulhub Contact-Us Page", async () => {
        it("Opening Modal", async () => {
          const result = await page.openModal();
          expect(result).to.be.true;
        });

        it("Header modal submit invalid form data", async () => {
          /**
           * Invalid Form data will be submit on this case
           */
          const name = "Raees Raza";
          const email = "";
          const phone = "ABCD"; // Invalid Phone Number
          const message = "";
          const result = await page.contactus_Form(name, email, phone, message);
          expect(result).to.be.true;
        });

        it("Header modal submit valid form data", async () => {
          /**
           * Valid Form data will be submit on this case
           */
          const name = "test";
          const email = "test@test.com";
          const phone = "03312409287";
          const message = "This is a testing message by automation";
          const result = await page.contactus_Form(name, email, phone, message);
          expect(result).to.be.true;
        });
      });

      describe("Hulhub Product Page", async () => {
        it("Opening Product Page", async () => {
          const result = await page.navigateProductPage();
          expect(result).to.be.true;
        });

        it("Product Page Form - submit invalid form data", async () => {
          /**
           * Invalid Form data will be submit on this case
           */
          const name = "Raees Raza";
          const email = "";
          const phone = "ABCD"; // Invalid Phone Number
          const message = "";
          const result = await page.contactus_Form(name, email, phone, message);
          expect(result).to.be.true;
        });

        it("Product Page Form - submit valid form data", async () => {
          /**
           * Valid Form data will be submit on this case
           */
          const name = "test";
          const email = "test@test.com";
          const phone = "03312409287";
          const message = "This is a testing message by automation";
          const result = await page.contactus_Form(name, email, phone, message);
          expect(result).to.be.true;
        });
      });

      describe("Hulhub Career Page", async () => {
        it("Move to Career Page", async () => {
          await page.visit("http://hulv2.hul-hub.com/careers");
        });

        it("Click on the CTA of View Jobs", async () => {
          const result = await page.clickCTA();
          expect(result).to.be.true;
        });

        it("Click on the CTA of Jobs Designation", async () => {
          const result = await page.jobDesignation();
          expect(result).to.be.true;
        });

        it("Header modal submit valid form data", async () => {
          /**
           * Valid Form data will be submit on this case
           */
          const name = "test";
          const email = "test@test.com";
          const phone = "03312409287";
          const city = "karachi";
          const coverletter = "This is a testing message by automation";
          const result = await page.career(
            name,
            email,
            phone,
            city,
            coverletter
          );
          expect(result).to.be.true;
        });

        it("Header modal submit invalid form data", async () => {
          /**
           * Invalid Form data will be submit on this case
           */
          const name = "Raees Raza";
          const email = "";
          const phone = "ABCD"; // Invalid Phone Number
          const message = "";
          const result = await page.contactus_Form(name, email, phone, message);
          expect(result).to.be.true;
        });
      });

      it("Service Page - Click on the CTA - Hero Section  Apply For Free Consultation ", async () => {
        await page.visit(
          "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops"
        );
        const result = await page.servicePageCta_1();
        expect(result).to.be.true;

        const name = "test";
        const email = "test@test.com";
        const phone = "03312409287";
        const message = "This is a testing message by automation";

        const result_2 = await page.contactus_Form(name, email, phone, message);
        expect(result_2).to.be.true;
      });

      describe("CTA Automations", async () => {
        beforeEach(async () => {
          await page.visit("http://hulv2.hul-hub.com/");
        });

        it("Home Page - Click on the Enterprise Solutions CTA", async () => {
          const result = await page.homeCta_1();
          expect(result).to.be.true;
        });

        it("Home Page - Click on the Small Business Solutions CTA", async () => {
          const result = await page.homeCta_2();
          expect(result).to.be.true;
        });

        it("Home Page - Click on the About Us CTA", async () => {
          const result = await page.homeCta_3();
          expect(result).to.be.true;
        });

        it("Home Page - Click on the Explore Careers CTA", async () => {
          const result = await page.homeCta_4();
          expect(result).to.be.true;
        });

        it("Service Page - Click on the CTA - Hero Section - Apply For Free Consultation ", async () => {
          await page.visit(
            "http://hulv2.hul-hub.com/infrastructure-cloud-and-devops"
          );
          const result = await page.servicePageCta_1();
          expect(result).to.be.true;

          const name = "test";
          const email = "test@test.com";
          const phone = "03312409287";
          const message = "This is a testing message by automation";

          const result_1 = await page.contactus_Form(
            name,
            email,
            phone,
            message
          );
          expect(result_1).to.be.true;
        });

        it("Product Page - Click on the CTA - Hero Section  Apply For Free Consultation ", async () => {
          await page.visit("http://hulv2.hul-hub.com/products");
          const result = await page.servicePageCta_1();
          expect(result).to.be.true;

          const name = "test";
          const email = "test@test.com";
          const phone = "03312409287";
          const message = "This is a testing message by automation";
          const result_1 = await page.submitModalForm(
            name,
            email,
            phone,
            message
          );
          expect(result_1).to.be.true;
        });
      });

      // All Services Hero Section Form //
      it("Navigation to Contact-us Page through services hero-section CTA", async () => {
        const navigationLinks = await page.getNavigationLinks();
        navigationLinks.forEach((link) => {
          describe(`${link.name} Hero CTA Form Testing`, async function () {
            it(`Visit to ${link.name}`, async () => {
              await page.visit(link.url);
              const result = await page.servicePageCta_1();
              expect(result).to.be.true;
            });

            it("Hero Banner - Invalid Form Submission", async () => {
              /**
               * Goto the main header hero form fill and
               * submit and get the return thank you page
               */
              const name = "Raees Raza";
              const email = "";
              const phone = "ABCD"; // Invalid Phone Number
              const message = " ";
              const result = await page.contactus_Form(
                name,
                email,
                phone,
                message
              );
              expect(result).to.be.true;
            });

            it("Hero Banner - Valid Form Submission", async () => {
              /**
               * Goto the main header hero form fill and
               * submit and get the return thank you page
               */
              const name = "Raees Raza";
              const email = "test@test.com";
              const phone = "7866721123";
              const message = "This is an testing message by automation";

              const result = await page.contactus_Form(
                name,
                email,
                phone,
                message
              );
              expect(result).to.be.true;
            });

            it("Back to Home Page", async () => {
              await page.visit("http://hulv2.hul-hub.com/");
            });
          });
        });
      });

      describe("Title Verification Process", async () => {
        it("Move to Home Page", async () => {
          await page.visit("http://hulv2.hul-hub.com");
        });

        it("Home page Title Verification", async () => {
          const title = await page.getTitle();
          console.log("description->", title);
          assert.equal(
            title,
            "Hul Hub | Think. Collaborate. Innovate.",
            "title equal `Hul Hub | Think. Collaborate. Innovate.`"
          );
        });
      });

      describe("Meta description Verification Process", async () => {
        it("Move to Home Page", async () => {
          await page.visit("http://hulv2.hul-hub.com");
        });

        it("Home page Meta description Verification Process", async () => {
          const description = await page.getDescription();
          console.log("description->", description);
          assert.equal(
            description,
            "Leading the marketplace in products, services, and solutions. Hul Hub provides superior software solutions and enables digital solutions for businesses globally.",
            "title equal",
            "title equal `Leading the marketplace in products, services, and solutions. Hul Hub provides superior software solutions and enables digital solutions for businesses globally.`"
          );
        });
      });

      it("All Pages Title verification Testing", async () => {
        const result = await page.getNavigationLinks();

        for (let i = 0; i < result.length; i++) {
          describe(`Hulhub Website ${result[i].name} Title Testing`, async function () {
            it(`Visit to ${result[i].name}`, async () => {
              await page.visit(result[i].url);
            });

            it("Home page title Verification", async () => {
              const Livetitles = await page.getTitles();
              const Hardcodedtitles = await page.getMetaTitles();
              console.log(Livetitles, Hardcodedtitles);
              let finalTitle = Hardcodedtitles.findIndex((item) => {
                return item.title == Livetitles;
              });
              assert.isAtLeast(finalTitle, 0);
            });
          });
        }
      });

      it("All Pages Description verification Testing", async () => {
        const result = await page.getNavigationLinks();

        for (let i = 0; i < result.length; i++) {
          describe(`Hulhub Website ${result[i].name} Description Testing`, async function () {
            it(`Visit to ${result[i].name}`, async () => {
              await page.visit(result[i].url);
            });

            it("Website Description Verification", async () => {
              const Livedescription = await page.getDescription();
              const Hardcodeddescription = await page.getMetaDescription();
              console.log(Livedescription, Hardcodeddescription);
              let finaldescription = Hardcodeddescription.findIndex((item) => {
                return item.description == Livedescription;
              });
              assert.isAtLeast(finaldescription, 0);
            });
          });
        }
      });
    });
  } catch (ex) {
    console.log(new Error(ex.message));
  } finally {
  }
})();
