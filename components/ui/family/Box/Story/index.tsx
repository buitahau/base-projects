import React from 'react';

interface Story {
  id: number;
  time: string;
  description: string;
}

export default function StoryBox() {
  const [story, setStory] = React.useState<Story[]>([]);
  React.useEffect(() => {
    setStory([
      {
        id: 1,
        time: '6 January 2023',
        description: 'Tin was born.'
      },
      {
        id: 2,
        time: 'March 2024',
        description: 'Tin went to nursery school.'
      }
    ]);
  }, []);

  return (
    <div id="story" className="story-box main-timeline-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Tin's Story</h2>
            </div>
          </div>
        </div>
        {story.map((item) => (
          <div
            key={item.id}
            className={`row timeline-element ${item.id % 2 == 0 ? 'reverse' : ''} separline`}
          >
            <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
              <div className="time-line-date-content">
                <p className="mbr-timeline-date mbr-fonts-style display-font">
                  {item.time}
                </p>
              </div>
            </div>
            <span className="iconBackground"></span>
            <div className="col-xs-12 col-md-6 align-left">
              <div className="timeline-text-content">
                <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-font">
                  {item.description}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
