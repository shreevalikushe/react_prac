import styles from "./Comp.module.css"



const getStyleForType = (type)=>{
    switch (type){
        case "blue":{
            return{
                backgroundColor : "blue"
            }
        }
        case "teal":{
            return{
                backgroundColor : "teal"
            }
        }
        case "purple":{
            return{
                backgroundColor : "purple"
            }
        }
        case "orange":{
            return{
                backgroundColor : "orange"
            }
        }
        case "red":{
            return{
                backgroundColor : "red"
            }
        }
        case "magenta":{
            return{
                backgroundColor : "magenta"
            }
        }
        case "pink":{
            return{
                backgroundColor : "pink"
            }
        }
        case "brown":{
            return{
                backgroundColor : "brown"
            }
        }
        default:
            return{}
    }
        
}
function InnerComp(props){
    const {title,type} = props;
    const style = getStyleForType(type)
    return(
        <button className={styles.inner} style={style}>
            {title}
        </button>
    )
}

export default InnerComp