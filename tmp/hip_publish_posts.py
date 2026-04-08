import base64
import json
import urllib.parse
import urllib.request
from urllib.error import HTTPError

BASE = "https://hippsychology.com/wp-json/wp/v2"
USER = "H1pAdm1n"
PASSWORD = "r0TE z3nW 0tqO uE89 EMZ6 7Lts"
AUTH = base64.b64encode(f"{USER}:{PASSWORD}".encode()).decode()
HEADERS = {
    "Authorization": f"Basic {AUTH}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}


def api(method, path, data=None, params=None):
    url = f"{BASE}{path}"
    if params:
        url += "?" + urllib.parse.urlencode(params, doseq=True)
    body = None if data is None else json.dumps(data).encode("utf-8")
    req = urllib.request.Request(url, data=body, method=method, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except HTTPError as e:
        raw = e.read().decode("utf-8", errors="replace")
        try:
            detail = json.loads(raw)
        except Exception:
            detail = {"status": e.code, "raw": raw}
        raise RuntimeError(f"API {method} {path} failed: {detail}")


def ensure_category():
    try:
        created = api("POST", "/categories", {"name": "School Wellbeing", "slug": "school-wellbeing"})
        return created["id"]
    except RuntimeError as e:
        msg = str(e)
        if "term_exists" in msg:
            cats = api("GET", "/categories", params={"slug": "school-wellbeing"})
            if cats:
                return cats[0]["id"]
        raise


posts = [
    {
        "title": "Wellbeing Workshops for Schools: What Works in 2026",
        "slug": "wellbeing-workshops-for-schools",
        "content": """
<p>Schools are under real pressure to support pupil wellbeing well, not just visibly. Senior leaders are balancing attendance, behaviour, safeguarding, academic outcomes and stretched staff capacity, all while young people face a more complex social and emotional landscape than ever before. That is why <strong>wellbeing workshops for schools</strong> and high-quality <strong>school wellbeing programmes</strong> matter so much in 2026. When they are planned properly and delivered face to face by skilled facilitators, they can do far more than raise awareness for an hour. They can give pupils language, strategies and confidence they carry back into the classroom.</p>
<p>At HIP Psychology, our team delivers face-to-face workshops for schools across Northern Ireland and Ireland. We work with pupils in KS3, KS4 and KS5 on topics including anxiety, bullying, transitions, vaping and resilience. Our approach is practical, warm and evidence-informed, designed to help schools move from one-off awareness events to meaningful wellbeing education.</p>
<h2>Why workshops are more effective than assemblies</h2>
<p>Assemblies can play a useful role in setting a message across a whole year group or school. They are efficient, familiar and easy to timetable. The problem is that they are usually not interactive enough to change understanding or behaviour on their own. Pupils sit, listen and leave. For many, the message lands only briefly. For some, it does not land at all.</p>
<p>Workshops create a different learning environment. A good workshop gives pupils a chance to think, respond, discuss and practise. That matters because wellbeing is not simply information to be heard. It is a set of skills, attitudes and habits that young people need to recognise in themselves and others. When pupils are invited into the conversation, they are much more likely to engage honestly and remember what they have learned.</p>
<p>In practical terms, workshops allow schools to:</p>
<ul>
  <li><strong>Go deeper</strong> than headline awareness and explore what pupils are really facing.</li>
  <li><strong>Normalise discussion</strong> through guided interaction rather than passive listening.</li>
  <li><strong>Build confidence</strong> by giving pupils words and strategies they can use straight away.</li>
  <li><strong>Respond to stage and age</strong> with content tailored to KS3, KS4 or KS5.</li>
  <li><strong>Support safeguarding</strong> by creating structured spaces where concerns may surface appropriately.</li>
</ul>
<p>For example, if a school is seeing heightened anxiety in first-year pupils, a workshop can explore common worries, practical coping tools and routes for support in a way that feels relevant. If bullying is a concern, targeted sessions can unpack bystander behaviour, online dynamics and respectful peer culture more effectively than a broad assembly announcement. Our <a href="{{ANTI_BULLY_URL}}">anti-bullying workshops for schools</a> and <a href="{{TRANSITION_URL}}">Year 8 transition support guidance</a> are often part of that wider picture.</p>
<h2>What evidence-informed wellbeing provision looks like</h2>
<p>Schools rightly want more than attractive slides and good intentions. In 2026, evidence-informed provision means choosing workshops that are grounded in what we know helps young people learn, reflect and apply support strategies in real settings. It does not mean overloading pupils with clinical language. It means using clear, accessible content that is developmentally appropriate and psychologically sound.</p>
<p>There are a few signs of strong provision.</p>
<h3>1. Clear learning outcomes</h3>
<p>Pupils should leave knowing more than they did when they arrived. That may include understanding what anxiety feels like in the body, knowing how bullying dynamics work, or identifying protective factors that build resilience. Good providers are able to explain exactly what pupils will take away from a session.</p>
<h3>2. Active participation</h3>
<p>Young people learn best when they are involved. Discussion prompts, reflection exercises, scenario-based activities and guided participation all help information stick. The aim is not to put pupils on the spot, but to help them think safely and meaningfully.</p>
<h3>3. Age-appropriate delivery</h3>
<p>A Year 8 group needs something very different from a Sixth Form group. Effective <strong>school wellbeing programmes</strong> recognise differences in vocabulary, confidence, social pressure and emotional literacy across year groups.</p>
<h3>4. Practical strategies</h3>
<p>Pupils need more than awareness. They need actions. A strong workshop gives them specific tools they can use in school and at home, for example grounding techniques, help-seeking language, peer support principles or ways to respond when they see harmful behaviour.</p>
<h3>5. Safeguarding awareness</h3>
<p>Wellbeing sessions should sit comfortably inside a school’s safeguarding culture. Providers should understand boundaries, escalation and the importance of working in a way that supports staff rather than bypasses them.</p>
<h2>Face-to-face versus digital delivery</h2>
<p>Digital resources can absolutely support wellbeing education. They can reinforce messages, extend learning and give schools useful follow-up material. But for many topics, especially where emotion, trust and group discussion matter, face-to-face delivery still offers clear advantages.</p>
<p>In-person workshops allow facilitators to read the room. They can notice when pupils are unsure, disengaged or affected by a topic and adapt accordingly. They can create rapport, use humour carefully, manage discussion and respond to the energy of the group in real time. That human connection is hard to replicate on a screen.</p>
<p>Face-to-face sessions also tend to improve participation. Pupils are less likely to drift, switch off or hide behind a camera. In a well-run room, they can feel both contained and involved. This matters when addressing sensitive themes such as anxiety, peer relationships or transition worries. Our team sees this regularly when delivering sessions on <a href="{{ANXIETY_URL}}">student anxiety in schools</a> and resilience.</p>
<p>That does not mean digital has no place. A blended approach can work well, with staff briefings, takeaway resources or follow-up materials sitting alongside live workshops. But if a school wants a session that genuinely shifts understanding and starts conversation, face-to-face remains the strongest option.</p>
<h2>What schools should look for in a wellbeing provider</h2>
<p>Not all wellbeing workshops are equal. If your school is reviewing providers, it is worth asking a few direct questions before booking.</p>
<ul>
  <li><strong>Is the content tailored to the age group?</strong> Generic content rarely lands well.</li>
  <li><strong>Is the delivery interactive?</strong> Pupils need engagement, not a lecture with a new label.</li>
  <li><strong>Is the approach evidence-informed?</strong> Look for content grounded in psychological understanding and real school experience.</li>
  <li><strong>Does the provider understand schools?</strong> Timetables, safeguarding, pupil dynamics and staff pressures all matter.</li>
  <li><strong>Can the workshop fit a broader plan?</strong> The strongest impact comes when sessions support pastoral priorities rather than sit outside them.</li>
  <li><strong>Is there clarity on outcomes?</strong> Schools should know what the session is for and how success will be judged.</li>
</ul>
<p>It is also worth considering whether a provider can support more than one theme across the school year. For example, a school might combine autumn anti-bullying provision, spring anxiety support and summer transition work as part of a coherent wellbeing offer rather than a series of disconnected events.</p>
<h2>HIP Psychology’s approach</h2>
<p>At HIP Psychology, Cormac and our team work with schools to deliver sessions that are engaging, practical and grounded in the realities young people face. We believe wellbeing education should feel relevant in the room, not just sensible on paper. That means using language pupils understand, building interaction into each workshop and giving schools content that complements pastoral care rather than duplicating it.</p>
<p>We support schools with programmes on anxiety, bullying, transitions, vaping and resilience, with delivery shaped around the needs of the year group and the school context. Some schools bring us in for a targeted intervention. Others use our workshops as part of a wider pastoral calendar. Either way, the goal is the same: to help pupils make sense of what they are experiencing and to equip them with practical next steps.</p>
<h2>Planning wellbeing provision for the school year</h2>
<p>Schools usually get the most value from workshops when they plan them proactively rather than waiting for a pressure point. Anti-bullying sessions often work well ahead of or during November’s Anti-Bullying Week. Transition support is especially useful in June for P7 pupils and in September for new Year 8 groups. Anxiety and resilience sessions can be timed around exam stress, attendance concerns or wider pastoral themes. If transition is a current focus, our guide on <a href="{{TRANSITION_URL}}">supporting Year 8 transition</a> outlines practical steps schools can take.</p>
<p>A planned approach helps staff communicate purpose, prepare follow-up work and integrate workshop themes into tutor time or pastoral review. That is when wellbeing provision starts to move from a standalone event to something more embedded and useful.</p>
<h2>Final thoughts</h2>
<p>The best <strong>wellbeing workshops for schools</strong> do not try to fix everything in one sitting. They create understanding, start better conversations and give pupils practical tools they can use. In 2026, that combination matters. Schools need provision that is thoughtful, age-appropriate and genuinely engaging, especially when pupil wellbeing is so closely tied to attendance, learning and belonging.</p>
<p>If your school is reviewing <strong>school wellbeing programmes</strong>, it is worth choosing workshops that go beyond awareness and support real learning. <a href="https://hippsychology.com/contact">Get in touch to book a workshop for your school</a>.</p>
""".strip(),
    },
    {
        "title": "Anti-Bullying Workshops: A Practical Guide for Schools",
        "slug": "anti-bullying-workshops-schools",
        "content": """
<p>Bullying remains one of the issues schools are most determined to address, and for good reason. It affects attendance, confidence, relationships, academic engagement and, in some cases, a young person’s sense of safety in school altogether. Yet many schools still find themselves relying on awareness assemblies alone, hoping a strong message at the front of the hall will shift culture. In reality, meaningful prevention usually requires something more structured. That is where effective <strong>anti bullying workshops</strong> and a strong <strong>anti bullying programme for schools</strong> can make a real difference.</p>
<p>At HIP Psychology, we deliver face-to-face anti-bullying workshops in schools across Northern Ireland and Ireland. Our Anti-Bullying programme is designed to help pupils understand bullying behaviour, challenge harmful group dynamics and build a healthier peer culture. The goal is not only to tell pupils what bullying is, but to help them think differently about how it starts, how it spreads and how they can respond.</p>
<h2>Why one-off assemblies rarely change behaviour</h2>
<p>Assemblies can be useful for launching a theme or marking an awareness week, but they are limited. Anti-bullying messages delivered to a large group are usually broad by necessity. Pupils may hear the right language, but they rarely get the chance to process it, question it or connect it to real-life scenarios. Without that reflection, the message can stay abstract.</p>
<p>Bullying is also a social issue, not just an information gap. It often involves group norms, bystander behaviour, online spillover and repeated patterns of exclusion or intimidation. That means pupils need more than a reminder to “be kind”. They need support to understand roles, pressures and choices within peer groups.</p>
<p>A workshop setting gives schools the space to explore:</p>
<ul>
  <li>the difference between conflict, meanness and bullying</li>
  <li>how power imbalance works</li>
  <li>the role of bystanders and silent reinforcement</li>
  <li>the impact of rumours, exclusion and online behaviour</li>
  <li>how pupils can seek help safely and support others well</li>
</ul>
<p>That deeper learning matters if schools want to build a culture where harmful behaviour is recognised early and challenged consistently. If anxiety is also part of the picture for pupils affected by bullying, our article on <a href="{{ANXIETY_URL}}">student anxiety in schools</a> explores how staff can spot and respond to those signs.</p>
<h2>What effective anti-bullying workshops look like</h2>
<p>Not all anti-bullying provision is equally useful. Effective workshops are clear, age-appropriate and interactive. They should not be sensational, shaming or overly simplistic. Young people are more likely to engage when facilitators acknowledge the realities of school life and online communication without talking down to them.</p>
<h3>1. Clear definitions and real examples</h3>
<p>Pupils need help distinguishing bullying from one-off arguments or friendship fallouts. That matters because blurred definitions can lead to confusion, defensiveness or disengagement. Good workshops explain repetition, intent, impact and power imbalance in language pupils understand.</p>
<h3>2. A focus on behaviour, not labels alone</h3>
<p>It is often more productive to talk about bullying behaviours and group dynamics than to divide pupils into “bullies” and “victims”. This reduces defensiveness and opens more space for reflection. It also helps pupils recognise the role of laughter, silence, forwarding messages or excluding others from social groups.</p>
<h3>3. Space for bystander learning</h3>
<p>Many pupils are not directly involved in bullying, but they influence whether it grows or loses momentum. Workshops should equip pupils to think about what safe intervention looks like, when to report and how to avoid reinforcing harmful behaviour through attention or online sharing.</p>
<h3>4. Practical strategies for pupils</h3>
<p>Young people need specific guidance. That includes how to document online bullying, how to get help, how to support a friend and how to respond if they realise their own behaviour has crossed a line.</p>
<h3>5. Alignment with the school’s pastoral systems</h3>
<p>The strongest <strong>anti bullying programme for schools</strong> sits within a wider culture of pastoral support, clear reporting pathways and consistent follow-through. Workshops are powerful, but they work best when reinforced by staff messaging and school systems.</p>
<h2>Peer-led versus facilitator-led approaches</h2>
<p>Schools sometimes ask whether peer-led anti-bullying work is better than facilitator-led delivery. In truth, both can be valuable, but they serve different purposes.</p>
<p>Peer leadership can be brilliant for culture-building. Trained pupil leaders can model inclusive behaviour, support younger pupils and reinforce school values day to day. They can also help anti-bullying work feel owned by the pupil body rather than imposed from above.</p>
<p>Facilitator-led workshops bring different strengths. An experienced external facilitator can create a fresh, credible space for discussion, especially when pupils may be more open with someone outside the school’s usual structures. Facilitators can also navigate sensitive content with clarity, challenge misconceptions and guide discussion without it becoming personal or unhelpful.</p>
<p>In practice, the strongest approach is often a combination. External workshops can provide the depth, structure and specialist input. Peer systems can then help keep the message alive within the school community. This can be especially useful during key times in the year, such as transition into Year 8, when new social groups are forming. Our guide on <a href="{{TRANSITION_URL}}">supporting Year 8 transition</a> looks at how schools can set that tone early.</p>
<h2>How schools can measure impact</h2>
<p>Schools understandably want to know whether a workshop has worked. Measuring anti-bullying provision does not need to be complicated, but it should go beyond whether pupils seemed to enjoy the session.</p>
<p>Useful indicators may include:</p>
<ul>
  <li><strong>Pupil feedback</strong> on whether they better understand bullying and how to get help</li>
  <li><strong>Staff observations</strong> about language, confidence and peer interactions after delivery</li>
  <li><strong>Reporting patterns</strong>, including whether pupils are more willing to disclose concerns</li>
  <li><strong>Follow-up discussion quality</strong> in tutor time or pastoral sessions</li>
  <li><strong>Links to school priorities</strong> such as belonging, behaviour or safeguarding culture</li>
</ul>
<p>One important point is that a rise in reporting straight after a workshop is not necessarily a negative sign. Sometimes it means pupils now have better language and feel safer to speak up. Schools should interpret outcomes within the wider pastoral context rather than looking for a single neat metric.</p>
<h2>When to run anti-bullying workshops</h2>
<p>Timing matters. November’s Anti-Bullying Week is an obvious and useful anchor point, especially for whole-school messaging. Workshops delivered before or during that week can help schools move from awareness to action. That said, anti-bullying provision should not be confined to one slot in the autumn term.</p>
<p>Schools may also consider targeted delivery:</p>
<ul>
  <li>at the start of the academic year, when group norms are forming</li>
  <li>during transition periods for new Year 8 pupils</li>
  <li>after patterns of online conflict or social fallout emerge</li>
  <li>alongside wider wellbeing work on anxiety, relationships or resilience</li>
</ul>
<p>Used this way, workshops become part of prevention rather than simply a response to incidents.</p>
<h2>HIP Psychology’s Anti-Bullying programme</h2>
<p>HIP Psychology’s Anti-Bullying programme is built around the realities pupils face in modern school life, including social pressure, exclusion, online behaviours and bystander influence. Cormac and our team deliver sessions face to face, with a practical style that helps pupils reflect without disengaging.</p>
<p>We aim to give schools more than awareness. Our workshops help pupils understand bullying in context, consider their own role in group culture and leave with clearer strategies for support and response. Schools often combine this with other wellbeing themes, including our work on <a href="{{ANXIETY_URL}}">student anxiety</a> and broader <a href="{{WELLBEING_URL}}">wellbeing workshops for schools</a>, to build a more joined-up pastoral offer.</p>
<h2>Final thoughts</h2>
<p>Effective <strong>anti bullying workshops</strong> do not promise a quick fix. What they can do is create better understanding, stronger language and more thoughtful peer behaviour, especially when they are part of a wider school commitment to wellbeing and safety. For schools reviewing an <strong>anti bullying programme for schools</strong>, the most important question is not whether pupils heard the message, but whether the session helped them think, act and support one another differently.</p>
<p>If your school is planning ahead for Anti-Bullying Week or reviewing your wider pastoral provision, <a href="https://hippsychology.com/contact">get in touch to book a workshop for your school</a>.</p>
""".strip(),
    },
    {
        "title": "Supporting Year 8 Transition: How Schools Can Help Students Settle In",
        "slug": "year-8-transition-support",
        "content": """
<p>The move from primary school to secondary school is one of the most important transitions in a young person’s education. For many pupils, it is exciting. For others, it brings a mix of uncertainty, worry and emotional overload that can affect confidence long before the first day of term. That is why good <strong>Year 8 transition</strong> support matters so much. A thoughtful <strong>transition programme from primary to secondary</strong> can help pupils feel safer, more prepared and better able to settle into a completely new environment.</p>
<p>At HIP Psychology, we work with schools across Northern Ireland and Ireland to deliver face-to-face wellbeing workshops on transitions, anxiety, resilience and related themes. Our Transitions programme is designed to support pupils as they move from P7 to Year 8, helping them understand what they are feeling and giving them practical ways to manage change.</p>
<h2>Why transition is such a significant wellbeing moment</h2>
<p>Adults sometimes underestimate just how big this step feels. Pupils are moving from a familiar setting where they usually know the routines, the layout, the staff and the social landscape. In secondary school, almost everything changes at once. There may be a new building, new expectations, multiple teachers, different friendship groups, unfamiliar travel arrangements and a stronger sense of independence.</p>
<p>Even pupils who seem outwardly confident may feel unsettled underneath. Transition can bring worries about getting lost, making friends, managing homework, coping with older pupils, moving between classes or fitting in socially. Some pupils are also carrying the emotional weight of leaving a school community that felt safe and predictable.</p>
<p>That makes transition a key point for early wellbeing support. If schools take it seriously, they can reduce avoidable anxiety, improve belonging and help pupils begin Year 8 with a stronger sense of security. If anxiety is already visible in a cohort, it can help to pair transition support with wider learning on <a href="{{ANXIETY_URL}}">student anxiety in schools</a>.</p>
<h2>Common anxieties from P7 to Year 8</h2>
<p>Although each pupil is different, schools tend to hear some worries again and again. Naming these concerns clearly can help staff and parents respond with empathy rather than assuming pupils will “just settle”.</p>
<ul>
  <li><strong>Fear of the unknown</strong>, including new routines, timetables and expectations</li>
  <li><strong>Friendship worries</strong>, especially where friendship groups are changing or splitting</li>
  <li><strong>Practical worries</strong>, such as getting the bus, finding classrooms or organising materials</li>
  <li><strong>Academic pressure</strong>, including concern about workload, ability or keeping up</li>
  <li><strong>Social confidence worries</strong>, including fitting in, being judged or standing out</li>
  <li><strong>Concerns about bullying</strong> or feeling vulnerable among older pupils</li>
</ul>
<p>For some pupils, these worries fade quickly once routines become familiar. For others, they can build into ongoing stress, reduced attendance, tummy aches, withdrawal or emotional outbursts. That is why early support matters. Our guide to <a href="{{ANTI_BULLY_URL}}">anti-bullying workshops for schools</a> also covers how schools can shape peer culture from the outset.</p>
<h2>What schools can do before pupils arrive</h2>
<p>A strong <strong>transition programme from primary to secondary</strong> begins before September. June is often a particularly useful window for supporting P7 pupils because it allows schools to prepare children while the move still feels manageable rather than immediate.</p>
<h3>Provide clear, concrete information</h3>
<p>Transition support works best when it reduces uncertainty. Pupils benefit from practical information about the school day, movement around the building, uniform, lunch arrangements, support staff and what to expect in the first week. The more specific and accessible the communication, the more it can settle anxious thinking.</p>
<h3>Create opportunities for familiarity</h3>
<p>Visits, videos, maps, welcome packs and introductory sessions can all help pupils visualise the new environment. Meeting key staff in advance also makes a difference, especially for pupils who are more anxious about speaking up once term begins.</p>
<h3>Use workshops to normalise feelings</h3>
<p>Workshops give pupils a chance to hear that mixed feelings about change are normal. They also provide a structured way to explore coping strategies, ask questions and think ahead about practical problem-solving. In our Transitions programme, we focus on helping pupils understand transition as something they can prepare for, not simply endure.</p>
<h2>What schools can do in September</h2>
<p>September is not the end of transition. In many ways, it is the real beginning. Once pupils are in the building, schools have an opportunity to reinforce safety, belonging and routine.</p>
<h3>Build in a gentle landing period</h3>
<p>Early weeks matter. Staff can support pupils by making routines explicit, repeating key information and avoiding assumptions that everyone will settle at the same pace. Small adjustments, like clearly signposted rooms and visible pastoral staff, can reduce stress significantly.</p>
<h3>Use buddy systems well</h3>
<p>Buddy systems can be extremely effective when they are structured properly. Older pupils or trained peer supporters can help new pupils navigate practical questions, feel welcomed and learn the informal side of school life. The key is consistency. A buddy system should feel reliable rather than symbolic.</p>
<h3>Watch for quieter signs</h3>
<p>Not every unsettled pupil will tell you directly. Some may become withdrawn, over-compliant, irritable or reluctant to attend. These quieter signs are easy to miss if staff are focused only on obvious distress. A strong pastoral culture notices both.</p>
<h2>The role of workshops in Year 8 transition</h2>
<p>Face-to-face workshops are valuable because they create time and language around a topic that pupils often find difficult to explain. Transition is not just about information. It is about emotion, expectations and confidence. A workshop can help pupils recognise that nerves are common, identify coping tools and understand who they can turn to if the move feels harder than expected.</p>
<p>Workshops also give schools a proactive way to support the whole cohort rather than waiting for difficulties to appear. They can complement induction events, tutor time and pastoral follow-up. This joined-up approach is often more effective than relying on reassurance alone.</p>
<p>At HIP Psychology, our Transitions programme is designed to be practical and age-appropriate. Cormac and our team work face to face with pupils, helping them prepare for change in a way that feels supportive rather than overwhelming. Schools often combine this with broader <a href="{{WELLBEING_URL}}">wellbeing workshops for schools</a>, especially where anxiety or resilience are also key priorities.</p>
<h2>Working with parents and carers</h2>
<p>Parents and carers play a major role in how young people experience transition. Schools can help by sharing clear messages about what is normal, what support is available and how adults at home can respond constructively. For example, it can be useful to encourage routines, practical preparation and open conversation, while also avoiding repeated reassurance cycles that unintentionally heighten anxiety.</p>
<p>When home and school are giving consistent messages, pupils tend to feel more contained. That does not mean every child will settle easily, but it does create a stronger support system around them.</p>
<h2>Final thoughts</h2>
<p><strong>Year 8 transition</strong> is not a small step. It is a major emotional and educational shift, and schools that plan for it thoughtfully are far more likely to help pupils feel settled, connected and ready to learn. The best <strong>transition programmes from primary to secondary</strong> combine practical preparation with emotional support. They start early, continue into September and recognise that belonging takes time.</p>
<p>If your school is planning support from P7 to Year 8 and wants a practical, face-to-face approach, <a href="https://hippsychology.com/contact">get in touch to book a workshop for your school</a>.</p>
""".strip(),
    },
    {
        "title": "Student Anxiety in Schools: What Teachers Need to Know",
        "slug": "student-anxiety-in-schools",
        "content": """
<p>Anxiety is now one of the most common wellbeing concerns schools are trying to understand and respond to. Most teachers can name pupils who seem overwhelmed, reluctant to attend, highly self-critical or stuck in patterns of worry that affect learning and daily school life. The challenge is that <strong>student anxiety</strong> does not always look dramatic. Sometimes it appears as perfectionism, avoidance, irritability, tummy aches, silence or constant reassurance-seeking. That is why a better understanding of <strong>anxiety in schools</strong> is so important for staff.</p>
<p>At HIP Psychology, we deliver face-to-face workshops for schools across Northern Ireland and Ireland on anxiety, transitions, bullying, resilience and other wellbeing themes. Our Tackling Anxiety programme helps pupils understand what anxiety is, how it shows up and what practical strategies can help. For teachers, the goal is not to become therapists. It is to recognise the signs, respond helpfully and know when extra support is needed.</p>
<h2>What anxiety in pupils can look like</h2>
<p>When people think of anxiety, they often imagine obvious panic or visible distress. In school, it is often more subtle. Some pupils become quieter and more withdrawn. Others appear disruptive, irritable or oppositional because anxiety is coming out as frustration or avoidance. Some work excessively hard because they are frightened of getting things wrong. Others stop engaging altogether.</p>
<p>Common signs of <strong>student anxiety</strong> may include:</p>
<ul>
  <li>frequent reassurance-seeking</li>
  <li>avoidance of tasks, presentations, group work or particular lessons</li>
  <li>physical complaints such as headaches, nausea or stomach pain</li>
  <li>tearfulness, emotional overwhelm or quick escalation</li>
  <li>difficulty concentrating because worry is taking up mental space</li>
  <li>perfectionism and distress around mistakes</li>
  <li>attendance difficulties, lateness or reluctance to come into school</li>
  <li>changes in friendship patterns or social withdrawal</li>
</ul>
<p>It is important to remember that anxiety can be masked by good behaviour and high attainment. A pupil who appears to be coping academically may still be operating under intense internal pressure. Equally, anxiety can sit alongside transitions, peer difficulties or bullying, which is why joined-up wellbeing support matters. Our articles on <a href="{{TRANSITION_URL}}">Year 8 transition support</a> and <a href="{{ANTI_BULLY_URL}}">anti-bullying workshops</a> explore those links in more detail.</p>
<h2>How anxiety differs from normal worry</h2>
<p>Worry is a normal part of life, and not all worry is a problem. Pupils will naturally feel nervous before exams, performances, friendship changes or big transitions. In many cases, those feelings pass with reassurance, preparation and time.</p>
<p>Anxiety becomes more concerning when the level of distress is disproportionate, persistent or starts to interfere with everyday functioning. A pupil may struggle to settle, avoid key parts of school life or become trapped in repeated cycles of fear and reassurance. The issue is not simply that they are worried, but that the worry is beginning to limit what they can do.</p>
<p>Teachers do not need to diagnose anxiety to notice when a pattern looks significant. What matters is observing frequency, intensity and impact. Is this happening often? Is it affecting attendance, participation or relationships? Is the pupil finding it hard to recover once worried? Those are useful questions to hold in mind.</p>
<h2>What teachers can do in the classroom</h2>
<p>Teachers make a significant difference to how manageable school feels for anxious pupils. Small, consistent responses often help more than dramatic interventions.</p>
<h3>1. Reduce unnecessary uncertainty</h3>
<p>Clear routines, predictable expectations and advance notice of changes can reduce anxiety for many pupils. Knowing what is happening, and when, lowers the mental load.</p>
<h3>2. Offer calm, brief reassurance</h3>
<p>Reassurance has a place, but repeated reassurance can sometimes feed anxiety rather than relieve it. Short, calm responses paired with a practical next step are often more helpful than long attempts to remove all uncertainty.</p>
<h3>3. Break tasks into manageable steps</h3>
<p>Large or ambiguous tasks can feel overwhelming. Breaking work down, modelling the first step and making success criteria visible can help anxious pupils engage without shutting down.</p>
<h3>4. Notice patterns, not just incidents</h3>
<p>A one-off wobble may not mean much. Repeated distress around a particular lesson, transition, social context or type of task may reveal what the pupil is finding hard.</p>
<h3>5. Avoid interpreting anxiety as defiance too quickly</h3>
<p>Refusal, lateness, silence or withdrawal can sometimes be anxiety-driven. Boundaries still matter, but understanding what sits underneath a behaviour can lead to a more effective response.</p>
<h2>When to escalate concerns</h2>
<p>Teachers are often the first adults in school to notice that something is not quite right. Escalation is worth considering when anxiety appears persistent, worsening or disruptive to the pupil’s ability to function in school. That may include sustained non-attendance, frequent distress, repeated visits to medical rooms, panic symptoms, significant withdrawal or marked changes in behaviour.</p>
<p>At that point, the school’s pastoral systems become essential. Concerns may need to be shared with form tutors, year heads, pastoral leads, SENCO staff or designated safeguarding teams, depending on the context. Communication with parents or carers may also be important, especially where home is seeing similar patterns.</p>
<p>Where there are safeguarding concerns, risk issues or signs that a pupil’s mental health is significantly deteriorating, schools should follow their established safeguarding and referral procedures promptly. Anxiety support should always sit within those structures, not outside them.</p>
<h2>The role of external support and workshops</h2>
<p>External wellbeing workshops can be a very useful part of a school’s response, particularly when the aim is prevention, early intervention and shared language across a year group. Face-to-face sessions give pupils a chance to learn about anxiety in a way that is normalising, practical and age-appropriate. They can help pupils recognise what anxiety feels like, understand common triggers and learn strategies for coping and help-seeking.</p>
<p>Workshops also support staff by reinforcing key messages and opening up healthier conversations within the wider school culture. They are not a replacement for individual pastoral care or clinical support where needed, but they can strengthen a school’s overall approach.</p>
<p>HIP Psychology’s Tackling Anxiety programme is designed with this in mind. Cormac and our team work directly with pupils in schools, using interactive, evidence-informed delivery that speaks to the realities young people face. Many schools also connect this work with broader <a href="{{WELLBEING_URL}}">wellbeing workshops for schools</a>, especially where anxiety overlaps with transition, bullying or resilience.</p>
<h2>Creating a school culture that supports anxious pupils</h2>
<p>One of the most powerful things a school can do is create an environment where anxiety is understood without becoming the whole story of a pupil’s identity. That means building a culture where asking for help is safe, routines are clear, support pathways are visible and staff responses are consistent. It also means remembering that anxious pupils still need challenge, encouragement and opportunities to build confidence gradually.</p>
<p>When schools get this balance right, pupils are more likely to feel both supported and capable. That is a far stronger long-term outcome than simply helping them avoid what feels hard in the moment.</p>
<h2>Final thoughts</h2>
<p><strong>Student anxiety</strong> is now part of everyday school life, and teachers do not need specialist clinical training to make a meaningful difference. Recognising patterns, responding calmly and using the school’s pastoral systems well can go a long way. Where schools want to strengthen understanding across a year group, well-designed workshops can support early intervention and give pupils practical tools that feel relevant.</p>
<p>If your school would like support with <strong>anxiety in schools</strong> through a practical, face-to-face workshop, <a href="https://hippsychology.com/contact">get in touch to book a workshop for your school</a>.</p>
""".strip(),
    },
]


def main():
    category_id = ensure_category()

    published = []
    for post in posts:
        created = api(
            "POST",
            "/posts",
            {
                "title": post["title"],
                "content": post["content"],
                "status": "publish",
                "slug": post["slug"],
                "categories": [category_id],
            },
        )
        published.append(
            {
                "id": created["id"],
                "title": created["title"]["rendered"],
                "slug": created["slug"],
                "link": created["link"],
                "content": post["content"],
            }
        )

    links = {item["slug"]: item["link"] for item in published}
    replacements = {
        "{{WELLBEING_URL}}": links["wellbeing-workshops-for-schools"],
        "{{ANTI_BULLY_URL}}": links["anti-bullying-workshops-schools"],
        "{{TRANSITION_URL}}": links["year-8-transition-support"],
        "{{ANXIETY_URL}}": links["student-anxiety-in-schools"],
    }

    for item in published:
        content = item["content"]
        for token, url in replacements.items():
            content = content.replace(token, url)
        updated = api(
            "POST",
            f"/posts/{item['id']}",
            {
                "content": content,
                "status": "publish",
                "categories": [category_id],
            },
        )
        item["link"] = updated["link"]
        item["content"] = content

    print(json.dumps({"category_id": category_id, "posts": published}, indent=2))


if __name__ == "__main__":
    main()
