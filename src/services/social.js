import OAuthManager from 'react-native-social-login';




const social = new OAuthManager('driverx');


social.configure({
    facebook: {
        client_id: '349652513205912',
        client_secret: '439ef9e82268aea4975c466950e4ab96',
      },
})

export default social;