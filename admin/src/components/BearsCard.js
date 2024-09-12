import React from 'react'
import { useStore } from '../State'

export default function BearsCard(){
    const bears = useStore(state => state.bears)
    let arr = []
    for(let i = 0; i < bears; i++){
        arr.push(<span>🐻</span>)
    }
    return(
        <div>
            {arr}
        </div>
    )
}
