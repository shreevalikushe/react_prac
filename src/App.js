import './App.css';
// import MenuCard from './Components/DesignerCards/MenuCard';
// import Card from './Components/Cards/Card';
// import InnerComp from './Components/Settings/InnerComp';
import { useState } from 'react';
import Todo from './Components/Todo/Todo';
import Counter from './Components/Counter/Counter';

function App() {
  // return(
  //   <div className="App">
  //     <Todo/>
  // </div>
  // )
  const [counter, setCounter] = useState(0)

    const handleClick = (value) => {
        setCounter(counter + value)
    }
    const doubleVal = () => {
        setCounter(counter * 2)
    }
 
  return (
    // <>
    <div className="App">
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => { handleClick(1) }}>ADD NUMBER</button>
            <button onClick={() => { handleClick(-1) }}>REDUCE NUMBER</button>
            <button onClick={() => { doubleVal() }}>DOUBLE COUNTER NUMBER</button>
        </>
    </div>
  )
    // { <div className="App">
    //   <div>
    //     <Card title="Mobile Operating System" li1 = "Android" li2 = "Blackberry" li3 = "iPhone" li4 ="Windows Phone" />

    //   </div>
    //   <div>
    //     <Card title="Mobile Manufactures" li1 = "Samsung" li2 = "HTC" li3 = "Micromax" li4 = "Apple" />
    //   </div>

    // </div>
    // <div className="App">
    //   <InnerComp title= "JOIN US" type="blue"/>
    //   <InnerComp title="SETTING" type="teal"/>
    //   <InnerComp title="LOGIN" type="purple"/>
    //   <InnerComp title="CONTACT US" type="orange"/>
    //   <InnerComp title="SEARCH" type= "red"/>
    //   <InnerComp title="HELP" type = "magenta"/>
    //   <InnerComp title="HOME" type = "pink"/>
    //   <InnerComp title="DOWNLOAD" type="brown"/>
    // </div>
    // <div className="App1">
    //   <MenuCard title="Pepperoni Pizza" url="https://www.simplyrecipes.com/thmb/RiK7px2b_-buGiK2w55_jdRiAKM=/1333x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" 
    //   content="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust"
    //   price="$23.90"/>

    //   <MenuCard title="Tortellini" url="https://static.toiimg.com/thumb/71330969.cms?width=1200&height=900" 
    //   content="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon or marinara sauce"
    //   price="$17.90"/>
    //   <MenuCard title="Strawberry Cake" url="https://images.squarespace-cdn.com/content/v1/56315ccee4b068a9afd70559/1624557058753-KTALXATBR6O1VNBOJ7LN/Strawberry+Layer+Cake" 
    //   content="Three layer strawberry dessert is not only beautiful looking, but also delicious! perfect dessert for spring and winter"
    //   price="$13.90"/>

    // </div> }
    // </>
  // );
}

export default App;
