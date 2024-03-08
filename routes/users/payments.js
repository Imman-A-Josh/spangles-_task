const connection = require('../../db')

module.exports = {

    add_payment: function (req, res) {

        var { user_id, date, paid_amount, due_date, payment_status } = req.body;

        if (!user_id || !date || !paid_amount) {
            res.json({ 'status': "false", message: "Please Add Required Fields" });
        } else {

            var insert_query = "INSERT INTO payment (user_id,date,paid_amount,due_date,payment_status) VALUES ('" + user_id + "','" + date + "','" + paid_amount + "','" + due_date + "','" + payment_status + "')";
            connection.query(insert_query, function (err, Data) {
                if (err) throw err;
                res.json({ 'status': "true", message: "Added Your Payment" });
            })

        }
    },

    all_payment: function (req, res) {

        var user_id = req.body.user_id;

        if (!user_id) {

            res.json({ 'status': 'false', message: "Please Add User Id" })

        } else {

            var select_query = "SELECT * FROM users WHERE id='" + user_id + "';SELECT COALESCE(SUM(paid_amount),0) AS paid_amount FROM `payment` WHERE user_id=" + user_id + "";
            connection.query(select_query, function (err, Data) {
                if (err) throw err;

                if (Data[0].length != 0) {

                    var user_data = Data[0][0]

                    var temp = user_data;

                    var paid_amount = (Data[1][0].paid_amount);

                    temp['paid_amount'] = paid_amount;

                    var total_payable = user_data.total_payable;

                    var remaing_amount = total_payable - paid_amount;

                    temp['remaing_amount'] = remaing_amount;

                    user_data = temp;

                    // All Payment Details
                    var sql2 = "SELECT * FROM `payment` WHERE user_id=" + user_id + ";"
                    connection.query(sql2, function (err, payment_details) {
                        if (err) throw err;

                        res.json({ 'status': 'true', message: "View All Payment Details", 'user_details': user_data, 'payment_details': payment_details })

                    })
                } else {
                    res.json({ 'status': "false", message: "Not Valid User" });

                }

            })
        }


    }
}