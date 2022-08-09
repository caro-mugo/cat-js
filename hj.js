class User{
    details(){
this.company_name= [];
this.phone_number= [];
this.location= [];
this.booking_date= ["datetime-local"];
    this.getdetails = (Id)=>{
        console.log(this.User.find(object=>object.company_name===Id))
        this.getdetails = (Id)=>{
            console.log(this.User.find(object=>object.phone_number===Id))
        }
        this.getdetails = (Id)=>{
            console.log(this.User.find(object=>object.location===Id))

}
}

let company_name = document.createElement("div")
company_name.className='Antara'
console.log("company_name");

let newChild = document.createElement("p")
let text = document.createTextNode("")
newChild.appendChild(text);
console.log(newChild);
Antara.appendChild(newChild)

// On the contact us page, ask the user for the following details(5 marks):
// Company Name
// Phone number
// Location
// Booking dates -- i should choose date from a calendar

// Display this information with the filled in details. I.e grab the user input then
// display is on the screen

// In your own words, explain how the script for moving the carousel works.
function carousel() {
    var i;
    var x = document.getElementsByClassName("details");



var myObject = {
    name: "Adalab",
    func: function() {
    var self = this;
    console.log("outer func: this.name = " + this.name);
    console.log("outer func: self.name = " + self.name);
    (function() {
    console.log("inner func: this.name = " + this.name);
    console.log("inner func: self.name = " + self.name);
    }());
    }
    };
    myObject.func();
}





