import { Component, ReactNode } from 'react';

interface FamilyBoxState {
  members: {
    role: string;
    image: string;
  }[];
}

class FamilyBox extends Component<{}, FamilyBoxState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      members: [
        {
          role: 'Father',
          image: './images/family/place_holder.jpg'
        },
        {
          role: 'Mother',
          image: './images/family/place_holder.jpg'
        },
        {
          role: 'Grand Mother',
          image: './images/family/place_holder.jpg'
        },
        {
          role: 'Grand Father',
          image: './images/family/place_holder.jpg'
        },
        {
          role: 'Grand Mother',
          image: './images/family/place_holder.jpg'
        },
        {
          role: 'Grand Father',
          image: './images/family/place_holder.jpg'
        }
      ]
    };
  }

  render(): ReactNode {
    const { members } = this.state;
    return (
      <div id="family" className="family-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Tin's Family</h2>
                <p>The most important thing in the world is family and love.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {members.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-team-member">
                  <div className="family-img">
                    <img className="img-fluid" src={item.image} alt="" />
                  </div>
                  <div className="family-info">
                    <h4></h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyBox;
