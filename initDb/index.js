const MongoClient = require('mongodb').MongoClient
const url =
  'mongodb+srv://vijayvmenon:gFXYXdxua76vakcy@cluster0.bzhysws.mongodb.net/swaad?retryWrites=true&w=majority'
const client = new MongoClient(url)

const menuItems = [
  {
    malayalam_text: 'കേരള ചിക്കൻ കറി',
    english_text: 'Kerala Chicken Curry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 },
      { quantity_unit: 'FT', price: 140 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Chicken'],
    image_url: ''
  },
  {
    malayalam_text: 'കേരള ചിക്കൻ റോസ്റ്റ്',
    english_text: 'Kerala Chicken Roast',
    price_array: [
      { quantity_unit: 'QT', price: 40 },
      { quantity_unit: 'HT', price: 80 },
      { quantity_unit: 'FT', price: 160 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Chicken'],
    image_url: ''
  },
  {
    malayalam_text: 'കേരള ചിക്കൻ ഫ്രൈ ( ഡ്രം സ്റ്റിക്ക് )',
    english_text: 'Kerala Chicken Fry ( Drumstick)',
    price_array: [{ quantity_unit: '1pc', price: 3 }],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Chicken'],
    image_url: ''
  },
  {
    malayalam_text: 'ബീഫ് കറി',
    english_text: 'Beef Curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 },
      { quantity_unit: 'FT', price: 180 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Beef'],
    image_url: ''
  },
  {
    malayalam_text: 'ബീഫ് ഫ്രൈ',
    english_text: 'Beef Fry',
    price_array: [
      { quantity_unit: '2lb', price: 50 },
      { quantity_unit: '4lb', price: 100 },
      { quantity_unit: '8lb', price: 200 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Beef'],
    image_url: ''
  },
  {
    malayalam_text: 'കപ്പയും ബീഫും / കപ്പ ബിരിയാണി ( തട്ടുകട സ്റ്റൈൽ )',
    english_text: 'Tapioca with Beef ( Thattukada Style )',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 },
      { quantity_unit: 'FT', price: 180 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Beef'],
    image_url: ''
  },
  {
    malayalam_text: 'കപ്പയും പോർക്കും ( തട്ടുകട സ്റ്റൈൽ )',
    english_text: 'Tapioca with Pork  ( Thattukada Style )',
    price_array: [
      { quantity_unit: 'QT', price: 40 },
      { quantity_unit: 'HT', price: 80 },
      { quantity_unit: 'FT', price: 160 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Pork'],
    image_url: ''
  },
  {
    malayalam_text: 'കപ്പയും ചിക്കനും ( തട്ടുകട സ്റ്റൈൽ )',
    english_text: 'Tapioca with Chicken  ( Thattukada Style )     ',
    price_array: [
      { quantity_unit: 'QT', price: 40 },
      { quantity_unit: 'HT', price: 80 },
      { quantity_unit: 'FT', price: 160 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Chicken'],
    image_url: ''
  },
  {
    malayalam_text: 'ബീഫ് കൂർക്ക കറി',
    english_text: 'Beef with Chinese Potato Curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Beef'],
    image_url: ''
  },
  {
    malayalam_text: 'പോർക്ക് കറി',
    english_text: 'Pork Curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Pork'],
    image_url: ''
  },
  {
    malayalam_text: 'പോർക്ക് കൂർക്ക കറി',
    english_text: 'Pork with Chinese Potato Curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Pork'],
    image_url: ''
  },
  {
    malayalam_text: 'തേങ്ങ വറുത്തരച്ച ചെമ്മീൻ കറി',
    english_text: 'Prawns in Roasted Coconut Curry',
    price_array: [
      { quantity_unit: 'QT', price: 40 },
      { quantity_unit: 'HT', price: 80 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'ചെമ്മീൻ റോസ്റ്റ്',
    english_text: 'Prawns Roast',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'ചെമ്മീൻ കായ കറി',
    english_text: 'Prawns with Raw Plantain Curry',
    price_array: [
      { quantity_unit: 'QT', price: 40 },
      { quantity_unit: 'HT', price: 80 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'നെയ്ച്ചോറും ബീഫ് കറിയും',
    english_text: 'Ghee Rice with Beef Curry',
    price_array: [
      { quantity_unit: 'HT', price: 140 },
      { quantity_unit: 'FT', price: 280 }
    ],
    additional_notes:
      '(**Ghee Rice and Beef Curry in separate trays, Price shown is total**)',
    category: ['Non-Vegetarian', 'Beef', 'Rice', 'Biriyani'],
    image_url: ''
  },
  {
    malayalam_text: 'ചിക്കൻ ബിരിയാണി (സാലഡ്, അച്ചാർ, പപ്പടം, മുട്ട)',
    english_text: 'Chicken Biryani (with Salad, Pickle , Pappad , Egg )',
    price_array: [
      { quantity_unit: 'HT', price: 110 },
      { quantity_unit: 'FT', price: 220 }
    ],
    additional_notes:
      '(**Biryani Rice and Chicken in separate trays, Price shown is total**) ',
    category: ['Non-Vegetarian', 'Chicken', 'Biriyani'],
    image_url: ''
  },
  {
    malayalam_text: 'ബീഫ് ബിരിയാണി (സാലഡ്, അച്ചാർ, പപ്പടം, മുട്ട)',
    english_text: 'Beef Biryani (with Salad, Pickle , Pappad , Egg )',
    price_array: [
      { quantity_unit: 'HT', price: 120 },
      { quantity_unit: 'FT', price: 240 }
    ],
    additional_notes:
      '(**Biryani Rice and Beef in separate trays, Price shown is total**)',
    category: ['Non-Vegetarian', 'Beef', 'Biriyani'],
    image_url: ''
  },
  {
    malayalam_text: 'ചെമ്മീൻ ബിരിയാണി (സാലഡ്, അച്ചാർ, പപ്പടം, മുട്ട)',
    english_text: 'Prawns Biryani (with Salad, Pickle , Pappad , Egg )',
    price_array: [
      { quantity_unit: 'HT', price: 110 },
      { quantity_unit: 'FT', price: 220 }
    ],
    additional_notes:
      '(**Biryani Rice and Prawns in separate trays, Price shown is total**) ',
    category: ['Non-Vegetarian', 'Fish', 'Biriyani'],
    image_url: ''
  },
  {
    malayalam_text: 'ഫിഷ് ബിരിയാണി (നെയ്മീൻ) (സാലഡ്, അച്ചാർ, പപ്പടം, മുട്ട)',
    english_text:
      'Fish Biryani ( King fish ) (with Salad, Pickle , Pappad , Egg )',
    price_array: [
      { quantity_unit: 'HT', price: 110 },
      { quantity_unit: 'FT', price: 220 }
    ],
    additional_notes:
      '(**Biryani Rice and Fish in separate trays, Price shown is total**)',
    category: ['Non-Vegetarian', 'Fish', 'Biriyani'],
    image_url: ''
  },
  {
    malayalam_text: 'കപ്പ മീൻ കറി (നെയ്മീൻ, ആവോലി)',
    english_text: 'Kappa Fish Curry ( King Fish, Pomfret )',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'മീൻ മുളകിട്ടത്',
    english_text: 'Kerala Spicy Fish curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'മീൻ മാങ്ങാകറി',
    english_text: 'Fish & Mango Curry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'നെയ്മീൻ പൊരിച്ചത്',
    english_text: 'King Fish Fry',
    price_array: [{ quantity_unit: '1pc', price: 7 }],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'നത്തോലി ഫ്രൈ',
    english_text: 'Anchovy Fry',
    price_array: [
      { quantity_unit: 'QT', price: 45 },
      { quantity_unit: 'HT', price: 90 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: 'കൂന്തൽ റോസ്റ്റ്',
    english_text: 'Squid Roast',
    price_array: [
      { quantity_unit: 'QT', price: 50 },
      { quantity_unit: 'HT', price: 100 }
    ],
    additional_notes: '',
    category: ['Non-Vegetarian', 'Fish'],
    image_url: ''
  },
  {
    malayalam_text: `കേരള സദ്യ ( സാമ്പാർ, അവിയൽ, കാളൻ, പൈനാപ്പിൾ പച്ചടി, 
        തോരൻ, കൂട്ടുകറി, അച്ചാർ, പുളി ഇഞ്ചി, പപ്പടം & പായസം)`,
    english_text: `Kerala Sadhya ( Sambar , Aviyal , Kaalan ,Pinapple Pachadi,         
        Thoran , Kootu Curry , Pickle ,Puli Inchi, Pappad & Payasam)`,
    price_array: [{ quantity_unit: 'Family Pack', price: 54 }],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'കേരള സദ്യ സാമ്പാർ',
    english_text: 'Kerala Sadhya Sambar',
    price_array: [
      { quantity_unit: 'QT', price: 30 },
      { quantity_unit: 'HT', price: 60 },
      { quantity_unit: 'FT', price: 120 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'അവിയൽ',
    english_text: 'Aviyal',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'കാളൻ',
    english_text: 'Kaalan',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'കൂട്ടുകറി',
    english_text: 'Kootu Curry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'ഇടിച്ചക്ക തോരൻ',
    english_text: 'Tender Jackfruit Stir Fry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'കൂർക്ക മെഴുക്കുപുരട്ടി',
    english_text: 'Chinese Potato Stir Fry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'ചക്ക ഉപ്പേരി',
    english_text: 'Raw Jackfruit Stir Fry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'ഉരുളക്കിഴങ്ങ് ഇഷ്ടു',
    english_text: 'Potato Stew in Coconut milk',
    price_array: [
      { quantity_unit: 'QT', price: 30 },
      { quantity_unit: 'HT', price: 60 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: `തോരൻ (പയർ,കാബേജ്,ബീറ്റ്റൂട്ട്, വെണ്ടയ്ക്ക , പപ്പായ, 
        കായ,പടവലങ്ങ ,കോവയ്ക്ക)`,
    english_text: `Vegetable Stir Fry ( Beans, Cabbage, Beetroot, Ladys Finger, Papaya, 
        Raw Plantain, Snake Gourd, Ivy Gourd )`,
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'പുട്ട്',
    english_text: 'Puttu  ',
    price_array: [{ quantity_unit: '1 pc', price: 2 }],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'കടല കറി',
    english_text: 'Black Chickpeas Curry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'ഗ്രീൻ പീസ് കറി',
    english_text: 'Green Peas Curry',
    price_array: [
      { quantity_unit: 'QT', price: 35 },
      { quantity_unit: 'HT', price: 70 }
    ],
    additional_notes: '',
    category: ['Vegetarian'],
    image_url: ''
  },
  {
    malayalam_text: 'നെല്ലിക്ക',
    english_text: 'Gooseberry',
    price_array: [{ quantity_unit: '16oz', price: 40 }],
    additional_notes: '',
    category: ['Vegetarian', 'Pickles'],
    image_url: ''
  },
  {
    malayalam_text: 'മാങ്ങ',
    english_text: 'Raw Mango',
    price_array: [{ quantity_unit: '16oz', price: 40 }],
    additional_notes: '',
    category: ['Vegetarian', 'Pickles'],
    image_url: ''
  }
]

async function run() {
  try {
    await client.connect()
    const database = client.db('swaad')
    const collection = database.collection('menu')
    await collection.deleteMany({})
    // Prevent additional documents from being inserted if one fails
    const options = { ordered: true }
    const result = await collection.insertMany(menuItems, options)
    console.log(`${result.insertedCount} documents were inserted`)
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
