const Login = require('./basePage');
const fs = require('fs');
const archiver = require('archiver')


async function PrepareTestReport() {
    // Archive full Report
    console.log('Preparing test report................................')
    let reportName = 'report.zip';
    if (!fs.existsSync('./archivedReports')) {
        fs.mkdirSync('./archivedReports')
    }
    let archivedFile = fs.createWriteStream('./archivedReports/' + reportName);
    let archive = archiver('zip');

    archivedFile.on('close', async () => {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        const data = fs.readFileSync('./archivedReports/' + reportName);
        //Upload to S3
        var page = new Login();
        let uploadedFile = await page.uploadToS3('elasticbeanstalk-us-west-1-021594099427', `report-${new Date().toGMTString()}.zip`, data)

        if (uploadedFile && uploadedFile.location) {
            if (fs.existsSync('./archivedReports/' + reportName)) {
                fs.unlinkSync('./archivedReports/' + reportName)
            }
        }
        // console.log(uploadedFile);
        const result = await page.emailWithAttachments(
            '"Beelinks" <info@beelinks.solutions>',
            'Beelinks Staging Test Report',
            `<b>Steps to View Report: </b><br> 
                1. Download the file from this <a href='${uploadedFile.location}'>link</a><br>
                2. Unzip the file<br> 
                3. Open the file <b>"mochawesome.html"</b>`,
        );
        return result;

    });

    archive.on('error', function (err) {
        console.log(err);
        throw err;
    });
    archive.pipe(archivedFile);
    archive.directory('./mochawesome-report', false);
    // archive.directory('./mochawesome-report');
    archive.finalize();
    // archive.directory('subdir/', 'new-subdir');
}
PrepareTestReport();

