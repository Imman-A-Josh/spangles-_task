var mysql = require('mysql');
var connection = require('./db');

/*var ss1 = "DROP TABLE `wcart_pincode_list`"
connection.query(ss1, function (err, result) {
    if(err){
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
});*/

var view_report_query = "CREATE TABLE `wcart_campaign_view_report` (`id` int(11) NOT NULL AUTO_INCREMENT, `campaign_id` varchar(20) NOT NULL,`product_id` int(11) NOT NULL,`bid_value` bigint(11) NOT NULL,`type` int(11) NOT NULL COMMENT '1-View,2-Click',`user_id` varchar(255) NOT NULL,`ip_address` varchar(255) NOT NULL,`sku_code` varchar(255) NOT NULL,`created` timestamp NOT NULL DEFAULT current_timestamp(),PRIMARY KEY(id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;"
connection.query(view_report_query, function (err, result) {
    if (err) {
        console.log('view_report_query error');
    } else {
        console.log("view_report_query Query Executed Successfully");
    }
});

var add_to_cart_query = "ALTER TABLE `wcart_user_cart` ADD `campaign_id` VARCHAR(15) NOT NULL AFTER `quantity`;"
connection.query(add_to_cart_query, function (err, result) {
    if (err) {
        console.log('add_to_cart_query error');
    } else {
        console.log("add_to_cart_query Query Executed Successfully");
    }
});

var wcorder_alter_query = "ALTER TABLE `wcordermeta` ADD `campaign_id` VARCHAR(11) NOT NULL DEFAULT '0' AFTER `productorderstatus`;"
connection.query(wcorder_alter_query, function (err, result) {
    if (err) {
        console.log('wcorder_alter_query error');
    } else {
        console.log("wcorder_alter_query Query Executed Successfully");
    }
});

var bulk_simple_productid_alter_query = "ALTER TABLE `wcart_product_bulk_upload` CHANGE `productid` `productid` VARCHAR(255) NOT NULL;"
connection.query(bulk_simple_productid_alter_query, function (err, result) {
    if (err) {
        console.log('bulk_simple_productid_alter_query error');
    } else {
        console.log("bulk_simple_productid_alter_query Query Executed Successfully");
    }
});

var simple_upload_alter_query = "ALTER TABLE `wcart_product_bulk_upload` ADD `gallery1` VARCHAR(255) NOT NULL AFTER `trending`, ADD `gallery2` VARCHAR(255) NOT NULL AFTER `gallery1`, ADD `gallery3` VARCHAR(255) NOT NULL AFTER `gallery2`, ADD `gallery4` VARCHAR(255) NOT NULL AFTER `gallery3`, ADD `gallery5` VARCHAR(255) NOT NULL AFTER `gallery4`;"
connection.query(simple_upload_alter_query, function (err, result) {
    if (err) {
        console.log('simple_upload_alter_query error');
    } else {
        console.log("simple_upload_alter_query Query Executed Successfully");
    }
});

var monthly_transaction_mail_template_query = "INSERT INTO `wcart_email_templates`(`email_template_id`, `title`, `subject`, `recipient`, `content`, `email_type`, `status`) VALUES ('13','Monthly Transaction','Monthly Transaction','','{{advertiser_name}} {{month}} Month Transaction Report. Please Check and Download Your Report','3','1')";
connection.query(monthly_transaction_mail_template_query, function (err, result) {
    if (err) {
        console.log('monthly_transaction_mail_template_query error');
    } else {
        console.log("monthly_transaction_mail_template_query Query Executed Successfully");
    }
});

var footer10 = "INSERT INTO `wcart_footers`(`footer_id`, `footer_status`, `footer_name`, `footer_slug`, `footer_screen`) VALUES ('10','0','footer 10','footer-10','img.png')"
connection.query(footer10, function (err, result) {
    if (err) {
        console.log('footer10 error');
    } else {
        console.log("footer10 Query Executed Successfully");
    }
});

var sql4 = "INSERT INTO `wcart_themes` (`theme_id`, `theme_status`, `theme_name`, `theme_slug`, `theme_screen`) VALUES ('5', '0', 'Theme 5', 'theme-5', 'theme_banner.png') ;"
connection.query(sql4, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql5 = "INSERT INTO `wcart_themes` (`theme_id`, `theme_status`, `theme_name`, `theme_slug`, `theme_screen`) VALUES ('6', '0', 'Theme 6', 'theme-6', 'theme_banner.png') ;"
connection.query(sql5, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql6 = "INSERT INTO `wcart_themes` (`theme_id`, `theme_status`, `theme_name`, `theme_slug`, `theme_screen`) VALUES ('7', '0', 'Theme 7', 'theme-7', 'theme_banner.png') ;"
connection.query(sql6, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql8 = "INSERT INTO `wcart_themes` (`theme_id`, `theme_status`, `theme_name`, `theme_slug`, `theme_screen`) VALUES ('8', '0', 'Theme 8', 'theme-8', 'theme_banner.png') ;"
connection.query(sql8, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql9 = "INSERT INTO `wcart_themes` (`theme_id`, `theme_status`, `theme_name`, `theme_slug`, `theme_screen`) VALUES (9', '0', 'Theme 9', 'theme-9', 'theme_banner.png') ;"
connection.query(sql9, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql10 = "UPDATE `wcart_themes` SET `theme_name` = 'Electronics 1' WHERE `wcart_themes`.`theme_id` = 1;"
connection.query(sql10, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql11 = "UPDATE `wcart_themes` SET `theme_name` = 'pixlnexs' WHERE `wcart_themes`.`theme_id` = 3;"
connection.query(sql11, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql12 = "UPDATE `wcart_themes` SET `theme_name` = 'Grocery 1' WHERE `wcart_themes`.`theme_id` = 2;"
connection.query(sql12, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql13 = "UPDATE `wcart_themes` SET `theme_name` = 'Earthnme' WHERE `wcart_themes`.`theme_id` = 4;"
connection.query(sql13, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql14 = "UPDATE `wcart_themes` SET `theme_name` = 'Electronics 2' WHERE `wcart_themes`.`theme_id` = 5;"
connection.query(sql14, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql15 = "UPDATE `wcart_themes` SET `theme_name` = 'Grocery 2' WHERE `wcart_themes`.`theme_id` = 6"
connection.query(sql15, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql16 = "UPDATE `wcart_themes` SET `theme_name` = 'Fashion' WHERE `wcart_themes`.`theme_id` = 8;"
connection.query(sql16, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql17 = "UPDATE `wcart_themes` SET `theme_name` = 'Fashion' WHERE `wcart_themes`.`theme_id` = 9;"
connection.query(sql17, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})
var sql18 = "UPDATE `wcart_themes` SET `theme_name` = 'Fashion' WHERE `wcart_themes`.`theme_id` = 7;"
connection.query(sql18, function (err, result) {
    if (err) {
        console.log('error');
    } else {
        console.log("Query Executed Successfully");
    }
})

var monthly_transaction_query = "UPDATE `wcart_email_templates` SET `content` = '<p>Hello {{advertisername}},</p><p>Your {{month}} Month Total Transaction And Available Amount Report.</p><p>Please Check and Download Your Report</p><p>Your Regards,</p><p>{{website_name}}</p>' WHERE `wcart_email_templates`.`email_template_id` = 13;"
connection.query(monthly_transaction_query, function (err, result) {
    if (err) {
        console.log('monthly_transaction_query error');
    } else {
        console.log("monthly_transaction_query Query Executed Successfully");
    }
})

var ads_to_vendor_query = "CREATE TABLE `advertiser_vendor_request` (`id` INT(11) NOT NULL , `advertiser_id` INT(11) NOT NULL , `vendor_id` INT(11) NOT NULL , `advertiser_email` VARCHAR(200) NOT NULL , `content` VARCHAR(255) NOT NULL , `advertiser_name` VARCHAR(100) NOT NULL , `status` INT(11) NOT NULL DEFAULT '0' COMMENT '0-Pending,1-Accepted,2-Rejected' , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ) ENGINE = InnoDB;"
connection.query(ads_to_vendor_query, function (err, result) {
    if (err) {
        console.log('ads_to_vendor_query error');
    } else {
        console.log("ads_to_vendor_query Query Executed Successfully");
    }
})

var mail_template_for_request = "INSERT INTO `wcart_email_templates`(`email_template_id`, `title`, `subject`, `recipient`, `content`, `email_type`, `status`) VALUES ('14','Request for Vendor','Advertiser Request','','<p>{{content}}</p><p>Your Regards,</p><p>{{website_name}}</p>','1','1')"
connection.query(mail_template_for_request, function (err, result) {
    if (err) {
        console.log('mail_template_for_request error');
    } else {
        console.log("mail_template_for_request Query Executed Successfully");
    }
})

var vendor_response_mail_query = "INSERT INTO `wcart_email_templates`(`email_template_id`, `title`, `subject`, `recipient`, `content`, `email_type`, `status`) VALUES ('15','Response for Vendor','Vendor Response','','<p>Hello {{advertiser_name}}</p><p> Your Advertiser Request is {{response}} By Vendor</p>','3','1')";
connection.query(vendor_response_mail_query, function (err, result) {
    if (err) {
        console.log('vendor_response_mail_query error');
    } else {
        console.log("vendor_response_mail_query Query Executed Successfully");
    }
})

var alter_query_for_vendor_request = "ALTER TABLE `advertiser_vendor_request` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT, add PRIMARY KEY (`id`);"
connection.query(alter_query_for_vendor_request, function (err, result) {
    if (err) {
        console.log('alter_query_for_vendor_request error');
    } else {
        console.log("alter_query_for_vendor_request Query Executed Successfully");
    }
})

var plugin_table_query = "CREATE TABLE `wcart_plugin` (`id` INT NOT NULL AUTO_INCREMENT , `plugin_name` VARCHAR(255) NOT NULL , `plugin_status` INT(11) NOT NULL , `plugin_description` VARCHAR(255) NOT NULL , `settings_url` VARCHAR(255) NOT NULL , `created` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(plugin_table_query, function (err, result) {
    if (err) {
        console.log('plugin_table_query error');
    } else {
        console.log("plugin_table_query Query Executed Successfully");
    }
})

var plugin_insert_query = "INSERT INTO `wcart_plugin`(`id`, `plugin_name`, `plugin_status`, `plugin_description`, `settings_url`) VALUES ('1','Multi Language','0','Multilingual eCommerce refers to the practice of selling goods or services online to customers who speak different languages','/admin/manage-language'),('2','Multi Currency','0','Multi currency in ecommerce is when a merchant is able to facilitate buying and selling internationally, between currencies','/admin/manage-currency'),('3','Multi Vendor','0','A multi vendor ecommerce website is a platform where multiple sellers can sell their products or services.','/admin/manage-vendors'),('4','Multi Advertiser','0','Multi-advertiser ads help people discover and compare products from multiple businesses.','/admin/manage-advertiser')"
connection.query(plugin_insert_query, function (err, result) {
    if (err) {
        console.log('plugin_insert_query error');
    } else {
        console.log("plugin_insert_query Query Executed Successfully");
    }
})

var ads_asset_table = "CREATE TABLE `wcart_ads_asset_images` (`id` INT(11) NOT NULL AUTO_INCREMENT , `advertiser_id` INT(11) NOT NULL , `campaign_id` VARCHAR(255) NOT NULL , `asset_group_id` INT(11) NOT NULL , `asset_type` INT(11) NOT NULL COMMENT '0-Image,1-logo,2-video' , `asset_url` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(ads_asset_table, function (err, result) {
    if (err) {
        console.log('ads_asset_table error');
    } else {
        console.log("ads_asset_table Query Executed Successfully");
    }
})

var ads_headline_table = "CREATE TABLE `wcart_ads_asset_headlines` (`id` INT(11) NOT NULL AUTO_INCREMENT , `advertiser_id` INT(11) NOT NULL , `campaign_id` VARCHAR(255) NOT NULL , `asset_group_id` INT(11) NOT NULL , `type` INT(11) NOT NULL , `headlline_value` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(ads_headline_table, function (err, result) {
    if (err) {
        console.log('ads_headline_table error');
    } else {
        console.log("ads_headline_table Query Executed Successfully");
    }
})

var ads_asset_group_table = "CREATE TABLE `wcart_asset_group` (`id` INT(11) NOT NULL AUTO_INCREMENT , `asset_group_name` VARCHAR(255) NOT NULL , `campaign_id` VARCHAR(255) NOT NULL , `product_id` VARCHAR(255) NULL , `url` VARCHAR(255) NOT NULL , `business_name` VARCHAR(255) NOT NULL , `call_action` INT(11) NOT NULL , `html5_file` VARCHAR(255) NOT NULL , `display_path_one` VARCHAR(255) NOT NULL , `display_path_two` VARCHAR(255) NOT NULL , `mobile_url` INT(11) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(ads_asset_group_table, function (err, result) {
    if (err) {
        console.log('ads_asset_group_table error');
    } else {
        console.log("ads_asset_group_table Query Executed Successfully");
    }
})

var ads_asset_sitelink_table = "CREATE TABLE `wcart_ads_asset_group_sitelinks` (`id` INT(11) NOT NULL AUTO_INCREMENT , `advertiser_id` INT(11) NOT NULL , `campaign_id` VARCHAR(255) NOT NULL ,`asset_group_id` INT(11) NOT NULL , `sitelink_text` VARCHAR(255) NOT NULL , `description_line1` VARCHAR(255) NOT NULL , `description_line2` VARCHAR(255) NOT NULL , `final_url` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(ads_asset_sitelink_table, function (err, result) {
    if (err) {
        console.log('ads_asset_sitelink_table error');
    } else {
        console.log("ads_asset_sitelink_table Query Executed Successfully");
    }
})

var user_session_query = "ALTER TABLE `wcart_user_session` CHANGE `servicekey` `servicekey` VARCHAR(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0';"
connection.query(user_session_query, function (err, result) {
    if (err) {
        console.log('user_session_query error');
    } else {
        console.log("user_session_query Query Executed Successfully");
    }
})

var wordermeta_query_alter = "ALTER TABLE `wcordermeta` CHANGE `pickup_location_id` `pickup_location_id` VARCHAR(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL;"
connection.query(wordermeta_query_alter, function (err, result) {
    if (err) {
        console.log('wordermeta_query_alter error');
    } else {
        console.log("wordermeta_query_alter Query Executed Successfully");
    }
})

//var delete_table_query="DROP TABLE wcart_abandoned_cart";
//connection.query(delete_table_query, function (err, result) {
//    if (err) {
//        console.log('delete_table_query error');
//    } else {
//        console.log("delete_table_query Query Executed Successfully");
//    }
//})

var abandoend_table_query = "CREATE TABLE `wcart_abandoned_cart` (`id` int(11) NOT NULL AUTO_INCREMENT,`enable_cart_recovery` int(11) NOT NULL DEFAULT 2 COMMENT '0-Enable,1-Disable',`manage_recovery_settings` int(11) NOT NULL COMMENT '0-Enable,1-Disable',`identify_cart_after` varchar(255) NOT NULL,`delete_cart_after` varchar(255) NOT NULL, `enable_pending_order_recovery` int(11) NOT NULL COMMENT '0-Enable,1-Disable',`delete_pending_order_after` varchar(255) NOT NULL,`updated` datetime NOT NULL DEFAULT current_timestamp(),`identify_cart_after_format` varchar(255) NOT NULL,`delete_cart_after_format` varchar(255) NOT NULL,`delete_pending_order_after_format` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;"
connection.query(abandoend_table_query, function (err, result) {
    if (err) {
        console.log('abandoend_table_query error');
    } else {
        console.log("abandoend_table_query Query Executed Successfully");
    }
})

var alter_query_sql = "ALTER TABLE `wcart_abandoned_cart` ADD `identify_cart_after_format` VARCHAR(255) NOT NULL AFTER `updated`;"
connection.query(alter_query_sql, function (err, result) {
    if (err) {
        console.log('alter_query_sql error');
    } else {
        console.log("alter_query_sql Query Executed Successfully");
    }
})

var update_alter_query = "ALTER TABLE `wcart_abandoned_cart` CHANGE `updated` `updated` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;"
connection.query(update_alter_query, function (err, result) {
    if (err) {
        console.log('update_alter_query error');
    } else {
        console.log("update_alter_query Query Executed Successfully");
    }
})

var alter_abandoned_delete_format = "ALTER TABLE `wcart_abandoned_cart` ADD `delete_cart_after_format` VARCHAR(255) NOT NULL AFTER `delete_pending_order_after`, ADD `delete_pending_order_after_format` VARCHAR(255) NOT NULL AFTER `delete_cart_after_format`;"
connection.query(alter_abandoned_delete_format, function (err, result) {
    if (err) {
        console.log('alter_abandoned_delete_format error');
    } else {
        console.log("alter_abandoned_delete_format Query Executed Successfully");
    }
})

var abandoned_insert_query = "INSERT INTO `wcart_abandoned_cart` (`id`, `enable_cart_recovery`, `manage_recovery_settings`, `identify_cart_after`, `delete_cart_after`, `enable_pending_order_recovery`, `delete_pending_order_after`, `identify_cart_after_format`, `delete_cart_after_format`, `delete_pending_order_after_format`) VALUES(1, 0, 1, '3', '4', 0, '2', '0', '1', '0')"
connection.query(abandoned_insert_query, function (err, result) {
    if (err) {
        // console.log(err)
        console.log('abandoned_insert_query error');
    } else {
        console.log("abandoned_insert_query Query Executed Successfully");
    }
})

// var delete_table_query = "DROP TABLE wcart_cart_email_template";
// connection.query(delete_table_query, function (err, result) {
//     if (err) {
//         console.log('delete_table_query error');
//     } else {
//         console.log("delete_table_query Query Executed Successfully");

//         var abandoned_mail_template = "CREATE TABLE `wcart_cart_email_template` (`id` int(11) NOT NULL AUTO_INCREMENT,`enable_email` int(11) NOT NULL COMMENT '0-Enable,1-Disable', `email_type` int(11) NOT NULL COMMENT '0-Abandoned Cart,2-Pending Order',`shedule_automatic_delevery` int(11) NOT NULL COMMENT '0-Enable,1-Disable',`enable_email_frequency` int(11) NOT NULL COMMENT '0-Enable,1-Disable',`numberof_mails_sent` varchar(255) NOT NULL,`frequency_ofmail` varchar(255) NOT NULL,`frequency_ofmail_format` int(11) NOT NULL COMMENT '0-Weeks,1-Months,2-Year\r\n',`include_products` varchar(255) NOT NULL,`exclude_products` varchar(255) NOT NULL,`enable_accation_email` int(11) NOT NULL COMMENT '0-Enable,1-Disable',`mail_send_time` varchar(255) NOT NULL,`from_date` varchar(255) NOT NULL,`to_date` varchar(255) NOT NULL,`updated` datetime NOT NULL DEFAULT current_timestamp(),PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci"
//         connection.query(abandoned_mail_template, function (err, result) {
//             if (err) {
//                 console.log('abandoned_mail_template error');
//             } else {
//                 console.log("abandoned_mail_template Query Executed Successfully");

//                 var abandoened_mail_template_insert = "INSERT INTO `wcart_cart_email_template` (`id`, `enable_email`, `email_type`, `shedule_automatic_delevery`, `enable_email_frequency`, `numberof_mails_sent`, `frequency_ofmail`, `frequency_ofmail_format`, `include_products`, `exclude_products`, `enable_accation_email`, `mail_send_time`, `from_date`, `to_date`, `updated`) VALUES(1, 0, 0, 0, 0, '20', '5', 1, '3,5', '4', 0, '11-05-2023 5:29:21', '2023-05-11', '2023-05-25', '2023-05-11 02:43:37');"
//                 connection.query(abandoened_mail_template_insert, function (err, result) {
//                     if (err) {
//                         console.log(err)
//                         console.log('abandoened_mail_template_insert error');
//                     } else {
//                         console.log("abandoened_mail_template_insert Query Executed Successfully");
//                     }
//                 })
//             }
//         })
//     }
// })


var mail_template_alter_query = "UPDATE `wcart_email_templates` SET `content` = 'We Notice That you left something in your cart Looks like you got interrupted. Dont Worry , We Saved these Items for you.' WHERE `wcart_email_templates`.`email_template_id` = 12;"

connection.query(mail_template_alter_query, function (err, result) {
    if (err) {
        console.log('mail_template_alter_query error');
    } else {
        console.log("mail_template_alter_query Query Executed Successfully");
    }
})

var promotion_table_query = "CREATE TABLE `wcart_ads_asset_promotion` (`id` INT(11) NOT NULL AUTO_INCREMENT , `asset_group_id` INT(11) NOT NULL , `campaign_id` VARCHAR(255) NOT NULL , `language` VARCHAR(255) NOT NULL , `promotion_type` VARCHAR(255) NOT NULL , `promotion_value` VARCHAR(255) NOT NULL , `item_name` VARCHAR(255) NOT NULL , `final_url` VARCHAR(255) NOT NULL , `promotion_details` VARCHAR(255) NOT NULL , `display_promotion_start_date` VARCHAR(255) NOT NULL , `display_promotion_end_date` VARCHAR(255) NOT NULL , `asset_schedule_start_date` VARCHAR(255) NOT NULL , `asset_schedule_end_date` VARCHAR(255) NOT NULL , `created` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(promotion_table_query, function (err, result) {
    if (err) {
        console.log('promotion_table_query error');
    } else {
        console.log("promotion_table_query Query Executed Successfully");
    }
})

var wcart_post_contents = "ALTER TABLE `wcart_post_contents` ADD `theme_id` INT NOT NULL AFTER `section_id`;"
connection.query(wcart_post_contents, function (err, result) {
    if (err) {
        console.log('wcart_post_contents error');
    } else {
        console.log("wcart_post_contents Query Executed Successfully");
    }
})

var update_promotion_table = "ALTER TABLE `wcart_ads_asset_promotion` ADD `occasion_type` VARCHAR(255) NOT NULL AFTER `campaign_id`;"
connection.query(update_promotion_table, function (err, result) {
    if (err) {
        console.log('update_promotion_table error');
    } else {
        console.log("update_promotion_table Query Executed Successfully");
    }
})

var price_table_query = "CREATE TABLE `wcart_ads_asset_prices` (`id` INT(11) NOT NULL AUTO_INCREMENT , `campaign_id` VARCHAR(255) NOT NULL , `language` VARCHAR(255) NOT NULL , `type` VARCHAR(255) NOT NULL , `currency` VARCHAR(255) NOT NULL , `price_qualifier` VARCHAR(255) NOT NULL , `plan_name` VARCHAR(255) NOT NULL , `plan_price` VARCHAR(255) NOT NULL , `plan_validity` VARCHAR(255) NOT NULL , `plan_description` VARCHAR(255) NOT NULL , `final_url` VARCHAR(255) NOT NULL , `mobile_url` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ) ENGINE = InnoDB;"
connection.query(price_table_query, function (err, result) {
    if (err) {
        console.log('price_table_query error');
    } else {
        console.log("price_table_query Query Executed Successfully");
    }
})

var callout_table_query = "CREATE TABLE `wcart_ads_asset_callouts` (`id` INT(11) NOT NULL AUTO_INCREMENT , `campaign_id` VARCHAR(255) NOT NULL , `callout_text` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(callout_table_query, function (err, result) {
    if (err) {
        console.log('callout_table_query error');
    } else {
        console.log("callout_table_query Query Executed Successfully");
    }
})

var snipet_teble_query = "CREATE TABLE `wcart_ads_assets_snippet` (`id` INT(11) NOT NULL AUTO_INCREMENT , `campaign_id` VARCHAR(255) NOT NULL , `type` VARCHAR(255) NOT NULL , `language` VARCHAR(255) NOT NULL , `values` VARCHAR(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(snipet_teble_query, function (err, result) {
    if (err) {
        console.log('snipet_teble_query error');
    } else {
        console.log("snipet_teble_query Query Executed Successfully");
    }
})

var update_product_val = "ALTER TABLE `wcart_asset_group` CHANGE `product_id` `product_id` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0';"
connection.query(update_product_val, function (err, result) {
    if (err) {
        console.log('update_product_val error');
    } else {
        console.log("update_product_val Query Executed Successfully");
    }
})

var alter_asset_group_table = "ALTER TABLE `wcart_asset_group` ADD `headline` VARCHAR(255) NOT NULL AFTER `url`, ADD `long_headline` VARCHAR(255) NOT NULL AFTER `headline`, ADD `short_description` VARCHAR(255) NOT NULL AFTER `long_headline`, ADD `long_description` VARCHAR(255) NOT NULL AFTER `short_description`;"
connection.query(alter_asset_group_table, function (err, result) {
    if (err) {
        console.log('alter_asset_group_table error');
    } else {
        console.log("alter_asset_group_table Query Executed Successfully");
    }
})


var wcart_email_template_query = "CREATE TABLE `wcart_email_template` (`email_id` int(11) NOT NULL AUTO_INCREMENT,`email_template_name` varchar(255) NOT NULL,`email_enter_subject` varchar(255) NOT NULL,`enter_template` varchar(255) NOT NULL,`updated` datetime NOT NULL DEFAULT current_timestamp(), PRIMARY KEY (`email_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;"
connection.query(wcart_email_template_query, function (err, result) {
    if (err) {
        console.log('wcart_email_template_query error');
    } else {
        console.log("wcart_email_template_query Query Executed Successfully");
    }
})

var display_campaign_alter_query="ALTER TABLE `wcart_advertising_campaigns` ADD `lifetime_budget` VARCHAR(255) NULL DEFAULT '0' AFTER `campaign_country`, ADD `pacing` INT(11) NULL DEFAULT '0' AFTER `lifetime_budget`, ADD `category` VARCHAR(255) NULL DEFAULT '0' AFTER `pacing`, ADD `bid_per_click` INT(11) NULL DEFAULT '0' AFTER `category`, ADD `custom_text` VARCHAR(255) NULL AFTER `bid_per_click`;"
connection.query(display_campaign_alter_query, function (err, result) {
    if (err) {
        console.log('display_campaign_alter_query error');
    } else {
        console.log("display_campaign_alter_query Query Executed Successfully");
    }
})

var alter_table_display_campaign_query="ALTER TABLE `wcart_advertising_campaigns` ADD `campaign_type` INT(11) NOT NULL DEFAULT '0' COMMENT '0-Product,1-Brand,2-Display' AFTER `created_by`;"
connection.query(alter_table_display_campaign_query, function (err, result) {
    if (err) {
        console.log('alter_table_display_campaign_query error');
    } else {
        console.log("alter_table_display_campaign_query Query Executed Successfully");
    }
})

var create_table_advertising_settings_query="CREATE TABLE `wcart_advertiser_settings` (`id` INT(11) NOT NULL AUTO_INCREMENT , `campaign_type` VARCHAR(255) NOT NULL , `manage_staffs` INT(11) NOT NULL DEFAULT '0' COMMENT '1- Enable, 2-Disble' , `manage_roles` INT(11) NOT NULL DEFAULT '0' COMMENT '1- Enable, 2-Disble' ,`vendor_request` INT(11) NOT NULL DEFAULT '0' COMMENT '1- Enable, 2-Disble' , `bid` INT(11) NOT NULL , `enable_admin_product` INT(11) NOT NULL DEFAULT '0' COMMENT '1- Enable, 2-Disble' , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(create_table_advertising_settings_query, function (err, result) {
    if (err) {
        console.log('create_table_advertising_settings_query error');
    } else {
        console.log("create_table_advertising_settings_query Query Executed Successfully");
    }
})

var insert_advertising_settings_query="INSERT INTO `wcart_advertiser_settings`(`id`, `campaign_type`, `manage_staffs`, `manage_roles`, `bid`, `enable_admin_product`,`vendor_request`) VALUES ('1','1,2','1','1','10','1','1')"
connection.query(insert_advertising_settings_query, function (err, result) {
    if (err) {
        console.log('insert_advertising_settings_query error');
    } else {
        console.log("insert_advertising_settings_query Query Executed Successfully");
    }
})

var ads_count_table="CREATE TABLE `wcart_ads_view_count` (`id` INT(11) NOT NULL AUTO_INCREMENT , `campaign_id` VARCHAR(255) NOT NULL , `product_id` INT(11) NOT NULL , `advertiser_id` INT(11) NOT NULL , `view_count` INT(11) NOT NULL , `frequency` VARCHAR(255) NOT NULL DEFAULT '0' , `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(ads_count_table, function (err, result) {
    if (err) {
        console.log('ads_count_table error');
    } else {
        console.log("ads_count_table Query Executed Successfully");
    }
})

var re_create_abandoned_mail_report="CREATE TABLE `email_report_abandoned_cart` (`id` INT(11) NOT NULL AUTO_INCREMENT , `email_template_id` INT(11) NOT NULL , `email_subject` VARCHAR(255) NOT NULL , `email_content` VARCHAR(255) NOT NULL , `email_to` VARCHAR(255) NOT NULL , `email_status` VARCHAR(255) NOT NULL , `user_id` VARCHAR(255) NOT NULL , `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
connection.query(re_create_abandoned_mail_report, function (err, result) {
    if (err) {
        console.log('re_create_abandoned_mail_report error');
    } else {
        console.log("re_create_abandoned_mail_report Query Executed Successfully");
    }
})

var alter_recreate_query="ALTER TABLE `email_report_abandoned_cart` ADD `email_type` INT(11) NOT NULL COMMENT '0-Abandoned,1-Payment Pending' AFTER `email_to`;"
connection.query(alter_recreate_query, function (err, result) {
    if (err) {
        console.log('alter_recreate_query error');
    } else {
        console.log("alter_recreate_query Query Executed Successfully");
    }
})

var alter_newsletter_query="ALTER TABLE `wcart_newsletter_form_submission` ADD `status` INT NOT NULL DEFAULT '0' AFTER `email_id`;"
connection.query(alter_newsletter_query, function (err, result) {
    if (err) {
        console.log('alter_newsletter_query error');
    } else {
        console.log("alter_newsletter_query Query Executed Successfully");
    }
})

var alter_ads_count_table="ALTER TABLE `wcart_ads_view_count` ADD `campaign_type` VARCHAR(255) NOT NULL AFTER `advertiser_id`;"
connection.query(alter_ads_count_table, function (err, result) {
    if (err) {
        console.log('alter_ads_count_table error');
    } else {
        console.log("alter_ads_count_table Query Executed Successfully");
    }
})
