import ProgressBar from '../progress-bar';

import './course-card.css';

type CourseCardProps = {
  parts: {
    image: string;
    parts: {
      title: string;
      duration: string;
      terminationDate: string;
      progress: number;
    }[];
  };
}

const CourseCard = ({ parts }: CourseCardProps) => {
  return (
    <div className="course-card" data-testId="course-card">
      <div className="logo" data-testId="log">
        <img src={parts.image} alt="course-logo" />
      </div>
      <div className="course-description" data-testId="course-description">
        {parts.parts.map((item, index) => {
          return (
            <div key={index} className="description-container" data-testId="description-container">
              <div className="title" data-testId="title">
                <h3>{item.title}</h3>
              </div>
              <div className="time-progress-container">
                <div className="duration" data-testId="duration">
                  <h6>
                    {item.duration} <br /> To be done By:
                  </h6>
                </div>
                <div className="progress" data-testId="termination-date">
                  <ProgressBar progress={item.progress} />
                  <h6>{item.terminationDate}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
