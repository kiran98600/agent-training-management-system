'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('branches', [
        {
          "uuid": uuidv4(),
          "branch": "101",
          "branch_name": "Biratnagar",
          "branch_name_nep": "बिराटनगर",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "102",
          "branch_name": "Birtamod",
          "branch_name_nep": "बिर्तामोड",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "103",
          "branch_name": "Damak",
          "branch_name_nep": "दमक",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "104",
          "branch_name": "Dharan",
          "branch_name_nep": "धारण",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "105",
          "branch_name": "Gaighat",
          "branch_name_nep": "गाइघाट",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "106",
          "branch_name": "Illam",
          "branch_name_nep": "इलाम",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "107",
          "branch_name": "Itahari",
          "branch_name_nep": "इटहरी",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "109",
          "branch_name": "Dhankuta",
          "branch_name_nep": "धनकुटा",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "110",
          "branch_name": "Urlabari",
          "branch_name_nep": "उर्लाबारी",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "111",
          "branch_name": "Inaruwa",
          "branch_name_nep": "इनरुवा",
          "branch_region": "4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "201",
          "branch_name": "Janakpur",
          "branch_name_nep": "जनकपुर",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "202",
          "branch_name": "Birgunj",
          "branch_name_nep": "बिर्गुन्ज",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "203",
          "branch_name": "lahan",
          "branch_name_nep": "लहान",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "204",
          "branch_name": "Bardibash",
          "branch_name_nep": "बर्दिबाश",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "205",
          "branch_name": "Chandranigahapur",
          "branch_name_nep": "चन्द्रनिगाहपुर",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "206",
          "branch_name": "Kalaiya",
          "branch_name_nep": "कलैया",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "207",
          "branch_name": "Pokhariya",
          "branch_name_nep": "पोखरिया",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "208",
          "branch_name": "Malangwa",
          "branch_name_nep": "मलंगवा",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "209",
          "branch_name": "Mirchaya",
          "branch_name_nep": "मिर्चाया",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "210",
          "branch_name": "Rajbiraj",
          "branch_name_nep": "राजविराज",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "211",
          "branch_name": "Barathawa",
          "branch_name_nep": "बरथावा",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "212",
          "branch_name": "Lalbandi",
          "branch_name_nep": "लालबन्दी",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "213",
          "branch_name": "Kolhabi",
          "branch_name_nep": "कोल्बी",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "214",
          "branch_name": "Simara",
          "branch_name_nep": "सिमरा ",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "215",
          "branch_name": "Gaur",
          "branch_name_nep": "???",
          "branch_region": "5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "301",
          "branch_name": "Corporate Office",
          "branch_name_nep": "प्रधान कार्यालय",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "302",
          "branch_name": "Patan",
          "branch_name_nep": "पाटन",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "303",
          "branch_name": "Banepa",
          "branch_name_nep": "बनेपा",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "304",
          "branch_name": "Hetauda",
          "branch_name_nep": "हेटौडा",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "305",
          "branch_name": "Chabahil",
          "branch_name_nep": "चाबहिल",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "306",
          "branch_name": "Bhaktapur",
          "branch_name_nep": "भक्तपुर",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "307",
          "branch_name": "Kalanki",
          "branch_name_nep": "कलंकी",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "308",
          "branch_name": "Maharajgunj",
          "branch_name_nep": "महाराज्गुन्ज",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "309",
          "branch_name": "Chitwan",
          "branch_name_nep": "चितवन",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "310",
          "branch_name": "Charikot",
          "branch_name_nep": "चरिकोट",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "311",
          "branch_name": "Dhading",
          "branch_name_nep": "धादिंग",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "312",
          "branch_name": "Kirtipur",
          "branch_name_nep": "किर्तिपुर",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "313",
          "branch_name": "Jorpati",
          "branch_name_nep": "जोरपाटी",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "314",
          "branch_name": "putalisadak",
          "branch_name_nep": "पुतलीसडक",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "316",
          "branch_name": "Manthali",
          "branch_name_nep": "मन्थली",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "317",
          "branch_name": "Balaju",
          "branch_name_nep": "बालाजु",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "319",
          "branch_name": "Bidur",
          "branch_name_nep": "बिदुर",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "320",
          "branch_name": "Daman",
          "branch_name_nep": "दमन",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "321",
          "branch_name": "Kawasoti",
          "branch_name_nep": "कावासोती",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "322",
          "branch_name": "Parsa",
          "branch_name_nep": "पर्सा",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "323",
          "branch_name": "Panchkhal",
          "branch_name_nep": "पाँचखाल",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "324",
          "branch_name": "Lokanthali",
          "branch_name_nep": "लोकन्थली",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "325",
          "branch_name": "Kapan",
          "branch_name_nep": "कपन",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "326",
          "branch_name": "Gwarko",
          "branch_name_nep": "ग्वार्को",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "327",
          "branch_name": "Shwoyambhu",
          "branch_name_nep": "श्वोयाम्भु",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "328",
          "branch_name": "Nepaltar",
          "branch_name_nep": "नेपालतर",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "329",
          "branch_name": "Dhapasi",
          "branch_name_nep": "धापासी",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "330",
          "branch_name": "Chapagaun",
          "branch_name_nep": "चपगौं",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "331",
          "branch_name": "Purano Thimi",
          "branch_name_nep": "पुरानो थिमी",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "332",
          "branch_name": "Hattigauda",
          "branch_name_nep": "हत्तिगौदा",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "333",
          "branch_name": "Pharping",
          "branch_name_nep": "फर्पिंग",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "334",
          "branch_name": "Baluwakhani",
          "branch_name_nep": "बलुवाखानी",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "335",
          "branch_name": "Kadaghari",
          "branch_name_nep": "कदघरी",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "336",
          "branch_name": "Samakhusi",
          "branch_name_nep": "सामाखुसी",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "337",
          "branch_name": "Kuleshwor",
          "branch_name_nep": "कुलेश्वोर",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "338",
          "branch_name": "Bhainsepati",
          "branch_name_nep": "भैन्सेपति",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "339",
          "branch_name": "Sindhuli",
          "branch_name_nep": "सिन्धुली",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "340",
          "branch_name": "Melumchi",
          "branch_name_nep": "मेलुम्ची",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "341",
          "branch_name": "Chautara",
          "branch_name_nep": "चौतारा",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "342",
          "branch_name": "BancaIns",
          "branch_name_nep": "बेन्कआ",
          "branch_region": "2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "343",
          "branch_name": "Sankhu",
          "branch_name_nep": "सान्खु ",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "344",
          "branch_name": "Satungal",
          "branch_name_nep": "सतुङल ",
          "branch_region": "3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "345",
          "branch_name": "NewRoad",
          "branch_name_nep": "न्यू रोड ",
          "branch_region": "1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "401",
          "branch_name": "Pokhara",
          "branch_name_nep": "पोखरा",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "402",
          "branch_name": "Damauli",
          "branch_name_nep": "दमौली",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "403",
          "branch_name": "Gorkha",
          "branch_name_nep": "गोर्खा",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "404",
          "branch_name": "Baglung",
          "branch_name_nep": "बाग्लुंग",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "406",
          "branch_name": "Beni",
          "branch_name_nep": "बेनी",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "407",
          "branch_name": "Dulegauda",
          "branch_name_nep": "दुलेगौडा",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "408",
          "branch_name": "Kushma",
          "branch_name_nep": "कुश्मा",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "409",
          "branch_name": "Lekhnath",
          "branch_name_nep": "लेखनाथ",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "410",
          "branch_name": "Beshisahar",
          "branch_name_nep": "बेशिसहर ",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "411",
          "branch_name": "Waling",
          "branch_name_nep": "वालिंग",
          "branch_region": "6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "501",
          "branch_name": "Butwal",
          "branch_name_nep": "बुटवल",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "502",
          "branch_name": "Nepalgunj",
          "branch_name_nep": "नेपल्गुन्ज",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "503",
          "branch_name": "Bhairawa",
          "branch_name_nep": "भैरवा",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "504",
          "branch_name": "Ghorahi",
          "branch_name_nep": "घोरही",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "505",
          "branch_name": "Tulsipur",
          "branch_name_nep": "तुलसीपुर",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "506",
          "branch_name": "Tansen",
          "branch_name_nep": "तानसेन",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "507",
          "branch_name": "Guleriya",
          "branch_name_nep": "गुलेरिया",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "508",
          "branch_name": "Kohalpur",
          "branch_name_nep": "कोहलपुर",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "509",
          "branch_name": "Rajapur",
          "branch_name_nep": "राजापुर ",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "510",
          "branch_name": "Banshgadi",
          "branch_name_nep": "बन्स्घदि",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "511",
          "branch_name": "Khajura",
          "branch_name_nep": "खजुरा  ",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "512",
          "branch_name": "Jitpur",
          "branch_name_nep": "जित्पुर ",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "513",
          "branch_name": "Pyuthan",
          "branch_name_nep": "प्युठान ",
          "branch_region": "9",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "601",
          "branch_name": "Birendranagar",
          "branch_name_nep": "बिरेन्द्रनगर",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "602",
          "branch_name": "Dailekh",
          "branch_name_nep": "दैलेख",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "603",
          "branch_name": "Jumla",
          "branch_name_nep": "जुम्ला",
          "branch_region": "7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "701",
          "branch_name": "Dhangadhi",
          "branch_name_nep": "धनगडी",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "702",
          "branch_name": "Mahendranagar",
          "branch_name_nep": "महेन्द्रनगर",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "703",
          "branch_name": "Tikapur",
          "branch_name_nep": "टिकापुर",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "704",
          "branch_name": "Dadeldhura",
          "branch_name_nep": "डडेल्धुरा",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "705",
          "branch_name": "Sukhad",
          "branch_name_nep": "सुखद",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "706",
          "branch_name": "Attariya",
          "branch_name_nep": "अत्तरिया",
          "branch_region": "8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch": "707",
          "branch_name": "Lamki",
          "branch_name_nep": "लम्की ",
          "branch_region": "8",
          "is_active": "1"
        }
      ]);
      return Promise.resolve();
    } catch (error) {
      console.log(error)
      return Promise.reject();
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('branches', null, {});
  }
};
