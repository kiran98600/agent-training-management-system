
'use strict';
((utilityHelper) => {
    var adbs = require("ad-bs-converter");
    const Promise = require('bluebird');
    utilityHelper.isEmptyOrSpaces = (value) => {
        try {
            if (!value || value === null || value === '' || value === 'undefined') {
                return true
            }
            return false
        } catch (error) {
            throw error
        }
    };

    utilityHelper.groupBy = (groupObject, key) => {
        try {
            return groupObject.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        } catch (error) {

        }
    };

    utilityHelper.replaceAll = (str, find, replace) => {
        try {
            return str.replace(new RegExp(find, 'g'), replace);
        } catch (error) {
            throw error
        }
    };


    utilityHelper.ad2bs = (dateString) => {
        try {
            dateString = dateString.replace(/[-]+/g, "/");
            const dateObj = adbs.ad2bs(dateString).en;
            return `${dateObj.year}/${dateObj.month}/${dateObj.day}`
        } catch (error) {
            throw error
        }
    };

    utilityHelper.bs2ad = (dateString) => {
        try {
            const dateObj = adbs.bs2ad(dateString);
            return `${dateObj.year}/${dateObj.month}/${dateObj.date}`

        } catch (error) {
            throw error
        }
    };



})(module.exports);
