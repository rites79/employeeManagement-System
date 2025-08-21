
const employees = [ 
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      // {
      //   "title": "Prepare Sales Report",
      //   "description": "Compile the sales data for Q1",
      //   "date": "2025-08-10",
      //   "category": "Reporting",
      //   "active": true,
      //   "newTask": true,
      //   "completed": false,
      //   "failed": false
      // },
      // {
      //   "title": "Team Meeting",
      //   "description": "Weekly team sync-up meeting",
      //   "date": "2025-08-12",
      //   "category": "Meetings",
      //   "active": true,
      //   "newTask": false,
      //   "completed": false,
      //   "failed": false
      // },
      // {
      //   "title": "Client Follow-up",
      //   "description": "Email follow-up with client regarding project status",
      //   "date": "2025-08-14",
      //   "category": "Communication",
      //   "active": false,
      //   "newTask": false,
      //   "completed": true,
      //   "failed": false
      // }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      // {
      //   "title": "Database Backup",
      //   "description": "Perform weekly database backup",
      //   "date": "2025-08-09",
      //   "category": "Maintenance",
      //   "active": false,
      //   "newTask": false,
      //   "completed": true,
      //   "failed": false
      // },
      // {
      //   "title": "Bug Fixing",
      //   "description": "Resolve login page authentication issue",
      //   "date": "2025-08-13",
      //   "category": "Development",
      //   "active": true,
      //   "newTask": true,
      //   "completed": false,
      //   "failed": false
      // },
      // {
      //   "title": "Code Review",
      //   "description": "Review PRs from teammates",
      //   "date": "2025-08-15",
      //   "category": "Development",
      //   "active": true,
      //   "newTask": false,
      //   "completed": false,
      //   "failed": false
      // },
      // {
      //   "title": "Documentation Update",
      //   "description": "Update project API documentation",
      //   "date": "2025-08-18",
      //   "category": "Documentation",
      //   "active": false,
      //   "newTask": false,
      //   "completed": false,
      //   "failed": true
      // }
    ]
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      // {
      //   "title": "Social Media Campaign",
      //   "description": "Plan August social media content",
      //   "date": "2025-08-11",
      //   "category": "Marketing",
      //   "active": true,
      //   "newTask": true,
      //   "completed": false,
      //   "failed": false
      // },
      // {
      //   "title": "Design Banner",
      //   "description": "Create banner for product launch",
      //   "date": "2025-08-17",
      //   "category": "Design",
      //   "active": false,
      //   "newTask": false,
      //   "completed": true,
      //   "failed": false
      // },
      // {
      //   "title": "SEO Audit",
      //   "description": "Run audit for website SEO",
      //   "date": "2025-08-19",
      //   "category": "SEO",
      //   "active": true,
      //   "newTask": false,
      //   "completed": false,
      //   "failed": false
      // }
    ]
  },
  {
    "id": 4,
    "firstName": "Aditya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
  //     {
  //       "title": "Inventory Check",
  //       "description": "Check available stock for August",
  //       "date": "2025-08-08",
  //       "category": "Logistics",
  //       "active": false,
  //       "newTask": false,
  //       "completed": true,
  //       "failed": false
  //     },
  //     {
  //       "title": "Supplier Meeting",
  //       "description": "Meet supplier for new order agreement",
  //       "date": "2025-08-13",
  //       "category": "Meetings",
  //       "active": true,
  //       "newTask": true,
  //       "completed": false,
  //       "failed": false
  //     },
  //     {
  //       "title": "Shipment Tracking",
  //       "description": "Track August 10 shipment delivery",
  //       "date": "2025-08-15",
  //       "category": "Logistics",
  //       "active": true,
  //       "newTask": false,
  //       "completed": false,
  //       "failed": false
  //     },
  //     {
  //       "title": "Warehouse Audit",
  //       "description": "Audit warehouse inventory and safety",
  //       "date": "2025-08-18",
  //       "category": "Logistics",
  //       "active": false,
  //       "newTask": false,
  //       "completed": false,
  //       "failed": true
  //     }
  //   ]
  // },
  // {
  //   "id": 5,
  //   "firstName": "Riya",
  //   "email": "employee5@example.com",
  //   "password": "123",
  //   "taskCount": {
  //     "active": 2,
  //     "newTask": 1,
  //     "completed": 1,
  //     "failed": 0
  //   },
  //   "tasks": [
  //     {
  //       "title": "Onboarding Training",
  //       "description": "Conduct training for new hires",
  //       "date": "2025-08-09",
  //       "category": "HR",
  //       "active": true,
  //       "newTask": true,
  //       "completed": false,
  //       "failed": false
  //     },
  //     {
  //       "title": "Policy Draft",
  //       "description": "Draft leave policy for 2025",
  //       "date": "2025-08-14",
  //       "category": "HR",
  //       "active": false,
  //       "newTask": false,
  //       "completed": true,
  //       "failed": false
  //     },
  //     {
  //       "title": "Performance Review",
  //       "description": "Prepare employee performance reports",
  //       "date": "2025-08-16",
  //       "category": "HR",
  //       "active": true,
  //       "newTask": false,
  //       "completed": false,
  //       "failed": false
  //     }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];
export const setLocalStorage =()=>{
 localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage =()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))

return {employees,admin}
    
}

