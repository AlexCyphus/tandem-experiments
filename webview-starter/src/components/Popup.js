import ActionButton from "./ActionButton";

// use conditional rendering in main file
export default function Popup({description, children}) {
    console.log(description)
    return (
        <>
        <div className="overlay-black"></div>
        <div className="popup-container">
            <p className='popup-title'>Title</p>
            {description ? <p className='popup-description'>{description}</p>:children}
            <div className="popup-input-container">
                <input placeholder="Placeholder"/>
            </div>
            <ActionButton text={"Hello world"} color="pink" close={true}/>
        </div> 
        </>
    )
}