import Part from "./Part"

const Content = (props) => {

    return(
    <div>
      <Part part={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} />
     </div>
    )
}

export default Content