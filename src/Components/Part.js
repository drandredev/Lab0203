
const Part = (props) => {
    console.log(props)
    return(
    <p>
        {props.part.name} {props.part.exercise}
    </p>
    )
}
export default Part