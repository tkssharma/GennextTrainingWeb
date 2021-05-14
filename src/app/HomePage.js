import React, { Fragment } from 'react';

const HomepageWrapper = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="container">
          <div className="logo-holder">
            <a href="#!/web">
              <img alt="Tech logo angular" src="img/angular.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="React" src="img/react.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Js" src="img/javascript.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Tech logo d3" src="img/d3.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Es6" src="img/jss.svg" />
            </a>
          </div>

          <h1 className="mega title">
            GenNext Training to deliver project based learning to give you the
            head start you need as a developer
          </h1>

          <p className="subtitle">
            Level up your programming skills today with condensed video lessons
            on industry leading web frameworks and tools!
          </p>
          <a
            id="signup"
            href="#!/all"
            className="custom-btn custom-btn-red custom-btn-primary"
          >
            Unlock the Knowledge <br />{' '}
            <small>
              <i>click here to start</i>
            </small>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row block-lessons-series">
            <div
              ng-repeat="data in applicationYouTubeData"
              className="col-sm-6 item"
            >
              <div className="media-holder">
                <a href="">
                  {' '}
                  <img
                    ng-src="{{data.Thumbnails[0].FullURL}}"
                    className="img-responsive banner-responsive"
                  />
                </a>
              </div>

              <div className="media-subscription-holder">
                <h3 className="title">
                  <p>{'title'}</p>
                </h3>
                <div className="info-line">
                  <small className="folder">
                    {' '}
                    <i className="icon-folder-open-alt"></i>
                    <a href=" #!/youtube/{{data.ID}}">
                      watch Training Videos On YouTube
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomepageWrapper;
