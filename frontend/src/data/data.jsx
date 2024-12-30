import {
  GoHome,
  GoChecklist,
  GoBook,
  GoBookmark,
  GoDiscussionClosed,
  GoTrophy,
  GoBell,
} from "react-icons/go";

export const menus = [
  { title: "Dashboard", icon: <GoHome />, path: "/" },
  { title: "Learning", icon: <GoBook />, path: "/learn" },
  { title: "Quizzes", icon: <GoChecklist />, path: "/quiz" },
  { title: "Submission ", icon: <GoBookmark />, path: "/submission", gap: true },
  { title: "Diskusi", icon: <GoDiscussionClosed />, path: "/diskusi" },
  { title: "Progress", icon: <GoTrophy />, path: "/progres" },
  { title: "User", icon: <GoBell />, path: "/user", gap: true },
];

export const quizData = [
  {
    question:
      "Pilihlah jawaban berikut ini apa yang membedakan WEBSITE dengan WEB APP",
    options: [
      "Website dinamis, Web App statis",
      "Website bisa login",
      "Web App tidak memiliki database",
      "Web App bisa login",
    ],
  },
  {
    question: "Manakah yang merupakan bahasa Pemograman",
    options: ["HTML", "JSON", "Phyton", "CSS"],
  },
  {
    question: "Apa yang dimaksud dengan SPA?",
    options: [
      "Single Page Application",
      "Static Page Application",
      "Simple Programming App",
      "Server Page Application",
    ],
  },
  {
    question: "Apa saja tools yang biasanya digunakan oleh frontend",
    options: ["React", "SQL", "Express", "Laravel"],
  },
];

export const mapelData = [
  {
    title: "Bab 1 - Keluarga Awal Kehidupan",
    content: [
      {
        name: "Keluarga Awal Kehidupan",
        url: "https://www.youtube.com/embed/S1xHhqlhaL0?si=MQzjprKomymcCu74"
      },
      {
        name: " Keberagaman Lingkungan Sekitar",
        url: "https://www.youtube.com/embed/NWHF4QW0VSo?si=Pk9L-GjE8oA_eaeu"
      },
      {
        name: "Perubahan Potensi Sumber Daya Alam",
        url: "https://www.youtube.com/embed/HA5ibNBXwDg?si=Qu0X2w4FQMK4r95h"
      },
      {
        name: "Aktivitas Kegiatan Ekonomi",
        url: "https://www.youtube.com/embed/6tDvbvBrvtk?si=EKbriwlgNhiDKOIH"
      }
    ],
  },
  // {
  //   title: "Bab 2 - Keanekaragaman Lingkungan Sekitar",
  //   content: [
  //     "Berkenalan dengan Lingkungan Sekitar",
  //     "Pembiasaan Diri untuk Melestarikan Lingkungan",
  //     "Pembangunan Berkelanjutan dan Kelangkaan",
  //   ],
  // },
  // {
  //   title: "Bab 3 - Potensi Ekonomi Lingkungan",
  //   content: [
  //     "Perubahan Potensi Sumber Daya Alam",
  //     "Aktivitas Kegiatan Ekonomi",
  //     "Peranan Masyarakat dalam Rantai Ekonomi",
  //   ],
  // },
  // {
  //   title: "Bab 4 - Pemberdayaan Masyarakat",
  //   content: [
  //     "Keragaman Sosial Budaya di Masyarakat",
  //     "Permasalahan Kehidupan Sosial Budaya",
  //     "Pemberdayaan Masyarakat",
  //     "Peranan Komunitas dalam Kehidupan Masyarakat",
  //   ],
  // },
];

const topik = [
  {
    title: "keberadaan diri dan keluarga",
    url: "https://youtube.com",
  },
  {
    title: "keberadaan diri dan keluarga",
    url: "https://youtube.com",
  },
  {
    title: "keberadaan diri dan keluarga",
    url: "https://youtube.com",
  },
];

const materi = {
  bab_1: topik,
  bab_2: topik,
};

export const users = [
  {
    id: "2021806049",
    name: "Mohamad Rizal Prasetyo",
    email: "rizalmohamad740@gmail.com",
    role: "admin",
  },
  {
    id: "2021806500",
    name: "Zulfajri",
    email: "zulfajri@gmail.com",
    role: "guru",
  },
  {
    id: "2021806098",
    name: "Ramadika Dwi Badri",
    email: "rmadika0@gmail.com",
    role: "user",
  },
  {
    id: "2021806098",
    name: "Ramadika Dwi Badri",
    email: "rmadika0@gmail.com",
    role: "user",
  },
  {
    id: "2021806098",
    name: "Ramadika Dwi Badri",
    email: "rmadika0@gmail.com",
    role: "user",
  },
];
