import { useEffect } from "react";
// use Effect using props
function Use_effect_using_state(props) {

    useEffect(()=>
    {
        console.log('useeffet in state component');
    },[props.data])
    
  return (
    <div>
      data props:{props.data}
      data count:{props.count}
    </div>
  );
}

export default Use_effect_using_state;
