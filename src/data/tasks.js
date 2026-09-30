const tasks = [
    // =========================
    // OUSMANE DEMBELE - U731
    // =========================

    {
        id: "T1001",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Integrate secure payment gateway",
        description: "Integrate the payment gateway and test successful transactions.",

        assignedDate: "2026-09-15",
        completedDate: null,
        dueDate: "2026-10-01",

        priority: "High",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1002",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Redesign dashboard",
        description: "Improve the dashboard layout and make it responsive.",

        assignedDate: "2026-09-15",
        completedDate: null,
        dueDate: "2026-10-03",

        priority: "Medium",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1003",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Fix mobile navigation",
        description: "Fix overlapping navigation elements on smaller screens.",

        assignedDate: "2026-09-15",
        completedDate: "2026-09-25",
        dueDate: "2026-09-25",

        priority: "High",
        status: "Completed",
        pinned: false
    },

    {
        id: "T1004",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Write API documentation",
        description: "Document all currently available API endpoints.",

        assignedDate: "2026-09-15",
        completedDate: null,
        dueDate: "2026-10-07",

        priority: "Low",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1005",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Update user profile page",
        description: "Add profile editing and account information sections.",

        assignedDate: "2026-09-15",
        completedDate: "2026-09-22",
        dueDate: "2026-09-22",

        priority: "Medium",
        status: "Completed",
        pinned: false
    },

    {
        id: "T1011",
        createdBy: "U731",
        assignedTo: "U731",

        title: "Review Changes",
        description: "Work on changes discussed in the meeting.",

        assignedDate: "2026-09-15",
        completedDate: "2026-09-24",
        dueDate: "2026-09-24",

        priority: "Medium",
        status: "Completed",
        pinned: true
    },

    {
        id: "T1009",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Optimize task loading",
        description: "Improve the performance of task filtering and rendering.",

        assignedDate: "2026-09-18",
        completedDate: null,
        dueDate: "2026-10-05",

        priority: "Medium",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1010",
        createdBy: "A394",
        assignedTo: "U731",

        title: "Review completed tasks",
        description: "Review recently completed tasks and verify their results.",

        assignedDate: "2026-09-20",
        completedDate: "2026-09-27",
        dueDate: "2026-09-27",

        priority: "Low",
        status: "Completed",
        pinned: false
    },


    // =========================
    // FERRAN TORRES - U482
    // =========================

    {
        id: "T1006",
        createdBy: "A394",
        assignedTo: "U482",

        title: "Create authentication flow",
        description: "Implement login and logout functionality.",

        assignedDate: "2026-09-15",
        completedDate: "2026-09-20",
        dueDate: "2026-09-20",

        priority: "High",
        status: "Completed",
        pinned: true
    },

    {
        id: "T1007",
        createdBy: "U482",
        assignedTo: "U482",

        title: "Test login validation",
        description: "Test invalid email and password scenarios.",

        assignedDate: "2026-09-16",
        completedDate: null,
        dueDate: "2026-10-02",

        priority: "Medium",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1008",
        createdBy: "U482",
        assignedTo: "U482",

        title: "Create settings page",
        description: "Build the user settings interface.",

        assignedDate: "2026-09-17",
        completedDate: null,
        dueDate: "2026-10-10",

        priority: "Low",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1012",
        createdBy: "A394",
        assignedTo: "U482",

        title: "Implement password reset",
        description: "Create the password reset flow with email verification.",

        assignedDate: "2026-09-19",
        completedDate: null,
        dueDate: "2026-10-04",

        priority: "High",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1013",
        createdBy: "A394",
        assignedTo: "U482",

        title: "Improve form validation",
        description: "Add client-side validation to account forms.",

        assignedDate: "2026-09-21",
        completedDate: "2026-09-26",
        dueDate: "2026-09-26",

        priority: "Medium",
        status: "Completed",
        pinned: false
    },


    // =========================
    // DESIRE DOUE - U345
    // =========================

    {
        id: "T1014",
        createdBy: "A394",
        assignedTo: "U345",

        title: "Design taskboard interface",
        description: "Create a clean and responsive design for the taskboard.",

        assignedDate: "2026-09-16",
        completedDate: null,
        dueDate: "2026-10-02",

        priority: "High",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1015",
        createdBy: "A394",
        assignedTo: "U345",

        title: "Create dashboard wireframes",
        description: "Prepare wireframes for the user and admin dashboards.",

        assignedDate: "2026-09-17",
        completedDate: "2026-09-23",
        dueDate: "2026-09-23",

        priority: "Medium",
        status: "Completed",
        pinned: false
    },

    {
        id: "T1016",
        createdBy: "A394",
        assignedTo: "U345",

        title: "Improve mobile layouts",
        description: "Adapt existing screens for mobile and tablet devices.",

        assignedDate: "2026-09-20",
        completedDate: null,
        dueDate: "2026-10-06",

        priority: "Medium",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1017",
        createdBy: "A394",
        assignedTo: "U345",

        title: "Design profile page",
        description: "Create the profile page design and account settings layout.",

        assignedDate: "2026-09-22",
        completedDate: null,
        dueDate: "2026-10-08",

        priority: "Low",
        status: "Pending",
        pinned: false
    },


    // =========================
    // NUNO MENDEZ - U895
    // =========================

    {
        id: "T1018",
        createdBy: "A394",
        assignedTo: "U895",

        title: "Create design system",
        description: "Define reusable colors, typography, spacing and UI components.",

        assignedDate: "2026-09-16",
        completedDate: "2026-09-22",
        dueDate: "2026-09-22",

        priority: "High",
        status: "Completed",
        pinned: true
    },

    {
        id: "T1019",
        createdBy: "A394",
        assignedTo: "U895",

        title: "Design task components",
        description: "Create reusable designs for task cards and task lists.",

        assignedDate: "2026-09-18",
        completedDate: null,
        dueDate: "2026-10-03",

        priority: "Medium",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1020",
        createdBy: "A394",
        assignedTo: "U895",

        title: "Review application UI",
        description: "Review existing screens and identify visual inconsistencies.",

        assignedDate: "2026-09-21",
        completedDate: null,
        dueDate: "2026-10-05",

        priority: "Low",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1021",
        createdBy: "A394",
        assignedTo: "U895",

        title: "Create empty states",
        description: "Design empty states for tasks, teams and analytics pages.",

        assignedDate: "2026-09-24",
        completedDate: null,
        dueDate: "2026-10-09",

        priority: "Low",
        status: "Pending",
        pinned: false
    },


    // =========================
    // KHVICEA KVARATSKHELIA - U211
    // =========================

    {
        id: "T1022",
        createdBy: "A394",
        assignedTo: "U211",

        title: "Build analytics API",
        description: "Create API endpoints required for the analytics dashboard.",

        assignedDate: "2026-09-16",
        completedDate: null,
        dueDate: "2026-10-01",

        priority: "High",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1023",
        createdBy: "A394",
        assignedTo: "U211",

        title: "Optimize database queries",
        description: "Review slow queries and improve database performance.",

        assignedDate: "2026-09-18",
        completedDate: "2026-09-26",
        dueDate: "2026-09-26",

        priority: "High",
        status: "Completed",
        pinned: false
    },

    {
        id: "T1024",
        createdBy: "A394",
        assignedTo: "U211",

        title: "Implement task search",
        description: "Add backend support for searching tasks by title and status.",

        assignedDate: "2026-09-22",
        completedDate: null,
        dueDate: "2026-10-04",

        priority: "Medium",
        status: "Pending",
        pinned: false
    },

    {
        id: "T1025",
        createdBy: "A394",
        assignedTo: "U211",

        title: "Add task filtering",
        description: "Implement filtering by priority, status and due date.",

        assignedDate: "2026-09-24",
        completedDate: null,
        dueDate: "2026-10-08",

        priority: "Medium",
        status: "Pending",
        pinned: true
    },

    {
        id: "T1026",
        createdBy: "A394",
        assignedTo: "U211",

        title: "Write unit tests",
        description: "Create unit tests for the task management functionality.",

        assignedDate: "2026-09-26",
        completedDate: null,
        dueDate: "2026-10-10",

        priority: "Low",
        status: "Pending",
        pinned: false
    }
];

export default tasks;