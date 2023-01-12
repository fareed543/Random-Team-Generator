import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JCL Team Auction';

  finalTeamsList: any = [];
  captain : string = "";

  playersList : any  = [
    "Shubra",
    "Sharath",
    "Ashwin",
    "Navod",
    "Akshay",
    "Shadab",
    "Ganesh",
    "Harsh",
    "Guru",
    "Satheesh",
    "Tarang",
    "Santosh",
    "Suhail",
    "Druvith",
    "Milind",
    "Jai Ganesh",
    "Mailari",
    "Subhashish",
    "Nikhil Jain",
    "Jagdeesh",
    "Rahul",
    "Praveen",
    "Idrees",
    "Ravi Rathod",
    "Ritesh",
    "Raj Kumar",
    "Shubham",
    "Anvesh",
    "Aryan",
    "Nihaal",
    "Karthik",
    "Achintya",
    "Saqlain",
    "Anirudh",
    "Jeevan",
    "Girish",
    "Bharath",
    "Bani",
    "Hari Prasad",
    "Sahil",
    "Shesha",
    "Gaurav"
  ];
  PremiumPlayersList : any  = [
    "Sakshi",
    "Devanshi ",
    "Deepti ",
    "Harshitha ( TAD )",
    "Divya",
    "Harshitha ( Fresher )",
    "Shraddaha"
  ];

  selectedPayers : any = [];
  
  selectedPremiumPlayersList : any = [];
  slectPlayers(){


    if(this.selectedPayers.lenght != 0 ||  this.PremiumPlayersList.lenght != 0 ){
      

    // const array = ['a', 'b', 'c', 'd','e','f','g','h'];
    const n = 6; // number of elements we want to get
    const shuffledArray = this.playersList.sort(() => 0.5 - Math.random()); // shuffles array
    this.selectedPayers = shuffledArray.slice(0, n); // gets first n elements after shuffle


    const shuffledPArray = this.PremiumPlayersList.sort(() => 0.5 - Math.random()); // shuffles array
    const Pn = 1;
    this.selectedPremiumPlayersList = shuffledPArray.slice(0, Pn); // gets first n elements after shuffle

    
    this.finalTeamsList.push({
      captain : this.captain,
      selectedPayers : this.selectedPayers,
      selectedPremiumPlayersList : this.selectedPremiumPlayersList
    })
    // console.log(result);

    // remove the values from array
    this.selectedPayers.forEach( (player : string) => {
    const index = shuffledArray.indexOf(player);
      if (index > -1) { // only splice array when item is found
      shuffledArray.splice(index, 1); // 2nd parameter means remove one item only
      }
    });

    this.selectedPremiumPlayersList.forEach( (player : string) => {
      const index = shuffledPArray.indexOf(player);
        if (index > -1) { // only splice array when item is found
          shuffledPArray.splice(index, 1); // 2nd parameter means remove one item only
        }
      });

    // console.log(shuffledArray);
    }

  }
}
