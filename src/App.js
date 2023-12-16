import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import AngularImage from "./Images/angular.png";
import BootstrapImage from "./Images/Bootstrap.jpg";
import csharpImage from "./Images/csharp.jpg";
import JavaScriptImage from "./Images/JavaScript.png";
import ReactImage from "./Images/React.png";
import TypeScriptImage from "./Images/TypeScript.jpg";
import VueImage from "./Images/Vue.png";

function App() {
  return (
    <div className="App" >
          <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Popular technologies</p>
        </div>
      </section>
      <div className="container" >
        <section className="section" >
         
          <div className="columns is-desktop">
            <div class="column">
              <Course
                image={AngularImage}
                title="Angular"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!"
              />
            </div>

            <div class="column">
              <Course
                image={ReactImage}
                title="React"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!   "
              />
            </div>

            <div class="column" >
              <Course
                image={BootstrapImage}
                title="Bootstrap"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!"
              />
            </div>

    

            <div class="column">
              <Course
                image={VueImage}
                title="Vue"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!"
              />
            </div>


   
            <div class="column">
              <Course
                image={csharpImage}
                title="C#"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id! "
              />
            </div>
            
            <div class="column">
              <Course
                image={JavaScriptImage}
                title="JavaScript"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!"
              />
            </div>

            <div class="column">
              <Course
                image={TypeScriptImage}
                title="TypeScript"
                description="Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Deserunt aspernatur ipsum laudantium ex amet, 
      accusamus placeat eveniet nam nisi at, quam corporis facere aliquid, 
      tenetur praesentium id!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
