import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import './About.css';

function About (){
return(
     <div  >
         
        <div class="row text-center about">
                <section class="col-sm-12 col-md-12 mb-4 section-about " id="header">
                    <div className="overlay">
                    <h1 className="abouth" >WHO WE ARE</h1>  
                    </div>
                </section>
                <h1 className="abouth2" >Hi there! We're the developers who made this project.</h1> 
                <div class="col-md-6">
                    <div class="developers mb-5">
                        <div class="img mx-auto">
                            <img src="https://i.postimg.cc/vTKCqzLG/Guillermo-Suruguay-3-2.png"  alt="" width="280px" height="auto" class="rounded-circle z-depth-5 img-fluid"></img>
                        </div>
                        <h4 class="text-light mt-4">Guillermo German Suruguay</h4>
                        <h6 class="text-light my-3">Fullstack Web Developer</h6>
                        <p className="p-about">
                        Hi there! My name is Guillermo, I am a Fullstack Web Developer in nodeJS and PHP, I have +5 years of experience leading work teams and +5 years of experience in customer service and sales, always focused 
                        on achieving objectives. I am a student of the University Programmer Analyst career. I am looking to join an IT company where I can 
                        develop and contribute my knowledge, communication skills and teamwork. I am self-taught, with a strong capacity for learning, enthusiasm and planning. 
                        </p>
                        
                    </div>

                </div>
                
                <div class="col-md-6">
                    <div clas="developers mb-5">
                        <div class="img mx-auto">
                        <img src="https://i.postimg.cc/FH89YdTR/zyro-image-8.png" alt="" width="385px" height="auto"  class=" z-depth-5 img-fluid"/>
                        </div>
                        <h4 class="text-light mt-4"> Lourdes Alejandra Alvarez</h4>
                        <h6 class="text-light my-3">Developer</h6>
                        <p class="p-about">Hi, nice to meet you! I'm Lourdes. I'm a computer technician, and currently I am in my last year of the University Programmer Analyst career at UNJU. I have knowledges in desktop application programming and web development. I'm a motivated person with the ability to work under pressure. My greatest strengths are my determination and persistence. I'm  currently looking for a job or an intership where I can grow and learn for other experienced team members.</p>
                        
                    </div>

                </div>

         </div>
    </div>
);

}
export default About;