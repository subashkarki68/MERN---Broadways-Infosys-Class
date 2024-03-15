import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function WordCount() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Textarea
        placeholder='Type your message here.'
        id='text'
        onChange={(e) => setCounter(e.target.value.split(" ").length)}
      />
      <h2 className='text-xl'>{counter}</h2>
    </div>
  );
}

export default WordCount;
