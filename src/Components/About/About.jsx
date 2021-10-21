import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About (){
return(
     <div  id="about">
        <div class="row text-center">
                <section class="col-sm-12 col-md-12 mb-4" id="header">
                   <h1 class="text-center mt-4 text-secondary">WHO WE ARE</h1> 
                   <h1 class="text-center mt-4 text-secondary">Hi there! We're the developers who made this project.</h1> 
                </section>
                
                <div class="col-md-6">
                    <div class="developers mb-5">
                        <div class="img mx-auto">
                            <img src="https://i.postimg.cc/vTKCqzLG/Guillermo-Suruguay-3-2.png"  alt="" width="280px" height="auto" class="rounded-circle z-depth-5 img-fluid"></img>
                        </div>
                        <h4 class="dark-grey-text mt-4">Guillermo German Suruguay</h4>
                        <h6 class="blue-text my-3">Fullstack Web Developer</h6>
                        <p class="font-weight-normal dark-grey-text">
                        Hi there! My name is Guillermo, I am a Fullstack Web Developer in nodeJS and PHP, I have +5 years of experience leading work teams and +5 years of experience in customer service and sales, always focused 
                        on achieving objectives. I am a student of the University Programmer Analyst career. I am looking to join an IT company where I can 
                        develop and contribute my knowledge, communication skills and teamwork. I am self-taught, with a strong capacity for learning, enthusiasm and planning. 
                        </p>
                        <div mb-5 class="contactos">
                            <h5>CONTACT</h5>
                        <p class=" dark-grey-text">
                            <a href="mailto:guillermo.suruguay@gmail.com" target="blank">
                                <img src="https://i.postimg.cc/9XKvWZXR/logo-gmail.png"  alt="" width="80px" height="auto"  />
                            </a>  
                            <a href="https://github.com/gsuruguay" target="blank"> 
                                <img src="https://i.postimg.cc/zXh43v3d/logo-github.png"  alt="" width="80px" height="auto"  />
                            </a>
                            <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web/" target="blank">
                                <img src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png" alt="" width="50px" height="auto"/>
                            </a> 
                        </p>
                        </div>
                    </div>

                </div>
                
                <div class="col-md-6">
                    <div clas="developers mb-5">
                        <div class="img mx-auto">
                        <img src="https://i.postimg.cc/FH89YdTR/zyro-image-8.png" alt="" width="385px" height="auto"  class="rounded-circle z-depth-5 img-fluid"/>
                        </div>
                        <h4 class="dark-grey-text mt-4"> Lourdes Alejandra Alvarez</h4>
                        <h6 class="blue-text my-3">Developer</h6>
                        <p class=" dark-grey-text">Hi, nice to meet you! I'm Lourdes. I'm a computer technician, and currently I am in my last year of the University Programmer Analyst career at UNJU. I have knowledges in desktop application programming and web development. I'm a motivated person with the ability to work under pressure. My greatest strengths are my determination and persistence. I'm  currently looking for a job or an intership where I can grow and learn for other experienced team members.</p>
                        <div mb-5 class="contactos">
                            <h5>CONTACT</h5>
                        <p class=" dark-grey-text">
                            
                            <a href="mailto:lourdes.aa088@gmail.com" target="blank">
                                <img src="https://i.postimg.cc/9XKvWZXR/logo-gmail.png" alt="" width="80px" height="auto" />
                            </a> 
                            <a href="https://github.com/LourAlvarez" target="blank"> 
                                <img src="https://i.postimg.cc/zXh43v3d/logo-github.png" alt="" width="80px" height="auto" />
                            </a>
                            <a href="https://www.linkedin.com/in/lourdes-alvarez-ba1511223/" target="blank">
                                <img src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png"  alt="" width="50px" height="auto" />
                            </a>      
                        </p>
                        </div>
                    </div>

                </div>

         </div>

    </div>
);

}
export default About;