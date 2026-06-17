const fs = require('fs');
const path = require('path');

const root = __dirname;

const policies = [
  {
    file: 'terms-and-conditions.html',
    canonical: '/terms-and-conditions/',
    title: 'Terms and Conditions',
    label: 'Legal',
    subtitle: 'The rules for using AI Academy for Beginners.',
    body: `
<p class="legal-intro">Last updated: 17 June 2026 · Contact: <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a></p>

<h2 id="s1-1">1.1 Who we are</h2>
<p>These Terms and Conditions set out the rules for using the AI Academy for Beginners website, courses, memberships, live sessions, digital resources, community areas and related services.</p>
<p>AI Academy for Beginners is operated by Great Business Platforms Limited, trading as AI Academy for Beginners.</p>
<p>Website: <a href="https://aiacademyforbeginners.com">https://aiacademyforbeginners.com</a><br>
Email: <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a><br>
For partnership and enterprise enquiries, email <a href="mailto:partnerships@aiacademyforbeginners.com">partnerships@aiacademyforbeginners.com</a>.</p>
<p>In these terms, “we”, “us” and “our” means AI Academy for Beginners. “You” means the learner, customer, visitor, subscriber, client, organisation or user of our website and services.</p>

<h2 id="s1-2">1.2 What we provide</h2>
<p>AI Academy for Beginners provides practical AI education for individuals, professionals, entrepreneurs, business owners, teams and organisations. Our services may include recorded training, live group sessions, community access, prompt libraries, templates, implementation sessions, coaching, strategy sessions, corporate training, enterprise packages and related digital learning resources.</p>
<p>The academy teaches tools and workflows including ChatGPT, Claude, Gemini, AI automation, AI governance, AI marketing, voice agents, web app building, productivity systems and related AI skills. The exact content included in your plan will be shown on the sales page, checkout page or proposal at the time you purchase.</p>

<h2 id="s1-3">1.3 Educational purpose only</h2>
<p>Our content is provided for education, training and general business development purposes only. We do not provide legal advice, financial advice, investment advice, tax advice, employment advice, regulated professional advice or guaranteed business outcomes.</p>
<p>You are responsible for how you apply the training, prompts, templates, tools and workflows in your own circumstances. Where a decision may have legal, financial, employment, regulatory, tax, medical, safeguarding or other professional consequences, you should seek advice from a suitably qualified professional.</p>

<h2 id="s1-4">1.4 Eligibility and age requirements</h2>
<p>You must be at least 18 years old to purchase directly from us. If you are under 18, you may only use our services with the involvement and permission of a parent, guardian, school, college, employer or responsible organisation.</p>
<p>Where we provide training to schools, colleges, youth programmes or organisations working with young people, the contracting organisation remains responsible for safeguarding, parental consent where needed, supervision and lawful handling of learner data.</p>

<h2 id="s1-5">1.5 Account access and security</h2>
<p>When you purchase access, you may receive login details, access links or invitations to course areas, community platforms or live sessions. You must keep your access details secure and must not share them with anyone else unless we have expressly agreed this in writing.</p>
<p>We may suspend or remove access where we reasonably believe that an account is being misused, shared without permission, used fraudulently, used to harass others, used to copy our materials, or used in a way that may damage the academy, other learners or our platforms.</p>

<h2 id="s1-6">1.6 Payment, subscriptions and renewal</h2>
<p>Prices are shown on the website, sales page, checkout page, invoice or proposal. Unless stated otherwise, prices are in pounds sterling.</p>
<p>Monthly plans renew automatically until cancelled. By purchasing a subscription, you authorise our payment processor to take recurring payments at the amount and frequency shown at checkout or in your proposal.</p>
<p>You may cancel a monthly subscription at any time. Cancellation stops future billing. It does not automatically create a refund for amounts already paid unless you are within the refund period set out in our <a href="/refund-policy/">Refund and Cancellation Policy</a> or unless the law gives you a separate right to a remedy.</p>
<p>We may update prices, plans or features from time to time. Where a price change affects an existing recurring subscription, we will take reasonable steps to notify you before the change applies.</p>

<h2 id="s1-7">1.7 Instant access and digital content</h2>
<p>Many of our services include immediate access to digital training, recordings, templates, prompt libraries, community resources or live session invitations. By purchasing and accessing these resources, you understand that delivery may begin immediately.</p>
<p>Where the law requires consent for immediate digital access during a cancellation period, you should be asked at checkout to confirm that you want immediate access and understand how this may affect statutory cancellation rights. Our separate <a href="/refund-policy/">Refund and Cancellation Policy</a> explains our voluntary 30 day money back guarantee.</p>

<h2 id="s1-8">1.8 Refunds and cancellation</h2>
<p>Our refund terms are set out in our <a href="/refund-policy/">Refund and Cancellation Policy</a>. The current website offer includes a 30 day money back guarantee on paid plans. To request a refund, email <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a> within 30 days of your first payment for the relevant plan.</p>
<p>We may ask for the email address used to purchase, the plan purchased, payment date and any information needed to locate the transaction. We aim to process approved refunds promptly through the original payment method where possible.</p>

<h2 id="s1-9">1.9 Live sessions, coaching and events</h2>
<p>Live sessions, coaching calls, group question and answer sessions, workshops and events may be recorded unless we state otherwise. By attending, you consent to recording for training, quality assurance, internal review and learner access purposes. If you do not want your face, name or voice to appear in a recording, you should keep your camera off, use an appropriate display name and avoid sharing personal information during the session.</p>
<p>We may reschedule, replace or vary live sessions where reasonably necessary because of illness, platform issues, speaker availability, low attendance, operational reasons or events outside our control. Where possible, we will provide reasonable notice and an alternative session, recording or equivalent resource.</p>

<h2 id="s1-10">1.10 Community standards</h2>
<p>Where community access is included, you agree to communicate with respect, professionalism and good faith. You must not post unlawful, abusive, discriminatory, threatening, defamatory, misleading, obscene or harmful content. You must not spam members, scrape contact details, sell aggressively, misrepresent your services, upload malware or share confidential information without permission.</p>
<p>We may remove posts, restrict access or end community membership where we reasonably believe these standards have been breached.</p>

<h2 id="s1-11">1.11 AI tools and third party platforms</h2>
<p>Our training may refer to tools and platforms owned by third parties, including AI model providers, automation tools, website tools, video tools, voice tools, payment tools, email platforms, social platforms and learning platforms. These third party tools are not controlled by us.</p>
<p>You are responsible for checking and following the terms, privacy notices, copyright rules, acceptable use rules, age restrictions, pricing and compliance requirements of any third party platform you choose to use. We are not responsible for outages, price changes, account restrictions, model behaviour, tool errors or data handling decisions made by third party providers.</p>

<h2 id="s1-12">1.12 Responsible use of AI</h2>
<p>You agree to use AI tools responsibly and lawfully. You must not use our training or resources to deceive, impersonate, harass, defame, discriminate, commit fraud, infringe intellectual property rights, breach confidentiality, generate unlawful content, bypass security controls or make decisions that require human professional judgement without appropriate review.</p>
<p>You should check AI outputs for accuracy before relying on them or publishing them. AI systems may produce inaccurate, outdated, biased, incomplete or misleading outputs. Human review remains essential.</p>

<h2 id="s1-13">1.13 Intellectual property</h2>
<p>All course materials, recordings, slides, frameworks, prompt libraries, templates, written content, videos, images, tools, worksheets, community resources and training methods provided by us remain owned by us or our licensors unless clearly stated otherwise.</p>
<p>You receive a personal, limited, revocable, non transferable licence to access and use the materials for your own learning or internal business use. You must not copy, resell, redistribute, upload, publish, share, licence, train competing products on, or commercially exploit our materials without our written permission.</p>
<p>You retain ownership of your own content, business information and materials that you bring into the academy. You grant us a limited permission to use such content only as needed to provide the service, support you, operate our platforms and improve delivery, unless you separately agree to wider use such as a testimonial or case study.</p>

<h2 id="s1-14">1.14 Testimonials, case studies and results</h2>
<p>From time to time, we may share learner stories, testimonials, examples, screenshots or case studies. These are examples only. They do not promise that you will achieve the same or similar result.</p>
<p>Your outcomes depend on many factors including your skill, market, offer, effort, consistency, technology access, budget, audience, implementation and commercial judgement. We do not guarantee income, profit, savings, employment, promotion, clients, sales, investment, ranking, funding or any particular result.</p>

<h2 id="s1-15">1.15 Website content and availability</h2>
<p>We aim to keep the website and learning resources available, accurate and useful. However, we do not guarantee uninterrupted access, error free content, permanent availability of any specific module, permanent access to third party tools, or that the website will always be free of technical issues.</p>
<p>We may update, replace, improve, remove or restructure content where we believe this improves the academy or reflects changes in AI tools, law, platforms, teaching methods or learner needs.</p>

<h2 id="s1-16">1.16 Limitation of liability</h2>
<p>Nothing in these terms limits liability that cannot legally be limited, including liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation or any other liability that cannot be excluded under applicable law.</p>
<p>Subject to the above, we are not liable for indirect loss, loss of profit, loss of revenue, loss of business opportunity, loss of goodwill, loss of data, technology failure, third party platform decisions, AI output errors, or consequences arising from your use of our training without appropriate human review and professional advice.</p>
<p>Where we are legally responsible to you, our total liability will not exceed the amount you paid to us for the relevant service in the 12 months before the event giving rise to the claim, unless the law requires otherwise.</p>

<h2 id="s1-17">1.17 Data protection</h2>
<p>We handle personal data in line with our <a href="/privacy-policy/">Privacy Notice and GDPR Data Protection Policy</a>. That policy explains what personal data we collect, why we collect it, the lawful bases we rely on, who we share it with, how long we keep it and what rights you have.</p>

<h2 id="s1-18">1.18 Changes to these terms</h2>
<p>We may update these terms from time to time. The version published on the website at the time of your use or purchase will apply unless we tell you otherwise. If we make a material change affecting active subscribers, we will take reasonable steps to notify you.</p>

<h2 id="s1-19">1.19 Governing law and disputes</h2>
<p>These terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction, except where consumer law gives you the right to bring a claim in another part of the United Kingdom.</p>
<p>If you have a concern, contact us first at <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a> so we can try to resolve the matter quickly and professionally.</p>
`,
  },
  {
    file: 'privacy-policy.html',
    canonical: '/privacy-policy/',
    title: 'Privacy Notice &amp; Data Protection',
    label: 'Data Protection',
    subtitle: 'How we collect, use and protect your personal data.',
    body: `
<p class="legal-intro">Last updated: 17 June 2026 · Privacy requests: <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a></p>

<h2 id="s2-1">2.1 Purpose of this notice</h2>
<p>This Privacy Notice explains how AI Academy for Beginners collects, uses, stores, shares and protects personal data when you visit our website, contact us, join our mailing list, buy a course or membership, attend a live session, use our community, complete forms, take part in coaching, request support, or engage with us as a corporate, school or enterprise client.</p>
<p>We aim to be clear, fair and transparent about how your data is used.</p>

<h2 id="s2-2">2.2 Who controls your personal data</h2>
<p>The data controller is Great Business Platforms Limited, trading as AI Academy for Beginners.</p>
<p>Registered company number: [insert company number]<br>
Registered office: [insert registered address]<br>
Website: <a href="https://aiacademyforbeginners.com">https://aiacademyforbeginners.com</a><br>
Email for privacy requests: <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a></p>

<h2 id="s2-3">2.3 Personal data we may collect</h2>
<p>Depending on how you interact with us, we may collect the following categories of personal data:</p>
<ul>
<li>Identity data such as first name, last name, display name, organisation and role.</li>
<li>Contact data such as email address, phone number, business address and communication preferences.</li>
<li>Account data such as login information, membership status, purchase history, plan level and access permissions.</li>
<li>Payment data such as transaction records, invoices, subscription status and billing information. Full card details are normally processed by our payment processor and are not stored by us.</li>
<li>Learning data such as course progress, event attendance, submitted questions, support requests, coaching notes and engagement with resources.</li>
<li>Marketing data such as newsletter sign up, consent records, campaign engagement and unsubscribe preferences.</li>
<li>Technical data such as IP address, browser type, device information, pages visited, referring links, approximate location and cookie identifiers.</li>
<li>User generated data such as messages, comments, community posts, uploaded documents, form responses, feedback and testimonials.</li>
<li>Corporate or school client data such as authorised contact details, attendee lists, training requirements and organisational arrangements.</li>
</ul>

<h2 id="s2-4">2.4 How we collect data</h2>
<p>We may collect data directly from you when you complete forms, buy a plan, create an account, join a webinar, attend a session, send an email, post in the community, complete a survey, request support, book a call or subscribe to updates.</p>
<p>We may also receive data from payment processors, email marketing platforms, event platforms, learning platforms, analytics tools, social media platforms, referral partners, corporate clients and organisations that arrange training for their staff or learners.</p>

<h2 id="s2-5">2.5 Why we use personal data and our lawful bases</h2>
<p>We only use personal data where we have a lawful basis under UK data protection law. The lawful bases we may rely on include contract, legitimate interests, consent, legal obligation and, in limited cases, vital interests.</p>
<div class="legal-table-wrap"><table class="legal-table">
<thead><tr><th>Purpose</th><th>Examples</th><th>Lawful basis</th></tr></thead>
<tbody>
<tr><td>Provide services</td><td>Create accounts, deliver training, provide course access, community access, support and coaching.</td><td>Contract and legitimate interests</td></tr>
<tr><td>Process payments</td><td>Take payments, manage subscriptions, issue invoices, prevent fraud and handle refunds.</td><td>Contract, legal obligation and legitimate interests</td></tr>
<tr><td>Communicate with you</td><td>Send access details, service notices, support responses, reminders and account information.</td><td>Contract and legitimate interests</td></tr>
<tr><td>Send marketing</td><td>Newsletters, course updates, event invitations and relevant offers.</td><td>Consent or legitimate interests where allowed by PECR and UK GDPR</td></tr>
<tr><td>Improve the academy</td><td>Review engagement, support requests, feedback, attendance, content performance and learner needs.</td><td>Legitimate interests</td></tr>
<tr><td>Run live sessions</td><td>Host, record and share training sessions, manage questions and provide replays.</td><td>Contract, legitimate interests and consent where appropriate</td></tr>
<tr><td>Meet legal duties</td><td>Accounting, tax, compliance, dispute management and regulatory requirements.</td><td>Legal obligation and legitimate interests</td></tr>
<tr><td>Protect users and platforms</td><td>Security, misuse prevention, fraud prevention and enforcement of terms.</td><td>Legitimate interests and legal obligation</td></tr>
</tbody></table></div>

<h2 id="s2-6">2.6 Marketing emails and communications</h2>
<p>You can subscribe to receive AI tips, training updates, event invitations and relevant offers. Where consent is required, we will ask for it. Where the law allows us to contact existing customers about similar products or services, we may rely on legitimate interests and the soft opt in rules, provided you had a clear opportunity to opt out when your details were collected and in every marketing message.</p>
<p>You can unsubscribe at any time by using the unsubscribe link in our emails or contacting <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a>. We may keep a suppression record to make sure we do not email you again after you opt out.</p>

<h2 id="s2-7">2.7 Cookies and analytics</h2>
<p>Our website may use cookies and similar technologies to make the site work, remember preferences, analyse traffic, understand marketing performance and improve user experience. Essential cookies may be used without consent where they are needed to provide the service you request. Non essential analytics, advertising or tracking cookies should only be used where we have appropriate consent.</p>
<p>Please see our separate <a href="/cookie-policy/">Cookie Policy</a> for more information.</p>

<h2 id="s2-8">2.8 AI tools and personal data</h2>
<p>Because we teach AI tools and workflows, we may demonstrate how to use third party AI systems. You should not submit confidential, sensitive, special category, regulated, client, employee, child, financial, medical, legal or highly personal data into AI tools unless you have a lawful basis, appropriate authority, suitable privacy settings and a proper risk assessment.</p>
<p>Where learners upload or share material with us for coaching, support or training purposes, they are responsible for ensuring they have the right to share it. We may ask you to remove or redact unnecessary personal data before using it in a learning environment.</p>

<h2 id="s2-9">2.9 Children and young people</h2>
<p>Our public paid plans are intended for adults aged 18 and over. Where we provide services to schools, colleges, youth organisations or programmes involving young people, we expect the relevant organisation to manage safeguarding, parental notices, lawful basis, permissions and appropriate supervision.</p>
<p>We do not knowingly collect personal data from children through public sales pages without appropriate permission. If you believe a child has provided personal data to us without appropriate authority, please contact us.</p>

<h2 id="s2-10">2.10 Who we may share data with</h2>
<p>We may share personal data with trusted service providers where needed to operate the academy. These may include payment processors, learning platforms, website hosts, email marketing tools, calendar tools, webinar platforms, community platforms, CRM systems, analytics providers, cloud storage providers, accounting providers, professional advisers, contractors and technical support providers.</p>
<p>We may also share information where required by law, to protect rights and safety, to enforce our terms, to prevent fraud, to respond to lawful requests, or as part of a business sale, merger or restructuring.</p>
<p>We do not sell personal data.</p>

<h2 id="s2-11">2.11 International transfers</h2>
<p>Some service providers may process data outside the United Kingdom. Where personal data is transferred internationally, we will take reasonable steps to make sure appropriate safeguards are in place, such as adequacy regulations, standard contractual clauses, the UK international data transfer agreement, or other lawful transfer mechanisms.</p>

<h2 id="s2-12">2.12 How long we keep data</h2>
<p>We keep personal data only for as long as reasonably necessary for the purposes described in this notice. Retention periods may vary depending on the type of data, legal duties, tax requirements, dispute risk, account status and operational needs.</p>
<ul>
<li>Account and purchase records may be kept for the duration of your account and then for a reasonable period for tax, legal and dispute purposes.</li>
<li>Payment and invoice records may be kept for accounting and tax compliance.</li>
<li>Marketing records are kept until you unsubscribe or we no longer need them, although suppression records may be kept to honour opt outs.</li>
<li>Support messages and coaching notes may be kept for a reasonable period to manage service quality and disputes.</li>
<li>Website analytics data may be kept according to the settings of the analytics provider.</li>
<li>Recordings may be kept while they remain useful for learner access, quality assurance or internal training, unless a shorter period is agreed.</li>
</ul>

<h2 id="s2-13">2.13 Your data protection rights</h2>
<p>Depending on the circumstances, you may have the right to:</p>
<ul>
<li>Be informed about how your personal data is used.</li>
<li>Access a copy of your personal data.</li>
<li>Ask us to correct inaccurate or incomplete data.</li>
<li>Ask us to delete personal data in certain circumstances.</li>
<li>Ask us to restrict processing in certain circumstances.</li>
<li>Object to processing based on legitimate interests or direct marketing.</li>
<li>Withdraw consent where we rely on consent.</li>
<li>Ask for data portability where this applies.</li>
<li>Complain to the Information Commissioner’s Office.</li>
</ul>
<p>The right to object to direct marketing is absolute. You can opt out at any time.</p>
<p>To exercise your rights, email <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a>. We may need to verify your identity before responding.</p>

<h2 id="s2-14">2.14 Complaints</h2>
<p>We would appreciate the opportunity to resolve any privacy concern first. Contact us at <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a>.</p>
<p>You also have the right to complain to the Information Commissioner’s Office, the UK data protection regulator. Website: <a href="https://ico.org.uk" target="_blank" rel="noopener">https://ico.org.uk</a></p>

<h2 id="s2-15">2.15 Changes to this Privacy Notice</h2>
<p>We may update this notice from time to time. The latest version will be published on our website with the date of the last update.</p>
`,
  },
  {
    file: 'refund-policy.html',
    canonical: '/refund-policy/',
    title: 'Refund and Cancellation Policy',
    label: 'Legal',
    subtitle: 'Our 30 day money back guarantee and cancellation terms.',
    body: `
<p class="legal-intro">Last updated: 17 June 2026 · Contact: <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a></p>
<h2 id="s3-1">3.1 Our refund promise</h2>
<p>We want learners to join AI Academy for Beginners with confidence. Paid plans currently come with a 30 day money back guarantee. If the training is not right for you, email <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a> within 30 days of your first payment for the relevant plan and we will process a full refund in line with this policy.</p>
<h2 id="s3-2">3.2 What the guarantee covers</h2>
<p>The 30 day money back guarantee applies to the first payment you make for an eligible paid plan purchased directly from AI Academy for Beginners or through our official checkout.</p>
<h2 id="s3-3">3.3 How to request a refund</h2>
<p>Please include your full name, the email address used to purchase, the plan or course purchased, the date of payment, and a short note saying that you are requesting a refund under the 30 day guarantee.</p>
<h2 id="s3-4">3.4 How refunds are paid</h2>
<p>Approved refunds will normally be returned to the original payment method through our payment processor. Processing times may depend on your bank, card provider or payment platform.</p>
<h2 id="s3-5">3.5 Cancelling a monthly subscription</h2>
<p>You may cancel a monthly subscription at any time. Cancellation stops future renewal payments. Unless you are within the 30 day guarantee period or have another legal right to a remedy, cancellation does not automatically refund payments already made.</p>
<h2 id="s3-6">3.6 Renewals after the first 30 days</h2>
<p>After the first 30 days, recurring subscription payments are generally not refundable simply because you did not use the service, forgot to cancel, changed your mind or no longer need access. This does not affect your statutory rights.</p>
<h2 id="s3-7">3.7 Digital access and statutory cancellation rights</h2>
<p>Our voluntary 30 day money back guarantee is designed to give customers a simple and generous route to a refund even where immediate access has started.</p>
<h2 id="s3-8">3.8 Live coaching and bespoke services</h2>
<p>Unless otherwise agreed in writing, bespoke corporate work, private consulting, completed one to one sessions and delivered custom materials may not be refundable once delivery has started, except where required by law.</p>
<h2 id="s3-9">3.9 Abuse of the refund policy</h2>
<p>We reserve the right to refuse repeated purchases and refunds where we reasonably believe the policy is being abused. This does not affect statutory rights.</p>
<h2 id="s3-10">3.10 Contact</h2>
<p>For refund, cancellation or access questions, email <a href="mailto:hello@aiacademyforbeginners.com">hello@aiacademyforbeginners.com</a>.</p>
`,
  },
  {
    file: 'cookie-policy.html',
    canonical: '/cookie-policy/',
    title: 'Cookie Policy',
    label: 'Legal',
    subtitle: 'How we use cookies and similar technologies.',
    body: `
<p class="legal-intro">Last updated: 17 June 2026</p>
<h2 id="s4-1">4.1 What cookies are</h2>
<p>Cookies are small files placed on your device when you visit a website. Similar technologies may include pixels, tags, local storage, scripts and device identifiers.</p>
<h2 id="s4-2">4.2 How we use cookies</h2>
<p>AI Academy for Beginners may use cookies and similar technologies for essential site operation, security, checkout, account access, fraud prevention, preferences, analytics, marketing measurement, video embeds, social media embeds, forms, calendars, payment checkout and learning platforms.</p>
<h2 id="s4-3">4.3 Types of cookies</h2>
<div class="legal-table-wrap"><table class="legal-table">
<thead><tr><th>Cookie type</th><th>Purpose</th><th>Consent position</th></tr></thead>
<tbody>
<tr><td>Strictly necessary cookies</td><td>Needed for the website, security, checkout, forms, account access and requested services to work.</td><td>Usually do not require consent, but must still be explained.</td></tr>
<tr><td>Analytics cookies</td><td>Help us understand visits, pages viewed, traffic sources and site performance.</td><td>Usually require consent unless a narrow exemption applies.</td></tr>
<tr><td>Marketing cookies</td><td>Help measure adverts, retargeting, campaign performance and audience activity.</td><td>Require consent before use.</td></tr>
<tr><td>Functional cookies</td><td>Remember preferences and support enhanced features such as embedded content.</td><td>May require consent depending on function.</td></tr>
<tr><td>Third party cookies</td><td>May be set by video platforms, payment providers, social platforms, analytics tools or booking tools.</td><td>Usually require clear information and consent where not essential.</td></tr>
</tbody></table></div>
<h2 id="s4-4">4.4 Managing cookie choices</h2>
<p>When you first visit our website, you should be given a clear way to accept, reject or manage non essential cookies. You can also manage cookies through your browser settings.</p>
<h2 id="s4-5">4.5 Third party tools</h2>
<p>Our website may use third party services for payments, analytics, email marketing, video hosting, booking, forms, social media and learning delivery. These providers may set their own cookies or similar technologies.</p>
<h2 id="s4-6">4.6 Updates to this policy</h2>
<p>We may update this Cookie Policy as tools, platforms and cookie practices change. The latest version will be posted on the website.</p>
`,
  },
  {
    file: 'disclaimer.html',
    canonical: '/disclaimer/',
    title: 'AI Use, Results and Educational Disclaimer',
    label: 'Legal',
    subtitle: 'Important information about educational content and AI outputs.',
    body: `
<p class="legal-intro">Last updated: 17 June 2026</p>
<h2 id="s5-1">5.1 Educational training, not professional advice</h2>
<p>AI Academy for Beginners provides education, training, practical demonstrations, frameworks, prompts, templates and business learning resources. We do not provide legal advice, financial advice, investment advice, tax advice, medical advice, employment advice, regulated professional advice or guaranteed commercial advice.</p>
<h2 id="s5-2">5.2 AI outputs need human review</h2>
<p>AI tools can be powerful, but they can also produce inaccurate, incomplete, outdated, biased or misleading outputs. Any AI output used in your business, job, studies, communications, marketing, operations, client work or decision making should be reviewed by a competent human before use.</p>
<h2 id="s5-3">5.3 No guaranteed income or business outcome</h2>
<p>Any examples of time saved, productivity gained, revenue created, clients won, rankings improved, jobs secured, systems built or business growth achieved are examples only. They are not promises or guarantees.</p>
<h2 id="s5-4">5.4 Responsible AI and legal compliance</h2>
<p>You are responsible for using AI tools lawfully and ethically. This includes protecting personal data, respecting confidentiality, avoiding copyright infringement, checking platform terms, not misleading customers, and not impersonating people without permission.</p>
<h2 id="s5-5">5.5 Third party AI tools</h2>
<p>We may teach, mention or demonstrate third party AI tools. These platforms are not controlled by us. Their features, prices, data policies, terms, models and availability may change.</p>
<h2 id="s5-6">5.6 Employment, career and job search content</h2>
<p>Where we provide training about CVs, job applications, interviews or career development, this is educational support only. We do not guarantee job offers, interviews, promotions, salary increases or career outcomes.</p>
<h2 id="s5-7">5.7 Business and marketing content</h2>
<p>Where we provide training about marketing, sales, funnels, websites, content, automations or lead generation, this is educational support only. You remain responsible for your claims, pricing, customer promises, advertising compliance, data protection, consumer law compliance and delivery of your products or services.</p>
<h2 id="s5-8">5.8 Governance and compliance content</h2>
<p>Where we teach AI governance, data protection, copyright, responsible AI, workplace AI use or compliance principles, this is general education and should not be treated as legal advice. For legal questions, speak to a qualified solicitor or specialist adviser.</p>
`,
  },
];

const policyLinks = [
  { href: '/terms-and-conditions/', label: 'Terms & Conditions' },
  { href: '/privacy-policy/', label: 'Data Protection' },
  { href: '/refund-policy/', label: 'Refund Policy' },
  { href: '/cookie-policy/', label: 'Cookie Policy' },
  { href: '/disclaimer/', label: 'Disclaimer' },
];

function sectionToc(body, canonical) {
  const noJumpPages = ['/terms-and-conditions/', '/privacy-policy/'];
  if (noJumpPages.includes(canonical)) return { scroll: '', toc: '' };
  const re = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
  const items = [];
  let m;
  while ((m = re.exec(body))) items.push({ id: m[1], label: m[2] });
  if (!items.length) return { scroll: '', toc: '' };
  const links = items.map((i) => `<li><a href="#${i.id}">${i.label}</a></li>`).join('\n        ');
  return {
    scroll: '',
    toc: `<nav class="legal-toc" aria-label="On this page">\n      <span class="legal-toc-label">On this page</span>\n      <ul class="legal-toc-links">\n        ${links}\n      </ul>\n    </nav>`,
  };
}

function shell(p) {
  const navLinks = policyLinks
    .map((l) => `<a href="${l.href}"${l.href === p.canonical ? ' class="active"' : ''}>${l.label}</a>`)
    .join('\n      ');
  const { scroll, toc } = sectionToc(p.body, p.canonical);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="apple-touch-icon" href="/favicon.svg"/>
<link rel="stylesheet" href="/mobile.css"/>
<title>${p.title.replace(/&amp;/g, '&')} | AI Academy for Beginners</title>
<meta name="description" content="${p.subtitle}"/>
<link rel="canonical" href="${p.canonical}"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
:root{--bg:#050810;--surface:rgba(255,255,255,0.04);--border:rgba(255,255,255,0.08);--border-bright:rgba(255,255,255,0.16);--accent:#7c3aed;--accent-light:#a78bfa;--accent2:#06b6d4;--text:#f1f5f9;--text-secondary:#94a3b8;--text-muted:#64748b;--font:'Plus Jakarta Sans',sans-serif}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font);min-height:100vh;overflow-x:hidden}
body::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 60% at 20% -10%,rgba(124,58,237,.15) 0%,transparent 60%);pointer-events:none;z-index:0}
.container{max-width:860px;margin:0 auto;padding:0 24px;position:relative;z-index:1}
nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:68px;background:rgba(5,8,16,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.nav-logo{font-weight:900;font-size:1.1rem;color:var(--text);text-decoration:none}
.nav-logo span{color:var(--accent-light)}
.nav-links{list-style:none;display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--text-secondary);text-decoration:none;font-size:14px;font-weight:500;padding:7px 12px;border-radius:8px}
.nav-links a:hover,.nav-links a.active{color:var(--text);background:rgba(255,255,255,0.06)}
.nav-cta{background:linear-gradient(135deg,var(--accent),#5b21b6);color:#fff;padding:9px 20px;border-radius:50px;font-weight:700;font-size:14px;text-decoration:none}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px}
.hamburger span{display:block;width:22px;height:2px;background:var(--text);border-radius:2px}
@media(max-width:860px){.nav-links{display:none}.hamburger{display:flex}}
.mobile-menu{position:fixed;inset:0;background:rgba(5,8,16,.97);z-index:200;display:flex;flex-direction:column;padding:32px 28px;gap:6px;transform:translateX(100%);transition:transform .35s;overflow-y:auto}
.mobile-menu.open{transform:translateX(0)}
.mobile-menu a{color:var(--text-secondary);text-decoration:none;font-size:17px;font-weight:600;padding:12px 4px;border-bottom:1px solid var(--border)}
.mobile-close{background:none;border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:8px;cursor:pointer;margin-bottom:16px;align-self:flex-end}
.page-hero{padding:80px 24px 40px;text-align:center}
.section-label{display:inline-block;background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);color:var(--accent-light);font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;margin-bottom:16px}
.gradient-text{background:linear-gradient(135deg,var(--accent-light),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
h1.page-title{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-1px;line-height:1.15;margin-bottom:12px}
.page-sub{color:var(--text-secondary);font-size:1rem;max-width:560px;margin:0 auto;line-height:1.7}
.legal-nav{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:0 0 40px;padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:16px}
.legal-nav a{color:var(--text-secondary);text-decoration:none;font-size:13px;font-weight:600;padding:8px 14px;border-radius:999px;border:1px solid var(--border)}
.legal-nav a:hover,.legal-nav a.active{color:var(--accent-light);border-color:rgba(124,58,237,.4);background:rgba(124,58,237,.08)}
.legal-content{padding-bottom:80px}
.legal-content h2{font-size:1.2rem;font-weight:800;margin:36px 0 12px;color:var(--text);scroll-margin-top:88px}
.legal-content h2:first-of-type{margin-top:0}
.legal-content p,.legal-content li{color:var(--text-secondary);font-size:0.95rem;line-height:1.85;margin-bottom:14px}
.legal-content ul{margin:0 0 18px 20px}
.legal-content a{color:var(--accent-light)}
.legal-intro{color:var(--text-muted);font-size:0.9rem;margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--border)}
.legal-table-wrap{overflow-x:auto;margin:16px 0 24px}
.legal-table{width:100%;border-collapse:collapse;font-size:0.85rem}
.legal-table th,.legal-table td{border:1px solid var(--border);padding:12px;text-align:left;vertical-align:top;color:var(--text-secondary)}
.legal-table th{background:rgba(124,58,237,.12);color:var(--text);font-weight:700}
.simple-footer{border-top:1px solid var(--border);padding:32px 24px;text-align:center;position:relative;z-index:1}
.simple-footer p{color:var(--text-muted);font-size:13px;margin-bottom:12px}
.footer-nav{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;list-style:none;margin-bottom:16px}
.footer-nav a{color:var(--text-muted);text-decoration:none;font-size:13px}
.footer-nav a:hover{color:var(--accent-light)}
/* ── Legal policy pages ── */
.legal-toc{display:block;margin:0 0 32px;padding:18px 20px;background:var(--surface);border:1px solid var(--border);border-radius:16px}
.legal-toc-label{display:block;font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent-light);margin-bottom:12px}
.legal-toc-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;list-style:none;padding:0;margin:0}
.legal-toc-links a{display:block;color:var(--text-secondary);text-decoration:none;font-size:13px;font-weight:600;line-height:1.45;padding:10px 14px;border-radius:10px;border:1px solid var(--border);background:rgba(0,0,0,.15);transition:all .2s}
.legal-toc-links a:hover{color:var(--accent-light);border-color:rgba(124,58,237,.4);background:rgba(124,58,237,.08)}
@media(max-width:600px){.legal-toc-links{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" onclick="closeMobileMenu()">✕</button>
  <a href="/">Home</a>
  <a href="/plans/">Plans</a>
  <a href="/faqs/">FAQs</a>
  <a href="/contact-us/">Contact</a>
  <a href="/terms-and-conditions/">Terms & Conditions</a>
  <a href="/privacy-policy/">Data Protection</a>
</div>
<nav class="site-nav">
  <a href="/" class="nav-logo">AI Academy <span>for Beginners</span></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/plans/">Plans</a></li>
    <li><a href="/faqs/">FAQs</a></li>
    <li><a href="/contact-us/">Contact</a></li>
  </ul>
  <a href="/plans/" class="nav-cta">Enrol →</a>
  <button class="hamburger" onclick="openMobileMenu()"><span></span><span></span><span></span></button>
</nav>
<main>
  <div class="page-hero">
    <span class="section-label">${p.label}</span>
    <h1 class="page-title">${p.title}</h1>
    <p class="page-sub">${p.subtitle}</p>
  </div>
  <div class="container legal-content">
    <nav class="legal-nav" aria-label="Legal policies">
      ${navLinks}
    </nav>
    ${toc}
    <article>
      ${p.body.trim()}
    </article>
  </div>
</main>
<footer class="simple-footer">
  <ul class="footer-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/plans/">Plans</a></li>
    <li><a href="/contact-us/">Contact</a></li>
    <li><a href="/terms-and-conditions/">Terms &amp; Conditions</a></li>
    <li><a href="/privacy-policy/">Data Protection</a></li>
  </ul>
  <p>© 2026 AI Academy for Beginners. All rights reserved.</p>
</footer>
<script>
function openMobileMenu(){document.getElementById('mobileMenu').classList.add('open')}
function closeMobileMenu(){document.getElementById('mobileMenu').classList.remove('open')}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMobileMenu()});
</script>
</body>
</html>`;
}

policies.forEach((p) => {
  fs.writeFileSync(path.join(root, p.file), shell(p), 'utf8');
  console.log('Wrote', p.file);
});
