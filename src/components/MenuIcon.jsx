import { useState } from 'react';
import '../styles/components/change.css'

const MenuIcon = () => {
    
    const [classe, setClasse] = useState()

  return (
    <div class="container" onClick={setClasse("change")}> 
      <div class={classe}></div>
      <div class={classe}></div>
      <div class={classe}></div>
    </div>
  );
};

export default MenuIcon


