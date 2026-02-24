export type Skill = {
	name: string;
	category: string;
	proficiency: number;
	sortOrder: number;
};

export type Project = {
	id: number;
	title: string;
	summary: string;
	description: string;
	techStack: string[];
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
	isFeatured: boolean;
	sortOrder: number;
};

export type Experience = {
	company: string;
	role: string;
	description: string[];
	startDate: string;
	endDate?: string;
	isCurrent: boolean;
	sortOrder: number;
};

export type Certification = {
	name: string;
	issuer: string;
	dateEarned: string;
	expirationDate?: string;
	credentialUrl?: string;
	credentialId?: string;
	sortOrder: number;
};

export const roleBadges = [
	'Software Engineer',
	'Site Reliability Engineer',
	'AI Engineer',
	'Cybersecurity Analyst',
	'System Administrator',
	'Air Force Veteran',
];

export const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/Jnkweti' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-n-52064b212' },
];

export const hobbies = [
	'Soccer',
	'Pickleball',
	'Hiking',
	'Biking',
	'Karaoke',
	'Coding',
	'Chess',
	'Working Out',
	'Indian Food',
];

export const coreCompetencies = [
	'DevSecOps',
	'Cloud Architecture',
	'CI/CD',
	'Container Orchestration',
	'Vulnerability Management',
	'NIST / DoD Compliance',
	'Infrastructure as Code',
	'AI Integration',
	'Incident Response',
	'Security Automation',
];

export const skillCategoryOrder = [
	'DevSecOps & Cloud',
	'Security',
	'Languages',
	'Development',
	'Infrastructure',
	'AI & Automation',
];

export const skills: Skill[] = [
	{ name: 'Docker', category: 'DevSecOps & Cloud', proficiency: 3, sortOrder: 1 },
	{ name: 'Kubernetes', category: 'DevSecOps & Cloud', proficiency: 2, sortOrder: 2 },
	{ name: 'Terraform', category: 'DevSecOps & Cloud', proficiency: 2, sortOrder: 3 },
	{ name: 'AWS', category: 'DevSecOps & Cloud', proficiency: 4, sortOrder: 4 },
	{ name: 'Azure', category: 'DevSecOps & Cloud', proficiency: 3, sortOrder: 5 },
	{ name: 'CI/CD Security Integration', category: 'DevSecOps & Cloud', proficiency: 3, sortOrder: 6 },
	{ name: 'Compliance Automation', category: 'DevSecOps & Cloud', proficiency: 5, sortOrder: 7 },
	{ name: 'GitHub Actions', category: 'DevSecOps & Cloud', proficiency: 2, sortOrder: 8 },
	{ name: 'Vulnerability Management', category: 'Security', proficiency: 5, sortOrder: 1 },
	{ name: 'Tenable ACAS / Nessus', category: 'Security', proficiency: 5, sortOrder: 2 },
	{ name: 'Tanium', category: 'Security', proficiency: 4, sortOrder: 3 },
	{ name: 'Forescout (NAC)', category: 'Security', proficiency: 4, sortOrder: 4 },
	{ name: 'Splunk', category: 'Security', proficiency: 2, sortOrder: 5 },
	{ name: 'Incident Response', category: 'Security', proficiency: 3, sortOrder: 6 },
	{ name: 'Threat Hunting', category: 'Security', proficiency: 3, sortOrder: 7 },
	{ name: 'NIST / ISO 27000 / STIGs', category: 'Security', proficiency: 5, sortOrder: 8 },
	{ name: 'Wireshark', category: 'Security', proficiency: 2, sortOrder: 9 },
	{ name: 'Phishing Analysis', category: 'Security', proficiency: 3, sortOrder: 10 },
	{ name: 'Threat Intelligence', category: 'Security', proficiency: 3, sortOrder: 11 },
	{ name: 'Digital Forensics', category: 'Security', proficiency: 2, sortOrder: 12 },
	{ name: 'Python', category: 'Languages', proficiency: 4, sortOrder: 1 },
	{ name: 'PowerShell', category: 'Languages', proficiency: 5, sortOrder: 2 },
	{ name: 'Bash', category: 'Languages', proficiency: 3, sortOrder: 3 },
	{ name: 'C#', category: 'Languages', proficiency: 2, sortOrder: 4 },
	{ name: 'Java', category: 'Languages', proficiency: 3, sortOrder: 5 },
	{ name: 'SQL', category: 'Languages', proficiency: 3, sortOrder: 6 },
	{ name: 'ASP.NET Core', category: 'Development', proficiency: 2, sortOrder: 1 },
	{ name: 'Razor Pages', category: 'Development', proficiency: 2, sortOrder: 2 },
	{ name: 'Entity Framework Core', category: 'Development', proficiency: 2, sortOrder: 3 },
	{ name: 'SQLite', category: 'Development', proficiency: 2, sortOrder: 4 },
	{ name: 'Tailwind CSS', category: 'Development', proficiency: 2, sortOrder: 5 },
	{ name: 'Spring Boot', category: 'Development', proficiency: 3, sortOrder: 6 },
	{ name: 'Angular', category: 'Development', proficiency: 3, sortOrder: 7 },
	{ name: 'REST APIs', category: 'Development', proficiency: 3, sortOrder: 8 },
	{ name: 'Microservice Architecture', category: 'Development', proficiency: 2, sortOrder: 9 },
	{ name: 'PostgreSQL', category: 'Development', proficiency: 3, sortOrder: 10 },
	{ name: 'VMware vSphere', category: 'Infrastructure', proficiency: 5, sortOrder: 1 },
	{ name: 'Proxmox', category: 'Infrastructure', proficiency: 4, sortOrder: 2 },
	{ name: 'Linux Administration', category: 'Infrastructure', proficiency: 4, sortOrder: 3 },
	{ name: 'Red Hat Linux', category: 'Infrastructure', proficiency: 3, sortOrder: 4 },
	{ name: 'Git', category: 'Infrastructure', proficiency: 3, sortOrder: 5 },
	{ name: 'Ansible', category: 'Infrastructure', proficiency: 2, sortOrder: 6 },
	{ name: 'RAG Pipelines', category: 'AI & Automation', proficiency: 4, sortOrder: 1 },
	{ name: 'LangChain / LangFlow', category: 'AI & Automation', proficiency: 4, sortOrder: 2 },
	{ name: 'Ollama', category: 'AI & Automation', proficiency: 4, sortOrder: 3 },
	{ name: 'OpenAI / Anthropic APIs', category: 'AI & Automation', proficiency: 3, sortOrder: 4 },
	{ name: 'TensorFlow / Keras', category: 'AI & Automation', proficiency: 3, sortOrder: 5 },
	{ name: 'Vector Databases (Astra DB)', category: 'AI & Automation', proficiency: 3, sortOrder: 6 },
	{ name: 'Power Automate', category: 'AI & Automation', proficiency: 4, sortOrder: 7 },
];

export const projects: Project[] = [
	{
		id: 1,
		title: 'AI Compliance RAG Pipeline',
		summary:
			'Production-ready RAG pipeline on AWS EC2 powering compliance-aware enterprise automation tools.',
		description:
			"Problem: Medcurity needed to automate ingestion of regulatory manuals and policy documents for compliance tooling.\n\nBuilt: Architected and deployed a RAG pipeline on a GPU-enabled AWS EC2 instance integrating LangFlow, Ollama LLMs, OpenAI embeddings, and Astra DB vector search.\n\nImpact: Accelerated Medcurity's AI compliance roadmap by years. Authored internal standard documentation now used across the organization.",
		techStack: ['Python', 'AWS EC2', 'LangFlow', 'Ollama', 'OpenAI', 'Astra DB', 'LangChain'],
		tags: ['AI', 'Cloud', 'DevSecOps'],
		isFeatured: true,
		sortOrder: 1,
	},
	{
		id: 2,
		title: 'Vulnerability Remediation Automation',
		summary:
			'Automated elimination of 6,000+ recurring vulnerabilities across 7,500 workstations using PowerShell and Forescout.',
		description:
			'Problem: Recurring vulnerabilities across 7,500 workstations were consuming hundreds of man-hours manually.\n\nBuilt: Coded and deployed PowerShell/Python scripts integrated with the Forescout NAC platform to automatically detect and remediate vulnerabilities at scale.\n\nImpact: Eliminated 6,000+ recurring vulnerabilities. Saved 175 man-hours and $10K in contract costs. Reduced threat landscape by 61% and improved network compliance score by 40%.',
		techStack: ['PowerShell', 'Python', 'Forescout', 'Tenable ACAS', 'Tanium'],
		tags: ['DevSecOps', 'Security', 'Automation'],
		isFeatured: true,
		sortOrder: 2,
	},
	{
		id: 3,
		title: 'Proxmox Cyber Training Lab',
		summary:
			'Automated, reproducible training environments for cyber operators reducing setup from hours to minutes.',
		description:
			'Problem: Onboarding new cyber operators required manual environment setup taking hours per person.\n\nBuilt: Built a Proxmox cluster with automated provisioning scripts in Python and PowerShell to generate reproducible, isolated training environments on demand.\n\nImpact: Reduced setup time from hours to minutes. Standardized onboarding across the cyber operations team.',
		techStack: ['Proxmox', 'Python', 'PowerShell', 'Linux', 'VMware vSphere'],
		tags: ['DevSecOps', 'Automation', 'Infrastructure'],
		isFeatured: false,
		sortOrder: 3,
	},
	{
		id: 4,
		title: 'Online Vacation Package Platform',
		summary:
			'Full-stack web application for vacation listings, bookings, and payments, containerized with Docker.',
		description:
			'Problem: Needed to demonstrate full-stack engineering capability across frontend, backend, and deployment.\n\nBuilt: Java Spring Boot REST API backend, Angular frontend, PostgreSQL database, containerized with Docker.\n\nImpact: Production-ready deployment demonstrating end-to-end software engineering from API design to containerized deployment.',
		techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'REST API'],
		tags: ['Web', 'Software Engineering'],
		repoUrl: 'https://github.com/Jnkweti',
		isFeatured: false,
		sortOrder: 4,
	},
	{
		id: 5,
		title: 'Image Classification CNN Model',
		summary:
			'AlexNet-architecture CNN with 14.3M parameters built with TensorFlow for multi-class image classification.',
		description:
			'Problem: Build and train a deep learning model from scratch to understand CNN architecture.\n\nBuilt: Implemented AlexNet architecture with 14.3 million parameters using ReLU and Softmax activation functions, Adam optimization, and a locally hosted Gradio interface.\n\nTech: TensorFlow, Keras, NumPy, Pandas, OpenCV, Gradio.',
		techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV', 'Gradio'],
		tags: ['AI', 'Machine Learning'],
		isFeatured: false,
		sortOrder: 5,
	},
	{
		id: 6,
		title: 'Portfolio Website',
		summary:
			'Production-quality ASP.NET Core portfolio with EF Core, Docker, and CI/CD deployment pipeline.',
		description:
			'Built: Razor Pages, EF Core with SQLite, Tailwind CSS, Serilog logging, containerized with Docker, deployed via GitHub Actions.',
		techStack: ['ASP.NET Core', 'EF Core', 'SQLite', 'Docker', 'Tailwind CSS', 'GitHub Actions'],
		tags: ['Web', 'DevSecOps'],
		repoUrl: 'https://github.com/Jnkweti/portfoliov2',
		isFeatured: true,
		sortOrder: 6,
	},
];

export const experiences: Experience[] = [
	{
		company: 'Booz Allen Hamilton',
		role: 'Systems Engineer',
		description: [
			'Support the Aegis Weapon Systems program, one of the most deployed naval combat systems.',
			'Contribute to integration and testing of advanced multi-function sensor technologies.',
			'Collaborate across business areas to develop and execute mission-critical test solutions.',
			'Support software development and modeling with C++, Python, MATLAB, Rhapsody, and DOORS.',
			'Participate in requirements development, defect correction, and model-based engineering initiatives.',
		],
		startDate: '2025-12-01',
		isCurrent: true,
		sortOrder: 1,
	},
	{
		company: 'ElevaIT Solutions',
		role: 'Platform Engineer',
		description: [
			'Implemented an IT ticketing system using Microsoft Teams, Power Automate, and M365 apps across 5+ departments.',
			'Deployed an IT helpdesk RAG agent on Azure VM using n8n and Ollama, reducing ticket volume and manual effort.',
			'Designed a resume parsing workflow for recruiting that saved 4+ hours daily.',
			'Managed Azure AD (Entra ID) users, groups, and RBAC for least-privilege access control.',
			'Configured Azure Monitor and Log Analytics for VM visibility and operational alerting.',
			'Administered Azure resource groups and policy controls for tagging and spend governance.',
		],
		startDate: '2025-08-01',
		endDate: '2025-11-30',
		isCurrent: false,
		sortOrder: 2,
	},
	{
		company: 'Fairchild Air Force Base',
		role: 'Cyber Defense Analyst',
		description: [
			'Trained 15 members across 5 work centers on vulnerability management, threat hunting, and incident response.',
			'Managed a $3M VMware HCI environment hosting 20+ servers supporting 4,000+ users.',
			'Built vulnerability data pipelines from Nessus and Tanium for forecasting and compliance reporting.',
			'Automated elimination of 6,000+ recurring vulnerabilities using PowerShell/Python and Forescout NAC.',
			'Led audits across 22 servers and 4,600 compliance items with 500 authored remediation actions.',
			'Increased network uptime to 99% and reduced vulnerability index to 0.33.',
			'Performed Windows/Linux server administration under NIST and ISO 27000 controls.',
		],
		startDate: '2021-12-01',
		endDate: '2025-08-01',
		isCurrent: false,
		sortOrder: 3,
	},
	{
		company: 'Medcurity',
		role: 'AI/Software Engineering Consultant',
		description: [
			'Architected and deployed a production-ready RAG pipeline on GPU-enabled AWS EC2.',
			'Integrated LangFlow, Ollama LLMs, OpenAI embeddings, and Astra DB vector search.',
			'Authored internal provisioning and environment setup documentation for AI infrastructure.',
		],
		startDate: '2025-02-01',
		endDate: '2025-05-31',
		isCurrent: false,
		sortOrder: 4,
	},
	{
		company: 'Christ Empire IT Team',
		role: 'Software Engineer',
		description: [
			'Collaborated with a three-person team to design and build a dynamic event calendar.',
			'Used GitHub workflows to manage contributions and maintain clean project history.',
		],
		startDate: '2021-04-01',
		endDate: '2021-07-31',
		isCurrent: false,
		sortOrder: 5,
	},
];

export const certifications: Certification[] = [
	{
		name: 'AWS Certified Solutions Architect - Associate',
		issuer: 'Amazon Web Services',
		dateEarned: '2024-01-01',
		credentialUrl:
			'https://www.credly.com/badges/8b235f8e-02c7-4971-89cf-16e0d6e11530/linked_in_profile',
		sortOrder: 1,
	},
	{
		name: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		dateEarned: '2023-01-01',
		credentialUrl:
			'https://www.credly.com/badges/860e8cd7-f269-44bd-8dea-ec24c0a6cf9f/linked_in_profile',
		sortOrder: 2,
	},
	{
		name: 'CompTIA Security+',
		issuer: 'CompTIA',
		dateEarned: '2022-01-01',
		credentialUrl:
			'https://www.credly.com/badges/17473cea-93af-4f71-92fd-b0267d576315/linked_in_profile',
		sortOrder: 3,
	},
	{
		name: 'CompTIA Server+',
		issuer: 'CompTIA',
		dateEarned: '2022-01-01',
		credentialUrl:
			'https://www.credly.com/badges/84b29b64-74a7-451d-abde-5426fcbda0a0/linked_in_profile',
		sortOrder: 4,
	},
	{
		name: 'Linux Essentials',
		issuer: 'Linux Professional Institute',
		dateEarned: '2022-01-01',
		credentialUrl: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000600576/fc6gttqhmk',
		sortOrder: 5,
	},
	{
		name: 'Blue Team Level 1',
		issuer: 'Security Blue Team',
		dateEarned: '2023-01-01',
		credentialUrl:
			'https://www.credly.com/badges/1bc79be5-706b-4b60-9899-3788e42372c2/linked_in_profile',
		sortOrder: 6,
	},
	{
		name: 'ITIL Foundations v4',
		issuer: 'Axelos',
		dateEarned: '2023-01-01',
		credentialId: 'GR671607469J',
		sortOrder: 7,
	},
	{
		name: 'Machine Learning Specialization',
		issuer: 'Coursera / Stanford',
		dateEarned: '2023-01-01',
		credentialUrl:
			'https://www.coursera.org/account/accomplishments/specialization/AYUA64VJ8YA3',
		sortOrder: 8,
	},
];

export function formatMonthYear(input: string): string {
	const date = new Date(`${input}T00:00:00`);
	return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function getGroupedSkills(): { category: string; items: Skill[] }[] {
	const grouped = new Map<string, Skill[]>();

	for (const skill of skills) {
		const existing = grouped.get(skill.category) ?? [];
		existing.push(skill);
		grouped.set(skill.category, existing);
	}

	const sortedCategories = [...grouped.keys()].sort((a, b) => {
		const indexA = skillCategoryOrder.indexOf(a);
		const indexB = skillCategoryOrder.indexOf(b);
		const rankA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
		if (rankA !== rankB) return rankA - rankB;
		return a.localeCompare(b);
	});

	return sortedCategories.map((category) => ({
		category,
		items: [...(grouped.get(category) ?? [])].sort((a, b) => a.sortOrder - b.sortOrder),
	}));
}
