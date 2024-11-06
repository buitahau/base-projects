import { Component, ReactNode } from 'react';

export default class Footer extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <footer className="footer-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="footer-company-name">
                All Rights Reserved. &copy; 2018 Design By :{' '}
                <a href="https://html.design/">html design</a> Distributed by:{' '}
                <a href="https://themewagon.com/">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
