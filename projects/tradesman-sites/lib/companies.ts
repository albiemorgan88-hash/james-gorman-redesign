export interface Business {
  slug: string;
  name: string;
  category: string;
  phone: string;
  address: string;
}

export const businesses: Business[] = [
  { slug: 'oakleaf-physio', name: 'Oakleaf Physio', category: 'physiotherapy', phone: '07894 249352', address: '14 Pennyburn Industrial Estate, Londonderry BT48 0LU, UK' },
  { slug: 'rmc-sports-therapy', name: 'RMC Sports Therapy', category: 'physiotherapy', phone: '07875 725663', address: '23 Ashbrook Ct, Drumahoe, Londonderry BT47 3FA, UK' },
  { slug: 'rustic-coffee-and-brunch', name: 'Rustic Coffee and Brunch', category: 'cafe', phone: '07856 598001', address: '16 Blucher St, Londonderry BT48 9DY, UK' },
  { slug: 'the-cottage-craft-gallery-and-coffee-shop', name: 'The Cottage Craft Gallery and Coffee Shop', category: 'cafe', phone: '07783 882521', address: 'Unit 21 The, Craft Village, Shipquay St, Londonderry BT48 6AR, UK' },
  { slug: 'rosta-coffee-bar', name: 'Rosta coffee bar', category: 'cafe', phone: '07845 556422', address: 'Carlisle Rd, Londonderry BT48 6JW, UK' },
  { slug: 'number-8-the-townhouse-accommodation', name: 'Number 8 The Townhouse Accommodation', category: 'hotel', phone: '07921 841820', address: '8 Artillery St, Londonderry BT48 6RG, UK' },
  { slug: 'raw-fitness-derry-ltd', name: 'Raw Fitness Derry Ltd', category: 'gym', phone: '07703 326018', address: '5, Londonderry BT48 0LU, UK' },
  { slug: 'calm-yoga', name: 'CALM Yoga', category: 'yoga', phone: '07999 025918', address: 'Ebrington St, Londonderry BT47 6EQ, UK' },
  { slug: 'yoga-pilates-wellbeing-centre', name: 'Yoga & Pilates wellbeing Centre', category: 'yoga', phone: '07738 067290', address: 'Northland Road Industrial Estate, 28-29 Templemore Business Park, Londonderry BT48 0LD, UK' },
  { slug: 'dragonfly-studio', name: 'Dragonfly Studio', category: 'yoga', phone: '07597 786126', address: 'Unit 9 ground floor, 18 Balliniska Rd, Londonderry BT48 0NA, UK' },
  { slug: 'kee-kennels-cattery', name: 'Kee Kennels & Cattery', category: 'dog', phone: '07894 068609', address: '11 Kee Rd, Campsie, Londonderry BT47 3PT, UK' },
  { slug: 'black-paws-cattery', name: 'Black Paws Cattery', category: 'dog', phone: '07710 622053', address: '19 Rossdowney Gardens, Londonderry BT47 5PW, UK' },
  { slug: 'swillyvalley-boarding-kennels-cattery', name: 'Swillyvalley Boarding Kennels & Cattery', category: 'dog', phone: '(074) 936 8145', address: 'Elaghbeg, Bridge End, Co. Donegal, F93 DR90, Ireland' },
  { slug: 'igroom-dog-grooming-by-lisa-curran-springtown', name: 'IGROOM DOG GROOMING BY LISA CURRAN SPRINGTOWN', category: 'dog', phone: '07749 457323', address: 'Balliniska Rd, Springtown Rd, Londonderry BT48 0NA, UK' },
  { slug: 'blissful-brush-dog-grooming', name: 'Blissful Brush Dog Grooming', category: 'dog', phone: '07749 317864', address: '22 Rossdowney Dr, Londonderry BT47 5PR, UK' },
  { slug: 'the-dog-parlour', name: 'The Dog Parlour', category: 'dog', phone: '07724 330117', address: 'Ráth mór centre Bligh\'s lane, Londonderry BT48 0LZ, UK' },
  { slug: 'd-m-groomers', name: 'D&M GROOMERS', category: 'dog', phone: '07927 443098', address: '53 Rosemount Ave, Londonderry BT48 0HL, UK' },
  { slug: 'bark-n-baths', name: 'Bark N Baths', category: 'dog', phone: '07719 579277', address: 'Unit 6, Swilly House, Springtown Rd, Londonderry BT48 0GH, UK' },
  { slug: 'trendy-paws-by-craig-jan', name: 'Trendy Paws By Craig Jan', category: 'dog', phone: '07522 782066', address: '27 Grangewood Ct, Londonderry BT47 5WT, UK' },
  { slug: 'groomin-marvelous', name: 'Groomin Marvelous', category: 'dog', phone: '07855 808932', address: '4 North Meadows, Londonderry BT48 0QB, UK' },
  { slug: 'dapper-dogs-mobile-grooming', name: 'Dapper Dogs Mobile Grooming', category: 'dog', phone: '07368 243039', address: 'Prehen Park, Derry BT47 2NY, UK' },
  { slug: 'platinum-puppies', name: 'Platinum Puppies', category: 'dog', phone: '07488 238101', address: '20 Rathlin Gardens, Londonderry BT48 9UE, UK' },
  { slug: 'all-furr-dogs', name: 'ALL FURR DOGS', category: 'dog', phone: '07779 028028', address: '1 Sheraton Park, Londonderry BT48 0AQ, UK' },
  { slug: 'hair-of-the-dog-grooming-salon-boutique', name: 'Hair of the Dog grooming Salon & boutique', category: 'dog', phone: '07857 745888', address: 'Skeoge Industrial Estate, Beraghmore Rd, Londonderry BT48 8SE, UK' },
  { slug: 'best-buddies-groomers', name: 'Best Buddies Groomers', category: 'dog', phone: '07821 072599', address: '8 Glasgow Terrace, Londonderry BT48 0DP, UK' },
  { slug: 'adorable-dogs', name: 'Adorable Dogs', category: 'dog', phone: '07753 117195', address: '20 Maydown Rd, Strathfoyle, Londonderry BT47 6UJ, UK' },
  { slug: 'ac-motors-direct-ltd', name: 'Ac Motors Direct Ltd', category: 'car', phone: '07742 792083', address: 'Unit 43, North West Business Complex, Beraghmore Road, Londonderry BT48 8SE, UK' },
  { slug: 'city-auto-wholesale', name: 'City auto wholesale', category: 'car', phone: '07393 339272', address: 'Elagh Business Park East, 17 Buncrana Rd, Londonderry BT48 8LU, UK' },
  { slug: 'northwest-mot-service-centre', name: 'NorthWest MOT & Service Centre', category: 'mot', phone: '07944 764742', address: 'Unit 2c, Altnagelvin Industrial Estate, Trench Rd, Londonderry BT47 2ED, UK' },
  { slug: 'the-specky-detailers', name: 'The Specky Detailers', category: 'car', phone: '07523 224020', address: '12 Ebrington Park, Londonderry BT47 6JE, UK' },
  { slug: 'dv-valeting-and-detailing', name: 'Dv valeting and detailing', category: 'car', phone: '07922 239323', address: 'Lenamore Rd, Londonderry BT48 8NA, UK' },
  { slug: 'a-e-car-wash-valeting', name: 'A&E Car Wash Valeting', category: 'car', phone: '07845 410997', address: '65 Rosemount Ave, Londonderry BT48 0HH, UK' },
  { slug: 'sperrin-detail', name: 'Sperrin Detail', category: 'car', phone: '07938 988541', address: 'Unit 30, Glenshane enterprise centre, 414a Ballyquin Rd, Dungiven, Londonderry BT47 4NQ, UK' },
  { slug: 'quayside-valeting', name: 'Quayside Valeting', category: 'car', phone: '07522 178525', address: 'Londonderry BT48 7PX, UK' },
  { slug: 'elite-finish-valeting', name: 'Elite Finish Valeting', category: 'car', phone: '07399 208916', address: 'Aughlish Ct, Londonderry BT47 6JN, UK' },
  { slug: 'hmvaleting', name: 'HMValeting', category: 'car', phone: '07594 366129', address: '6 Kavanagh Ct, Londonderry BT48 0PN, UK' },
  { slug: 'handmade-events', name: 'Handmade Events', category: 'florist', phone: '07762 452582', address: 'Enterpise House, 11 Great James St, Londonderry BT48 7BZ, UK' },
  { slug: 'mental-street-food', name: 'Mental street food', category: 'restaurant', phone: '07429 491533', address: 'Happy landing carpark, Eglinton, Derry BT47 3PQ, UK' },
  { slug: 'gee-s-kitchen', name: 'Gee\'s Kitchen', category: 'restaurant', phone: '07970 974726', address: 'L\'Derry, 18a Main St, Eglinton, Londonderry BT47 3PQ, UK' },
  { slug: 'ceo-performance-rehab', name: 'CEO Performance & Rehab', category: 'gym', phone: '07771 614654', address: '10c Captain Street Lower, Coleraine BT51 3DT, UK' },
  { slug: 'never-settle-strength-conditioning', name: 'Never Settle Strength & Conditioning', category: 'gym', phone: '07513 861585', address: '24C Ballyrashane Rd, Coleraine BT52 2NL, UK' },
  { slug: 'bearney-nurseries', name: 'Bearney Nurseries', category: 'nursery', phone: '07912 853039', address: '30a Liskey Rd, Strabane BT82 8NR, UK' },
  { slug: 'busy-bee-playschool', name: 'Busy Bee Playschool', category: 'nursery', phone: '(074) 914 1176', address: 'Tara Rose, Townparks, Lifford, Co. Donegal, Ireland' },
];
