import { Component } from '@angular/core';
import {User} from "./models/user";
import {Experience} from "./models/experience";
import {Portfolio} from "./models/portfolio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OtsemboPortfolio';

  //current year
  currYear: number = new Date().getFullYear();
  //start year
  startYear: number = 2016;

  experience() : number{
    return this.currYear - this.startYear
  }

  exp = this.experience();

  //profile description
  desc: string = 'I am a technology enthusiast with a passion for emerging technologies and computer hardware. Packed with 5 years of professional software development in different companies. Passionate blogger and podcast host around the topics of machine learning and computer hardware.\n' +
    'I have also trained over 250 students on their journeys to becoming successful Android developers across two established tech institutions in Kenya.\n' +
    'To put it simply, I am in love with mobile technologies: Native Applications, Cross-Platform Apps, Mobile Web and Machine Learning on the edge.';

  //user object
  user:User = new User();

  //stack descriptions
  desktop: string = 'Native applications that run on Windows, MacOS and Linux';
  webdev: string = 'Get a web application for all your personal or enterprise needs';
  androiddev: string = 'Mobile Applications that run on Android';
  crossplatform:string = 'Cross platform applications that run on both Android and iOS';

  //add experience
  actualExp = new Experience(1, "Technical Mentor", "Moringa School","Aug 2021 - Present" ,"Nairobi, Kenya",
    "Develop, maintain and test Android Applications. Mentor students in their Android Development journey.");
  expArray = Array<Experience>();

  arr = this.setUpExperience();

  setUpExperience() : Array<Experience> {
    //from latest to the first
    this.expArray.push(this.actualExp);

    this.actualExp =new Experience(2, "Android Engineer", "Amaris Solutions Group","Aug 2020 - Present" ,"Nairobi, Kenya",
      "\n" +
      "Document and test new software applications\n" +
      "Assess new application ideas\n" +
      "Research competitor offerings\n" +
      "Develop applications (coding, programming)\n" +
      "Interview beta testers");
    this.expArray.push(this.actualExp);


    this.actualExp =new Experience(3, "Android Developer", "Zalego Academy","Jan 2021 - Jul 2021" ,"Nairobi, Kenya",
      "Translate designs and wireframes into high quality code\n" +
      "Design, build, and maintain high performance, reusable, and reliable Java code\n" +
      "Ensure the best possible performance, quality, and responsiveness of the application\n" +
      "Identify and correct bottlenecks and fix bugs\n" +
      "Help maintain code quality, organization, and automation");
    this.expArray.push(this.actualExp);

    this.actualExp =new Experience(4, "Android Apps Development Trainer", "Zalego Academy","Jan 2020 - Dec 2020" ,"Nairobi, Kenya",
      "Trainer on Android application development.\n" +
      "Supervision of students' projects.\n" +
      "Developing and maintaining Android applications on behalf of the institution.");
    this.expArray.push(this.actualExp);


    this.actualExp =new Experience(5, "Software Engineer Student Intern", "Zalego Academy","Apr 2019 - Nov 2019" ,"Nairobi, Kenya",
      "Trainer on Android Development\n" +
      "Student project's advisor.\n" +
      "Android application development.");
    this.expArray.push(this.actualExp);


    this.actualExp =new Experience(6, "Junior Android Engineer", "Amaris Solutions Group","Oct 2016 - Oct 2017" ,"Nairobi, Kenya",
      "Document and test new software applications\n" +
      "Assess new application ideas\n" +
      "Develop applications (coding, programming)\n" +
      "Interview beta testers");
    this.expArray.push(this.actualExp);


    return this.expArray;

  }

  isOdd(num:number) : boolean{
    return num % 2 != 0;
  }

  dir(odd:boolean): string{
    if(odd) return "left slideInLeft"
    else return "right slideInRight"
  }

  portfolio = Array<Portfolio>();
  port:Portfolio = new Portfolio(1, "Autlyn", "Android", "https://play.google.com/store/apps/details?id=com.biz.autlyn", "https://autlyn.biz/img/the-app.png");
  setUpPortfolio() : Array<Portfolio>{

    this.portfolio.push(this.port);

    this.port = new Portfolio(2, "MyAsendance", "Android", "https://myascendance.com/", "https://myascendance.com/wp-content/uploads/2021/07/cropped-logo-2048x1873.png")
    this.portfolio.push(this.port);

    this.port = new Portfolio(3, "Sokoni", "Android", "https://play.google.com/store/apps/details?id=com.zalego.sanmarino", "https://myascendance.com/wp-content/uploads/2021/07/cropped-logo-2048x1873.png")
    this.portfolio.push(this.port);

    this.port = new Portfolio(4, "We-Artify", "Web", "https://www.we-artify.com/", "https://www.we-artify.com/images/1.png")
    this.portfolio.push(this.port);

    this.port = new Portfolio(5, "Bloomgain Consoltunts", "Web", "https://www.bloomgain.co.ke/", "https://www.bloomgain.co.ke/static/assets/images/bloomgain_logo.png")
    this.portfolio.push(this.port);

    this.port = new Portfolio(6, "COMTECH-DATA", "Web", "https://comtech-data.com/", "https://comtech-data.com/assets/comtech/page2.jpg")
    this.portfolio.push(this.port);

    return this.portfolio;
  }

  portfolioData = this.setUpPortfolio();

  loadTime(num:number): string{
    if (num) return "0.0s"
    else return "1.0s"
  }

}
