import React from 'react';
import './progress-bar.css';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const circles = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`circle ${index < progress ? 'active' : ''}`}
      data-testid="circle-active"
    ></div>
  ));

  return <div className="progress-bar" data-testId="progress-bar">{circles}</div>;
};

export default ProgressBar;
