import React from 'react'
import './App.css';

function Grid() {
    const categories_item = ["All", "Artificial Intelligence", "Cloud Computing", "DevOps", "Programming Language", "Mobile Application Development", "Technology and Tools", "Get a Job in a Tech Company", "Others"];
    return (
        <div>
            <div className="main-div">
                <h2 className="main-heading">Trending Posts</h2>
                <div className="filter">
                    <i style={{ fontSize: '24px' }} className="fa"> &#xf0b0;</i>
                    <p>Filter by Category</p>
                </div>
                <div id="categories-container">
                    <div>{categories_item.filter(name => name).map(fileredCatagory => (<div className="categories"  > {fileredCatagory} </div>))}</div>

                </div>
                <div className='card-items'>
                                        
                  <div className="card">
                      <div className="img-section">
                          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" alt="Ace your Soft Skills - Tips to crack the job interview"/>
                      </div>
      
                      <div className="details">
                          <h2 className="title">Ace your Soft Skills - Tips to crack the job interview</h2>
                          <a href="#" className="author">Pitanjal Dutta</a>
                          <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                          <p className="para">Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is given a lot of weightage and thus becomes a</p>
                      </div>
                  </div>               
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="From identity crisis to the Success Story - The DevOps revolution!"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">From identity crisis to the Success Story - The...</h2>
                              <a href="# " className="author ">Kalyan Mahalingam</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para ">DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the.</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg" alt="Typical day of Data Scientist - An insider story!"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">Typical day of Data Scientist - An insider...</h2>
                              <a href="# " className="author ">Saurav Ghosh</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para ">I have been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that a</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="Amazon Web Services (AWS) Cloud Day - Bangalore"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">Amazon Web Services (AWS) Cloud Day...</h2>
                              <a href="# " className="author ">Kalyan Mahalingam</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para ">It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg" alt="edYoda Meetup #01 : A Date with Cloud"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">edYoda Meetup #01 : A Date with Cloud</h2>
                              <a href="# " className="author ">Ashish Pandey</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para ">I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg" alt="Industry 4.0 - The Prospects &amp; Journey ahead!"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">Industry 4.0 - The Prospects & Journey...</h2>
                              <a href="# " className="author ">Pitanjal Dutta</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para ">Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human involvement?</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png" alt="Why do Database Systems Exist ?"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">Why do Database Systems Exist ?</h2>
                              <a href="# " className="author">Pitanjal Dutta</a>
                              <span className="date"> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para">Wondering why Database Management Systems like MySQL, NOSQL, MSSQL, Oracle SQL, MongoDB form the fundamental blocks behind working with Data?</p>
                          </div>
                      </div>
                      {/* <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="Introducing you all to EdYoda - www.edyoda.com"/>
                          </div>
                          <div className="details">
                              <h2 className="title">Introducing you all to EdYoda...</h2>
                              <a href="# " className="author ">Arman Ahmed</a>
                              <span className="date "> <strong> | </strong> 05 Jul 2019</span>
                              <p className="para ">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.</p>
                          </div>
                      </div> */}
                      
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" alt="Master your General Aptitude Job Interview Success"/>
                          </div>
          
                          <div className="details">
                              <h2 className="title">Master your General Aptitude Job Interview...</h2>
                              <a href="#" className="author">Pitanjal Dutta</a>
                              <span className="date "> <strong> | </strong> 09 Jul 2019</span>
                              <p className="para">A general aptitude becomes very important, when you apply for a job in a tech company. You might be highly skilled in your subject domain. However, these basic</p>
                          </div>
                      </div>
                      <div className="card">
                          <div className="img-section">
                              <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="Introducing you all to EdYoda - www.edyoda.com"/>
                          </div>
                          <div className="details">
                              <h2 className="title"> Introducing you all to EdYoda - Open platform to learn...</h2>
                              <a href="# " className="author "> Arman Ahmed </a>
                              <span className="date "> <strong> | </strong> 05 Jul 2019</span>
                              <p className="para ">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.We are launching the beta today open for Learners .</p>
                          </div>
                      </div>
                  </div>

                </div>
            </div>
    
    );
}

 export default Grid;  