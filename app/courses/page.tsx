import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesPreview from "@/components/landing/CoursesPreview";
import { prisma } from "@/lib/db";

export default async function CoursesPage() {
  const dbCourses = await prisma.course.findMany({
    include: { instructor: true }
  });

  const formattedCourses = dbCourses.map(c => ({
    title: c.title,
    category: c.category,
    instructor: c.instructor.name,
    rating: c.rating,
    students: c.students,
    duration: c.duration,
    price: c.price,
    badge: c.badge as any,
    color: c.color,
    image: c.image
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 min-h-screen">
        <CoursesPreview initialCourses={formattedCourses.length > 0 ? formattedCourses : undefined} />
      </main>
      <Footer />
    </>
  );
}
