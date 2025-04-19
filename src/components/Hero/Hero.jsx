const Hero = () => {
    return (
    <section className="slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box layout_padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <div>
                        <img src="src/assets/img/slider-img.jpg" alt="" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box d-flex align-items-center justify-content-center flex-column">
                      <div style={{width: '300px'}}>
                        <h1>
                        CONINGENIO
                        <br/>
                          <span>
                          ASASDDASD
                          </span>
                        </h1>
                        <p style={{fontSize: '1.5rem'}}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam voluptate omnis animi adipisci architecto sit ullam commodi aliquam, quas maiores officiis hic quos facilis repellendus ea sint sapiente quae praesentium?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Hero;