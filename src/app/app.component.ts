import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data';
  base64code!: string;
  imageUrl: any ;
  imgElem:any;
  base64String:any;

  info=[

      {
        "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "name":"Raj",
        "phone":1234567890,
         "email":"raj@gmail.com",
        "age":20,
        "city":"Delhi",
        "occupation":"Software Engineer",
        "salary":20000,
         "data":[

            {

              "education":"B.Tech",
              "college":"IIT",
              "year":2018
            }
         ]


      },

      {
        "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "name":"Krishna",
        "phone":1234567890,
        "email":"krishna@gmail.com",
        "age":22,
        "city":"Kanpur",
        "occupation":"QA Engineer",
        "salary":30000,
         "data":[

            {

              "education":"B.Tech",
              "college":"IIT",
              "year":2021
            }
         ]


      },

      {
        "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "name":"Richa",
        "phone":123478950,
        "email":"rich99@gmail.com",
        "age":23,
        "city":"Mumbai",
        "occupation":" UI/UX Designer",
        "salary":40000,
         "data":[

            {
              "education":"B.Tech",
              "college":"NIT",
              "year":2022

            }
         ]


      },

      {
        "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "name":"Trishika",
        "phone":789542221,
        "email":"trishika123@gmail.com",
        "age":22,
        "city":"Kolhapur",
        "occupation":"Sotware Tester",
        "salary":30000,
         "data":[

            {
              "education":"B.E",
              "college":"GCE",
              "year":2021
            }
         ]


      },

      {
        "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "name":"Deepak",
        "phone":546987123,
        "email":"deepak789@gmail.com",
        "age":22,
        "city":"Surat",
        "occupation":"Database Administator",
        "salary":30000,
         "data":[

            {

              "education":"B.Tech",
              "college":"MIT",
              "year":2021
            }
         ]


      },
  ]


  ngOnInit(){

  }
  // to get the image from the input
    onChange(event:any){
      // to get  the file
      const files = event.target.files;
      // to get the first file
      const file = files[0];
      // to check if the file is present
      if(files && file){
        // created new FileObject
        const reader = new FileReader();
        // call the onload method of the reader
        reader.onload = this.handleFile.bind(this);
        // call the readAsBinaryString method to read the file
        reader.readAsBinaryString(file);
      }
    }
    // to handle the file
    handleFile(event:any){
      // to get the binary data of the image
      const binaryString = event.target.result;
      // convert the binary string to base64
      this.base64code = btoa(binaryString);
      console.log(btoa(binaryString));
      // set the base64 code to the image src
      this.imageUrl = 'data:image/jpeg;base64,' + this.base64code;
      console.log(this.imageUrl);
     }



  }
