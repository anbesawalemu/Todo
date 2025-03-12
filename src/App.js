import Buton from "./components/Buton";
import Button from "./components/Button";
import Card from "./components/Card";
import Cars from "./components/Cars";
import Colorpicker from "./components/Colorpicker";
import Food from "./components/Food";
import Foods from "./components/Foods";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Mycomponent from "./components/Mycomponent";
import Profilepicture from "./components/Profilepicture";
import Student from "./components/Student";
import Todolist from "./components/Todo-list";
import Usergreeting from "./components/Usergreeting";
import Usestate from "./components/Usestate";



function App() {
  return (
    <div className="App">
      <h1>well come to DTU</h1>
      {/* <Header></Header>
      <Food></Food>
      <Footer></Footer>
      <Card></Card>
      <Button></Button> */}
      {/* <Student name="anbesaw" age={20} isstudent={true}></Student>
      <Student name="asmamaw" age={24} isstudent={false}></Student>
      <Student name="tesfaye" age={25} isstudent={false}></Student>
       <Student></Student> */}
       {/* <Usergreeting isloggedin={false} username="anbesaw"></Usergreeting>
       <List></List>
       <Buton></Buton>
       <Profilepicture></Profilepicture>
       <Usestate></Usestate>
       <Input></Input>
       <Colorpicker></Colorpicker>
       <Mycomponent></Mycomponent>
       <Foods></Foods>
       <Cars></Cars> */}
       <Todolist></Todolist>
    </div>
  );
}

export default App;
