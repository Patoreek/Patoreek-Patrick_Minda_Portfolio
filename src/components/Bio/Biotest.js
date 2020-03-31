function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
                <div className={classes.aboutMeContainer}>
                        <h1 className={classes.aboutMeHeader}> About Me</h1>
                        <p  className={classes.aboutMeParagraph}>
                        My career goal is to become successful in the IT industry and be able to 
                        contribute in some way such as build a website or a server for a corporation
                        or maintain complicated systems for businesses.  I always try my best to 
                        reach higher, work harder and progress to more demanding tasks. I want to
                        pursue a career in Tech Support and fully commit to a role to reach my career
                        goal. My passion would push myself to learn and progress higher into the 
                        field.  I am willing to work hard and with a strong focus to achieve my 
                        career goals. I am currently undergoing study at TAFE for a Diploma in Web
                        Development and also work on improving my current knowledge through online 
                        courses.
                        </p>
                </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <div  className={classes.attributesContainer}>
                    <h3 className={classes.attributesHeader}>Personal Attriubutes</h3>
                    <ul className={classes.attributesList}>
                        <li>Speak and understand a second language - Polish</li>
                        <li>Persistent</li>
                        <li>Commonsense approach to customers</li>
                        <li>Positive self esteem</li>
                        <li>Good sense of humour</li>
                        <li>Loyal and reliable</li>
                        <li>Honest and enthusiastic</li>
                        <li>Able to handle pressure</li>
                        <li>Good understanding of hardware </li>
                        <li>Able to solve problems effectively</li>

                    </ul>
                </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <div className={classes.hobbiesContainer}>
                <h3 className={classes.hobbiesHeader}>Interests and Hobbies</h3>
                <ul className={classes.hobbiesList}>
                    <li>Scuba Diver - PADI Advanced Scuba Diver</li>
                    <li>Football</li>
                    <li>Video Games</li>
                    <li>Photography</li>
                    <li>Video Editing</li>
                    <li>Able to play Instruments - Guitar / Drums / Piano / Ukelele </li>
                    <li>Music - Electronic Music</li>
                    <li>Music Production</li>
                    <li>Entreprenuership</li>
                </ul>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  render(<ControlledCarousel />);