import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Images from "../images/FishCreek.jpg";
import Image1 from "../images/ConfederationPark.jpg";
import Image2 from "../images/edworthy-bridge.jpg";
import Image3 from "../images/recordingBG.png";
import Image4 from "../images/NoseHillPark.jpg";
import Image5 from "../images/PrinceIslandPark.jpg";
import Image6 from "../images/St.PatrickIslandPark.jpg";
import Image7 from "../images/SueHigginsPark.jpg";
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faHospital, faMapLocationDot, faEye, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { myParkStyle, upLoadstyle, carousalStyle, fontStyle  } from "./Styles";


const Parks = () => {

  const [ fileData, setFileData ] = useState();
  const [isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {

    setFileData(event.target.files[0]);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    //The for accepts a key:value to store data
    const data = new FormData()
    //Image name must corresponds to data in database.
  setIsPending(true);
    data.append("image", fileData);
    try {
      fetch("/upload", {
        method: "POST",
        body: data,
      })
      setIsPending(false)
    } catch (error) {
      alert('something wrong')
      console.log(error.message);
    }
    navigate("/")
  };

  return (
    <div>
      <div style={upLoadstyle}>
        <Container fluid='md'>
          <Row>
            <Col>
              <img alt='parks' width='420px' src={Image3}/>
            </Col>
            <Col>
              <div className='py-3 my-5'>
              <h1>Make your experience better</h1>
                <form onSubmit={handleSubmit}>
                  <label>Submit a complaint by Uploading an Image.</label><br />
                  <input type="file" onChange={handleFileChange} /><br />
                  {!isPending && <Button className='shadow-none my-3' variant="outline-warning" size="lg" type='submit'>Upload</Button>}
                  {isPending && <Button className='shadow-none my-3' variant="outline-success" disabled size="lg" type='submit'>Uploading ...</Button>}
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      
      <div style={myParkStyle}>
        <Container fluid='md'>
          <Row>
            <div class="text-center">
          <h1 className='animate__animated animate__heartBeat'>The Most Beautiful Parks</h1>
          <h3>Calgary's parks and green spaces offer an urban connection to nature</h3>
          </div>
            <Carousel>
              <Carousel.Item interval={2000}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Images}
                    alt="Fish Creek Provincial Park"/>
                  <Carousel.Caption>
                    <h3>Fish Creek Provincial Park</h3>
                    <p>Fish Creek Provincial Park is the second largest urban park in Canada,
                      with more than 100 kilometres of hiking and biking trails. Birding enthusiasts can observe more than 200 bird species along with Great Blue Herons, ducks, geese, songbirds, and bald eagles that nest along the Bow River valley. The Provincial Park is so large it includes a boat launch, the McKenzie Meadows Golf Course, The Bow Valley Ranche Restaurant, and the Sikome Aquatic Facility for a family friendly day at the beach. All these activities make Fish Creek Provincial Park a local favourite for a day in the great outdoors.</p>
                    <p>Location: <a a href="https://www.google.com/maps/place/Visitor+Centre+-+Fish+Creek+Provincial+Park/@50.9103451,-114.0198039,15z/data=!4m5!3m4!1s0x0:0x2694044fdcb34327!8m2!3d50.910209!4d-114.0197319" class="stretched-link" rel="opener">15979 Bow Bottom Trail SE</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image1}
                    alt="Confederation Park"/>
                  <Carousel.Caption>
                    <h3>Confederation Park</h3>
                    <p>Marking the centennial of Canadian Confederation in 1967, Confederation Park is considered a model in landscape design. Natural wetland areas, thriving with aquatic vegetation and exotic species, sits side-by-side a natural playground, designed to celebrate Canada’s 150th birthday. A tipped over Voyageur canoe is the centrepiece of the natural playground, along with a multi-level fort and water pump kids will love. Celebrate the holiday season in Confederation Park with the Lions Festival of Lights, a local tradition for over three decades that lights up the sky with over 500,000 lights.</p>
                    <p>Location: <a a href="https://www.google.ca/maps/place/Confederation+Park/@51.079769,-114.079318,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f870cce6cc1:0x9977f871fce03e04!8m2!3d51.079769!4d-114.079318?hl=en" class="stretched-link" rel="opener">905 30 Ave NW</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image2}
                    alt="Edworthy Park"/>
                  <Carousel.Caption>
                    <h3>Edworthy Park</h3>
                    <p>Bordered by the beautiful Bow River and the community of Wildwood, Edworthy Park is home to hiking trails, playgrounds, and picnic sites. Explore the Douglas Fir Trail, a 2.5 kilometre gravel and dirt trail through a forest of Douglas-firs, with lookout points and views of the Bow River Valley. Historic Lawrey Gardens covers 169 hectares, including an off-leash area and a diverse collection of wildflowers and wildlife. Lookout for Rainbow and Brown Trout in the water. All this nature adventure is ready to explore in the middle of the city.</p>
                    <p>Location: <a a href="https://www.google.ca/maps/place/Edworthy+Park/@51.0633376,-114.1556968,17z/data=!3m1!4b1!4m5!3m4!1s0x53716e4e8351e247:0x3c54a79f7f6cd44c!8m2!3d51.0633376!4d-114.1556968" class="stretched-link" rel="opener">5050 Spruce Dr. SW</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image4}
                    alt="Nose Hill Park"/>
                  <Carousel.Caption>
                    <h3>Nose Hill Park</h3>
                    <p>How do you think Nose Hill Park is an impressive feature of the north west skyline amongst the 12 communities that surround it. Hike the trails of Nose Hill Park’s 11 square kilometres, enjoy the off-leash area with your dog, and take in one of the most significant examples of Rough Fescue grassland ecosystems in the Canadian prairies. Deer can often be spotted roaming the area, along with gophers and hawks. You can even get Rocky Mountain views from the top of the hill.</p>
                    <p>Location: <a a href="https://www.google.ca/maps/place/Nose+Hill+Park/@51.1119248,-114.1114232,14z/data=!4m2!3m1!1s0x537165f81dcb7df7:0x7576f90d970ea8af" class="stretched-link" rel="opener">5620 14 St. NW</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image5}
                    alt="Princes Island Park"/>
                  <Carousel.Caption>
                    <h3>Princes Island Park</h3>
                    <p>Named for Peter Anthony Prince, a lumberman who came to Calgary in 1886, Prince’s Island Park has become a popular downtown oasis. Host to festivals and events throughout the year, including Canada Day celebrations and the Calgary Folk Music Festival, Prince’s Island Park is always full of energy. Enjoy a picnic lunch in the park, walk the Chevron Learning Pathway, or dine at the River Café, an award-winning restaurant nestled in the middle of the park.</p>
                    <p>Location: <a a href="https://www.google.ca/maps?q=prince%27s+island+park&hl=en&sll=51.013117,-114.088499&sspn=0.659228,1.722107&hq=prince%27s+island+park&t=m&z=16" class="stretched-link" rel="opener">4 St. and 1 Ave. SW</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image6}
                    alt="St. Patricks Island Park"/>
                  <Carousel.Caption>
                    <h3>St. Patricks Island Park</h3>
                    <p>One of Calgary’s newest parks, St. Patrick’s Island was redeveloped in 2015 with hiking and biking trails, a public plaza and amphitheatre, playground, and restored river channels. Take a walk to the top of The Rise, a grassy knoll used for community festivals and outdoor movies in the summer and tobogganing in the winter. Wade into the water of the Seasonal Breach or get downtown city views across the Bow River from the westernmost edge of the island. Ride your bike over the George C. King Bridge for a wonderful way to access the island from East Village and get a view of the Bloom sculpture, a series of city streetlights designed by artist Michel de Broin.</p>
                    <p>Location: <a a href="https://www.google.ca/maps/place/St+Patrick%27s+Island,+Calgary,+AB/@51.0473074,-114.0420884,17z/data=!3m1!4b1!4m2!3m1!1s0x53717aace7dfa08f:0xfcad0ceaea045ae1" class="stretched-link" rel="opener">1300 Zoo Rd. NE</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img width="400" height="750"
                    className="d-block w-100"
                    src={Image7}
                    alt="Sue Higgins Park"/>
                  <Carousel.Caption>
                    <h3>Sue Higgins Park</h3>
                    <p>Ready to let the dogs run? Sue Higgins Park is home to the largest fenced off-leash area in Calgary along with public artwork Deux Chiens Assis, two bronze dog statues by artist Henri Jacquemart, crafted in the 1800s. Wander through 62 hectares of green space along the riverbanks and keep your eyes peeled for diving ducks, Canada Geese, gulls, red-winged blackbirds, woodpeckers, and warblers. Be sure to listen for the Boreal Chorus Frog, which sounds like someone running their finger along the teeth of a nylon comb.</p>
                    <p>Location: <a a href="https://www.google.ca/maps/place/Sue+Higgins+Park/@50.968224,-114.027801,17z/data=!3m1!4b1!4m2!3m1!1s0x537170cdcfbae539:0xfb863bb88673f0be" class="stretched-link" rel="opener">Southland Dr. & Deerfoot Trail SE</a></p>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
      <div style={carousalStyle} className='mb-2'>
          <Row className='px-5 mx-5'>
            <Col>
              <h1>Attraction</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faGlobe} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Safety</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faCampground} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Tour Guide</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faEye} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Maps</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faMapLocationDot} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Hospitals</h1>
              <FontAwesomeIcon className='px-4 mx-1' icon={faHospital} size="2x" style={fontStyle} />
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Parks;