import React from 'react';
import { Link } from 'react-router-dom';

const StoriesPar = () => {
  return (
    <>
      <div className="stories-item">
        <div className="fixed">
          <div className="content">
            <div className="htext">the indian polo awards</div>
            <div className="description">
              The Indian Polo Awards is an initiative to recognize and celebrate
              the conspicuous success of the most remarkable people from the
              magnificent world of Polo. As a first of its kind venture, the
              Awards
            </div>
            <div className="button">
              <Link to="/home">
                <a className="btn" href=".">
                  know more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="stories-item">
        <div className="fixed">
          <div className="content">
            <div className="htext">the polo awards</div>
            <div className="description">
              The Indian Polo Awards is an initiative to recognize and celebrate
              the conspicuous success of the most remarkable people from the
              magnificent world of Polo. As a first of its kind venture, the
              Awards
            </div>
            <div className="button">
              <Link to="/home">
                <a className="btn" href=".">
                  know more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesPar;
