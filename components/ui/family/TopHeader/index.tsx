import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NavLinkType {
  name: string;
  link: string;
}

interface TopHeaderState {
  navLinks: NavLinkType[];
  selectedLink: string;
}

class TopHeader extends Component<{}, TopHeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      navLinks: [
        { name: 'Home', link: '#home' },
        { name: 'Story', link: '#story' },
        { name: 'Family', link: '#family' },
        { name: 'Gallery', link: '#gallery' }
      ],
      selectedLink: 'Home'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const sections = this.state.navLinks.map((nav) =>
      document.querySelector(nav.link)
    );

    let currentSection = '';
    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if the section is in viewport
        if (sectionTop <= 100 && sectionBottom >= 100) {
          currentSection = this.state.navLinks[index].name;
        }
      }
    });

    if (currentSection !== '' && currentSection !== this.state.selectedLink) {
      this.setState({ selectedLink: currentSection });
    }
  };

  handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    nav: NavLinkType
  ) => {
    e.preventDefault();
    const element = document.querySelector(nav.link);
    this.setState({ selectedLink: nav.name });
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 30;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  render(): ReactNode {
    const { navLinks, selectedLink } = this.state;
    return (
      <header className="top-header fixed-menu">
        <nav className="navbar header-nav navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="./images/family/tin/logo.svg"
                alt="Tin's Family"
                style={{
                  width: '180px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-wd"
              aria-controls="navbar-wd"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbar-wd"
            >
              <ul className="navbar-nav">
                {navLinks.map((nav, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${selectedLink === nav.name ? ' active' : ''}`}
                      href={nav.link}
                      onClick={(e) => this.handleScrollToSection(e, nav)}
                    >
                      {selectedLink != nav.name && (
                        <motion.span
                          initial={{ y: 0, scale: 1 }}
                          whileHover={{
                            y: -15,
                            scale: 1.1,
                            transition: {
                              type: 'spring',
                              stiffness: 400,
                              damping: 10
                            }
                          }}
                        >
                          {nav.name}
                        </motion.span>
                      )}
                      {selectedLink === nav.name && (
                        <motion.span
                          initial={{ y: 0, scale: 1 }}
                          animate={{ scale: 1.05 }}
                          whileHover={{
                            y: -15,
                            scale: 1.15,
                            transition: {
                              type: 'spring',
                              stiffness: 400,
                              damping: 10
                            }
                          }}
                        >
                          {nav.name}
                        </motion.span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default TopHeader;
