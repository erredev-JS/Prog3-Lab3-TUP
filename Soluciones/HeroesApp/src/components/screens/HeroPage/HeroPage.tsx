import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroPage.module.css"

export const HeroPage = () => {
    const [hero, setHero] = useState<IHeroes | null>(null);
    const {id} = useParams()
    const getHeroById = () => {
        const result = heroesData.find((h) => h.id === id)
        result ? setHero(result) : setHero(null)
    }
    useEffect(() => {
        getHeroById()
    }, [])
  return ( 
    <>{hero && (
    <div className={styles.containerHeroPage}>
        
        <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`}/>

        </div>
        
        
        </div>)}</>
  )
}
