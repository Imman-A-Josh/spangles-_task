const request = require('request')
const nodemailer = require('nodemailer');
const moment = require('moment');
const config = require('../../config');
var ejs1 = require('../../utils/ejs');
const pdf = require('../../utils/pdf');


module.exports = {
    send_mail: function (req, res) {

        var user_id = req.body.user_id;
        var mail_id = req.body.mail_id;

        if (!user_id || !mail_id) {
            res.json({ 'status': 'false', message: "Please Add Mail and User Id" })
        } else {

            var body = { user_id: user_id }
            request({
                method: 'POST',
                url: config.baseURL + 'adminapi/all_payment',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'servicekey': servicekey,
                },
                body: JSON.stringify(body)
            }, function (err, response, body) {
                var data = JSON.parse(body);

                if (data.status == 'true') {

                    var user_details = data.user_details;
                    var payment_details = data.payment_details;

                    ejs1.toHTML(path.join(__dirname + "../../utils/mail_template.ejs"), { 'user_details': user_details, payment_details: payment_details, 'message': order_message, 'receipt': 'Receipt for User Details #' + user_id, 'moment': moment }).then(function (html) {

                        var options = { format: 'Letter' };

                        var output = path.join(__dirname + '../../uploads/pdf' + user_id + '.pdf')
                        console.log(output);

                        pdf.toPDF(html, options, output).then(function (response) {

                            console.log("PDF file successfully written");
                            console.log(response);

                            var pdff = [{ filename: 'user_detauls' + user_id + '.pdf', path: output, contentType: 'application/pdf' }];

                            var mainOptions = {
                                from: '',
                                to: '',
                                attachments: pdff,
                                subject: 'User Details Mail',
                                html: '<b>Kindly Check this PDF</b>'
                            };
                            transporter.sendMail(mainOptions, function (err, info) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    //console.log(info);
                                    console.log('Message sent: ' + info.response);
                                }
                            });
                        })
                    })

                } else {

                }

            })

        }

    }
}