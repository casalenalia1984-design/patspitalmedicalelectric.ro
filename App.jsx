
import React, {useState, useEffect} from 'react';

export default function App(){
 const [lang,setLang]=useState('ro');
 useEffect(()=>{document.title=lang==='ro'?'Paturi Medicale Electrice România':'Electric Hospital Beds Romania';},[lang]);
 const t={
  brand:{ro:'Pat Spital Medical Electric',en:'Electric Hospital Beds'},
  hero:{ro:'Paturi medicale electrice livrate în toată România',en:'Electric hospital beds delivered across Romania'},
  buy:{ro:'Vezi Produse',en:'View Products'}
 };
 return <div style={{fontFamily:'Arial,sans-serif',padding:20}}>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <h1>{t.brand[lang]}</h1>
    <div>
      <button onClick={()=>setLang('ro')}>RO</button>
      <button onClick={()=>setLang('en')} style={{marginLeft:8}}>EN</button>
    </div>
   </div>
   <h2>{t.hero[lang]}</h2>
   <p>{lang==='ro'?'Site demo pregătit pentru Vercel.':'Demo site ready for Vercel.'}</p>
   <button>{t.buy[lang]}</button>
 </div>
}
