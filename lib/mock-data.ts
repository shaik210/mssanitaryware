export interface Tutor {
  id: string
  name: string
  avatar: string
  rating: number
  reviewCount: number
  pricePerHour: number
  expertise: string[]
  bio: string
  verified: boolean
  responseTime: string
  lessonsCompleted: number
}

export interface Batch {
  id: string
  name: string
  subject: string
  tutorId: string
  tutorName: string
  schedule: string
  students: number
  maxStudents: number
  status: "active" | "inactive"
  joinCode: string
}

export interface FeeRecord {
  id: string
  batchId: string
  batchName: string
  studentName: string
  amount: number
  dueDate: string
  status: "paid" | "pending" | "overdue"
  splitPayment?: boolean
  paidAmount?: number
}

export interface Student {
  id: string
  name: string
  email: string
  enrollmentDate: string
}

export const mockTutors: Tutor[] = [
  {
    id: "tutor-1",
    name: "Ramesh Kumar",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 299,
    expertise: ["TSSC Mathematics", "JEE Advanced", "Calculus"],
    bio: "Certified math tutor with 8+ years experience. Specializing in TSSC and JEE preparation with 95% success rate.",
    verified: true,
    responseTime: "5 mins",
    lessonsCompleted: 342,
  },
  {
    id: "tutor-2",
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4.8,
    reviewCount: 98,
    pricePerHour: 349,
    expertise: ["TSBIE Physics", "IIT-JEE", "Mechanics"],
    bio: "Physics expert focusing on TSBIE and competitive exams. Interactive teaching approach with practical demonstrations.",
    verified: true,
    responseTime: "2 mins",
    lessonsCompleted: 256,
  },
  {
    id: "tutor-3",
    name: "Anjali Reddy",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4.7,
    reviewCount: 85,
    pricePerHour: 279,
    expertise: ["Telugu Literature", "Andhra History", "Cultural Studies"],
    bio: "Native Telugu educator passionate about language and literature. Personalized learning approach for all levels.",
    verified: true,
    responseTime: "10 mins",
    lessonsCompleted: 198,
  },
  {
    id: "tutor-4",
    name: "Arjun Patel",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.6,
    reviewCount: 72,
    pricePerHour: 249,
    expertise: ["TSSC Chemistry", "Organic Chemistry", "Lab Techniques"],
    bio: "Chemistry specialist with hands-on lab experience. Making complex concepts simple and engaging.",
    verified: true,
    responseTime: "8 mins",
    lessonsCompleted: 187,
  },
  {
    id: "tutor-5",
    name: "Kavya Desai",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 4.9,
    reviewCount: 156,
    pricePerHour: 329,
    expertise: ["English Literature", "IELTS", "Creative Writing"],
    bio: "English tutor specializing in literature and competitive exams. Focus on developing critical thinking and communication skills.",
    verified: true,
    responseTime: "3 mins",
    lessonsCompleted: 412,
  },
]

export const mockBatches: Batch[] = [
  {
    id: "batch-1",
    name: "TSSC Maths Advanced",
    subject: "Mathematics",
    tutorId: "tutor-1",
    tutorName: "Ramesh Kumar",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    students: 24,
    maxStudents: 30,
    status: "active",
    joinCode: "MATH2024",
  },
  {
    id: "batch-2",
    name: "TSBIE Physics Group",
    subject: "Physics",
    tutorId: "tutor-2",
    tutorName: "Priya Sharma",
    schedule: "Tue, Thu - 7:00 PM",
    students: 18,
    maxStudents: 25,
    status: "active",
    joinCode: "PHYS2024",
  },
  {
    id: "batch-3",
    name: "Telugu Classics",
    subject: "Telugu Literature",
    tutorId: "tutor-3",
    tutorName: "Anjali Reddy",
    schedule: "Sat - 4:00 PM",
    students: 12,
    maxStudents: 20,
    status: "active",
    joinCode: "TEL2024",
  },
  {
    id: "batch-4",
    name: "TSSC Chemistry Basics",
    subject: "Chemistry",
    tutorId: "tutor-4",
    tutorName: "Arjun Patel",
    schedule: "Mon, Wed - 5:30 PM",
    students: 16,
    maxStudents: 22,
    status: "active",
    joinCode: "CHEM2024",
  },
]

export const mockFeeRecords: FeeRecord[] = [
  {
    id: "fee-1",
    batchId: "batch-1",
    batchName: "TSSC Maths Advanced",
    studentName: "Anil Kumar",
    amount: 2990,
    dueDate: "2024-01-15",
    status: "pending",
    splitPayment: true,
    paidAmount: 1495,
  },
  {
    id: "fee-2",
    batchId: "batch-1",
    batchName: "TSSC Maths Advanced",
    studentName: "Deepika Rao",
    amount: 2990,
    dueDate: "2024-01-10",
    status: "overdue",
  },
  {
    id: "fee-3",
    batchId: "batch-2",
    batchName: "TSBIE Physics Group",
    studentName: "Vikram Singh",
    amount: 3490,
    dueDate: "2024-01-20",
    status: "pending",
  },
  {
    id: "fee-4",
    batchId: "batch-2",
    batchName: "TSBIE Physics Group",
    studentName: "Neha Patel",
    amount: 3490,
    dueDate: "2024-01-05",
    status: "paid",
  },
  {
    id: "fee-5",
    batchId: "batch-3",
    batchName: "Telugu Classics",
    studentName: "Ravi Reddy",
    amount: 2790,
    dueDate: "2024-01-18",
    status: "pending",
  },
]

export const mockStudents: Student[] = [
  {
    id: "student-1",
    name: "Anil Kumar",
    email: "anil@example.com",
    enrollmentDate: "2023-11-01",
  },
  {
    id: "student-2",
    name: "Deepika Rao",
    email: "deepika@example.com",
    enrollmentDate: "2023-10-15",
  },
  {
    id: "student-3",
    name: "Vikram Singh",
    email: "vikram@example.com",
    enrollmentDate: "2023-11-20",
  },
  {
    id: "student-4",
    name: "Neha Patel",
    email: "neha@example.com",
    enrollmentDate: "2023-09-30",
  },
  {
    id: "student-5",
    name: "Ravi Reddy",
    email: "ravi@example.com",
    enrollmentDate: "2023-12-01",
  },
  {
    id: "student-6",
    name: "Priya Singh",
    email: "priya@example.com",
    enrollmentDate: "2023-11-10",
  },
]

export const getRandomTutor = (): Tutor => {
  return mockTutors[Math.floor(Math.random() * mockTutors.length)]
}
