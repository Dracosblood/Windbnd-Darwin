import lupa from '../../img/lupa.svg'
const nav = ({ onCityChange, onGuestsChange,}) =>{

   
  return (
    <div className="caja-nav">
        <div className="contenedor-logo">
           <img src="/src/img/logo.png" alt=""/>
        </div>

        <div className="contenedor-input">
            <select className="parrafo-search" placeholder="Whole Finland" onChange={onCityChange}>
              <spam>Whole Finland</spam>
              <option value='Helsinki'>Helsinkin, Finland</option>
              <option value='Turku'>Turku, Finland</option>
              <option value='Vaasa'>Vaasa, Firland</option>
              <option value='Oulu'>Oulu, Finland</option>
            </select>
            <input type="text" className="input" placeholder="Add guests"  onChange={onGuestsChange} />

           <button className="search"><img src={lupa} className='lupa' /></button>
        </div>
    </div>
  )
}


export default nav 

