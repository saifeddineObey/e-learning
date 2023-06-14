import{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from './course-card';
import {
  fetchCourses,
  selectStatus,
  selectError,
  selectCourses,
} from '../../features/courseSlice';
import './course-listing.css';

type CourseType = {
  id: number;
  image: string;
  parts: {
    title: string;
    duration: string;
    terminationDate: string;
    progress: number;
  }[];
};


const CourseListing = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
 
  useEffect(() => {
    dispatch(fetchCourses() as any);
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="course-listing" data-testId="course-listing">
      <div className="title" data-testId="title">
        <h1>e-Learning Courses</h1>
      </div>
      {courses && courses.map((course:CourseType) => (
        <div className="course" key={course.id} data-testId="course">
          <CourseCard parts={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseListing;
