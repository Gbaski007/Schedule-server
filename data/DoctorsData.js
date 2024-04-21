import bcrypt from "bcryptjs";

const doctorsData = [
  {
    aboutMe:
      "Dr. Jane is a compassionate therapist dedicated to helping her clients achieve mental wellness and personal growth.",
    education: [
      {
        degree: "PhD in Clinical Psychology",
        year: 2010,
        college: "University of Florida",
      },
      {
        degree: "Master of Social Work (MSW)",
        year: 2005,
        college: "Florida State University",
      },
    ],
    experience: [
      {
        organization: "Mindful Therapy Center",
        from: "2010-01-01",
        to: "2022-01-01",
        designation: "Licensed Psychologist",
      },
      {
        organization: "Healing Hands Counseling",
        from: "2005-01-01",
        to: "2010-01-01",
        designation: "Therapist",
      },
    ],
    awards: [
      {
        name: "Outstanding Therapist Award",
        year: 2017,
        details: "Recognized for exceptional commitment to client care",
      },
    ],
    services: ["Individual Therapy", "Couples Counseling"],
    specializations: ["Clinical Psychology", "Marriage and Family Therapy"],
    field: "face massage",
    clinicInfo: {
      name: "Mindful Therapy Center",
      title: "Clinical Psychology & Marriage Counseling",
      ratings: 4.9,
      addressLine1: "456 Elm Street",
      addressLine2: "Suite 201",
      city: "Orlando",
      state: "FL",
      country: "USA",
      zipCode: "32801",
      clinicImages: [
        "/images/feature-01.jpg",
        "/images/feature-02.jpg",
        "/images/feature-03.jpg",
        "/images/feature-04.jpg",
      ],
      timings: {
        monday: "9:00 AM - 6:00 PM",
        tuesday: "9:00 AM - 6:00 PM",
        wednesday: "9:00 AM - 6:00 PM",
        thursday: "9:00 AM - 6:00 PM",
        friday: "9:00 AM - 4:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      price: 150,
    },
    pricing: 150,
    reviews: [
      {
        rating: 5,
        comment:
          "Dr. Jane truly helped me navigate through some tough times. Highly recommended!",
      },
      {
        rating: 4.8,
        comment:
          "Mindful Therapy Center provides a calming atmosphere and professional service. Very satisfied.",
      },
    ],
    businessHours: [
      { day: "Monday", startTime: "9:00 AM", endTime: "6:00 PM" },
      { day: "Tuesday", startTime: "9:00 AM", endTime: "6:00 PM" },
      { day: "Wednesday", startTime: "9:00 AM", endTime: "6:00 PM" },
      { day: "Thursday", startTime: "9:00 AM", endTime: "6:00 PM" },
      { day: "Friday", startTime: "9:00 AM", endTime: "4:00 PM" },
    ],
    username: "drjanetherapy",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "+1 234-567-8901",
    gender: "Female",
    dateOfBirth: "1982-08-20",
    profileImage:
      "https://pathivu.dreamstechnologies.com/template/assets/img/home5/theraphist/team-1.png",
    location: "Orlando, USA",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    aboutMe:
      "John Smith is a dedicated therapist with over 15 years of experience in providing rejuvenating face massages. He is committed to helping individuals achieve relaxation and revitalization through his expert techniques.",
    education: [
      {
        degree: "Certification in Massage Therapy",
        year: 2005,
        college: "New York School of Massage",
      },
      {
        degree: "Advanced Facial Massage Training",
        year: 2008,
        college: "International Institute of Spa Therapy",
      },
    ],
    experience: [
      {
        organization: "Relaxation Spa",
        from: "2005-01-01",
        to: "2021-12-31",
        designation: "Senior Massage Therapist",
      },
      {
        organization: "Zen Wellness Center",
        from: "2020-01-01",
        to: "2023-01-01",
        designation: "Lead Spa Therapist",
      },
    ],
    awards: [
      {
        name: "Best Massage Therapist",
        year: 2010,
        details:
          "Recognized for exceptional skill in providing relaxing face massages",
      },
      {
        name: "Excellence in Spa Therapy",
        year: 2015,
        details: "Awarded by the International Spa Association",
      },
    ],
    services: ["Face Massage", "Facial Rejuvenation", "Aromatherapy"],
    specializations: ["Face Massage", "Aromatherapy"],
    field: "face Massage",
    clinicInfo: {
      name: "Zen Facial Spa",
      title: "Rejuvenate Your Face",
      ratings: 4.8,
      addressLine1: "456 Maple Avenue",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
      clinicImages: [
        "/images/feature-01.jpg",
        "/images/feature-02.jpg",
        "/images/feature-03.jpg",
        "/images/feature-04.jpg",
      ],
      timings: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 2:00 PM",
        sunday: "Closed",
      },
      price: 90,
    },
    pricing: 90,
    reviews: [
      {
        rating: 4.5,
        comment:
          "John Smith's face massages are incredibly relaxing. I always leave feeling refreshed and rejuvenated!",
      },
      {
        rating: 5,
        comment:
          "The Zen Facial Spa provides a serene atmosphere and John's skills are top-notch. Highly recommend!",
      },
    ],
    businessHours: [
      { day: "Monday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Tuesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Wednesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Thursday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Friday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Saturday", startTime: "10:00 AM", endTime: "2:00 PM" },
      { day: "Sunday", startTime: null, endTime: null },
    ],
    username: "johnsmithfacemassage",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "123-456-7890",
    gender: "Male",
    dateOfBirth: "1975-05-15",
    profileImage:
      "https://pathivu.dreamstechnologies.com/template/assets/img/home5/theraphist/team-2.png",
    location: "Georgia, USA",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    aboutMe:
      "Dr. Emily Johnson is a dedicated obstetrician and gynecologist with a passion for women's health. With over 10 years of experience, she provides personalized care to women of all ages.",
    education: [
      {
        degree: "MD",
        year: 2010,
        college: "Stanford University School of Medicine",
      },
      {
        degree: "OBGYN Residency",
        year: 2014,
        college: "Johns Hopkins Hospital",
      },
    ],
    experience: [
      {
        organization: "Women's Health Clinic",
        from: new Date("2014-01-01"),
        to: new Date("2021-01-01"),
        designation: "Obstetrician & Gynecologist",
      },
    ],
    awards: [
      {
        name: "Outstanding Women's Health Specialist",
        year: 2018,
        details:
          "Awarded by the American College of Obstetricians and Gynecologists",
      },
    ],
    services: ["Prenatal Care", "Gynecological Exams"],
    specializations: ["Obstetrics", "Gynecology"],
    field: "back massage",
    clinicInfo: {
      name: "Johnson Women's Clinic",
      title: "Empowering Women's Health",
      ratings: 4.9,

      addressLine1: "456 Oak Street",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zipCode: "90001",

      clinicImages: [
        "/images/feature-01.jpg",
        "/images/feature-02.jpg",
        "/images/feature-03.jpg",
        "/images/feature-04.jpg",
      ],
      timings: {
        monday: "8:00 AM - 6:00 PM",
        tuesday: "8:00 AM - 6:00 PM",
        wednesday: "8:00 AM - 6:00 PM",
        thursday: "8:00 AM - 6:00 PM",
        friday: "8:00 AM - 4:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      price: 175,
    },
    pricing: 234,
    reviews: [
      {
        rating: 4.8,
        comment:
          "Dr. Johnson is amazing! She listens attentively and provides thorough care.",
      },
      {
        rating: 5,
        comment:
          "Exceptional doctor! I highly recommend Dr. Johnson for women's health needs.",
      },
    ],
    businessHours: [
      { day: "Monday", startTime: "8:00 AM", endTime: "6:00 PM" },
      { day: "Tuesday", startTime: "8:00 AM", endTime: "6:00 PM" },
      { day: "Wednesday", startTime: "8:00 AM", endTime: "6:00 PM" },
      { day: "Thursday", startTime: "8:00 AM", endTime: "6:00 PM" },
      { day: "Friday", startTime: "8:00 AM", endTime: "4:00 PM" },
      { day: "Saturday", startTime: null, endTime: null },
      { day: "Sunday", startTime: null, endTime: null },
    ],
    username: "drejohson",
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@example.com",
    phone: "987-654-3210",
    gender: "Female",
    dateOfBirth: new Date("1985-08-20"),
    profileImage:
      "https://pathivu.dreamstechnologies.com/template/assets/img/home5/theraphist/team-3.png",
    location: "California, USA",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    aboutMe:
      "Dr. Sarah Lee is a highly skilled dermatologist with expertise in both medical and cosmetic dermatology. She is committed to providing personalized skincare solutions to her patients.",
    education: [
      {
        degree: "MD",
        year: 2008,
        college: "University of California, San Francisco School of Medicine",
      },
      {
        degree: "Dermatology Residency",
        year: 2012,
        college: "Columbia University Medical Center",
      },
    ],
    experience: [
      {
        organization: "SkinCare Clinic",
        from: new Date("2012-01-01"),
        to: null,
        designation: "Dermatologist",
      },
    ],
    awards: [
      {
        name: "Top Dermatologist of the Year",
        year: 2016,
        details: "Awarded by the American Academy of Dermatology",
      },
    ],
    services: ["Acne Treatment", "Botox and Fillers"],
    specializations: ["Dermatology", "Cosmetic Dermatology"],
    field: "hair treatment",
    clinicInfo: {
      name: "Lee Dermatology Clinic",
      title: "Healthy Skin, Beautiful You",
      ratings: 4.7,

      addressLine1: "789 Elm Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94101",

      clinicImages: [
        "/images/feature-01.jpg",
        "/images/feature-02.jpg",
        "/images/feature-03.jpg",
        "/images/feature-04.jpg",
      ],
      timings: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 4:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      price: 120,
    },
    pricing: 168,
    reviews: [
      {
        rating: 4.5,
        comment:
          "Dr. Lee is fantastic! She's helped me achieve clear and radiant skin.",
      },
      {
        rating: 4.8,
        comment:
          "Highly recommend Dr. Lee for all your dermatological needs. She's the best!",
      },
    ],
    businessHours: [
      { day: "Monday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Tuesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Wednesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Thursday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Friday", startTime: "9:00 AM", endTime: "4:00 PM" },
      { day: "Saturday", startTime: null, endTime: null },
      { day: "Sunday", startTime: null, endTime: null },
    ],
    username: "drsarahlee",
    firstName: "Sarah",
    lastName: "Lee",
    email: "sarah.lee@example.com",
    phone: "123-456-7890",
    gender: "Female",
    dateOfBirth: new Date("1980-03-12"),
    profileImage:
      "https://pathivu.dreamstechnologies.com/template/assets/img/home5/theraphist/team-2.png",
    location: "Florida, USA",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    aboutMe:
      "Dr. Mia Vamos is a highly skilled dermatologist with expertise in both medical and cosmetic dermatology. She is committed to providing personalized skincare solutions to her patients.",
    education: [
      {
        degree: "MD",
        year: 2002,
        college: "University of California, San Francisco School of Medicine",
      },
      {
        degree: "Dermatology Residency",
        year: 2014,
        college: "Columbia University Medical Center",
      },
    ],
    experience: [
      {
        organization: "SkinCare Clinic",
        from: new Date("2013-01-01"),
        to: new Date("2023-01-01"),
        designation: "Dermatologist",
      },
    ],
    awards: [
      {
        name: "Top Dermatologist of the Year",
        year: 2016,
        details: "Awarded by the American Academy of Dermatology",
      },
    ],
    services: ["Acne Treatment", "Botox and Fillers"],
    specializations: ["Dermatology", "Cosmetic Dermatology"],
    field: "facials",
    clinicInfo: {
      name: "Lee Dermatology Clinic",
      title: "Healthy Skin, Beautiful You",
      ratings: 4.7,

      addressLine1: "789 Elm Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94101",

      clinicImages: [
        "/images/feature-01.jpg",
        "/images/feature-02.jpg",
        "/images/feature-03.jpg",
        "/images/feature-04.jpg",
      ],
      timings: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 4:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      price: 120,
    },
    pricing: 125,
    reviews: [
      {
        rating: 4.5,
        comment:
          "Dr. Lee is fantastic! She's helped me achieve clear and radiant skin.",
      },
      {
        rating: 4.8,
        comment:
          "Highly recommend Dr. Lee for all your dermatological needs. She's the best!",
      },
    ],
    businessHours: [
      { day: "Monday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Tuesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Wednesday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Thursday", startTime: "9:00 AM", endTime: "5:00 PM" },
      { day: "Friday", startTime: "9:00 AM", endTime: "4:00 PM" },
      { day: "Saturday", startTime: null, endTime: null },
      { day: "Sunday", startTime: null, endTime: null },
    ],
    username: "drmiavamos",
    firstName: "Mia",
    lastName: "Vamos",
    email: "mia.vam@example.com",
    phone: "123-456-7890",
    gender: "Female",
    dateOfBirth: new Date("1980-03-12"),
    profileImage:
      "https://pathivu.dreamstechnologies.com/template/assets/img/home5/theraphist/team-5.png",
    location: "Florida, USA",
    password: bcrypt.hashSync("12345", 10),
  },

  // Add details for more doctors here...
];

export default doctorsData;
