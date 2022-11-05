import s from "./Loading.module.css";

export function Loading (){
    return(
        <div className={s.load}>
            <h3>Loading</h3>
            <img src="https://i.gifer.com/3F3F.gif" alt="Load" className={s.loadIMG}/>
            <p>Please Wait ...</p>
        </div>
    )
};
