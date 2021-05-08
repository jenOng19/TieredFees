import React, {useEffect, useRef, useState} from 'react';

import Header from "./components/Header";
import TierTable from "./components/TierTable";
import TierForm from "./components/TierForm";

const App = () => {
  const [tiers, setTiers] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if(tiers.length) return;
    fetch('/api/tiers')
      .then(data => data.json())
      .then(items => {
        if(mounted.current){
          setTiers(items)
        }
      })
      return () => mounted.current = false;
  }, [tiers])

  const addTier = (item) => {
    fetch('/api/tiers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( item )
      })
      .then(data => data.json())
      .then(response => {
        if(mounted.current){
          setTiers([...tiers,response])
        }
      })
  }

  const deleteTier = (id) => {
    fetch(`/api/tiers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());

    const duplicate = tiers.slice();
    const findId = duplicate.findIndex(tier => { return tier.id === id; });
    if (findId >= 0) {
      duplicate.splice(findId, 1);
      setTiers([...duplicate])
    }
  }

  const validate = () => {
    if(tiers.length === 1) console.log("Tiers are valid.")

    if(tiers.length>1){
      for(let i = 0; i < tiers.length-1; i++){
        if(tiers[i+1].min !== tiers[i].max + 0.01 ){
          console.log( "Tiers are not valid");
          return;
        }
      }
    }
    console.log("Tiers are valid.")
  }

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-7 col-12">
          <TierTable tiers = {tiers} delete = {deleteTier} validate = {validate}/>
        </div>
        <div className="col-md-5 col-12">
          <TierForm add={addTier} tiers = {tiers}/>
        </div>
      </div>
    </div>
  );
}

export default App;
