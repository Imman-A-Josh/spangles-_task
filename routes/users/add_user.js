const connection = require("../../db");

module.exports = {
    add_user: function (req, res) {

        var { user_name, date, due_date, amount, interest } = req.body;

        if (!user_name || !date || !amount) {
            res.json({ 'status': "false", message: "Please Add Required Fields" });
        } else {

            // Check User Name 
            var sql_1 = "SELECT * FROM users WHERE user_name='" + user_name + "';"
            connection.query(sql_1, function (err, user_data) {
                if (err) throw err;

                if (user_data.length == 0) {

                    var interest_amount = amount / interest;

                    var total_payable = amount + interest_amount;

                    console.log(total_payable);

                    // Insert Into User Tables
                    var sql_2 = "INSERT INTO users (user_name,date,due_date,amount,interest,total_payable) VALUES ('" + user_name + "','" + date + "','" + due_date + "','" + amount + "','" + interest + "','" + total_payable + "')";
                    connection.query(sql_2, function (err, sql_data2) {
                        if (err) throw err;

                        res.json({ 'status': "true", message: "User Added Successfully" });
                    })

                } else {
                    res.json({ 'status': "false", message: "User Name is Already Exists" });
                }

            })

        }
    },

    all_users: function (req, res) {

        var sql1 = "SELECT * FROM users ORDER BY id DESC;"
        connection.query(sql1, function (err, data) {
            if (err) throw err;

            res.json({ 'status': 'true', message: "View All Users", user_data: data })
        })

    },

    view_user: function (req, res) {

        // var id = req.query.id;
        var id = req.params.id;

        var sql1 = "SELECT * FROM users WHERE id='" + id + "'";
        connection.query(sql1, function (err, data) {
            if (err) throw err;

            if (data.length != 0) {
                res.json({ 'status': 'true', message: "View User Data", user_data: data })
            } else {
                res.json({ 'status': 'false', message: "Invalid User Id" })
            }

        })


    }
}