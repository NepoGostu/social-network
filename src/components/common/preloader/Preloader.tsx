import React from 'react';
import preloader from '../../../assest/image/loading.gif'


let Preloader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt = 'loading'/>
    </div>
}
export default Preloader;