import { givenCount } from '../../../__tests__/helpers/database.helpers';
import { APIResponseMessages } from '../../../constants';

export const GETInventoryOrdersCountResponseExamples = {
  SUCCESS: {
    success: true,
    message: APIResponseMessages.SUCCESS,
    data: givenCount(),
  },
};

//TODO: convert this function to use database.helper
export const GETInventoryOrdersResponseExamples = {
  SUCCESS: {
    // TODO: Update to use ResponseAPI
    count: 2,
  },
};
//TODO: convert this function to use database.helper
export const GETInventoryOrdersByIdResponseExamples = {
  SUCCESS: {
    success: true,
    message: 'success',
    data: {
      _id: '60770aac2c07b01458ff24d9',
      createdAt: 1618414185,
      updatedAt: 1617377089,
      orderGroups: [
        {
          store: 'Qa',
          rates: [
            {
              shippo_id: 'f01b8ff16c35442eb782feaf2891c44d',
              attributes: ['BESTVALUE', 'CHEAPEST'],
              amount: { amount: 732, precision: 2, currency: 'USD', symbol: '$' },
              provider: 'USPS',
              service: 'Priority Mail',
              service_token: 'usps_priority',
              estimated_days: 1,
              duration_terms:
                'Delivery within 1, 2, or 3 days based on where your package started and where it’s being sent.',
            },
            {
              shippo_id: '472d12356e5145cdb297f1a1be403245',
              attributes: [],
              amount: { amount: 1095, precision: 2, currency: 'USD', symbol: '$' },
              provider: 'UPS',
              service: 'Ground',
              service_token: 'ups_ground',
              estimated_days: 1,
              duration_terms: 'Delivery times vary. Delivered usually in 1-5 business days.',
            },
            {
              shippo_id: 'cc4dce47359047e297338ac883e3d682',
              attributes: [],
              amount: { amount: 1939, precision: 2, currency: 'USD', symbol: '$' },
              provider: 'UPS',
              service: 'Next Day Air Saver®',
              service_token: 'ups_next_day_air_saver',
              estimated_days: 1,
              duration_terms:
                'Next business day delivery by 3:00 or 4:30 p.m. for commercial destinations and by end of day for residentail destinations.',
            },
          ],
          bookings: [
            {
              _id: '5fe9f9be5d4f0b1945cc47a3',
              createdAt: 1609170288,
              updatedAt: 1613720764,
              type: 'product',
              item: {
                _id: '5ea9d5ba22ef39269403f522',
                _tags: [],
                imageUrl:
                  'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_095_095046PK_IT_IM.jpg',
                merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: 'Dump & Bake Desserts (One Pan. Dump. Stir. Bake)-',
                description:
                  'CQ Products-Dump & Bake Desserts. Grab a baking pan, add your ingredients, stir and bake! It is that easy! Create tarts, pies, cookies, bards, cakes and more. This book contains thirty dessert recipes. Spiral-bound; 64 pages. Published year: 2014. ISBN 978-1- 56383-494-3. Made in USA.',
                price: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
                category: {
                  _id: '5d12c0c89eb1641840519363',
                  createdAt: 1561509568,
                  updatedAt: 1602873591,
                  name: 'Books',
                  subCategories: [
                    'Accessories',
                    'Art',
                    'Blank book/journal/diary',
                    'Calendar',
                    'Computers',
                    'Cooking',
                    'Crafts & hobbies',
                    'Education',
                    'Games',
                    'Gardening',
                    'Juvenile diary, blank book, journal',
                    'Magazines',
                    'Mathematics',
                    'Non-classifiable',
                    'Reference',
                    'Self-help',
                    'Sports & recreation',
                    'Technology',
                  ],
                },
                packageDetails: {
                  weight: 2,
                  massUnit: 'lb',
                  boxId: '603683fd73ce18ebc20bd24a',
                  itemsPerBox: 10,
                  shipsFrom: '927d9eb639094d4e86b118e769ba8def',
                },
                shippingPolicy: '60368264592e1b3abc69afe5',
                status: 'approved',
                store: {
                  _id: '5d2e02329eb1641840578f58',
                  companyName: 'Qa',
                  emails: ['CustomerBoomWEb.test@gmail.com'],
                  phoneNumber: '6505550000',
                  number: '7900',
                  street1: 'NW 27th Ave',
                  street2: '',
                  city: 'Miami',
                  state: 'FL',
                  zip: '33147',
                  country: 'US',
                  pin: 12345,
                  createdAt: 1563658091,
                  updatedAt: 1615379275,
                  companyLogoUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
                  coverImageUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
                  companyType: '',
                  companyDescription:
                    'We are a t-shirt selling store in USA, West Palm Beach, test test',
                  links: [
                    'boomreward.com',
                    'www.facebookTest.com',
                    'www.twitterTestAuto.com',
                    'www.pinterest.com',
                    'www.youtube.com',
                    'www.instagram.com',
                  ],
                  _tags: ['shirts', 'tees', 't-shirt'],
                  _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
                  openingTime: 8,
                  closingTime: 12,
                  days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
                  merchant: {
                    uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                    name: '',
                    firstName: 'Steve1233',
                    lastName: 'Daniels ',
                  },
                },
              },
              quantity: 2,
              status: 'Active',
              memberUID: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
              visits: 1,
            },
            {
              _id: '5fe9fbd05d4f0b1945cc47a4',
              createdAt: 1609169872,
              updatedAt: 1613720764,
              type: 'product',
              item: {
                _id: '5ea9d5b922ef39269403f51e',
                _tags: [],
                imageUrl:
                  'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_072_072369PK_IT_IM.jpg',
                merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: 'Beer & Bacon-',
                description:
                  "CQ PRODUTS-Beer & Bacon Cookbook. These recipes were designed with beer-lovin' meat-cravin, hearty appetites in mind. From rugged breakfast foods to robust deserts and everything in between, no appetite will be left unsatisfied. So, whether you're cooking for a hearty appetite or have one yourself, you can't go wrong by serving up big and bold recipes. Softcover/spiral-bound, 64 pages. Published 2013. Made in USA.",
                price: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
                category: {
                  _id: '5d12c0c89eb1641840519363',
                  createdAt: 1561509568,
                  updatedAt: 1602873591,
                  name: 'Books',
                  subCategories: [
                    'Accessories',
                    'Art',
                    'Blank book/journal/diary',
                    'Calendar',
                    'Computers',
                    'Cooking',
                    'Crafts & hobbies',
                    'Education',
                    'Games',
                    'Gardening',
                    'Juvenile diary, blank book, journal',
                    'Magazines',
                    'Mathematics',
                    'Non-classifiable',
                    'Reference',
                    'Self-help',
                    'Sports & recreation',
                    'Technology',
                  ],
                },
                packageDetails: {
                  weight: 2,
                  massUnit: 'lb',
                  boxId: '603683fd73ce18ebc20bd24a',
                  itemsPerBox: 10,
                  shipsFrom: '927d9eb639094d4e86b118e769ba8def',
                },
                shippingPolicy: '60368264592e1b3abc69afe5',
                status: 'approved',
                store: {
                  _id: '5d2e02329eb1641840578f58',
                  companyName: 'Qa',
                  emails: ['CustomerBoomWEb.test@gmail.com'],
                  phoneNumber: '6505550000',
                  number: '7900',
                  street1: 'NW 27th Ave',
                  street2: '',
                  city: 'Miami',
                  state: 'FL',
                  zip: '33147',
                  country: 'US',
                  pin: 12345,
                  createdAt: 1563658091,
                  updatedAt: 1615379275,
                  companyLogoUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
                  coverImageUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
                  companyType: '',
                  companyDescription:
                    'We are a t-shirt selling store in USA, West Palm Beach, test test',
                  links: [
                    'boomreward.com',
                    'www.facebookTest.com',
                    'www.twitterTestAuto.com',
                    'www.pinterest.com',
                    'www.youtube.com',
                    'www.instagram.com',
                  ],
                  _tags: ['shirts', 'tees', 't-shirt'],
                  _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
                  openingTime: 8,
                  closingTime: 12,
                  days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
                  merchant: {
                    uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                    name: '',
                    firstName: 'Steve1233',
                    lastName: 'Daniels ',
                  },
                },
              },
              quantity: 2,
              status: 'Active',
              memberUID: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
              visits: 1,
            },
            {
              _id: '5fe9fcd15d4f0b1945cc47a5',
              createdAt: 1609170129,
              updatedAt: 1613720764,
              type: 'product',
              item: {
                _id: '5ea9d5d422ef39269403f584',
                _tags: [],
                imageUrl:
                  'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_163_163282PK_IT_IM.jpg',
                merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: 'North Light Books-Photocraft',
                description:
                  "F&W Media-North Light Books: Photocraft. Photocraft will help you elevate the average into the extraordinary! Using Adobe's Photoshop Elements (R) and following thorough, easy-to-follow step-by-step instructions, you will learn to make basic adjustments to your photographs that will yield stunning and artistic results. You will also learn to use those photographs<BR>- along with some everyday mixed-media supplies<BR>- to create unique and personal art. This book contains thirty-eight projects total in a variety of styles and inspirational examples. Author: Susan Tuttle and Christy Hydeck. Softcover; 144 pages. Published Year: 2012. ISBN 978-1-4403-1870-2. Made in USA.",
                price: { amount: 1397, precision: 2, currency: 'USD', symbol: '$' },
                category: {
                  _id: '5d12c0c89eb1641840519363',
                  createdAt: 1561509568,
                  updatedAt: 1602873591,
                  name: 'Books',
                  subCategories: [
                    'Accessories',
                    'Art',
                    'Blank book/journal/diary',
                    'Calendar',
                    'Computers',
                    'Cooking',
                    'Crafts & hobbies',
                    'Education',
                    'Games',
                    'Gardening',
                    'Juvenile diary, blank book, journal',
                    'Magazines',
                    'Mathematics',
                    'Non-classifiable',
                    'Reference',
                    'Self-help',
                    'Sports & recreation',
                    'Technology',
                  ],
                },
                packageDetails: {
                  weight: 2,
                  massUnit: 'lb',
                  boxId: '603683fd73ce18ebc20bd24a',
                  itemsPerBox: 10,
                  shipsFrom: '927d9eb639094d4e86b118e769ba8def',
                },
                shippingPolicy: '60368264592e1b3abc69afe5',
                status: 'approved',
                store: {
                  _id: '5d2e02329eb1641840578f58',
                  companyName: 'Qa',
                  emails: ['CustomerBoomWEb.test@gmail.com'],
                  phoneNumber: '6505550000',
                  number: '7900',
                  street1: 'NW 27th Ave',
                  street2: '',
                  city: 'Miami',
                  state: 'FL',
                  zip: '33147',
                  country: 'US',
                  pin: 12345,
                  createdAt: 1563658091,
                  updatedAt: 1615379275,
                  companyLogoUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
                  coverImageUrl:
                    'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
                  companyType: '',
                  companyDescription:
                    'We are a t-shirt selling store in USA, West Palm Beach, test test',
                  links: [
                    'boomreward.com',
                    'www.facebookTest.com',
                    'www.twitterTestAuto.com',
                    'www.pinterest.com',
                    'www.youtube.com',
                    'www.instagram.com',
                  ],
                  _tags: ['shirts', 'tees', 't-shirt'],
                  _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
                  openingTime: 8,
                  closingTime: 12,
                  days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
                  merchant: {
                    uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                    name: '',
                    firstName: 'Steve1233',
                    lastName: 'Daniels ',
                  },
                },
              },
              quantity: 2,
              status: 'Active',
              memberUID: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
              visits: 1,
            },
          ],
          shippable: true,
          selectedRate: {
            shippo_id: '366bde40496b40329a503a85c33f58aa',
            attributes: [],
            amount: { amount: 1939, precision: 2, currency: 'USD', symbol: '$' },
            provider: 'UPS',
            service: 'Next Day Air Saver®',
            service_token: 'ups_next_day_air_saver',
            estimated_days: 1,
            duration_terms:
              'Next business day delivery by 3:00 or 4:30 p.m. for commercial destinations and by end of day for residentail destinations.',
          },
        },
      ],
      shipToAddress: {
        number: '55',
        street1: 'weston road',
        street2: 'Suite 106',
        city: 'Weston',
        state: 'FL',
        zip: '33326',
        country: 'US',
      },
      customerUID: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
      transactions: [
        {
          _id: '60770aab2c07b01458ff24d6',
          createdAt: 1618414250,
          type: 'purchase',
          status: 'completed',
          amount: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
          sender: {
            uid: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
            firstName: 'Danee',
            lastName: 'Smith',
            roles: ['member'],
            contact: { phoneNumber: '+1 650 555 3434', emails: ['danee987-test@hotmail.com'] },
            profileImg: {},
          },
          receiver: {
            _id: '5d2e02329eb1641840578f58',
            companyName: 'Qa',
            city: 'Miami',
            number: '7900',
            street1: 'NW 27th Ave',
            street2: '',
            state: 'FL',
            zip: '33147',
          },
          taxcode: { country: 'US', state: 'FL', county: 'BROWARD', city: 'WESTON' },
          salestax: { amount: 49, precision: 2, currency: 'USD', symbol: '$' },
          boomAccountID: '60367f5c0691d30358e3fb71',
          purchaseItem: {
            _id: '5ea9d5ba22ef39269403f522',
            _tags: [],
            imageUrl:
              'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_095_095046PK_IT_IM.jpg',
            merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
            name: 'Dump & Bake Desserts (One Pan. Dump. Stir. Bake)-',
            description:
              'CQ Products-Dump & Bake Desserts. Grab a baking pan, add your ingredients, stir and bake! It is that easy! Create tarts, pies, cookies, bards, cakes and more. This book contains thirty dessert recipes. Spiral-bound; 64 pages. Published year: 2014. ISBN 978-1- 56383-494-3. Made in USA.',
            price: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
            category: {
              _id: '5d12c0c89eb1641840519363',
              createdAt: 1561509568,
              updatedAt: 1602873591,
              name: 'Books',
              subCategories: [
                'Accessories',
                'Art',
                'Blank book/journal/diary',
                'Calendar',
                'Computers',
                'Cooking',
                'Crafts & hobbies',
                'Education',
                'Games',
                'Gardening',
                'Juvenile diary, blank book, journal',
                'Magazines',
                'Mathematics',
                'Non-classifiable',
                'Reference',
                'Self-help',
                'Sports & recreation',
                'Technology',
              ],
            },
            packageDetails: {
              weight: 2,
              massUnit: 'lb',
              boxId: '603683fd73ce18ebc20bd24a',
              itemsPerBox: 10,
              shipsFrom: '927d9eb639094d4e86b118e769ba8def',
            },
            shippingPolicy: '60368264592e1b3abc69afe5',
            status: 'approved',
            store: {
              _id: '5d2e02329eb1641840578f58',
              companyName: 'Qa',
              emails: ['CustomerBoomWEb.test@gmail.com'],
              phoneNumber: '6505550000',
              number: '7900',
              street1: 'NW 27th Ave',
              street2: '',
              city: 'Miami',
              state: 'FL',
              zip: '33147',
              country: 'US',
              pin: 12345,
              createdAt: 1563658091,
              updatedAt: 1615379275,
              companyLogoUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
              coverImageUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
              companyType: '',
              companyDescription:
                'We are a t-shirt selling store in USA, West Palm Beach, test test',
              links: [
                'boomreward.com',
                'www.facebookTest.com',
                'www.twitterTestAuto.com',
                'www.pinterest.com',
                'www.youtube.com',
                'www.instagram.com',
              ],
              _tags: ['shirts', 'tees', 't-shirt'],
              _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
              openingTime: 8,
              closingTime: 12,
              days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
              merchant: {
                uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: '',
                firstName: 'Steve1233',
                lastName: 'Daniels ',
              },
            },
          },
          booking: {
            _id: '5fe9f9be5d4f0b1945cc47a3',
            createdAt: 1609170288,
            updatedAt: 1613720764,
            type: 'product',
            quantity: 2,
            status: 'Active',
            visits: 1,
          },
          commissionCollected: { amount: 14, precision: 2, currency: 'USD', symbol: '$' },
          shippingOrderId: '60770aa62c07b01458ff24d2',
          shortId: 'GZpgiAQp',
        },
        {
          _id: '60770aab2c07b01458ff24d7',
          createdAt: 1618414250,
          type: 'purchase',
          status: 'completed',
          amount: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
          sender: {
            uid: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
            firstName: 'Danee',
            lastName: 'Smith',
            roles: ['member'],
            contact: { phoneNumber: '+1 650 555 3434', emails: ['danee987-test@hotmail.com'] },
            profileImg: {},
          },
          receiver: {
            _id: '5d2e02329eb1641840578f58',
            companyName: 'Qa',
            city: 'Miami',
            number: '7900',
            street1: 'NW 27th Ave',
            street2: '',
            state: 'FL',
            zip: '33147',
          },
          taxcode: { country: 'US', state: 'FL', county: 'BROWARD', city: 'WESTON' },
          salestax: { amount: 49, precision: 2, currency: 'USD', symbol: '$' },
          boomAccountID: '60367f5c0691d30358e3fb71',
          purchaseItem: {
            _id: '5ea9d5b922ef39269403f51e',
            _tags: [],
            imageUrl:
              'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_072_072369PK_IT_IM.jpg',
            merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
            name: 'Beer & Bacon-',
            description:
              "CQ PRODUTS-Beer & Bacon Cookbook. These recipes were designed with beer-lovin' meat-cravin, hearty appetites in mind. From rugged breakfast foods to robust deserts and everything in between, no appetite will be left unsatisfied. So, whether you're cooking for a hearty appetite or have one yourself, you can't go wrong by serving up big and bold recipes. Softcover/spiral-bound, 64 pages. Published 2013. Made in USA.",
            price: { amount: 696, precision: 2, currency: 'USD', symbol: '$' },
            category: {
              _id: '5d12c0c89eb1641840519363',
              createdAt: 1561509568,
              updatedAt: 1602873591,
              name: 'Books',
              subCategories: [
                'Accessories',
                'Art',
                'Blank book/journal/diary',
                'Calendar',
                'Computers',
                'Cooking',
                'Crafts & hobbies',
                'Education',
                'Games',
                'Gardening',
                'Juvenile diary, blank book, journal',
                'Magazines',
                'Mathematics',
                'Non-classifiable',
                'Reference',
                'Self-help',
                'Sports & recreation',
                'Technology',
              ],
            },
            packageDetails: {
              weight: 2,
              massUnit: 'lb',
              boxId: '603683fd73ce18ebc20bd24a',
              itemsPerBox: 10,
              shipsFrom: '927d9eb639094d4e86b118e769ba8def',
            },
            shippingPolicy: '60368264592e1b3abc69afe5',
            status: 'approved',
            store: {
              _id: '5d2e02329eb1641840578f58',
              companyName: 'Qa',
              emails: ['CustomerBoomWEb.test@gmail.com'],
              phoneNumber: '6505550000',
              number: '7900',
              street1: 'NW 27th Ave',
              street2: '',
              city: 'Miami',
              state: 'FL',
              zip: '33147',
              country: 'US',
              pin: 12345,
              createdAt: 1563658091,
              updatedAt: 1615379275,
              companyLogoUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
              coverImageUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
              companyType: '',
              companyDescription:
                'We are a t-shirt selling store in USA, West Palm Beach, test test',
              links: [
                'boomreward.com',
                'www.facebookTest.com',
                'www.twitterTestAuto.com',
                'www.pinterest.com',
                'www.youtube.com',
                'www.instagram.com',
              ],
              _tags: ['shirts', 'tees', 't-shirt'],
              _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
              openingTime: 8,
              closingTime: 12,
              days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
              merchant: {
                uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: '',
                firstName: 'Steve1233',
                lastName: 'Daniels ',
              },
            },
          },
          booking: {
            _id: '5fe9fbd05d4f0b1945cc47a4',
            createdAt: 1609169872,
            updatedAt: 1613720764,
            type: 'product',
            quantity: 2,
            status: 'Active',
            visits: 1,
          },
          commissionCollected: { amount: 14, precision: 2, currency: 'USD', symbol: '$' },
          shippingOrderId: '60770aa62c07b01458ff24d2',
          shortId: '4rLVDDTP',
        },
        {
          _id: '60770aab2c07b01458ff24d8',
          createdAt: 1618414251,
          type: 'purchase',
          status: 'completed',
          amount: { amount: 1397, precision: 2, currency: 'USD', symbol: '$' },
          sender: {
            uid: 'Rj7Q4ZQpzUfg19k7lD91XqFCIWI2',
            firstName: 'Danee',
            lastName: 'Smith',
            roles: ['member'],
            contact: { phoneNumber: '+1 650 555 3434', emails: ['danee987-test@hotmail.com'] },
            profileImg: {},
          },
          receiver: {
            _id: '5d2e02329eb1641840578f58',
            companyName: 'Qa',
            city: 'Miami',
            number: '7900',
            street1: 'NW 27th Ave',
            street2: '',
            state: 'FL',
            zip: '33147',
          },
          taxcode: { country: 'US', state: 'FL', county: 'BROWARD', city: 'WESTON' },
          salestax: { amount: 98, precision: 2, currency: 'USD', symbol: '$' },
          boomAccountID: '60367f5c0691d30358e3fb71',
          purchaseItem: {
            _id: '5ea9d5d422ef39269403f584',
            _tags: [],
            imageUrl:
              'https://d1k0ppjronk6up.cloudfront.net/products/4030/nmcpics_163_163282PK_IT_IM.jpg',
            merchantUID: 're5OljVl3KObKLopKdxpOQBWPL82',
            name: 'North Light Books-Photocraft',
            description:
              "F&W Media-North Light Books: Photocraft. Photocraft will help you elevate the average into the extraordinary! Using Adobe's Photoshop Elements (R) and following thorough, easy-to-follow step-by-step instructions, you will learn to make basic adjustments to your photographs that will yield stunning and artistic results. You will also learn to use those photographs<BR>- along with some everyday mixed-media supplies<BR>- to create unique and personal art. This book contains thirty-eight projects total in a variety of styles and inspirational examples. Author: Susan Tuttle and Christy Hydeck. Softcover; 144 pages. Published Year: 2012. ISBN 978-1-4403-1870-2. Made in USA.",
            price: { amount: 1397, precision: 2, currency: 'USD', symbol: '$' },
            category: {
              _id: '5d12c0c89eb1641840519363',
              createdAt: 1561509568,
              updatedAt: 1602873591,
              name: 'Books',
              subCategories: [
                'Accessories',
                'Art',
                'Blank book/journal/diary',
                'Calendar',
                'Computers',
                'Cooking',
                'Crafts & hobbies',
                'Education',
                'Games',
                'Gardening',
                'Juvenile diary, blank book, journal',
                'Magazines',
                'Mathematics',
                'Non-classifiable',
                'Reference',
                'Self-help',
                'Sports & recreation',
                'Technology',
              ],
            },
            packageDetails: {
              weight: 2,
              massUnit: 'lb',
              boxId: '603683fd73ce18ebc20bd24a',
              itemsPerBox: 10,
              shipsFrom: '927d9eb639094d4e86b118e769ba8def',
            },
            shippingPolicy: '60368264592e1b3abc69afe5',
            status: 'approved',
            store: {
              _id: '5d2e02329eb1641840578f58',
              companyName: 'Qa',
              emails: ['CustomerBoomWEb.test@gmail.com'],
              phoneNumber: '6505550000',
              number: '7900',
              street1: 'NW 27th Ave',
              street2: '',
              city: 'Miami',
              state: 'FL',
              zip: '33147',
              country: 'US',
              pin: 12345,
              createdAt: 1563658091,
              updatedAt: 1615379275,
              companyLogoUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82-logo',
              coverImageUrl:
                'https://apiqa.boomcard.net/api/v1/images/re5OljVl3KObKLopKdxpOQBWPL82_cover',
              companyType: '',
              companyDescription:
                'We are a t-shirt selling store in USA, West Palm Beach, test test',
              links: [
                'boomreward.com',
                'www.facebookTest.com',
                'www.twitterTestAuto.com',
                'www.pinterest.com',
                'www.youtube.com',
                'www.instagram.com',
              ],
              _tags: ['shirts', 'tees', 't-shirt'],
              _geoloc: { lat: 25.8479345, lng: -80.24276700000001 },
              openingTime: 8,
              closingTime: 12,
              days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
              merchant: {
                uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: '',
                firstName: 'Steve1233',
                lastName: 'Daniels ',
              },
            },
          },
          booking: {
            _id: '5fe9fcd15d4f0b1945cc47a5',
            createdAt: 1609170129,
            updatedAt: 1613720764,
            type: 'product',
            quantity: 2,
            status: 'Active',
            visits: 1,
          },
          commissionCollected: { amount: 28, precision: 2, currency: 'USD', symbol: '$' },
          shippingOrderId: '60770aa62c07b01458ff24d2',
          shortId: 'd0QxX5ux',
        },
      ],
    },
  },
};
