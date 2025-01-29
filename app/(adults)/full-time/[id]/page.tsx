import { courses } from '@/lib/courses';
import CourseDetails from './course-details';

export async function generateStaticParams() {
  return Object.keys(courses).map((id) => ({
    id: id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const course = courses[params.id as keyof typeof courses];

  if (!course) {
    return null; // or handle 404
  }

  return <CourseDetails course={course} />;
}