'use strict';
const HTTPStatus = require('http-status');
const fireAdmin = require('firebase-admin');
var serviceAccount = require("../config/firebase-adminsdk.json");
const moduleConfig = require('../config/message.config');

((firebaseHelper)=> {
    firebaseHelper.init = () => {
        fireAdmin.initializeApp({
            credential: fireAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DB_URL
        });
    }

    firebaseHelper.sendMessageToDevice = async (fcmTokens, payload, options = {}) => {
        try {
            const response = await fireAdmin.messaging().sendToDevice(fcmTokens, payload, options);
            const { successCount, failureCount } = response;
            return { successCount, failureCount };
        } catch (error) {
            console.log('Error sending message:', error);
            return error;
        }
    }

    firebaseHelper.sendMessageToTopics = async (payload = {}) => {
        try {
            if(Object.keys(payload).length > 0) {
                const response  = await fireAdmin.messaging().send(payload);
                return response;
            }
        } catch (error) {
            console.log('Error sending message:', {error});
            return error;
        }
    }

    firebaseHelper.subscribeToTopics = async (tokens, topic) => {
        try {
            const response  = await fireAdmin.messaging().subscribeToTopic(tokens, topic);
            if(response && response.successCount){
                return {
                    status: HTTPStatus.OK,
                    message: moduleConfig.message.fcm.subscribed
                }
            } else if (response && response.failureCount){
                return {
                    status: HTTPStatus.INTERNAL_SERVER_ERROR,
                    message: response.errors[0].error.message
                }
            }
        } catch (error) {
            return {
                status: HTTPStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            }
        }
    }

    firebaseHelper.unSubscribeFromTopics = async (tokens, topic) => {
        try {
            const response  = await fireAdmin.messaging().unsubscribeFromTopic(tokens, topic);
            if(response && response.successCount){
                return {
                    status: HTTPStatus.OK,
                    message: moduleConfig.message.fcm.unSubscribed
                }
            } else if (response && response.failureCount){
                return {
                    status: HTTPStatus.INTERNAL_SERVER_ERROR,
                    message: response.errors[0].error.message
                }
            }
        } catch (error) {
            return {
                status: HTTPStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            }
        }
    }

})(module.exports);

/* 
    IOS standard for push notification 
    multiple topics
*/