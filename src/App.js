import logo from './logo.svg';
import './App.css';



function App() {

  // CALL()

  // FIRST METHOD


              // First object
              let name={
                firstname: "Twinkle",
                lastname: "Patel",
                printFullname: function(){
                  
                  console.log (this.firstname+ " "+ this.lastname)
                }
              }
              console.log("First Example of Call function")
              name.printFullname();

              // Second Object
              let name2={
                firstname: "Krushankant",
                lastname: "Patel"
              }
              
              //Function Borrowing
              name.printFullname.call(name2)


  // SECOND METHOD

              //Object 1
              let person={
                firstname: "Twinkle",
                lastname: "Patel",
                
              }

              // Common function
              let details = function(age, location){
                
                console.log(this.firstname+ " "+ this.lastname+ " " + age+ " "+ location)

              }
              console.log("Second Example of Call function")
              details.call(person, 31, " Rajasthan")

              //Object 2
              let person2={
                firstname: "Krushankant",
                lastname: "Patel"
              }

              details.call(person2,35, "Gujarat")


  // APPLY()

             console.log(" Example of Apply function")
              details.apply(person,[31, "Rajasthan"])
              details.apply(person2,[35, "Gujarat"])

  //BIND()

              console.log("Example of Bind function")
              let myDetails = details.bind(person2, 35 , "Gujarat")
              console.log(myDetails)
              myDetails();
 


  return (
    <div className="App">
      <header className="App-header">
        <h2>For Call Function</h2>
        <p>Two Objects are there name and name2. name2 wants to use same function of name for that we will use call function,which is also called as <b>Function Borrowing</b></p>
        <h2>For apply function</h2>
        <p>It is same as call function but pass arguments in the array</p>
        <h2>Bind Method</h2>
        <p>Bind method is used to keep copy of the method and use it later.
           It will create a copy of details and bind it with person2 and return a function. It means it returns a method that can be called later.
           Difference between call and bind is call directly invoke the method and bind create copy of the method and invoke it later.
        </p>
      </header>
    </div>
  );
}

export default App;
