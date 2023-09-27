import { useState } from "react"
/**
 * Tuo kaiken datan näkyviin
 */



const InnerDataAreaEdit = (props) => {
    return(
        <span>
            <input defaultValue={props.newThingg} onChange={props.handleChangeInner} />
            <button className="EDIT" onClick={() => props.handleClick("SAVEINNER", props.id, props.parentId)}>Lopeta muokkaus</button>
            <button className="DEL" onClick={() => props.handleClick("DELINNER", props.id, props.parentId)}>Poista muisti</button>
        </span>
      )
}

/**
 * Tyo näkyviin listan sisä tavarat
 */

const InnerDataArea = (props) => {

    return(
      <div key={props.id + "a" + props.id} className='inner'>
        {
            props.editInner ?
                <InnerDataAreaEdit 
                    parentId={props.parentId}
                    id={props.id}
                    handleChangeInner={props.handleChangeInner}
                    newThingg={props.newThingg}
                    handleClick={props.handleClick}
                />
            :
                <span>
                    <p>{props.newThingg}</p>
                    <button className="EDIT" onClick={() => props.handleClick("EDITINNER", props.id, props.parentId)}>Muokkaa muistia</button>
                    <button className="DEL" onClick={() => props.handleClick("DELINNER", props.id, props.parentId)}>Poista muisti</button>
                </span>
        }
      </div>
    )
  }
  
  /**
   * Tuo näkyviin listalta datan
   */
export const DataArea = (props) => {
    const [edit, setEdit] = useState(false)
    const [editInner ,setEditInner] = useState(false)
    const [otsikkoUusi, setOtsikkoUusi] = useState("")
    const [innerUusi, setInnerUusi] = useState("");

    // Tallentaa otsikon
    const handleChangeOtsikko = (e) => {
        setOtsikkoUusi(e.target.value)
    }
    // Tallentaa Innerin
    const handleChangeInner = (e) => {
        setInnerUusi(e.target.value)
    }
  
    const handleClick = (x, id, parentId) => {
      // Katsoo mitä tullaan tekemään
      switch (x) {

        // Innerin editointi nappi
        case "EDITINNER":
            setEditInner(!editInner)
            break;

        // Innerin tallennus
        case "SAVEINNER":
            if(!window.confirm("Tallennetaanko muutokset?")){
                setEditInner(false)
                return;
            }
            // Lähetä muutokset
            if(innerUusi === ""){
                props.saveChanges("INNER", props.id, id, "[tyhjä]")
            } else {
                props.saveChanges("INNER", props.id, id, innerUusi)
            }
            setEditInner(false)
            break;

        // Otsikon tallennus
        case "SAVEOTSIKKO":
            if(!window.confirm("Tallennetaanko muutokset?")){
                setEdit(false)
                return;
            }
            // Lähetä muutokset
            if(otsikkoUusi === ""){
                props.saveChanges("OTSIKKO", props.id, id, "[tyhjä]")
            } else {
                props.saveChanges("OTSIKKO", props.id, id, otsikkoUusi)
            }
            setEdit(false)
            break;

        // Lisää tavaraa
        case "ADD":
            // Lisää tavaraa

            props.handleAdd(props.id)
            break;

        // Otsikon editointi nappi state
        case "EDITOTSIKKO":
            // Editointi päälle
            setEdit(!edit)
            break;

        // Poistaa sisäsemmän
        case "DELINNER":
            props.handleDeleteInner(id, parentId)
            break;

        // Poistaa tavaraa
        case "DEL":
            // Poistaa tavaran
            props.handleDelete(props.id)
            break;
      }
    }

    return(
      <div key={props.id} className='lolo'>
        {
            // Edit
            edit ?
            <input onChange={handleChangeOtsikko} defaultValue={props.thing[0]}/>
            :
            <h3>{props.thing[0]}</h3>
        }
        <br />
        <input placeholder='' onChange={props.handleChange}/>
        <span><button onClick={() => handleClick("ADD")}>Lisää muistiin</button></span>
        <br />
        <br />
  
        {/* Uusi data */}
        {
          props.thing.map((newThingg, id) => {
            if (id !== 0) {
              return (
                <InnerDataArea 
                  newThingg={newThingg}
                  id={id}
                  handleClick={handleClick}
                  parentId={props.id}

                  editInner={editInner}
                  handleChangeInner={handleChangeInner}
                />
              );
            }
            return null;
          })
        }
  
  
        {/* Poistonappi */}
        <br />
        <br />
        {
            edit ?
            <button className="EDIT" onClick={() => handleClick("SAVEOTSIKKO")}>Lopeta otsikon muokkaus </button>
            :
            <button className="EDIT" onClick={() => handleClick("EDITOTSIKKO")}>Muokkaa otsikkoa </button>
        }

        <button className="DEL" onClick={() => handleClick("DEL")}>Poista muistiinpano alue</button>
      </div>
    )
  }