(()=>{var e={};e.id=8404,e.ids=[8404],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},75920:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(79816),s(65832),s(35866);var a=s(23191),o=s(88716),n=s(37922),i=s.n(n),r=s(95231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);s.d(t,l);let c=["",{children:["guides",{children:["openclaw-browser-automation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,79816)),"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/guides/openclaw-browser-automation/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,65832)),"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/guides/openclaw-browser-automation/page.tsx"],m="/guides/openclaw-browser-automation/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/guides/openclaw-browser-automation/page",pathname:"/guides/openclaw-browser-automation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},70555:(e,t,s)=>{Promise.resolve().then(s.bind(s,56685))},79816:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>n});var a=s(19510),o=s(95079);let n={title:"OpenClaw Browser Automation Guide",description:"Complete guide to OpenClaw browser automation. Control Chrome, automate web tasks, scrape data, and build powerful web workflows with your AI agent.",keywords:["openclaw browser automation","openclaw chrome control","openclaw web automation","openclaw web scraping","openclaw selenium","openclaw puppeteer","ai web automation","openclaw browser control"],alternates:{canonical:"https://openclawconsultant.co.uk/guides/openclaw-browser-automation"},openGraph:{title:"OpenClaw Browser Automation Guide",description:"Master OpenClaw browser automation. Control Chrome, automate web tasks, and build powerful workflows.",url:"https://openclawconsultant.co.uk/guides/openclaw-browser-automation",type:"article"}},i=[{capability:"Page Navigation",description:"Navigate and interact with web pages",features:["Open URLs and navigate between pages","Handle page loading and timeouts","Manage browser tabs and windows","Navigate browser history"],useCases:["Automated testing workflows","Data collection from multiple pages","Form submissions across sites","Content monitoring and tracking"]},{capability:"Element Interaction",description:"Find and interact with page elements",features:["Click buttons and links","Fill forms and input fields","Select dropdown options","Upload files and attachments"],useCases:["Automated form filling","E-commerce interactions","Social media posting","File upload automation"]},{capability:"Data Extraction",description:"Extract information from web pages",features:["Scrape text content and data","Extract links and media URLs","Capture screenshots","Parse structured data"],useCases:["Competitive analysis","Lead generation","Price monitoring","Content aggregation"]},{capability:"Advanced Actions",description:"Complex browser automation tasks",features:["Handle JavaScript-heavy sites","Manage cookies and sessions","Execute custom JavaScript","Handle pop-ups and alerts"],useCases:["Single Page Application testing","Authentication workflows","Dynamic content interaction","Complex user journeys"]}],r=[{step:1,title:"Install Browser Dependencies",duration:"10 minutes",description:"Set up Chrome and required dependencies",tasks:["Install Google Chrome or Chromium","Install ChromeDriver","Verify browser accessibility","Configure OpenClaw browser settings"],commands:["# macOS","brew install --cask google-chrome","brew install chromedriver","","# Ubuntu/Debian","wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -","echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list","sudo apt update && sudo apt install google-chrome-stable","sudo apt install chromium-chromedriver"]},{step:2,title:"Configure OpenClaw Browser Skill",duration:"15 minutes",description:"Install and configure the browser automation skill",tasks:["Install the browser automation skill","Configure browser preferences","Set up security and privacy options","Test basic browser functionality"],commands:["openclaw skills search browser","openclaw skills install browser-automation","openclaw skills enable browser-automation","openclaw agent add-skill your-agent browser-automation"],config:{filename:"browser-config.json",content:`{
  "browser": {
    "type": "chrome",
    "headless": false,
    "window_size": {
      "width": 1920,
      "height": 1080
    },
    "timeout": 30,
    "user_agent": "Mozilla/5.0 (compatible; OpenClaw-Agent)",
    "options": [
      "--disable-blink-features=AutomationControlled",
      "--disable-dev-shm-usage",
      "--no-sandbox"
    ]
  }
}`}},{step:3,title:"Test Browser Connection",duration:"5 minutes",description:"Verify browser automation is working",tasks:["Launch browser instance","Navigate to test page","Perform basic interactions","Capture screenshot for verification"],tests:[{test:"Browser Launch Test",command:"openclaw browser launch",expected:"Browser window opens successfully"},{test:"Navigation Test",command:'openclaw browser navigate "https://example.com"',expected:"Page loads and title displays"},{test:"Screenshot Test",command:'openclaw browser screenshot "test.png"',expected:"Screenshot file created successfully"}]}],l=[{category:"Data Collection & Scraping",description:"Extract information from websites automatically",examples:[{name:"Product Price Monitor",description:"Monitor product prices across e-commerce sites",workflow:["Navigate to product pages","Extract price information","Compare with historical data","Send alerts for price changes"],code:`{
  "name": "price-monitor",
  "schedule": "0 */6 * * *",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "https://example-store.com/product/123"
    },
    {
      "type": "browser-extract",
      "selector": ".price",
      "attribute": "text",
      "variable": "current_price"
    },
    {
      "type": "compare-price",
      "current": "{{current_price}}",
      "threshold": 0.10
    },
    {
      "type": "notify-if-changed",
      "method": "email"
    }
  ]
}`,selectors:{price:".price-current, .price, [data-price]",title:"h1, .product-title, [data-product-name]",availability:".stock-status, .availability"}},{name:"Job Listing Scraper",description:"Collect job postings from career sites",workflow:["Search job listings with filters","Extract job details and requirements","Save to database or spreadsheet","Track new postings over time"],code:`{
  "name": "job-scraper",
  "target": "https://jobs.example.com",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{target}}/search?q=developer&location=remote"
    },
    {
      "type": "browser-extract-multiple",
      "selector": ".job-listing",
      "fields": {
        "title": ".job-title",
        "company": ".company-name", 
        "location": ".job-location",
        "salary": ".salary-range",
        "link": "a[href]@href"
      }
    },
    {
      "type": "save-to-database",
      "table": "job_listings"
    }
  ]
}`,pagination:`{
  "type": "browser-paginate",
  "next_button": ".pagination-next",
  "max_pages": 10,
  "wait_between": "2s"
}`}]},{category:"Form Automation & Submissions",description:"Automate form filling and submissions",examples:[{name:"Lead Generation Forms",description:"Fill contact forms for lead generation",workflow:["Navigate to target websites","Find and fill contact forms","Submit with business information","Track submission success"],code:`{
  "name": "contact-form-filler",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{target_website}}/contact"
    },
    {
      "type": "browser-wait-for",
      "selector": "form[name='contact'], #contact-form"
    },
    {
      "type": "browser-fill-form",
      "fields": {
        "name": "{{business_name}}",
        "email": "{{business_email}}",
        "subject": "Partnership Inquiry", 
        "message": "{{custom_message}}"
      }
    },
    {
      "type": "browser-click",
      "selector": "button[type='submit'], .submit-btn"
    },
    {
      "type": "browser-wait-for",
      "selector": ".success-message, .thank-you",
      "timeout": 10
    }
  ]
}`,formHandling:{"text-inputs":"input[type='text'], input[type='email'], textarea",dropdowns:"select, .custom-dropdown",checkboxes:"input[type='checkbox']","radio-buttons":"input[type='radio']"}},{name:"Application Submissions",description:"Automate job application submissions",workflow:["Navigate to application pages","Fill application forms with CV data","Upload required documents","Submit applications and track status"],code:`{
  "name": "job-application-bot",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{job_application_url}}"
    },
    {
      "type": "browser-fill-form",
      "fields": {
        "first_name": "{{applicant.first_name}}",
        "last_name": "{{applicant.last_name}}",
        "email": "{{applicant.email}}",
        "phone": "{{applicant.phone}}"
      }
    },
    {
      "type": "browser-upload",
      "selector": "input[type='file'][name='cv']",
      "file": "{{applicant.cv_path}}"
    },
    {
      "type": "browser-click",
      "selector": ".apply-button, #submit-application"
    }
  ]
}`}]},{category:"Social Media Automation",description:"Automate social media interactions",examples:[{name:"LinkedIn Connection Bot",description:"Send connection requests with personalized messages",workflow:["Search for target professionals","Review profiles for relevance","Send personalized connection requests","Track connection acceptance rates"],code:`{
  "name": "linkedin-connections",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "https://linkedin.com/search/people"
    },
    {
      "type": "browser-fill",
      "selector": "[placeholder='Search people']",
      "value": "{{search_query}}"
    },
    {
      "type": "browser-extract-multiple",
      "selector": ".search-result",
      "limit": 10,
      "fields": {
        "name": ".name a",
        "title": ".subline",
        "connect_url": ".connect-button@href"
      }
    },
    {
      "type": "browser-click-multiple",
      "selector": ".connect-button",
      "max_clicks": 5,
      "wait_between": "3s"
    }
  ]
}`,ethics:["Respect platform rate limits","Use authentic, personalized messages","Don't spam or mass-message","Follow platform terms of service"]}]},{category:"Testing & Monitoring",description:"Automated testing and website monitoring",examples:[{name:"Website Health Monitor",description:"Monitor website functionality and performance",workflow:["Test critical user journeys","Check for broken links and errors","Monitor page load times","Alert on failures or issues"],code:`{
  "name": "website-health-check",
  "schedule": "*/30 * * * *",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{website_url}}",
      "timeout": 10
    },
    {
      "type": "browser-check-elements",
      "required": [
        ".header",
        ".navigation", 
        ".main-content",
        ".footer"
      ]
    },
    {
      "type": "browser-test-links",
      "selector": "a[href^='http']",
      "sample": 10
    },
    {
      "type": "browser-measure-performance",
      "metrics": ["load_time", "first_paint"]
    },
    {
      "type": "alert-on-failure",
      "threshold": 10
    }
  ]
}`}]}],c=[{technique:"Stealth Browsing",description:"Avoid detection by websites",methods:["Randomize user agents and headers","Use proxy rotation","Implement human-like delays","Handle CAPTCHAs appropriately"],implementation:`{
  "stealth_config": {
    "user_agents": [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    ],
    "delays": {
      "min": 1,
      "max": 3,
      "type": "random"
    },
    "proxy_rotation": true,
    "disable_images": false,
    "viewport_randomization": true
  }
}`},{technique:"Session Management",description:"Handle cookies, authentication, and sessions",methods:["Persist cookies between sessions","Handle login workflows","Manage multiple accounts","Store authentication tokens"],implementation:`{
  "session_config": {
    "cookie_storage": "./cookies/",
    "authentication": {
      "type": "form",
      "login_url": "https://example.com/login",
      "username_field": "#username",
      "password_field": "#password", 
      "submit_button": "#login-btn"
    },
    "session_timeout": "30m",
    "auto_login": true
  }
}`},{technique:"Dynamic Content Handling",description:"Work with JavaScript-heavy and dynamic sites",methods:["Wait for dynamic content to load","Handle AJAX requests","Execute custom JavaScript","Manage WebSocket connections"],implementation:`{
  "dynamic_handling": {
    "wait_strategies": [
      {
        "type": "element_visible",
        "selector": ".dynamic-content",
        "timeout": 15
      },
      {
        "type": "network_idle",
        "timeout": 5
      },
      {
        "type": "custom_js",
        "script": "return document.readyState === 'complete'"
      }
    ]
  }
}`}],d=[{category:"Navigation Commands",commands:[{command:"openclaw browser launch",description:"Launch new browser instance",options:"--headless, --window-size=WxH"},{command:"openclaw browser navigate <url>",description:"Navigate to specific URL",example:'openclaw browser navigate "https://example.com"'},{command:"openclaw browser back/forward",description:"Navigate browser history",example:"openclaw browser back"},{command:"openclaw browser refresh",description:"Reload current page",options:"--force, --ignore-cache"}]},{category:"Element Interaction",commands:[{command:"openclaw browser click <selector>",description:"Click on page element",example:'openclaw browser click "#submit-btn"'},{command:"openclaw browser fill <selector> <value>",description:"Fill input field with value",example:'openclaw browser fill "#email" "user@example.com"'},{command:"openclaw browser select <selector> <option>",description:"Select dropdown option",example:'openclaw browser select "#country" "USA"'},{command:"openclaw browser upload <selector> <file>",description:"Upload file to input",example:'openclaw browser upload "#file-input" "./document.pdf"'}]},{category:"Data Extraction",commands:[{command:"openclaw browser extract <selector>",description:"Extract text from element",options:"--attribute=attr, --multiple"},{command:"openclaw browser screenshot <filename>",description:"Take page screenshot",options:"--full-page, --element=selector"},{command:"openclaw browser links",description:"Extract all page links",options:"--internal-only, --external-only"},{command:"openclaw browser table <selector>",description:"Extract table data as JSON",example:'openclaw browser table "#data-table"'}]}],m=[{problem:"Browser Won't Launch",symptoms:["Chrome/ChromeDriver not found errors","Permission denied messages","Browser crashes on startup"],solutions:["Verify Chrome installation: which google-chrome","Check ChromeDriver version compatibility","Add --no-sandbox flag for Linux containers","Ensure correct PATH environment variables","Try running with --headless mode first"]},{problem:"Elements Not Found",symptoms:["Selector not found errors","Timeouts waiting for elements","Intermittent element detection"],solutions:["Use browser dev tools to verify selectors","Add explicit waits for dynamic content","Check for iframes or shadow DOM","Try multiple selector strategies (CSS, XPath)","Wait for page load completion"]},{problem:"Detection by Websites",symptoms:["CAPTCHA challenges appearing","IP address blocked","Unusual traffic warnings"],solutions:["Implement human-like delays and patterns","Rotate user agents and headers","Use proxy rotation","Respect robots.txt and rate limits","Consider API alternatives when available"]},{problem:"Performance Issues",symptoms:["Slow page loading times","High memory usage","Browser becomes unresponsive"],solutions:["Enable headless mode for faster execution","Disable images and CSS loading","Close unused tabs and windows","Increase browser timeout values","Monitor and limit concurrent instances"]}];function p(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("section",{className:"hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain",children:a.jsx("div",{className:"max-w-[1140px] mx-auto px-6 relative z-10 py-20",children:(0,a.jsxs)("div",{className:"max-w-[720px]",children:[(0,a.jsxs)("h1",{className:"font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight",children:["OpenClaw Browser",a.jsx("br",{}),a.jsx("span",{className:"text-orange",children:"Automation Guide"})]}),a.jsx("p",{className:"text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed",children:"Control Chrome with your AI agent. Automate web tasks, scrape data, fill forms, and build powerful browser-based workflows."}),a.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:a.jsx("a",{href:"#setup",className:"inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange",children:"Start Automating"})})]})})}),a.jsx("section",{className:"bg-white py-28",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Browser Automation Capabilities"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"What your OpenClaw agent can do with browser automation"})]}),a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:i.map((e,t)=>(0,a.jsxs)("div",{className:"bg-surface rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-3",children:e.capability}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6",children:[(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Features:"}),a.jsx("ul",{className:"space-y-2",children:e.features.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-green-500",children:"✓"}),e]},t))})]}),(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Use Cases:"}),a.jsx("ul",{className:"space-y-2",children:e.useCases.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-orange",children:"▸"}),e]},t))})]})]})]},t))})]})}),a.jsx("section",{id:"setup",className:"bg-surface py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Setup Guide"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Get browser automation working with OpenClaw"})]}),a.jsx("div",{className:"space-y-12",children:r.map((e,t)=>a.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:(0,a.jsxs)("div",{className:"flex items-start gap-6",children:[a.jsx("div",{className:"bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",children:e.step}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between mb-4",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark",children:e.title}),a.jsx("span",{className:"text-orange text-sm font-medium",children:e.duration})]}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),e.tasks&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Tasks:"}),a.jsx("ul",{className:"space-y-2",children:e.tasks.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-orange",children:"•"}),e]},t))})]}),e.commands&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Installation Commands:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.commands.join("\n")})})]}),e.config&&(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("h4",{className:"font-semibold text-dark mb-3",children:["Configuration (",e.config.filename,"):"]}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.config.content})})]}),e.tests&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Verification Tests:"}),a.jsx("div",{className:"space-y-3",children:e.tests.map((e,t)=>(0,a.jsxs)("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[a.jsx("h5",{className:"font-medium text-dark mb-2",children:e.test}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm mb-2",children:e.command}),(0,a.jsxs)("p",{className:"text-green-600 text-sm",children:["✓ Expected: ",e.expected]})]},t))})]})]})]})},t))})]})}),a.jsx("section",{className:"bg-light py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Automation Examples"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Real-world browser automation workflows"})]}),a.jsx("div",{className:"space-y-12",children:l.map((e,t)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-3",children:e.category}),a.jsx("p",{className:"text-muted mb-8",children:e.description}),a.jsx("div",{className:"space-y-8",children:e.examples.map((e,t)=>(0,a.jsxs)("div",{className:"bg-surface rounded-lg p-6",children:[a.jsx("h4",{className:"font-heading font-bold text-lg text-dark mb-3",children:e.name}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Workflow:"}),a.jsx("ol",{className:"space-y-2",children:e.workflow.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[(0,a.jsxs)("span",{className:"text-orange font-mono text-xs mt-0.5",children:[t+1,"."]}),e]},t))})]}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Configuration:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.code})})]}),"selectors"in e&&e.selectors&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Common Selectors:"}),a.jsx("div",{className:"bg-surface rounded-lg p-4",children:"selectors"in e&&Object.entries(e.selectors).map(([e,t])=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("span",{className:"font-medium text-dark capitalize",children:[e.replace("_"," "),":"]}),a.jsx("code",{className:"ml-2 text-sm bg-slate-200 px-2 py-1 rounded",children:t})]},e))})]}),"formHandling"in e&&e.formHandling&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Form Element Selectors:"}),a.jsx("div",{className:"bg-surface rounded-lg p-4",children:"formHandling"in e&&Object.entries(e.formHandling).map(([e,t])=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("span",{className:"font-medium text-dark capitalize",children:[e.replace("-"," "),":"]}),a.jsx("code",{className:"ml-2 text-sm bg-slate-200 px-2 py-1 rounded",children:t})]},e))})]}),"pagination"in e&&e.pagination&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Pagination Handling:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.pagination})})]}),"ethics"in e&&e.ethics&&(0,a.jsxs)("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-4",children:[a.jsx("h5",{className:"font-semibold text-yellow-800 mb-2",children:"Ethical Considerations:"}),a.jsx("ul",{className:"space-y-1",children:"ethics"in e&&e.ethics.map((e,t)=>(0,a.jsxs)("li",{className:"text-yellow-700 text-sm",children:["• ",e]},t))})]})]},t))})]},t))})]})}),a.jsx("section",{className:"bg-white py-28",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Advanced Techniques"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Professional browser automation strategies"})]}),a.jsx("div",{className:"space-y-8",children:c.map((e,t)=>(0,a.jsxs)("div",{className:"bg-surface rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-3",children:e.technique}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Methods:"}),a.jsx("ul",{className:"space-y-2",children:e.methods.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-orange",children:"•"}),e]},t))})]}),(0,a.jsxs)("div",{className:"bg-surface rounded-lg p-4",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Implementation:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.implementation})})]})]},t))})]})}),a.jsx("section",{className:"bg-surface py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Browser Commands"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Essential commands for browser automation"})]}),a.jsx("div",{className:"space-y-8",children:d.map((e,t)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-6",children:e.category}),a.jsx("div",{className:"space-y-4",children:e.commands.map((e,t)=>(0,a.jsxs)("div",{className:"border-l-4 border-orange bg-orange-50 p-4",children:[(0,a.jsxs)("div",{className:"mb-2",children:[a.jsx("h4",{className:"font-mono text-dark font-semibold",children:e.command}),a.jsx("p",{className:"text-muted text-sm mt-1",children:e.description})]}),e.example&&(0,a.jsxs)("div",{className:"mb-2",children:[a.jsx("h5",{className:"font-semibold text-dark mb-1 text-sm",children:"Example:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-2 rounded font-mono text-sm",children:e.example})]}),e.options&&(0,a.jsxs)("div",{children:[a.jsx("h5",{className:"font-semibold text-dark mb-1 text-sm",children:"Options:"}),a.jsx("p",{className:"text-muted text-sm font-mono",children:e.options})]})]},t))})]},t))})]})}),a.jsx("section",{className:"bg-light py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Troubleshooting"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Common browser automation issues and solutions"})]}),a.jsx("div",{className:"space-y-6",children:m.map((e,t)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-lg text-dark mb-3",children:e.problem}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-red-600 mb-2",children:"Symptoms:"}),a.jsx("ul",{className:"space-y-1",children:e.symptoms.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-red-500",children:"•"}),e]},t))})]}),(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-green-600 mb-2",children:"Solutions:"}),a.jsx("ul",{className:"space-y-1",children:e.solutions.map((e,t)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-green-500",children:"✓"}),e]},t))})]})]})]},t))})]})}),a.jsx("section",{className:"py-16 bg-surface",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[a.jsx("h2",{className:"font-heading text-2xl font-bold text-navy mb-8 text-center",children:"Related Guides"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto",children:[(0,a.jsxs)("a",{href:"/guides/openclaw-skills-guide",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Skills: Complete Guide"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/openclaw-cron-jobs",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Cron Jobs: Automation Guide"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/what-is-openclaw-2026",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"What is OpenClaw? Complete Guide 2026"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/openclaw-setup-mac",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Setup Guide for Mac 2026"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]})]})]})}),a.jsx("section",{id:"contact",className:"bg-navy text-white py-24 relative overflow-hidden grain",children:a.jsx("div",{className:"max-w-[1140px] mx-auto px-6 relative z-10",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"font-heading text-3xl md:text-4xl font-bold mb-6",children:["Need Help with",a.jsx("br",{}),a.jsx("span",{className:"text-orange",children:"Browser Automation?"})]}),a.jsx("p",{className:"text-white/60 text-lg leading-relaxed mb-8",children:"Get expert assistance building sophisticated browser automation workflows for your business needs."}),(0,a.jsxs)("ul",{className:"space-y-3 mb-8",children:[(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Custom automation development"]}),(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Anti-detection strategies"]}),(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Performance optimization"]})]})]}),(0,a.jsxs)("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-white mb-1",children:"Browser Automation Help"}),a.jsx("p",{className:"text-white/40 text-sm mb-6",children:"Build powerful web automation workflows"}),a.jsx(o.Z,{})]})]})})})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[8948,7326,6621,4120],()=>s(75920));module.exports=a})();