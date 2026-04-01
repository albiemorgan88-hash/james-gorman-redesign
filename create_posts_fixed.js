const { execSync } = require('child_process');
const https = require('https');

// Source environment variables
const env = execSync('source ~/.zprofile && env', { 
  shell: '/bin/zsh',
  encoding: 'utf8'
});

const envVars = {};
env.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key] = value;
  }
});

const API_KEY = envVars.WIX_API_KEY;
const SITE_ID = '4b8170fd-99cc-45e8-a4fb-e28bb7156d52';

if (!API_KEY) {
  console.error('WIX_API_KEY not found in environment');
  process.exit(1);
}

const posts = [
  {
    title: "Investment Property Derry: A Guide to Buy-to-Let in 2026",
    content: "As someone who has been working in the Derry property market for over two decades, I have seen firsthand how investment properties can provide excellent returns when approached correctly. Having moved from Essex to Derry nine years ago, I have developed a deep understanding of what makes this city such an attractive proposition for buy-to-let investors.\n\nThe Derry property market presents unique opportunities for investment property buyers. With strong rental demand from young professionals, university students, and families relocating for work, the city offers multiple avenues for generating consistent rental income. In this comprehensive guide, I will share my insights into making successful buy-to-let investments in Derry.\n\nWhy Invest in Derry Property?\n\nDerry offers several compelling reasons for property investment. The city benefits from ongoing regeneration projects, a growing tech sector, and Ulster University which creates consistent demand for rental properties. Property prices remain more affordable than Belfast or Dublin, meaning your initial investment goes further while still offering strong rental yields.\n\nIn my experience, typical rental yields in Derry range from 6-8%, significantly higher than many UK cities. The key is choosing the right location and property type to maximize both rental income and capital appreciation potential.\n\nBest Areas for Investment Property in Derry\n\nThrough years of helping investors, I have identified several prime areas for buy-to-let properties. The Waterside offers excellent value with strong transport links and ongoing development. Cityside appeals to young professionals working in the city center, while areas like Culmore and Strathfoyle attract families seeking quality rental accommodation.\n\nUniversity areas consistently provide strong rental demand from students. Properties near Ulster University Magee campus can achieve premium rents, especially during the academic year. However, I always advise investors to consider the seasonal nature of student lettings when calculating potential returns.\n\nProperty Types That Work for Buy-to-Let\n\nTwo and three-bedroom houses remain the most versatile investment properties in Derry. They appeal to families, house shares, and professionals seeking more space. Apartments can work well in city center locations but may face higher service charges that impact overall returns.\n\nI often recommend focusing on properties built after 1970 to avoid potential issues with older building standards. Modern properties typically require less immediate investment in upgrades and meet current energy efficiency requirements that tenants increasingly expect.\n\nLegal Requirements for Landlords in Northern Ireland\n\nNorthern Ireland has specific regulations that all landlords must follow. You will need landlord registration with your local council, appropriate insurance, and must ensure the property meets Houses in Multiple Occupation (HMO) requirements if applicable. Gas and electrical safety certificates are mandatory, as are smoke and carbon monoxide detectors.\n\nTenant deposit protection is also required in Northern Ireland. As an experienced estate agent, I always recommend working with professionals who understand these requirements to ensure full compliance and protect your investment.\n\nIf you would like to discuss investment property opportunities in Derry or need professional guidance on your property investment journey, please contact James Gorman Property. With over 20 years of experience in property and nine years specializing in the Derry market, I can help you make informed investment decisions that align with your financial goals."
  },
  {
    title: "Downsizing in Derry: A Guide for Empty Nesters",
    content: "Having spent over two decades helping families navigate the Derry property market, I have guided many empty nesters through the downsizing process. As someone who moved from Essex to Derry nine years ago, I understand the emotional and practical challenges that come with transitioning to a smaller home after children have flown the nest.\n\nDownsizing can be one of the most liberating decisions you make, both financially and emotionally. However, it requires careful planning and consideration of your future needs. In this guide, I will share my insights on making a successful transition to a smaller property in Derry.\n\nWhy Consider Downsizing?\n\nEmpty nesters often find themselves maintaining large family homes that no longer suit their lifestyle. Downsizing can reduce your ongoing maintenance costs, utility bills, and property taxes while freeing up equity for retirement planning or other investments. Many of my clients discover that a smaller, well-located property actually enhances their quality of life.\n\nThe psychological benefits are equally important. A right-sized home can feel more manageable and allow you to focus on experiences rather than maintenance. Many clients tell me they wish they had downsized sooner once they experience the freedom it brings.\n\nBest Areas in Derry for Downsizers\n\nThrough my experience helping empty nesters, certain areas of Derry consistently appeal to those looking to downsize. The Waterside offers excellent transport links and amenities, making it perfect for an active retirement lifestyle. Properties here often provide good value while maintaining proximity to shops, restaurants, and healthcare facilities.\n\nCityside locations appeal to those who want to remain close to cultural amenities and entertainment. The city center offers excellent walkability, reducing reliance on cars and providing easy access to everything Derry has to offer.\n\nSuburban areas like Culmore and Strathfoyle provide a quieter environment while still maintaining good transport connections. These areas often offer purpose-built retirement developments or bungalows that are ideal for aging in place.\n\nProperty Types Perfect for Empty Nesters\n\nTwo-bedroom houses or apartments are typically ideal for empty nesters. They provide enough space for comfort while eliminating unnecessary rooms that require heating and maintenance. Many of my downsizing clients prefer properties with outdoor space, whether a small garden or balcony, to maintain their connection with nature without extensive upkeep.\n\nBungalows remain extremely popular with empty nesters as they eliminate stairs and provide single-level living. However, good bungalows in desirable areas can command premium prices due to high demand.\n\nModern apartments often provide excellent value and typically include energy-efficient features that keep running costs low. Many newer developments include concierge services or maintenance support that appeals to those wanting a more carefree lifestyle.\n\nIf you are considering downsizing in Derry and would like professional guidance tailored to your specific needs, please contact James Gorman Property. With over 20 years of experience in property and nine years specializing in the Derry market, I can help you navigate this important transition with confidence and achieve the best possible outcome for your circumstances."
  },
  {
    title: "New Build Homes Derry: Merchant's View and Other Developments", 
    content: "As an estate agent with over 20 years experience and nine years specializing in the Derry market, I have had the privilege of being involved with numerous new build developments across the city. Currently, I have exclusive access to Merchant's View, one of Derry's most exciting new residential developments, and I am excited to share insights about this and other new build opportunities in our area.\n\nNew build homes offer distinct advantages over older properties, from modern energy efficiency standards to contemporary design and the security of comprehensive warranties. In this guide, I will walk you through what makes new builds in Derry such an attractive option for today's homebuyers.\n\nMerchant's View: Derry's Premier New Development\n\nI am delighted to have exclusive access to Merchant's View, a exceptional new development that represents the best of modern living in Derry. This development offers a range of property types designed to meet the needs of first-time buyers, growing families, and those looking to downsize to a modern, efficient home.\n\nThe properties at Merchant's View feature contemporary designs with open-plan living spaces, modern fitted kitchens, and energy-efficient heating systems. Each home is built to current building regulations, ensuring excellent insulation and low running costs for homeowners.\n\nWhat sets Merchant's View apart is its thoughtful design and prime location. The development benefits from excellent transport links while maintaining a peaceful residential atmosphere. For those interested in viewing properties at Merchant's View, I can arrange exclusive previews and provide detailed information about available plots and specifications.\n\nBenefits of Buying New Build in Derry\n\nNew build properties offer several significant advantages that make them increasingly popular with Derry homebuyers. Energy efficiency is perhaps the most important benefit, with modern insulation, efficient heating systems, and double glazing as standard. This translates to significantly lower utility bills compared to older properties.\n\nWarranty protection provides peace of mind that you simply cannot get with older homes. Most new builds come with comprehensive warranties covering structural defects and major systems, protecting your investment for years to come.\n\nModern design standards mean new builds typically feature contemporary layouts with open-plan living, modern bathrooms, and fitted kitchens. Storage solutions are built in from the design stage, making the most of available space.\n\nFor exclusive access to Merchant's View and expert guidance on new build opportunities throughout Derry, please contact James Gorman Property. With over 20 years of property experience and nine years specializing in the Derry market, I can help you find the perfect new build home that meets your needs and budget while providing excellent long-term value."
  },
  {
    title: "Moving to Derry from England: What You Need to Know",
    content: "Having made the move from Essex to Derry nine years ago myself, I understand firsthand the excitement and challenges that come with relocating from England to this vibrant Northern Irish city. As an estate agent with over 20 years of experience, I now spend much of my time helping other English families make this same journey, and I am passionate about ensuring they have all the information they need for a successful transition.\n\nThe move from England to Derry can be one of the best decisions you make, but proper preparation and local knowledge are essential. In this comprehensive guide, I will share the insights I have gained both from my personal experience and from helping numerous English families settle successfully in Derry.\n\nWhy English Families Choose Derry\n\nDerry offers exceptional value compared to most English cities, particularly in terms of property prices and general living costs. Many of my English clients are amazed at the quality of life their money can provide here compared to what they left behind in England.\n\nThe pace of life in Derry is generally more relaxed than in English cities, while still offering excellent amenities, cultural opportunities, and growing employment prospects. The city benefits from ongoing regeneration projects and has a thriving tech sector that attracts professionals from across the UK.\n\nEducation standards are high, with excellent primary and secondary schools, plus Ulster University's Magee campus providing higher education opportunities locally. The healthcare system, while different from England's NHS structure, provides excellent care through the Northern Ireland health service.\n\nProperty Market Differences\n\nProperty prices in Derry are significantly lower than most comparable English cities. A budget that might secure a modest home in many English locations can provide a substantial family property with garden in Derry. This affordability extends beyond purchase prices to ongoing costs like rates (equivalent to council tax) and utilities.\n\nThe property buying process in Northern Ireland differs from England in several important ways. We use a different legal system, and properties are typically sold through estate agents rather than solicitors handling the entire process as in Scotland. Most importantly, properties here are sold subject to contract and survey, providing more protection for buyers.\n\nProperty surveys are essential in Northern Ireland, and I always recommend comprehensive structural surveys rather than basic valuations. The older building stock in parts of Derry requires careful evaluation, though this also provides opportunities for character properties at excellent prices.\n\nCost of Living Advantages\n\nBeyond lower property prices, many other costs are lower in Derry than in most English cities. Restaurant meals, entertainment, and personal services often cost significantly less. Rates (local taxation) are typically much lower than English council tax for equivalent properties.\n\nPetrol prices may be lower, particularly with cross-border competition from the Republic of Ireland. Shopping costs vary, with some items cheaper and others similar to English prices.\n\nIf you are considering moving to Derry from England and would like guidance from someone who has made this journey successfully, please contact James Gorman Property. With over 20 years of property experience and nine years specializing in the Derry market as an English relocator myself, I can provide the local knowledge and support you need to make your move a success."
  },
  {
    title: "Property Survey Guide: What Northern Ireland Buyers Need to Know",
    content: "Having guided property buyers through thousands of transactions over my 20-year career, I cannot overstate the importance of obtaining a proper property survey before purchasing any home in Northern Ireland. As someone who moved from Essex to Derry nine years ago, I learned firsthand how Northern Ireland's building methods, materials, and potential issues differ from other parts of the UK.\n\nA comprehensive property survey is one of the most important investments you will make during the buying process. It can save you thousands of pounds and prevent you from purchasing a property with serious defects. In this guide, I will explain everything Northern Ireland buyers need to know about property surveys.\n\nWhy Surveys Are Essential in Northern Ireland\n\nNorthern Ireland has a diverse range of building styles and ages, from Victorian terraces to modern apartments. Each era brought different construction methods, materials, and potential problems that require expert evaluation. Many properties, particularly in areas like Derry, include solid wall construction, different damp-proofing methods, and heating systems that may not be familiar to buyers from other parts of the UK.\n\nThe weather in Northern Ireland can be harsh on buildings, with high rainfall and strong winds creating unique maintenance challenges. Properties that appear fine on the surface may have underlying issues with dampness, roof integrity, or structural problems that only a qualified surveyor can identify.\n\nUnlike mortgage valuations, which simply confirm the property is worth the loan amount, surveys are designed to protect your interests as a buyer by identifying defects, maintenance requirements, and potential future costs.\n\nTypes of Property Surveys Available\n\nIn Northern Ireland, you can choose from several types of survey depending on your property and circumstances. A Basic Valuation Survey is the minimum requirement for mortgage purposes but provides very limited information about the property's condition.\n\nA Homebuyer Survey (Level 2) provides much more detail about the property's condition and is suitable for conventional properties in reasonable condition. This survey identifies significant defects and provides guidance on maintenance requirements and potential issues.\n\nA Full Structural Survey (Level 3) is the most comprehensive option and is essential for older properties, unusual buildings, or any property where you suspect significant defects might exist. This survey provides detailed analysis of every accessible part of the building and includes professional opinions on repair requirements and costs.\n\nCommon Issues Found in Northern Ireland Properties\n\nThrough my experience helping buyers interpret survey results, certain issues appear regularly in Northern Ireland properties. Dampness is perhaps the most common concern, whether from rising damp in older properties, penetrating damp from poor pointing or roof issues, or condensation problems in poorly ventilated homes.\n\nRoof problems are frequent, particularly with older slate roofs that may have slipped tiles, damaged pointing, or inadequate insulation. Flat roofs on extensions often require regular maintenance and eventual replacement.\n\nElectrical systems in older properties may not meet current safety standards and could require updating. Similarly, older heating systems may be inefficient or nearing replacement time.\n\nFor expert guidance on choosing the right survey for your Northern Ireland property purchase and help interpreting survey results, please contact James Gorman Property. With over 20 years of experience in property and nine years specializing in the Derry market, I can help ensure you make an informed decision about your property purchase and avoid costly surprises after moving in."
  }
];

async function createPost(post) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      draftPost: {
        title: post.title,
        richContent: {
          nodes: [
            {
              type: "PARAGRAPH",
              nodes: [
                {
                  type: "TEXT", 
                  textData: {
                    text: post.content
                  }
                }
              ]
            }
          ]
        }
      }
    });

    const options = {
      hostname: 'www.wixapis.com',
      path: '/blog/v3/draft-posts',
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'wix-site-id': SITE_ID,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          console.log(`✓ Created draft: ${post.title}`);
          resolve(JSON.parse(data));
        } else {
          console.log(`✗ Failed to create: ${post.title}`);
          console.log(`Status: ${res.statusCode}`);
          console.log(`Response: ${data}`);
          reject(new Error(data));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Creating 5 new blog post drafts for James Gorman Property...');
  console.log(`Using API key: ${API_KEY.substring(0, 20)}...`);
  
  for (let i = 0; i < posts.length; i++) {
    try {
      await createPost(posts[i]);
      // Wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(`Error creating post ${i + 1}:`, error.message);
    }
  }
  
  console.log('Finished creating draft posts.');
}

main().catch(console.error);