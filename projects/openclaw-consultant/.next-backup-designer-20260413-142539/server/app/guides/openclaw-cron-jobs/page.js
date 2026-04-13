(()=>{var e={};e.id=954,e.ids=[954],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},9287:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c}),t(34667),t(65832),t(35866);var a=t(23191),n=t(88716),o=t(37922),i=t.n(o),r=t(95231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);t.d(s,l);let c=["",{children:["guides",{children:["openclaw-cron-jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,34667)),"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/guides/openclaw-cron-jobs/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,65832)),"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/guides/openclaw-cron-jobs/page.tsx"],m="/guides/openclaw-cron-jobs/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/guides/openclaw-cron-jobs/page",pathname:"/guides/openclaw-cron-jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},70555:(e,s,t)=>{Promise.resolve().then(t.bind(t,56685))},34667:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x,metadata:()=>o});var a=t(19510),n=t(95079);let o={title:"OpenClaw Cron Jobs: Automation Guide",description:"Complete guide to OpenClaw cron jobs and automation. Schedule tasks, create workflows, and automate your AI agents with practical examples.",keywords:["openclaw cron jobs","openclaw automation","openclaw scheduling","openclaw task automation","openclaw workflow automation","openclaw timer setup","automated ai agents","openclaw cron examples"],alternates:{canonical:"https://openclawconsultant.co.uk/guides/openclaw-cron-jobs"},openGraph:{title:"OpenClaw Cron Jobs: Automation Guide",description:"Master OpenClaw automation with cron jobs, scheduled tasks, and workflow automation. Practical examples included.",url:"https://openclawconsultant.co.uk/guides/openclaw-cron-jobs",type:"article"}},i=[{component:"Cron Expression",description:"Time-based job scheduler syntax",format:"* * * * * (minute hour day month weekday)",examples:[{expression:"0 9 * * *",meaning:"Every day at 9:00 AM"},{expression:"*/15 * * * *",meaning:"Every 15 minutes"},{expression:"0 */2 * * *",meaning:"Every 2 hours"},{expression:"0 9 * * 1-5",meaning:"9 AM on weekdays"},{expression:"0 0 1 * *",meaning:"First day of every month"}]},{component:"Job Types",description:"Different types of scheduled tasks",types:[{type:"Agent Tasks",description:"Schedule specific agent actions",examples:["Send daily reports","Process emails","Update social media"]},{type:"System Maintenance",description:"Automated system upkeep",examples:["Clean temp files","Backup data","Update dependencies"]},{type:"Data Processing",description:"Scheduled data operations",examples:["Import feeds","Generate analytics","Sync databases"]},{type:"Notifications",description:"Timed alerts and reminders",examples:["Status updates","Deadline reminders","Health checks"]}]},{component:"Execution Context",description:"Where and how cron jobs run",contexts:[{context:"Agent-specific",description:"Jobs tied to specific agents",scope:"Single agent operations"},{context:"System-wide",description:"Global OpenClaw tasks",scope:"Cross-agent operations"},{context:"Skill-based",description:"Jobs within specific skills",scope:"Skill functionality"},{context:"Workspace-level",description:"Workspace maintenance tasks",scope:"Workspace operations"}]}],r=[{step:1,title:"Enable Cron Service",duration:"5 minutes",description:"Activate the OpenClaw cron scheduler",commands:["openclaw cron status","openclaw cron enable","openclaw cron start"],verification:["Service shows as 'running'","No error messages in logs","Cron daemon process active"]},{step:2,title:"Create Your First Cron Job",duration:"10 minutes",description:"Set up a basic scheduled task",examples:[{name:"Daily Status Report",command:'openclaw cron add "0 9 * * *" "status-report"',description:"Generate daily status report at 9 AM"},{name:"Hourly Health Check",command:'openclaw cron add "0 * * * *" "health-check"',description:"Check system health every hour"}]},{step:3,title:"Configure Job Parameters",duration:"15 minutes",description:"Set advanced job configuration",config:{filename:"cron-jobs.json",content:`{
  "jobs": [
    {
      "name": "daily-summary",
      "schedule": "0 9 * * *",
      "agent": "main-agent",
      "action": "generate-summary",
      "parameters": {
        "timeframe": "24h",
        "format": "markdown"
      },
      "retry": {
        "attempts": 3,
        "delay": "5m"
      },
      "notifications": {
        "success": true,
        "failure": true
      }
    }
  ]
}`}}],l=[{category:"Business Automation",description:"Automate common business tasks",jobs:[{name:"Daily Sales Report",schedule:"0 8 * * 1-5",description:"Generate and send daily sales reports to team",workflow:["Collect sales data from CRM","Generate report with charts","Send via email to stakeholders","Update dashboard"],code:`{
  "name": "daily-sales-report",
  "schedule": "0 8 * * 1-5",
  "actions": [
    {
      "type": "crm-query",
      "timeframe": "yesterday"
    },
    {
      "type": "generate-report", 
      "template": "sales-summary",
      "format": "pdf"
    },
    {
      "type": "email-send",
      "recipients": ["team@company.com"],
      "subject": "Daily Sales Report - {{date}}"
    }
  ]
}`},{name:"Weekly Backup",schedule:"0 2 * * 0",description:"Create weekly system backups",workflow:["Backup database","Archive important files","Upload to cloud storage","Verify backup integrity"],code:`{
  "name": "weekly-backup",
  "schedule": "0 2 * * 0",
  "actions": [
    {
      "type": "backup-database",
      "retention": "4weeks"
    },
    {
      "type": "archive-files",
      "paths": ["/data", "/configs"]
    },
    {
      "type": "cloud-upload",
      "service": "s3",
      "verify": true
    }
  ]
}`}]},{category:"Content Automation",description:"Automate content creation and publishing",jobs:[{name:"Social Media Scheduler",schedule:"0 10,14,18 * * *",description:"Post content to social media platforms",workflow:["Generate engaging content","Add relevant hashtags","Post to multiple platforms","Track engagement metrics"],code:`{
  "name": "social-media-post",
  "schedule": "0 10,14,18 * * *",
  "actions": [
    {
      "type": "content-generate",
      "topic": "daily-tip",
      "length": "short"
    },
    {
      "type": "hashtag-suggest",
      "count": 3
    },
    {
      "type": "social-post",
      "platforms": ["twitter", "linkedin"]
    }
  ]
}`},{name:"Blog Content Pipeline",schedule:"0 9 * * 1",description:"Research and draft weekly blog posts",workflow:["Research trending topics","Generate content outline","Draft blog post","Schedule for review"],code:`{
  "name": "blog-pipeline",
  "schedule": "0 9 * * 1",
  "actions": [
    {
      "type": "trend-research",
      "sources": ["google-trends", "industry-news"]
    },
    {
      "type": "content-outline",
      "length": "1500-words"
    },
    {
      "type": "draft-article",
      "save-to": "drafts/"
    }
  ]
}`}]},{category:"Monitoring & Alerts",description:"Automated system monitoring and notifications",jobs:[{name:"Website Health Monitor",schedule:"*/5 * * * *",description:"Monitor website uptime and performance",workflow:["Check website availability","Test response times","Monitor SSL certificates","Alert on issues"],code:`{
  "name": "website-monitor",
  "schedule": "*/5 * * * *",
  "actions": [
    {
      "type": "http-check",
      "urls": ["https://example.com", "https://api.example.com"],
      "timeout": "10s"
    },
    {
      "type": "ssl-check",
      "alert-days": 30
    },
    {
      "type": "alert-if-down",
      "notification": "slack"
    }
  ]
}`},{name:"System Resource Monitor",schedule:"*/10 * * * *",description:"Monitor CPU, memory, and disk usage",workflow:["Check system resources","Log performance metrics","Alert on thresholds","Generate usage reports"],code:`{
  "name": "resource-monitor",
  "schedule": "*/10 * * * *",
  "actions": [
    {
      "type": "system-check",
      "metrics": ["cpu", "memory", "disk"]
    },
    {
      "type": "threshold-alert",
      "cpu": 80,
      "memory": 85,
      "disk": 90
    },
    {
      "type": "log-metrics",
      "retention": "30d"
    }
  ]
}`}]}],c=[{feature:"Conditional Execution",description:"Run jobs based on conditions",examples:[{condition:"Weather-based",code:`{
  "condition": {
    "type": "weather",
    "operator": "equals",
    "value": "sunny"
  },
  "action": "send-outdoor-event-reminder"
}`,usage:"Send outdoor event reminders only when sunny"},{condition:"File existence",code:`{
  "condition": {
    "type": "file-exists",
    "path": "/data/new-orders.csv"
  },
  "action": "process-orders"
}`,usage:"Process orders only when new file exists"}]},{feature:"Job Dependencies",description:"Chain jobs with dependencies",examples:[{scenario:"Data Pipeline",code:`{
  "jobs": [
    {
      "name": "extract-data",
      "schedule": "0 1 * * *",
      "next": ["transform-data"]
    },
    {
      "name": "transform-data",
      "depends-on": ["extract-data"],
      "next": ["load-data"]
    },
    {
      "name": "load-data",
      "depends-on": ["transform-data"]
    }
  ]
}`,usage:"Run data pipeline jobs in sequence"}]},{feature:"Dynamic Scheduling",description:"Adjust schedules based on conditions",examples:[{scenario:"Business Hours Adaptation",code:`{
  "dynamic-schedule": {
    "base": "0 9 * * *",
    "adjustments": [
      {
        "condition": "holiday",
        "action": "skip"
      },
      {
        "condition": "weekend",
        "schedule": "0 10 * * *"
      }
    ]
  }
}`,usage:"Adjust schedules for holidays and weekends"}]},{feature:"Error Handling",description:"Manage job failures gracefully",strategies:[{strategy:"Retry Logic",code:`{
  "retry": {
    "attempts": 3,
    "delay": "exponential",
    "backoff": "2x"
  }
}`,usage:"Retry failed jobs with exponential backoff"},{strategy:"Fallback Actions",code:`{
  "on-failure": {
    "action": "fallback-notify",
    "parameters": {
      "method": "email",
      "priority": "high"
    }
  }
}`,usage:"Execute fallback action on job failure"}]}],d=[{category:"Job Management",commands:[{command:"openclaw cron list",description:"List all scheduled jobs",output:"Job names, schedules, and status"},{command:'openclaw cron add "schedule" "action"',description:"Add new cron job",example:'openclaw cron add "0 9 * * *" "daily-report"'},{command:"openclaw cron remove job-name",description:"Remove specific job",example:"openclaw cron remove daily-report"},{command:"openclaw cron enable job-name",description:"Enable disabled job",example:"openclaw cron enable backup-job"},{command:"openclaw cron disable job-name",description:"Temporarily disable job",example:"openclaw cron disable maintenance-job"}]},{category:"Job Monitoring",commands:[{command:"openclaw cron status",description:"Show cron service status",output:"Service state and job count"},{command:"openclaw cron logs job-name",description:"View job execution logs",example:"openclaw cron logs daily-report --tail 10"},{command:"openclaw cron history",description:"Show job execution history",output:"Recent executions with timestamps"},{command:"openclaw cron next",description:"Show next scheduled executions",output:"Upcoming jobs and run times"}]},{category:"Testing & Debugging",commands:[{command:"openclaw cron run job-name",description:"Manually execute job",example:"openclaw cron run test-job --dry-run"},{command:"openclaw cron validate schedule",description:"Validate cron expression",example:'openclaw cron validate "0 9 * * *"'},{command:"openclaw cron test job-name",description:"Test job without execution",output:"Validation results and next run time"}]}],m=[{problem:"Jobs Not Running",symptoms:["No execution logs","Jobs show as scheduled but don't run","Cron service appears active"],solutions:["Check cron service status: openclaw cron status","Verify job syntax: openclaw cron validate","Review system time and timezone","Check for permission issues","Examine cron daemon logs"]},{problem:"Jobs Failing Silently",symptoms:["Jobs appear to run but produce no output","No error messages in logs","Expected actions don't occur"],solutions:["Add verbose logging to job actions","Check agent availability and status","Verify required resources are available","Test job manually: openclaw cron run job-name","Review job configuration for errors"]},{problem:"Performance Issues",symptoms:["Jobs running slower than expected","System resource exhaustion","Jobs overlapping or conflicting"],solutions:["Stagger job schedules to avoid conflicts","Optimize job resource usage","Implement job queuing for heavy tasks","Monitor system resources during execution","Consider splitting complex jobs"]}];function x(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("section",{className:"hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain",children:a.jsx("div",{className:"max-w-[1140px] mx-auto px-6 relative z-10 py-20",children:(0,a.jsxs)("div",{className:"max-w-[720px]",children:[(0,a.jsxs)("h1",{className:"font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight",children:["Automate Everything with",a.jsx("br",{}),a.jsx("span",{className:"text-orange",children:"OpenClaw Cron Jobs"})]}),a.jsx("p",{className:"text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed",children:"Master OpenClaw automation with scheduled tasks, workflows, and cron jobs. Set up powerful automation that runs 24/7."}),a.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:a.jsx("a",{href:"#setup",className:"inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange",children:"Start Automating"})})]})})}),a.jsx("section",{className:"bg-white py-28",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Cron Job Fundamentals"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Understanding the building blocks of OpenClaw automation"})]}),a.jsx("div",{className:"space-y-12",children:i.map((e,s)=>(0,a.jsxs)("div",{className:"bg-surface rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-4",children:e.component}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),e.format&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-2",children:"Format:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm",children:e.format})]}),e.examples&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Examples:"}),a.jsx("div",{className:"space-y-2",children:e.examples.map((e,s)=>a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[a.jsx("code",{className:"bg-slate-100 text-dark px-3 py-1 rounded font-mono text-sm",children:e.expression}),(0,a.jsxs)("span",{className:"text-muted",children:["→ ",e.meaning]})]})},s))})]}),e.types&&a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:e.types.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[a.jsx("h5",{className:"font-semibold text-dark mb-2",children:e.type}),a.jsx("p",{className:"text-muted text-sm mb-3",children:e.description}),a.jsx("ul",{className:"space-y-1",children:e.examples.map((e,s)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-orange",children:"•"}),e]},s))})]},s))}),e.contexts&&a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:e.contexts.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[a.jsx("h5",{className:"font-semibold text-dark mb-2",children:e.context}),a.jsx("p",{className:"text-muted text-sm mb-2",children:e.description}),a.jsx("div",{className:"text-orange text-sm font-medium",children:e.scope})]},s))})]},s))})]})}),a.jsx("section",{id:"setup",className:"bg-surface py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Quick Setup Guide"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Get your first cron job running in minutes"})]}),a.jsx("div",{className:"space-y-12",children:r.map((e,s)=>a.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:(0,a.jsxs)("div",{className:"flex items-start gap-6",children:[a.jsx("div",{className:"bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",children:e.step}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between mb-4",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark",children:e.title}),a.jsx("span",{className:"text-orange text-sm font-medium",children:e.duration})]}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),e.commands&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Commands:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.commands.join("\n")})})]}),e.examples&&(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:"Examples:"}),a.jsx("div",{className:"space-y-4",children:e.examples.map((e,s)=>(0,a.jsxs)("div",{className:"border-l-4 border-blue-400 bg-blue-50 p-4",children:[a.jsx("h5",{className:"font-medium text-dark mb-1",children:e.name}),a.jsx("p",{className:"text-muted text-sm mb-2",children:e.description}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-2 rounded font-mono text-sm",children:e.command})]},s))})]}),e.config&&(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("h4",{className:"font-semibold text-dark mb-3",children:["Configuration (",e.config.filename,"):"]}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.config.content})})]}),e.verification&&(0,a.jsxs)("div",{className:"bg-green-50 border-l-4 border-green-400 p-4",children:[a.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"Verification:"}),a.jsx("ul",{className:"space-y-1",children:e.verification.map((e,s)=>(0,a.jsxs)("li",{className:"text-green-700 text-sm",children:["✓ ",e]},s))})]})]})]})},s))})]})}),a.jsx("section",{className:"bg-light py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Practical Automation Examples"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Real-world cron job examples you can implement today"})]}),a.jsx("div",{className:"space-y-12",children:l.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-3",children:e.category}),a.jsx("p",{className:"text-muted mb-8",children:e.description}),a.jsx("div",{className:"space-y-8",children:e.jobs.map((e,s)=>(0,a.jsxs)("div",{className:"bg-surface rounded-lg p-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h4",{className:"font-heading font-bold text-lg text-dark",children:e.name}),a.jsx("span",{className:"text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-mono",children:e.schedule})]}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h5",{className:"font-semibold text-dark mb-3",children:"Workflow Steps:"}),a.jsx("ol",{className:"space-y-2",children:e.workflow.map((e,s)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[(0,a.jsxs)("span",{className:"text-orange font-mono text-xs mt-0.5",children:[s+1,"."]}),e]},s))})]}),(0,a.jsxs)("div",{className:"bg-surface rounded-lg p-4",children:[a.jsx("h5",{className:"font-semibold text-dark mb-2",children:"Configuration:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.code})})]})]},s))})]},s))})]})}),a.jsx("section",{className:"bg-white py-28",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Advanced Features"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Powerful features for sophisticated automation workflows"})]}),a.jsx("div",{className:"space-y-8",children:c.map((e,s)=>(0,a.jsxs)("div",{className:"bg-surface rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-3",children:e.feature}),a.jsx("p",{className:"text-muted mb-6",children:e.description}),e.examples&&a.jsx("div",{className:"space-y-6",children:e.examples.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-lg p-6 border border-gray-200",children:[a.jsx("h4",{className:"font-semibold text-dark mb-4",children:"condition"in e?e.condition:e.scenario}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[a.jsx("h5",{className:"font-medium text-dark mb-2",children:"Configuration:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.code})})]}),(0,a.jsxs)("div",{children:[a.jsx("h5",{className:"font-medium text-dark mb-2",children:"Use Case:"}),a.jsx("p",{className:"text-muted text-sm",children:e.usage})]})]})]},s))}),e.strategies&&a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:e.strategies.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-lg p-6 border border-gray-200",children:[a.jsx("h4",{className:"font-semibold text-dark mb-3",children:e.strategy}),a.jsx("div",{className:"mb-4",children:a.jsx("div",{className:"bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:e.code})})}),a.jsx("p",{className:"text-muted text-sm",children:e.usage})]},s))})]},s))})]})}),a.jsx("section",{className:"bg-surface py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Management Commands"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Essential commands for managing your cron jobs"})]}),a.jsx("div",{className:"space-y-8",children:d.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-dark mb-6",children:e.category}),a.jsx("div",{className:"space-y-4",children:e.commands.map((e,s)=>(0,a.jsxs)("div",{className:"border-l-4 border-orange bg-orange-50 p-4",children:[(0,a.jsxs)("div",{className:"mb-2",children:[a.jsx("h4",{className:"font-mono text-dark font-semibold",children:e.command}),a.jsx("p",{className:"text-muted text-sm mt-1",children:e.description})]}),e.example&&(0,a.jsxs)("div",{className:"mb-2",children:[a.jsx("h5",{className:"font-semibold text-dark mb-1 text-sm",children:"Example:"}),a.jsx("div",{className:"bg-slate-900 text-green-400 p-2 rounded font-mono text-sm",children:e.example})]}),e.output&&(0,a.jsxs)("div",{children:[a.jsx("h5",{className:"font-semibold text-dark mb-1 text-sm",children:"Output:"}),a.jsx("p",{className:"text-muted text-sm",children:e.output})]})]},s))})]},s))})]})}),a.jsx("section",{className:"bg-light py-24",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[(0,a.jsxs)("div",{className:"text-center mb-14",children:[a.jsx("h2",{className:"font-heading text-3xl md:text-4xl font-bold text-dark mb-4",children:"Troubleshooting"}),a.jsx("p",{className:"text-muted max-w-[600px] mx-auto",children:"Common issues and how to resolve them"})]}),a.jsx("div",{className:"space-y-6",children:m.map((e,s)=>(0,a.jsxs)("div",{className:"bg-white rounded-2xl p-8 shadow-card",children:[a.jsx("h3",{className:"font-heading font-bold text-lg text-dark mb-3",children:e.problem}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-red-600 mb-2",children:"Symptoms:"}),a.jsx("ul",{className:"space-y-1",children:e.symptoms.map((e,s)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-red-500",children:"•"}),e]},s))})]}),(0,a.jsxs)("div",{children:[a.jsx("h4",{className:"font-semibold text-green-600 mb-2",children:"Solutions:"}),a.jsx("ul",{className:"space-y-1",children:e.solutions.map((e,s)=>(0,a.jsxs)("li",{className:"text-muted text-sm flex gap-2",children:[a.jsx("span",{className:"text-green-500",children:"✓"}),e]},s))})]})]})]},s))})]})}),a.jsx("section",{className:"py-16 bg-surface",children:(0,a.jsxs)("div",{className:"max-w-[1140px] mx-auto px-6",children:[a.jsx("h2",{className:"font-heading text-2xl font-bold text-navy mb-8 text-center",children:"Related Guides"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto",children:[(0,a.jsxs)("a",{href:"/guides/openclaw-skills-guide",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Skills: Complete Guide"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/openclaw-memory-management",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Memory Management Guide"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/what-is-openclaw-2026",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"What is OpenClaw? Complete Guide 2026"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]}),(0,a.jsxs)("a",{href:"/guides/openclaw-setup-mac",className:"group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light",children:[a.jsx("h3",{className:"font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors",children:"OpenClaw Setup Guide for Mac 2026"}),a.jsx("span",{className:"text-orange text-sm font-semibold mt-2 inline-block",children:"Read Guide →"})]})]})]})}),a.jsx("section",{id:"contact",className:"bg-navy text-white py-24 relative overflow-hidden grain",children:a.jsx("div",{className:"max-w-[1140px] mx-auto px-6 relative z-10",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"font-heading text-3xl md:text-4xl font-bold mb-6",children:["Need Help with",a.jsx("br",{}),a.jsx("span",{className:"text-orange",children:"Complex Automation?"})]}),a.jsx("p",{className:"text-white/60 text-lg leading-relaxed mb-8",children:"Get expert help designing and implementing sophisticated automation workflows for your business."}),(0,a.jsxs)("ul",{className:"space-y-3 mb-8",children:[(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Custom automation design"]}),(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Performance optimization"]}),(0,a.jsxs)("li",{className:"flex gap-3 text-white/80",children:[a.jsx("span",{className:"text-orange",children:"✓"}),"Error handling strategies"]})]})]}),(0,a.jsxs)("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8",children:[a.jsx("h3",{className:"font-heading font-bold text-xl text-white mb-1",children:"Automation Consulting"}),a.jsx("p",{className:"text-white/40 text-sm mb-6",children:"Design powerful automated workflows"}),a.jsx(n.Z,{})]})]})})})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[8948,7326,6621,4120],()=>t(9287));module.exports=a})();