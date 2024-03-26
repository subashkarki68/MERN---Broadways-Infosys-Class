import React, { useState } from "react";

function SelectAll() {
  const [checkbox, setCheckbox] = useState({
    selectAll: false,
    dog: false,
    cat: false,
    mouse: false,
  });
  return (
    <>
      <form>
        <label htmlFor='selectAll'>Select All</label>
        <input
          type='checkbox'
          name='selectAll'
          id='selectAll'
          checked={checkbox.selectAll}
          onClick={() => alert}
        />
        <br />
        <label htmlFor='selectAll'>Select All</label>
        <input
          type='checkbox'
          name='selectAll'
          id='selectAll'
          checked={checkbox.selectAll}
          onClick={}
        />
        <br />
        <label htmlFor='selectAll'>Select All</label>
        <input
          type='checkbox'
          name='selectAll'
          id='selectAll'
          checked={checkbox.selectAll}
          onClick={}
        />
        <br />
        <label htmlFor='selectAll'>Select All</label>
        <input
          type='checkbox'
          name='selectAll'
          id='selectAll'
          checked={checkbox.selectAll}
          onClick={}
        />
      </form>
    </>
  );
}

export default SelectAll;
