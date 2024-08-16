import { Element } from "react-scroll";


function Section() {
  return (
    <div className="sections">
       <Element className='tabData' name="tab1">
              <h2>Dropshipping Challenge</h2>
              <p>From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue. </p>
              <p>Students have dropshipped products ranging from pet supplies to green stationery worth over <b>INR 2 Cr.</b></p>

              <div className='img-container'>

                <img src="https://picsum.photos/id/237/320/240" alt="" />
                <img src="https://picsum.photos/id/238/320/240" alt="" />
              </div>
            </Element>
            <Element className='tabData' name="tab2">
              <h2>Creator Challenge</h2>
              <p>From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue. </p>
              <p>Students have dropshipped products ranging from pet supplies to green stationery worth over <b>INR 2 Cr.</b></p>

              <div className='img-container'>

                <img src="https://picsum.photos/id/241/320/240" alt="" />
                <img src="https://picsum.photos/id/268/320/240" alt="" />
              </div>
            </Element>
            <Element className='tabData' name="tab3">
              <h2>Local Consulting Challenge</h2>
              <p>From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue. </p>
              <p>Students have dropshipped products ranging from pet supplies to green stationery worth over <b>INR 2 Cr.</b></p>

              <div className='img-container'>

                <img src="https://picsum.photos/id/234/320/240" alt="" />
                <img src="https://picsum.photos/id/284/320/240" alt="" />
              </div>
            </Element>
            <Element className='tabData' name="tab4">
              <h2>CXO Challenge</h2>
              <p>From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue. </p>
              <p>Students have dropshipped products ranging from pet supplies to green stationery worth over <b>INR 2 Cr.</b></p>

              <div className='img-container'>

                <img src="https://picsum.photos/id/877/320/240" alt="" />
                <img src="https://picsum.photos/id/296/320/240" alt="" />
              </div>
            </Element>
      
    </div>
  )
}

export default Section
