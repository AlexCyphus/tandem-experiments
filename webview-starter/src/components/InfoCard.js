import ActionButton from "./ActionButton";

export default function InfoCard({title, children, buttonAction, closeAction}){
    return (
        <>
        <div className="overlay-black"></div>
        <div className="infocard-container">
        <div className="infocard-close-x" onClick={closeAction}>x</div>
          <div className="infocard-title-container">
            <p className="infocard-title">Tandem Life</p>
          </div>
          <div className="infocard-main-content">
            {children}
          </div>
          <ActionButton text="UPGRADE FOR $2.99" specClass={"button-fixed-bottom"} onClick={buttonAction}/>
        </div>
        </>
    )   
}