'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('district',
      [
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Ilam",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Jhapa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Panchthar",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Taplejung",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Bhojpur",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Dhankuta",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Morang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Sankhuwasabha",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Sunsari",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Terhathum",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Khotang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Okhaldhunga",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Solukhumbu",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 1,
          "district_name": "Udayapur",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Saptari",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Siraha",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Dhanusa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Mahottari",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Sarlahi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Bara",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Parsa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 2,
          "district_name": "Rautahat",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Dolakha",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Ramechhap",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Sindhuli",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Bhaktapur",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Dhading",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Kathmandu",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Kavrepalanchok",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Lalitpur",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Nuwakot",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Rasuwa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Sindhupalchok",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Chitawan",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 3,
          "district_name": "Makwanpur",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Gorkha",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Kaski",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Lamjung",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Manang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Syangja",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Tanahu",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Baglung",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Mustang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Myagdi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Parbat",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 4,
          "district_name": "Nawalparasi East",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Dang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Pyuthan",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Rolpa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Rukum East",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Banke",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Bardiya",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Arghakhanchi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Gulmi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Kapilvastu",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Palpa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Rupandehi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 5,
          "district_name": "Nawalparasi West",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Dolpa",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Humla",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Jumla",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Kalikot",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Mugu",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Salyan",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Dailekh",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Jajarkot",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Surkhet",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 6,
          "district_name": "Rukum West",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Achham",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Bajhang",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Bajura",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Doti",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Kailali",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Baitadi",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Dadeldhura",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Darchula",
          "is_active": 1
        },
        {
          "uuid": uuid(),
          "province_id": 7,
          "district_name": "Kanchanpur",
          "is_active": 1
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('district', null, {});
  }
};
